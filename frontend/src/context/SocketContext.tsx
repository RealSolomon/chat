import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useRef,
    useState,
} from "react";
import io, { Socket } from "socket.io-client";
import { ISocketContext } from "../models/ISocketContext";
import { useAuthUser } from "../services/queries";

const SocketContext = createContext<ISocketContext | undefined>(undefined);

export const useSocketContext = (): ISocketContext => {
    const context = useContext(SocketContext);
    if (context === undefined) {
        throw new Error(
            "useSocketContext must be used within a SocketContextProvider"
        );
    }

    return context;
};

const socketURL =
    import.meta.env.MODE === "development" ? "http://localhost:3300" : "/";

const SocketContextProvider = ({ children }: { children: ReactNode }) => {
    const { data: authUser, isPending } = useAuthUser();
    const socketRef = useRef<Socket | null>(null);
    const [onlineUsers, setOnlineUsers] = useState<string[]>([]);

    useEffect(() => {
        if (authUser && !isPending) {
            const socket = io(socketURL, {
                query: {
                    userId: authUser.id,
                },
            });
            socketRef.current = socket;

            socket.on("getOnlineUsers", (users: string[]) => {
                setOnlineUsers(users);
            });

            return () => {
                socket.close();
                socketRef.current = null;
            };
        } else if (!authUser && !isPending) {
            if (socketRef.current) {
                socketRef.current.close();
                socketRef.current = null;
            }
        }
    }, [authUser, isPending]);

    return (
        <SocketContext.Provider
            value={{ socket: socketRef.current, onlineUsers }}
        >
            {children}
        </SocketContext.Provider>
    );
};

export default SocketContextProvider;
