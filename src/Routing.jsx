import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import AboutDog from "./about_dog/AboutDog";


const MainPage = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />}></Route>
                    <Route path="/:name" element={<AboutDog />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default MainPage;
