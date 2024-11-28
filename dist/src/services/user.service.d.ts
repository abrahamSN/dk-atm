import { UserCreate } from "../types/user.type.ts";
declare const getUserById: (id: number) => Promise<{
    id: number;
    uname: string;
    createdAt: Date;
} | null>;
declare const getUserByUname: (uname: string) => Promise<{
    id: number;
    uname: string;
    createdAt: Date;
} | null>;
declare const createUser: (data: UserCreate) => Promise<{
    id: number;
    uname: string;
    createdAt: Date;
}>;
export { getUserById, getUserByUname, createUser };
