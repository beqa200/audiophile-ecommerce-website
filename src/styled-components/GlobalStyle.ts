import { createGlobalStyle, GlobalStyleComponent } from "styled-components";
import styled from "styled-components";

type PropsType = {
  menu: Boolean;
};
const GlobalStyles = createGlobalStyle`

*{
    font-family: 'manrope';
    margin: 0px;
    padding: 0px;
}



body {
    
    overflow: ${(props: PropsType) => props.menu && "hidden"};
    width: 100vw;
    overflow-x: hidden;
    
}



button {
    cursor: pointer;
}

a{
    text-decoration: none;
    cursor: pointer;
}
`;

const BlackScreen = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

export { GlobalStyles, BlackScreen };
