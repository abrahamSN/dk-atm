import { Args, Command, Flags } from "@oclif/core";
import chalk from "chalk";
import figlet from "figlet";

import * as AuthController from "../controllers/auth.controller.js";

export default class Login extends Command {
  static override args = {
    uname: Args.string({ description: "account to login" }),
  };

  static override description = "login to your account";

  static override examples = [
    "<%= config.bin %> <%= command.id %> <%= args.uname %>",
  ];

  public async run(): Promise<void> {
    const { args } = await this.parse(Login);

    const uname = args.uname;

    if (!uname || uname === "" || uname === " " || uname === undefined) {
      this.log(chalk.red("Please provide a uname"));
      return;
    }

    const res = await AuthController.login(uname);

    this.log(`hello ${uname}`);
  }
}
