import { useDispatch, useSelector } from "react-redux";

import { selectCartItems } from "../../store/cart/cart.selector";
import { addItemToCart } from "../../store/cart/cart.action";
import Button from "../Button/Button.component";

import "./ProductCard.styles.scss";

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);

    const { name, price, imageUrl } = product;

    const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={`${name}`} />
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button buttonType={"inverted"} onClick={addProductToCart}>
                Add to Cart
            </Button>
        </div>
    );
};

export default ProductCard;
