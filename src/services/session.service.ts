import * as SessionDto from "../datasources/session.dto.js";

import { SessionCreate } from "../types/session.type.js";

const createSession = async (data: SessionCreate) => {
  return await SessionDto.createSession(data);
};

const getSession = async () => {
  return await SessionDto.getSession();
};

const deleteSession = async () => {
  return await SessionDto.deleteSession();
};

export { createSession, getSession, deleteSession };
