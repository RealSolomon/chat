import { useQueryClient, useMutation } from "@tanstack/react-query";
import { login, logout, signUp } from "./api";
import { IFormInputs, ILoginFormInputs } from "../models/IForm";

export const useSignUp = () => {
    return useMutation({
        mutationFn: (data: IFormInputs) => signUp(data),
    });
};

export const useLogin = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (data: ILoginFormInputs) => login(data),
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: ["authUser"] });
        },
    });
};

export const useLogout = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: logout,
        onSuccess: () => {
            queryClient.setQueryData(["authUser"], null);
            queryClient.invalidateQueries({ queryKey: ["authUser"] });
        },
    });
};
