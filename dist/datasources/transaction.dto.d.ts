import { TransactionCreate } from "../types/transaction.type.js";
declare const getTransactions: () => Promise<{
    id: number;
    amount: number;
    type: string;
    userId: number;
    toUserId: number | null;
    createdAt: Date;
}[]>;
declare const getTransactionById: (id: number) => Promise<{
    id: number;
    amount: number;
    type: string;
    userId: number;
    toUserId: number | null;
    createdAt: Date;
} | null>;
declare const getTransactionByData: (data: Object) => Promise<{
    id: number;
    amount: number;
    type: string;
    userId: number;
    toUserId: number | null;
    createdAt: Date;
}[]>;
declare const getTransactionByUserId: (userId: number) => Promise<{
    id: number;
    amount: number;
    type: string;
    userId: number;
    toUserId: number | null;
    createdAt: Date;
}[]>;
declare const createTransaction: (data: TransactionCreate) => Promise<{
    id: number;
    amount: number;
    type: string;
    userId: number;
    toUserId: number | null;
    createdAt: Date;
}>;
export { getTransactions, getTransactionById, getTransactionByData, getTransactionByUserId, createTransaction, };
