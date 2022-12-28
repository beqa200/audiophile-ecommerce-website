import { createGlobalStyle, GlobalStyleComponent } from "styled-components";

const GlobalStyles = createGlobalStyle`

*{
    font-family: 'manrope';
    margin: 0px;
    padding: 0px;
}


body {

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

export default GlobalStyles;
