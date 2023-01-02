import React, { useContext, useState } from "react";
import { MyContext } from "../App";
import { cartIcon, hamuberIcon, logo } from "../assets";
import HeaderContainer from "../styled-components/containers/HeaderContainer.styled";
import Products from "./Products";
export default function Header() {
  const context = useContext(MyContext);
  console.log(context?.menu);
  return (
    <HeaderContainer>
      <img
        src={hamuberIcon}
        onClick={() => {
          context?.setMenu(!context?.menu);
        }}
      />
      <img src={logo} />
      <img src={cartIcon} />
      <div className="menu">{context?.menu && <Products />}</div>
    </HeaderContainer>
  );
}
