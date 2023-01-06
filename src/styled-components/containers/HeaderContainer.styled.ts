import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: black;
  position: relative;
  z-index: 2;
  width: 100%;
  height: 75px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (min-width: 768px) {
    justify-content: start;
  }

  .hamburger {
    @media (min-width: 768px) {
      margin-left: 39px;
    }
  }

  .logo {
    @media (min-width: 768px) {
      margin-left: 42px;
    }
  }

  .cart-logo {
    position: relative;
    cursor: pointer;

    @media (min-width: 768px) {
      position: absolute;
      right: 0;
      margin-right: 39px;
    }
    .count {
      position: absolute;
      top: -7px;
      right: -7px;
      background-color: #d87d4a;
      color: white;
      font-size: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 15px;
      height: 15px;
      border-radius: 100%;
    }
  }

  .menu {
    position: absolute;
    background-color: white;
    width: 100%;
    top: 75px;
    cursor: pointer;
  }
`;

export default HeaderContainer;
