import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import CartDropdown from "../../components/CartDropdown/CartDropdown.component";
import CartIcon from "../../components/CartIcon/CartIcon.component";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";

import "./Navigation.styles.scss";

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);

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

                    <CartIcon />
                </div>
                {isCartOpen && <CartDropdown />}
            </div>
            <Outlet />
        </>
    );
};

export default Navigation;
