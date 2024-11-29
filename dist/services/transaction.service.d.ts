import { TransactionCreate } from "../types/transaction.type.js";
declare const createTransaction: (data: TransactionCreate) => Promise<{
    id: number;
    userId: number;
    createdAt: Date;
    amount: number;
    type: string;
    toUserId: number | null;
    owed: number;
    isOwe: boolean;
}>;
declare const getTransactions: () => Promise<{
    id: number;
    userId: number;
    createdAt: Date;
    amount: number;
    type: string;
    toUserId: number | null;
    owed: number;
    isOwe: boolean;
}[]>;
declare const getBalanceByUserId: (id: number) => Promise<number>;
declare const getOwedToBalanceByUserId: (id: number) => Promise<number>;
declare const getOwedToByUserId: (id: number) => Promise<{
    id: number;
    userId: number;
    createdAt: Date;
    amount: number;
    type: string;
    toUserId: number | null;
    owed: number;
    isOwe: boolean;
} | null>;
declare const getOwedFromByUserId: (id: number) => Promise<{
    id: number;
    userId: number;
    createdAt: Date;
    amount: number;
    type: string;
    toUserId: number | null;
    owed: number;
    isOwe: boolean;
} | null>;
export { createTransaction, getTransactions, getBalanceByUserId, getOwedToBalanceByUserId, getOwedToByUserId, getOwedFromByUserId, };
