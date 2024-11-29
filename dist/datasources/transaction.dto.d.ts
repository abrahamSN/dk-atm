import { TransactionCreate } from "../types/transaction.type.js";
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
declare const getTransactionById: (id: number) => Promise<{
    id: number;
    userId: number;
    createdAt: Date;
    amount: number;
    type: string;
    toUserId: number | null;
    owed: number;
    isOwe: boolean;
} | null>;
declare const getTransactionByData: (data: Object) => Promise<{
    id: number;
    userId: number;
    createdAt: Date;
    amount: number;
    type: string;
    toUserId: number | null;
    owed: number;
    isOwe: boolean;
}[]>;
declare const getTransactionOwedToByUserId: (userId: number) => Promise<{
    id: number;
    userId: number;
    createdAt: Date;
    amount: number;
    type: string;
    toUserId: number | null;
    owed: number;
    isOwe: boolean;
} | null>;
declare const getTransactionOwedFromByUserId: (userId: number) => Promise<{
    id: number;
    userId: number;
    createdAt: Date;
    amount: number;
    type: string;
    toUserId: number | null;
    owed: number;
    isOwe: boolean;
} | null>;
declare const getTransactionByUserId: (userId: number) => Promise<{
    id: number;
    userId: number;
    createdAt: Date;
    amount: number;
    type: string;
    toUserId: number | null;
    owed: number;
    isOwe: boolean;
}[]>;
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
export { getTransactions, getTransactionById, getTransactionByData, getTransactionOwedToByUserId, getTransactionOwedFromByUserId, getTransactionByUserId, createTransaction, };
