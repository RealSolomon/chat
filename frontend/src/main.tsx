import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import App from "./App.tsx";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import SocketContextProvider from "./context/SocketContext.tsx";
// import {ReactQueryDevTools } from '@tanstack/react-query-dev'

const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: 2, retryDelay: 700 } },
});

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <SocketContextProvider>
                    <App />
                </SocketContextProvider>
            </QueryClientProvider>
        </BrowserRouter>
    </StrictMode>
);
