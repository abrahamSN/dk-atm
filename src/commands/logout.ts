import { Command } from "@oclif/core";
import chalk from "chalk";

import * as SessionService from "../services/session.service.js";
import * as UserService from "../services/user.service.js";

export default class Logout extends Command {
  static override description = "Logout from your account";

  static override examples = ["<%= config.bin %> <%= command.id %>"];

  public async run(): Promise<void> {
    try {
      const getSession = await SessionService.getSession();

      if (!getSession) {
        this.log(chalk.yellow("You are not logged in"));
        return;
      }

      const user = await UserService.getUserById(getSession.userId);

      if (!user) {
        this.log(chalk.red("User not found"));
        return;
      }

      await SessionService.deleteSession();

      this.log(chalk.green(`Goodbye, ${user.uname}!`));
    } catch (error) {
      this.log(chalk.red("An error occurred"));
    }
  }
}
