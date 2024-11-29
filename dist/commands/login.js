import { Args, Command } from "@oclif/core";
import chalk from "chalk";
import * as SessionService from "../services/session.service.js";
import * as UserService from "../services/user.service.js";
import * as TransactionService from "../services/transaction.service.js";
export default class Login extends Command {
    static args = {
        uname: Args.string({ description: "account to login" }),
    };
    static description = "login to your account";
    static examples = [
        "<%= config.bin %> <%= command.id %> <%= args.uname %>",
    ];
    async run() {
        const { args } = await this.parse(Login);
        const uname = args.uname;
        if (!uname || uname === "" || uname === " " || uname === undefined) {
            this.log(chalk.red("Please provide a uname"));
            return;
        }
        try {
            const getSession = await SessionService.getSession();
            if (getSession) {
                this.log(chalk.yellow("You are already logged in"));
                return;
            }
            let user = await UserService.getUserByUname(uname);
            if (!user) {
                user = await UserService.createUser({ uname });
            }
            const data = {
                userId: Number(user.id),
            };
            await SessionService.createSession(data);
            const balance = await TransactionService.getBalanceByUserId(Number(user.id));
            this.log(chalk.green(`Hello, ${uname}!`));
            this.log(chalk.green(`Your balance is $${balance}`));
            const owedToTrx = await TransactionService.getOwedToByUserId(Number(user.id));
            if (owedToTrx) {
                const owedToUser = await UserService.getUserById(Number(owedToTrx.toUserId));
                this.log(chalk.red(`Owe $${owedToTrx.owed} to ${owedToUser?.uname}`));
            }
            const owedFromTrx = await TransactionService.getOwedFromByUserId(Number(user.id));
            if (owedFromTrx) {
                const owedFromUser = await UserService.getUserById(Number(owedFromTrx.userId));
                this.log(chalk.red(`Owed $${owedFromTrx.owed} from ${owedFromUser?.uname}`));
            }
        }
        catch (error) {
            this.log(chalk.red("An error occurred"));
        }
    }
}
