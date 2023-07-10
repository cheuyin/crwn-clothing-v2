import { Outlet, Link } from "react-router-dom";

import "./Navigation.styles.scss";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

const Navigation = () => {
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
                    <Link className="nav_link" to="/auth">
                        SIGN IN
                    </Link>
                </div>
            </div>
            <Outlet />
        </>
    );
};

export default Navigation;
