import prisma from "../configs/prisma.js";
const getUserById = async (id) => {
    return await prisma.user.findUnique({
        where: {
            id,
        },
    });
};
const getUserByUname = async (uname) => {
    return await prisma.user.findUnique({
        where: {
            uname,
        },
    });
};
const createUser = async (data) => {
    return await prisma.user.create({
        data,
    });
};
export { getUserById, getUserByUname, createUser };
