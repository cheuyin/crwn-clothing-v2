import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import "./Navigation.styles.scss";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

const Navigation = () => {
    const { currentUser } = useContext(UserContext);

    return (
        <>
            <div className="navigation">
                <Link className="logo_container" to="/">
                    <CrwnLogo className="logo" />
                </Link>
                <div className="nav_links_container">
                    <Link className="nav_link" to="/shop">
                        SHOP
                    </Link>

                    {currentUser ? (
                        <span className="nav_link" onClick={signOutUser}>
                            SIGN OUT
                        </span>
                    ) : (
                        <Link className="nav_link" to="/auth">
                            SIGN IN
                        </Link>
                    )}
                </div>
            </div>
            <Outlet />
        </>
    );
};

export default Navigation;
