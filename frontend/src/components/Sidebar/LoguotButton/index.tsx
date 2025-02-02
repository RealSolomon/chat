import { LogOut } from "lucide-react";
import { useLogout } from "../../../services/mutations";
import { useSnackbar } from "notistack";
import { useEffect } from "react";

const LogoutButton = () => {
    const { mutate, isError } = useLogout();
    const { enqueueSnackbar } = useSnackbar();

    const logout = () => {
        mutate();
    };

    useEffect(() => {
        if (isError) {
            enqueueSnackbar("There is an error", {
                variant: "error",
                anchorOrigin: { vertical: "top", horizontal: "left" },
            });
        }
    }, [isError, enqueueSnackbar]);

    return (
        <div className="mt-auto">
            <LogOut
                className="w-6 h-6 text-white cursor-pointer"
                onClick={logout}
            />
        </div>
    );
};

export default LogoutButton;
