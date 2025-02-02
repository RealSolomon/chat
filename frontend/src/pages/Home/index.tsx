import MessageContainer from "../../components/Messages/MessageContainer";
import Sidebar from "../../components/Sidebar";

const Home = () => {
    return (
        <div className="flex h-[80vh] w-full  md:h-[850px] p-6 bg-black/20 rounded-2xl shadow-lg shadow-black/10 backdrop-blur-sm">
            <Sidebar />
            <MessageContainer />
        </div>
    );
};
export default Home;
