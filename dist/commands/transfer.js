import { Args, Command } from "@oclif/core";
import chalk from "chalk";
import * as SessionService from "../services/session.service.js";
import * as TransactionService from "../services/transaction.service.js";
import * as UserService from "../services/user.service.js";
export default class Transfer extends Command {
    static args = {
        toUser: Args.string({ description: "user to transfer to" }),
        amount: Args.string({ description: "amount to transfer" }),
    };
    static description = "transfer money to another account";
    static examples = [
        "<%= config.bin %> <%= command.id %> <toUser> <amount>",
    ];
    async run() {
        const { args } = await this.parse(Transfer);
        try {
            const getSession = await SessionService.getSession();
            if (!getSession) {
                this.log(chalk.yellow("You are not logged in"));
                return;
            }
            const toUser = args.toUser;
            const amount = args.amount;
            if (!toUser || toUser === "" || toUser === " " || toUser === undefined) {
                this.log(chalk.red("Please provide a user"));
                return;
            }
            const toUserData = await UserService.getUserByUname(toUser);
            if (!toUserData) {
                this.log(chalk.red("User not found"));
                return;
            }
            if (!amount || amount === "" || amount === " " || amount === undefined) {
                this.log(chalk.red("Please provide an amount"));
                return;
            }
            if (isNaN(Number(amount))) {
                this.log(chalk.red("Invalid amount"));
                return;
            }
            if (Number(amount) <= 0) {
                this.log(chalk.red("Amount must be greater than 0"));
                return;
            }
            const balance = await TransactionService.getBalanceByUserId(getSession.userId);
            if (balance === 0) {
                this.log(chalk.red("Insufficient balance"));
                return;
            }
            const amountToTransfer = balance - Number(amount) >= 0 ? amount : balance;
            const owedFromTrx = await TransactionService.getOwedFromByUserId(Number(getSession.userId));
            if (owedFromTrx &&
                owedFromTrx.owed > 0 &&
                owedFromTrx.userId === toUserData.id &&
                owedFromTrx.toUserId === getSession.userId) {
                const owedFromUser = await UserService.getUserById(Number(owedFromTrx.userId));
                const oweDataTrx = {
                    userId: toUserData.id,
                    toUserId: getSession.userId,
                    amount: owedFromTrx.owed - Number(amount) < 0
                        ? Math.abs(owedFromTrx.owed - Number(amount))
                        : 0,
                    type: "TRANSFER",
                    owed: owedFromTrx.owed - Number(amount) < 0
                        ? 0
                        : Math.abs(owedFromTrx.owed - Number(amount)),
                    isOwe: true,
                };
                await TransactionService.createTransaction(oweDataTrx);
            }
            else {
                const dataTrx = {
                    userId: getSession.userId,
                    toUserId: toUserData.id,
                    amount: Number(amountToTransfer),
                    type: "TRANSFER",
                    owed: balance - Number(amount) < 0
                        ? Math.abs(balance - Number(amount))
                        : 0,
                    isOwe: balance - Number(amount) < 0 ? true : false,
                };
                await TransactionService.createTransaction(dataTrx);
            }
            this.log(chalk.green(`Transfered $${amountToTransfer} to ${toUser}`));
            const newBalance = await TransactionService.getBalanceByUserId(getSession.userId);
            this.log(chalk.green(`Your balance is $${newBalance}`));
            const newOwedToTrx = await TransactionService.getOwedToByUserId(getSession.userId);
            if (newOwedToTrx) {
                this.log(chalk.yellow(`You owe $${newOwedToTrx.owed} to ${toUser}`));
            }
            const newOwedFromTrx = await TransactionService.getOwedFromByUserId(Number(getSession.userId));
            if (newOwedFromTrx && newOwedFromTrx.owed > 0) {
                const owedFromUser = await UserService.getUserById(Number(newOwedFromTrx.userId));
                this.log(chalk.red(`Owed $${newOwedFromTrx.owed} from ${owedFromUser?.uname}`));
            }
        }
        catch (error) {
            this.log(chalk.red("Failed to transfer money"));
        }
    }
}
