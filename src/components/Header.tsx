import React from "react";
import HeaderContainer from "../styled-components/containers/HeaderContainer.styled";
export default function Header() {
  return (
    <HeaderContainer>
      <img src="./assets/icons/icon-hamburger.svg" />
      <img src="./assets/icons/logo.svg" />
      <img src="./assets/icons/icon-cart.svg" />
    </HeaderContainer>
  );
}
