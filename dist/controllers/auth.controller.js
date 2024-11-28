import * as AuthService from "../services/auth.service.js";
import * as UserService from "../services/user.service.js";
const login = async (uname) => {
    try {
        const getSession = await AuthService.getSession();
        if (getSession) {
            return "You are already logged in";
        }
        let user = await UserService.getUserByUname(uname);
        if (!user) {
            user = await UserService.createUser({ uname });
        }
        const data = {
            userId: Number(user.id),
        };
        await AuthService.createSession(data);
        return "You are now logged in";
    }
    catch (error) {
        console.log(error);
    }
};
const logout = async () => {
    try {
        return await AuthService.deleteSession();
    }
    catch (error) {
        console.log(error);
    }
};
export { login, logout };
