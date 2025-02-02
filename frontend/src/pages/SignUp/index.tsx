import { Link } from "react-router";
import GenderCheckbox from "../../components/GenderCheckbox";

const SignUp = () => {
    return (
        <div className="flex flex-col items-center justify-center min-w-146 mx-auto">
            <div className="w-full p-6 bg-black/20 rounded-2xl shadow-lg shadow-black/10 backdrop-blur-sm">
                <h1 className="text-3xl font-semibold text-center text-gray-300">
                    Sign Up <span className="text-blue-500"> ChatApp</span>
                </h1>

                <form className="flex flex-col gap-5">
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">
                                Full Name
                            </span>
                        </label>
                        <input
                            type="text"
                            placeholder="John Doe"
                            className="w-full input input-bordered  h-12"
                        />
                    </div>

                    <div>
                        <label className="label p-2 ">
                            <span className="text-base label-text">
                                Username
                            </span>
                        </label>
                        <input
                            type="text"
                            placeholder="johndoe"
                            className="w-full input input-bordered h-12"
                        />
                    </div>

                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">
                                Password
                            </span>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            className="w-full input input-bordered h-12"
                        />
                    </div>

                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">
                                Confirm Password
                            </span>
                        </label>
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            className="w-full input input-bordered h-12"
                        />
                    </div>

                    <GenderCheckbox />

                    <Link
                        to={"/login"}
                        className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block text-white"
                    >
                        Already have an account?
                    </Link>

                    <div>
                        <button className="btn btn-block btn-md mt-2 border border-slate-700">
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default SignUp;
