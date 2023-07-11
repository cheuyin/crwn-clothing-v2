import { Routes, Route } from "react-router-dom";

import Navigation from "./routes/Navigation/Navigation.component.jsx";
import Home from "./routes/Home/Home.component.jsx";
import Authentication from "./routes/Authentication/Authentication.component.jsx";
import Shop from "./routes/Shop/Shop.component.jsx"

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigation />}>
                <Route index element={<Home />} />
                <Route path="shop" element={<Shop />} />
                <Route path="auth" element={<Authentication />} />
            </Route>
        </Routes>
    );
};

export default App;
