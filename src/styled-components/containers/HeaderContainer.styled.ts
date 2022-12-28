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

  .menu {
   position: absolute;
   background-color: white;
   width: 100%;
   top: 75px;
  }
`;

export default HeaderContainer;
