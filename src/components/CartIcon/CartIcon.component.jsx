import { useDispatch, useSelector } from "react-redux";

import {
    selectIsCartOpen,
    selectCartCount,
    selectCartItems,
} from "../../store/cart/cart.selector";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { setIsCartOpen } from "../../store/cart/cart.action";

import "./CartIcon.styles.scss";

const CartIcon = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    const isCartOpen = useSelector(selectIsCartOpen);
    const cartCount = useSelector(selectCartCount);

    const toggleCartOpen = () =>
        dispatch(setIsCartOpen(cartItems, !isCartOpen));

    return (
        <div className="cart-icon-container" onClick={toggleCartOpen}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">{cartCount}</span>
        </div>
    );
};

export default CartIcon;
