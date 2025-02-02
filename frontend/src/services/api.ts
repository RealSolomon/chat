import axios from "axios";
import { IAuthUser } from "../models/IAuth";
import { IFormInputs, ILoginFormInputs } from "../models/IForm";

const axiosInstance = axios.create();

export const getAuthUser = async () => {
    return (await axiosInstance.get<IAuthUser>("/api/auth/me")).data;
};

export const signUp = async (body: IFormInputs) => {
    return await axiosInstance.post("/api/auth/signup", body);
};

export const logout = async () => {
    return await axiosInstance.post("/api/auth/logout");
};

export const login = async (body: ILoginFormInputs) => {
    return await axiosInstance.post("/api/auth/login", body);
};
