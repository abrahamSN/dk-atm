import { TransactionCreate } from "../types/transaction.type.js";
declare const createTransaction: (data: TransactionCreate) => Promise<{
    id: number;
    amount: number;
    type: string;
    userId: number;
    toUserId: number | null;
    owed: number;
    createdAt: Date;
}>;
declare const getTransactions: () => Promise<{
    id: number;
    amount: number;
    type: string;
    userId: number;
    toUserId: number | null;
    owed: number;
    createdAt: Date;
}[]>;
declare const getBalanceByUserId: (id: number) => Promise<number>;
declare const getOwedToBalanceByUserId: (id: number) => Promise<number>;
declare const getOwedToByUserId: (id: number) => Promise<{
    id: number;
    amount: number;
    type: string;
    userId: number;
    toUserId: number | null;
    owed: number;
    createdAt: Date;
} | null>;
export { createTransaction, getTransactions, getBalanceByUserId, getOwedToBalanceByUserId, getOwedToByUserId, };
