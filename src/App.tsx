
import AppRoutes from "../routes/AppRoutes";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
const App = () => {
    return (
        <>
            <Toaster position="bottom-right" />
            <BrowserRouter>
                <AppRoutes />
            </BrowserRouter>{" "}
        </>
    );
};

export default App;
