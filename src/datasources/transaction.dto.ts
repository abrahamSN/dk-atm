import prisma from "../configs/prisma.js";

import { TransactionCreate } from "../types/transaction.type.js";

const getTransactions = async () => {
  return await prisma.transaction.findMany();
};

const getTransactionById = async (id: number) => {
  return await prisma.transaction.findUnique({
    where: { id },
  });
};

const getTransactionByData = async (data: Object) => {
  return await prisma.transaction.findMany({
    where: data,
  });
};

const getTransactionByUserId = async (userId: number) => {
  return await prisma.transaction.findMany({
    where: { userId },
  });
};

const createTransaction = async (data: TransactionCreate) => {
  return await prisma.transaction.create({
    data,
  });
};

export {
  getTransactions,
  getTransactionById,
  getTransactionByData,
  getTransactionByUserId,
  createTransaction,
};
