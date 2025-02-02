import { Link } from "react-router";
import { useLogin } from "../../services/mutations";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { ILoginFormInputs } from "../../models/IForm";
import { useSnackbar } from "notistack";
import FormInput from "../../components/FormInput";

const Login = () => {
    const loginMutation = useLogin();
    const { enqueueSnackbar } = useSnackbar();

    const [formInputs, setFormInputs] = useState<ILoginFormInputs>({
        username: "",
        password: "",
    });

    const handleChangeFormInput =
        (input: keyof ILoginFormInputs) =>
        (e: ChangeEvent<HTMLInputElement>) => {
            setFormInputs({ ...formInputs, [input]: e.target.value });
        };

    const handleSubmitForm = (e: FormEvent) => {
        e.preventDefault();
        loginMutation.mutate(formInputs);
    };

    useEffect(() => {
        if (loginMutation.isError) {
            enqueueSnackbar("Failed to login", {
                variant: "error",
                anchorOrigin: { vertical: "top", horizontal: "left" },
            });
        }
    }, [loginMutation.isError, enqueueSnackbar]);

    return (
        <div className="flex flex-col items-center justify-center min-w-146 mx-auto">
            <div className="w-full p-6 bg-black/20 rounded-2xl shadow-lg shadow-black/10 backdrop-blur-sm">
                <h1 className="text-3xl font-semibold text-center text-white">
                    Login
                    <span className="text-blue-500"> X-Chat</span>
                </h1>

                <form
                    className="flex flex-col gap-5"
                    onSubmit={handleSubmitForm}
                >
                    <FormInput
                        value={formInputs.username}
                        onChange={handleChangeFormInput("username")}
                        label="Username"
                        type="text"
                        placeholder="Enter username"
                    />
                    <FormInput
                        value={formInputs.password}
                        onChange={handleChangeFormInput("password")}
                        label="Password"
                        type="password"
                        placeholder="Enter Password"
                    />
                    <Link
                        to="/signup"
                        className="text-sm  hover:underline text-white hover:text-blue-600 mt-2 inline-block"
                    >
                        {"Don't"} have an account?
                    </Link>

                    <div>
                        <button
                            className="btn btn-block btn-md mt-2 border border-slate-700"
                            disabled={loginMutation.isPending}
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default Login;
