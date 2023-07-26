import { CART_ACTION_TYPES } from "./cart.types";
import { createAction } from "../../utils/reducer/reducer.utils";

const addCartItem = (cartItems, productToAdd) => {
    // find if cartItems already has productToAdd
    // if found, increment quantity
    // else, create new cartItem with quantity 1
    // return new cartItems

    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem === existingCartItem
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }

    return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToRemove.id
    );

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(
            (cartItem) => cartItem.id !== cartItemToRemove.id
        );
    }

    return cartItems.map((cartItem) =>
        cartItem.id === existingCartItem.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    );
};

const clearCartItem = (cartItems, cartItemToClear) =>
    cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

// ===== Actions =====

export const setIsCartOpen = (boolean) =>
    createAction(CART_ACTION_TYPES.SET_CART_OPEN, boolean);

export const addItemToCart = (cartItems, productToAdd) => {
    return createAction(
        CART_ACTION_TYPES.SET_CART_ITEMS,
        addCartItem(cartItems, productToAdd)
    );
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    return createAction(
        CART_ACTION_TYPES.SET_CART_ITEMS,
        removeCartItem(cartItems, cartItemToRemove)
    );
};

export const clearItemFromCart = (cartItems, cartItemToClear) => {
    return createAction(
        CART_ACTION_TYPES.SET_CART_ITEMS, 
        clearCartItem(cartItems, cartItemToClear)
    );
};
