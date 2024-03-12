import React from "react";
// import { useSelector } from "react-redux";
import { ShoppingCart } from "@mui/icons-material";
import "./CartIcon.css"
import { useSelector } from "react-redux";
const CartIcon = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const cartItemCount = cartItems.length;

  return (
    <div className="cartIconWrapper">
      <span className="cartIcon">
        <ShoppingCart className="icon" />
        {cartItemCount > 0 && (
          <span className="cartItemCount">{cartItemCount}</span>
        )}
      </span>
    </div>
  );
};

export default CartIcon;
