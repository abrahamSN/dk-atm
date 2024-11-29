import { Args, Command, Flags } from "@oclif/core";
import chalk from "chalk";

import * as SessionService from "../services/session.service.js";
import * as TransactionService from "../services/transaction.service.js";
import * as UserService from "../services/user.service.js";

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

      const owedTrx = await TransactionService.getOwedToByUserId(
        Number(getSession.userId)
      );

      if (owedTrx) {
        const dataPayOwed = {
          userId: getSession.userId,
          toUserId: Number(owedTrx.toUserId),
          amount:
            owedTrx.owed - Number(amount) < 0
              ? Math.abs(owedTrx.owed - Number(amount))
              : Number(amount),
          type: "TRANSFER",
          owed:
            owedTrx.owed - Number(amount) < 0
              ? 0
              : owedTrx.owed - Number(amount),
          isOwe: true,
        };

        await TransactionService.createTransaction(dataPayOwed);
      }

      const balance = await TransactionService.getBalanceByUserId(
        getSession.userId
      );

      this.log(chalk.green(`Your balance is $${balance}`));

      const newOwedTrx = await TransactionService.getOwedToByUserId(
        Number(getSession.userId)
      );

      if (owedTrx) {
        const owedToUser = await UserService.getUserById(
          Number(owedTrx.toUserId)
        );
        this.log(chalk.red(`Owe $${owedTrx.owed} to ${owedToUser?.uname}`));
      }
    } catch (error) {
      this.log(chalk.red("Failed to deposit money"));
    }
  }
}
