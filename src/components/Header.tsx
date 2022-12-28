import React, { useContext, useState } from "react";
import { MyContext } from "../App";
import HeaderContainer from "../styled-components/containers/HeaderContainer.styled";
import Products from "./Products";
export default function Header() {
const context = useContext(MyContext);
console.log(context?.menu);
  return (
    <HeaderContainer>
      <img src="./assets/icons/icon-hamburger.svg" onClick={() => {
        context?.setMenu(!context?.menu);
      }} />
      <img src="./assets/icons/logo.svg" />
      <img src="./assets/icons/icon-cart.svg" />
      <div className="menu">
        {context?.menu && <Products/>}
      </div>
    </HeaderContainer>
  );
}
