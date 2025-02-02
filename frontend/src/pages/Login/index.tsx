import { Link } from "react-router";

const Login = () => {
    return (
        <div className="flex flex-col items-center justify-center min-w-146 mx-auto">
            <div className="w-full p-6 bg-black/20 rounded-2xl shadow-lg shadow-black/10 backdrop-blur-sm">
                <h1 className="text-3xl font-semibold text-center text-white">
                    Login
                    <span className="text-blue-500"> ChatApp</span>
                </h1>

                <form className="flex flex-col gap-5">
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">
                                Username
                            </span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter username"
                            className="w-full input input-bordered h-10"
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
                            className="w-full input input-bordered h-10"
                        />
                    </div>
                    <Link
                        to="/signup"
                        className="text-sm  hover:underline text-white hover:text-blue-600 mt-2 inline-block"
                    >
                        {"Don't"} have an account?
                    </Link>

                    <div>
                        <button className="btn btn-block btn-md mt-2 border border-slate-700">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default Login;
