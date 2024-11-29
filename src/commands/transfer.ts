import { Args, Command } from "@oclif/core";
import chalk from "chalk";

import * as SessionService from "../services/session.service.js";
import * as TransactionService from "../services/transaction.service.js";
import * as UserService from "../services/user.service.js";

export default class Transfer extends Command {
  static override args = {
    toUser: Args.string({ description: "user to transfer to" }),
    amount: Args.string({ description: "amount to transfer" }),
  };

  static override description = "transfer money to another account";

  static override examples = [
    "<%= config.bin %> <%= command.id %> <toUser> <amount>",
  ];

  public async run(): Promise<void> {
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

      const balance = await TransactionService.getBalanceByUserId(
        getSession.userId
      );

      if (balance < Number(amount)) {
        this.log(chalk.red("Insufficient balance"));
        return;
      }

      const dataTrx = {
        userId: getSession.userId,
        toUserId: toUserData.id,
        amount: Number(amount),
        type: "TRANSFER",
      };

      await TransactionService.createTransaction(dataTrx);

      this.log(chalk.green(`Transfered $${amount} to ${toUser}`));

      const newBalance = await TransactionService.getBalanceByUserId(
        getSession.userId
      );

      this.log(chalk.green(`Your balance is $${newBalance}`));
    } catch (error) {
      this.log(chalk.red("Failed to transfer money"));
    }
  }
}
