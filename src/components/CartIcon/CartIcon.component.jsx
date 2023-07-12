import "./CartIcon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CartIcon = () => {
    const { numItems, setIsCartOpen } = useContext(CartContext);

    const toggleIsCartOpen = () => setIsCartOpen((prevState) => !prevState);

    return (
        <div className="cart-icon-container" onClick={toggleIsCartOpen}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">{numItems}</span>
        </div>
    );
};

export default CartIcon;
