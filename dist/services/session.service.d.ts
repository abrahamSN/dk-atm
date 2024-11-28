import { SessionCreate } from "../types/session.type.js";
declare const createSession: (data: SessionCreate) => Promise<{
    id: number;
    createdAt: Date;
    userId: number;
}>;
declare const getSession: () => Promise<{
    id: number;
    createdAt: Date;
    userId: number;
} | null>;
declare const deleteSession: () => Promise<import("../../prisma/generated/client/index.js").Prisma.BatchPayload>;
export { createSession, getSession, deleteSession };
