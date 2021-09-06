import React from "react";
import { connect } from "react-redux";

import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-button/custom-button.component";

import "./cart-dropdown.styles.scss";

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    {cartItems.map((item) => (
      <CartItem key={item.id} item={item} />
    ))}

    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);
const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default connect(mapStateToProps)(CartDropdown);
