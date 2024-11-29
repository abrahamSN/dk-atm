import { UserCreate } from "../types/user.type.js";
declare const getUserById: (id: number) => Promise<{
    id: number;
    createdAt: Date;
    uname: string;
} | null>;
declare const getUserByUname: (uname: string) => Promise<{
    id: number;
    createdAt: Date;
    uname: string;
} | null>;
declare const createUser: (data: UserCreate) => Promise<{
    id: number;
    createdAt: Date;
    uname: string;
}>;
export { getUserById, getUserByUname, createUser };
