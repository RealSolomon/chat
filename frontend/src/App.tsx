import { Navigate, Route, Routes } from "react-router";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import { useAuthUser } from "./services/queries";
import { SnackbarProvider } from "notistack";

function App() {
    const { data, isPending } = useAuthUser();

    if (isPending) return <p>Loding</p>;

    return (
        <div className="p-4 h-screen flex items-center justify-center">
            <SnackbarProvider
                maxSnack={3}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
            >
                <Routes>
                    <Route
                        path="/"
                        element={data ? <Home /> : <Navigate to={"/login"} />}
                    />
                    <Route
                        path="/signup"
                        element={!data ? <SignUp /> : <Navigate to={"/"} />}
                    />
                    <Route
                        path="/login"
                        element={!data ? <Login /> : <Navigate to={"/"} />}
                    />
                </Routes>
            </SnackbarProvider>
        </div>
    );
}

export default App;
