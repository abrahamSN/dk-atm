import prisma from "../configs/prisma.js";

const getUserById = async (id: number) => {
  return await prisma.user.findUnique({
    where: {
      id,
    },
  });
};

const getUserByUname = async (uname: string) => {
  return await prisma.user.findUnique({
    where: {
      uname,
    },
  });
};

const createUser = async (data: any) => {
  return await prisma.user.create({
    data,
  });
};

export { getUserById, getUserByUname, createUser };
