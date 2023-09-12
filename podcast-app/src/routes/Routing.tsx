import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "pages/HomePage";
import PodCastPage from "pages/PodCastPage";

const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/podcast" element={<PodCastPage />}></Route>

            </Routes>
        </BrowserRouter>
    )
}
export default Routing;