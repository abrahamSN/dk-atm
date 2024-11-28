import * as UserDto from "../datasources/user.dto.js";
const getUserById = async (id) => {
    return await UserDto.getUserById(id);
};
const getUserByUname = async (uname) => {
    return await UserDto.getUserByUname(uname);
};
const createUser = async (data) => {
    return await UserDto.createUser(data);
};
export { getUserById, getUserByUname, createUser };
