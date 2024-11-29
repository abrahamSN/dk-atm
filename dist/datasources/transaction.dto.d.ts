import { TransactionCreate } from "../types/transaction.type.js";
declare const getTransactions: () => Promise<{
    id: number;
    amount: number;
    type: string;
    userId: number;
    toUserId: number | null;
    owed: number;
    isOwe: boolean;
    createdAt: Date;
}[]>;
declare const getTransactionById: (id: number) => Promise<{
    id: number;
    amount: number;
    type: string;
    userId: number;
    toUserId: number | null;
    owed: number;
    isOwe: boolean;
    createdAt: Date;
} | null>;
declare const getTransactionByData: (data: Object) => Promise<{
    id: number;
    amount: number;
    type: string;
    userId: number;
    toUserId: number | null;
    owed: number;
    isOwe: boolean;
    createdAt: Date;
}[]>;
declare const getTransactionOwedToByUserId: (userId: number) => Promise<{
    id: number;
    amount: number;
    type: string;
    userId: number;
    toUserId: number | null;
    owed: number;
    isOwe: boolean;
    createdAt: Date;
} | null>;
declare const getTransactionOwedFromByUserId: (userId: number) => Promise<{
    id: number;
    amount: number;
    type: string;
    userId: number;
    toUserId: number | null;
    owed: number;
    isOwe: boolean;
    createdAt: Date;
} | null>;
declare const getTransactionByUserId: (userId: number) => Promise<{
    id: number;
    amount: number;
    type: string;
    userId: number;
    toUserId: number | null;
    owed: number;
    isOwe: boolean;
    createdAt: Date;
}[]>;
declare const createTransaction: (data: TransactionCreate) => Promise<{
    id: number;
    amount: number;
    type: string;
    userId: number;
    toUserId: number | null;
    owed: number;
    isOwe: boolean;
    createdAt: Date;
}>;
export { getTransactions, getTransactionById, getTransactionByData, getTransactionOwedToByUserId, getTransactionOwedFromByUserId, getTransactionByUserId, createTransaction, };
