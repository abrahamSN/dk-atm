import * as SessionDto from "../datasources/session.dto.js";

const createSession = async (data) => {
  return await SessionDto.createSession(data);
};

const getSession = async () => {
  return await SessionDto.getSession();
};

const deleteSession = async () => {
  return await SessionDto.deleteSession();
};

export { createSession, getSession, deleteSession };
