import React, { useContext, useEffect } from "react";
import { MyContext } from "../App";
import { cartIcon, hamuberIcon, logo } from "../assets";
import HeaderContainer from "../styled-components/containers/HeaderContainer.styled";
import Cart from "./Cart";
import Products from "./Products";
export default function Header() {
  const context = useContext(MyContext);

  useEffect(() => {
    if (context?.menu == true) {
      context.setCart(false);
    }
  }, [context?.menu]);

  useEffect(() => {
    if (context?.cart == true) {
      context.setMenu(false);
    }
  }, [context?.cart]);

  return (
    <HeaderContainer>
      <img
        src={hamuberIcon}
        onClick={() => {
          context?.setMenu(!context?.menu);
        }}
      />
      <img src={logo} />

      <div className="cart">
        <img
          src={cartIcon}
          onClick={() => {
            context?.setCart(!context?.cart);
          }}
        />
        <p
          style={
            context?.cartObject.length != 0
              ? { display: "flex" }
              : { display: "none" }
          }
          className="count"
        >
          {context?.cartObject.length}
        </p>
      </div>

      <div className="menu">{context?.menu && <Products />}</div>
      {context?.cart && <Cart />}
    </HeaderContainer>
  );
}
