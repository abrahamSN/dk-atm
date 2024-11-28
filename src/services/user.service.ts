import * as UserDto from "../datasources/user.dto.js";
import { UserCreate } from "../types/user.type.js";

const getUserById = async (id: number) => {
  return await UserDto.getUserById(id);
};

const getUserByUname = async (uname: string) => {
  return await UserDto.getUserByUname(uname);
};

const createUser = async (data: UserCreate) => {
  return await UserDto.createUser(data);
};

export { getUserById, getUserByUname, createUser };
