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
const getTransactionOwedToByUserId = async (userId) => {
    return await prisma.transaction.findFirst({
        where: { userId: userId, type: "TRANSFER", isOwe: true },
        orderBy: { id: "desc" },
    });
};
const getTransactionOwedFromByUserId = async (userId) => {
    return await prisma.transaction.findFirst({
        where: {
            toUserId: userId,
            type: "TRANSFER",
            isOwe: true,
        },
        orderBy: { id: "desc" },
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
export { getTransactions, getTransactionById, getTransactionByData, getTransactionOwedToByUserId, getTransactionOwedFromByUserId, getTransactionByUserId, createTransaction, };
