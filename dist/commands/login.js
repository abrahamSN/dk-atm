import { Args, Command } from "@oclif/core";
import chalk from "chalk";
import * as AuthController from "../controllers/auth.controller.js";
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
        const res = await AuthController.login(uname);
        this.log(`hello ${uname} from D:\\Projects\\github.com\\abrahamSN\\dk-atm\\src\\commands\\login.ts`);
    }
}
