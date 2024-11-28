import prisma from "../configs/prisma.js";
const getSession = async () => {
    return await prisma.session.findFirst();
};
const createSession = async (data) => {
    return await prisma.session.create({
        data,
    });
};
const deleteSession = async () => {
    return await prisma.session.deleteMany();
};
export { getSession, createSession, deleteSession };
