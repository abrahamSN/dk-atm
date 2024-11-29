import { Args, Command } from "@oclif/core";
import chalk from "chalk";
import * as SessionService from "../services/session.service.js";
import * as TransactionService from "../services/transaction.service.js";
export default class Withdraw extends Command {
    static args = {
        amount: Args.string({ description: "amount to withdraw" }),
    };
    static description = "withdraw money from your account";
    static examples = ["<%= config.bin %> <%= command.id %> <amount>"];
    async run() {
        const { args } = await this.parse(Withdraw);
        try {
            const getSession = await SessionService.getSession();
            if (!getSession) {
                this.log(chalk.yellow("You are not logged in"));
                return;
            }
            const amount = args.amount;
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
            if (balance < Number(amount)) {
                this.log(chalk.red("Insufficient balance"));
                return;
            }
            const dataTrx = {
                userId: getSession.userId,
                amount: Number(amount),
                type: "WITHDRAW",
            };
            await TransactionService.createTransaction(dataTrx);
            const newBalance = await TransactionService.getBalanceByUserId(getSession.userId);
            this.log(chalk.green(`Your balance is $${newBalance}`));
        }
        catch (error) {
            this.log(chalk.red("Failed to withdraw money"));
        }
    }
}
