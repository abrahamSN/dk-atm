import { Args, Command, Flags } from "@oclif/core";
import chalk from "chalk";

import * as SessionService from "../services/session.service.js";
import * as TransactionService from "../services/transaction.service.js";

export default class Deposit extends Command {
  static override args = {
    amount: Args.string({ description: "amount to deposit" }),
  };

  static override description = "Deposit money to your account";

  static override examples = ["<%= config.bin %> <%= command.id %> <amount>"];

  public async run(): Promise<void> {
    const { args } = await this.parse(Deposit);

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

      const dataTrx = {
        userId: getSession.userId,
        amount: Number(amount),
        type: "DEPOSIT",
      };

      await TransactionService.createTransaction(dataTrx);

      const balance = await TransactionService.getBalanceByUserId(
        getSession.userId
      );

      this.log(chalk.green(`Your balance is $${balance}`));
    } catch (error) {
      this.log(chalk.red("Failed to deposit money"));
    }
  }
}
