import * as TransactionDto from "../datasources/transaction.dto.js";

import { TransactionCreate } from "../types/transaction.type.js";

const createTransaction = async (data: TransactionCreate) => {
  return await TransactionDto.createTransaction(data);
};

const getTransactions = async () => {
  return await TransactionDto.getTransactions();
};

const getBalanceByUserId = async (id: number) => {
  const deposit = await TransactionDto.getTransactionByData({
    userId: id,
    type: "DEPOSIT",
  });

  const withdraw = await TransactionDto.getTransactionByData({
    userId: id,
    type: "WITHDRAW",
  });

  const sendedBalance = await TransactionDto.getTransactionByData({
    userId: id,
    type: "TRANSFER",
  });

  const receivedBalance = await TransactionDto.getTransactionByData({
    toUserId: id,
    type: "TRANSFER",
  });

  const totalDeposit = deposit.reduce((acc, curr) => acc + curr.amount, 0);
  const totalWithdraw = withdraw.reduce((acc, curr) => acc + curr.amount, 0);
  const totalSendedBalance = sendedBalance.reduce(
    (acc, curr) => acc + curr.amount,
    0
  );
  const totalReceivedBalance = receivedBalance.reduce(
    (acc, curr) => acc + curr.amount,
    0
  );

  const totalBalance =
    totalDeposit + totalReceivedBalance - totalSendedBalance - totalWithdraw;

  return totalBalance;
};

const getOwedToBalanceByUserId = async (id: number) => {
  const sendedOwedBalance = await TransactionDto.getTransactionByData({
    userId: id,
    type: "TRANSFER",
    isOwe: true,
  });

  const totalSendedBalance = sendedOwedBalance.reduce(
    (acc, curr) => acc + curr.amount,
    0
  );

  return totalSendedBalance;
};

const getOwedToByUserId = async (id: number) => {
  return await TransactionDto.getTransactionOwedToByUserId(id);
};

const getOwedFromByUserId = async (id: number) => {
  return await TransactionDto.getTransactionOwedFromByUserId(id);
};

export {
  createTransaction,
  getTransactions,
  getBalanceByUserId,
  getOwedToBalanceByUserId,
  getOwedToByUserId,
  getOwedFromByUserId,
};
