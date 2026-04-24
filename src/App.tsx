import AppRoutes from "../routes/AppRoutes";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import CursorFollower from "./components/atoms/CursorFollower";

const App = () => {
    return (
        <>
            <CursorFollower />
            <Toaster position="bottom-right" />
            <BrowserRouter>
                <AppRoutes />
            </BrowserRouter>
        </>
    );
};

export default App;
