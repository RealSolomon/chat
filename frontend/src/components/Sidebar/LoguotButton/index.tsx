import { LogOut } from "lucide-react";
import { useLogout } from "../../../services/mutations";

const LogoutButton = () => {
    const { mutate } = useLogout();

    const logout = () => {
        mutate();
    };

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
