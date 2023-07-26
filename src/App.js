import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";

import {
    onAuthStateChangedListener,
    createUserDocumentFromAuth,
} from "./utils/firebase/firebase.utils";

import { setCurrentUser } from "./store/user/user.action";

import Navigation from "./routes/Navigation/Navigation.component.jsx";
import Home from "./routes/Home/Home.component.jsx";
import Authentication from "./routes/Authentication/Authentication.component.jsx";
import Shop from "./routes/Shop/Shop.component.jsx";
import Checkout from "./routes/Checkout/Checkout.component.jsx";

const App = () => {
    // dispatch is a persisting reference that never changes
    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if (user) {
                createUserDocumentFromAuth(user);
            }
            dispatch(setCurrentUser(user));
        });
        return unsubscribe;
    }, []);

    return (
        <Routes>
            <Route path="/" element={<Navigation />}>
                <Route index element={<Home />} />
                <Route path="shop/*" element={<Shop />}></Route>
                <Route path="auth" element={<Authentication />} />
                <Route path="checkout" element={<Checkout />} />
            </Route>
        </Routes>
    );
};

export default App;
