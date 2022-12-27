import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-top: 52px;
    margin-top: 48px;
  }

  .pages {
    margin-top: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 160px;
    color: white;
    font-weight: 700;
  }

  .text, .copyright {
    margin-top: 48px;
    width: 90%;
    text-align: center;
    color: white;
    font-weight: 500;
    font-size: 15px;
    line-height: 25px;
    opacity: 0.5;
  }

  .icons {
    width: 100px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 38px;
  }
`;

export default FooterContainer;
