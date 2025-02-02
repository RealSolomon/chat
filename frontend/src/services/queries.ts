import { useQuery } from "@tanstack/react-query";
import { getAuthUser } from "./api";

export const useAuthUser = () => {
    return useQuery({
        queryKey: ["authUser"],
        queryFn: getAuthUser,
        refetchOnWindowFocus: false,
    });
};
