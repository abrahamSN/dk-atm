import { TransactionCreate } from "../types/transaction.type.js";
declare const createTransaction: (data: TransactionCreate) => Promise<{
    id: number;
    amount: number;
    type: string;
    userId: number;
    toUserId: number | null;
    createdAt: Date;
}>;
declare const getTransactions: () => Promise<{
    id: number;
    amount: number;
    type: string;
    userId: number;
    toUserId: number | null;
    createdAt: Date;
}[]>;
declare const getBalanceByUserId: (id: number) => Promise<number>;
export { createTransaction, getTransactions, getBalanceByUserId };
