import prisma from "../configs/prisma.js";

import { SessionCreate } from "../types/session.type.js";

const getSession = async () => {
  return await prisma.session.findFirst();
};

const createSession = async (data: SessionCreate) => {
  return await prisma.session.create({
    data,
  });
};

const deleteSession = async () => {
  return await prisma.session.deleteMany();
};

export { getSession, createSession, deleteSession };
