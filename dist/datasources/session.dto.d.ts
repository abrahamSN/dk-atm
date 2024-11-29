import { SessionCreate } from "../types/session.type.js";
declare const getSession: () => Promise<{
    id: number;
    userId: number;
    createdAt: Date;
} | null>;
declare const createSession: (data: SessionCreate) => Promise<{
    id: number;
    userId: number;
    createdAt: Date;
}>;
declare const deleteSession: () => Promise<import("../../prisma/generated/client/index.js").Prisma.BatchPayload>;
export { getSession, createSession, deleteSession };
