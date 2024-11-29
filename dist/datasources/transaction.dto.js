import prisma from "../configs/prisma.js";
const getTransactions = async () => {
    return await prisma.transaction.findMany();
};
const getTransactionById = async (id) => {
    return await prisma.transaction.findUnique({
        where: { id },
    });
};
const getTransactionByData = async (data) => {
    return await prisma.transaction.findMany({
        where: data,
    });
};
const getTransactionByUserId = async (userId) => {
    return await prisma.transaction.findMany({
        where: { userId },
    });
};
const createTransaction = async (data) => {
    return await prisma.transaction.create({
        data,
    });
};
export { getTransactions, getTransactionById, getTransactionByData, getTransactionByUserId, createTransaction, };
