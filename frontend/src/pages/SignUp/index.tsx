import { Link } from "react-router";
import GenderCheckbox from "../../components/GenderCheckbox";
import { ChangeEvent, FormEvent, useState } from "react";
import { Gender, IFormInputs } from "../../models/IForm";
import { useSignUp } from "../../services/mutations";
import FormInput from "../../components/FormInput";

const SignUp = () => {
    const signUpMutation = useSignUp();

    const [formInputs, setFormInputs] = useState<IFormInputs>({
        fullName: "",
        username: "",
        password: "",
        confirmPassword: "",
        gender: "",
    });

    const handleChangeFormInput =
        (input: keyof IFormInputs) => (e: ChangeEvent<HTMLInputElement>) => {
            setFormInputs({ ...formInputs, [input]: e.target.value });
        };

    const handleCheckboxChange =
        (gender: Gender) => (_: ChangeEvent<HTMLInputElement>) => {
            setFormInputs({ ...formInputs, gender });
        };

    const handleSubmitForm = (e: FormEvent) => {
        e.preventDefault();
        signUpMutation.mutate(formInputs);
    };

    return (
        <div className="flex flex-col items-center justify-center min-w-146 mx-auto">
            <div className="w-full p-6 bg-black/20 rounded-2xl shadow-lg shadow-black/10 backdrop-blur-sm">
                <h1 className="text-3xl font-semibold text-center text-gray-300">
                    Sign Up <span className="text-blue-500"> ChatApp</span>
                </h1>

                <form
                    className="flex flex-col gap-5"
                    onSubmit={handleSubmitForm}
                >
                    <FormInput
                        value={formInputs.fullName}
                        onChange={handleChangeFormInput("fullName")}
                        label="Full Name"
                        type="text"
                        placeholder="John Doe"
                    />
                    <FormInput
                        value={formInputs.username}
                        onChange={handleChangeFormInput("username")}
                        label="Username"
                        type="text"
                        placeholder="johndoe"
                    />
                    <FormInput
                        value={formInputs.password}
                        onChange={handleChangeFormInput("password")}
                        label="Password"
                        type="password"
                        placeholder="Enter Password"
                    />
                    <FormInput
                        value={formInputs.confirmPassword}
                        onChange={handleChangeFormInput("confirmPassword")}
                        label="Confirm Password"
                        type="password"
                        placeholder="Confirm Password"
                    />

                    <GenderCheckbox
                        selectedGender={formInputs.gender}
                        onChange={handleCheckboxChange}
                    />

                    <Link
                        to={"/login"}
                        className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block text-white"
                    >
                        Already have an account?
                    </Link>

                    <div>
                        <button
                            className="btn btn-block btn-md mt-2 border border-slate-700"
                            disabled={signUpMutation.isPending}
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default SignUp;
