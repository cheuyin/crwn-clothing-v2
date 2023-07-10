import { Routes, Route } from "react-router-dom";

import Navigation from "./routes/Navigation/Navigation.component.jsx";
import Home from "./routes/Home/Home.component.jsx";


const Shop = () => {
    return <h1>This is the shop</h1>;
};

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigation />}>
                <Route index element={<Home />} />
                <Route path="shop" element={<Shop />} />
            </Route>
        </Routes>
    );
};

export default App;
