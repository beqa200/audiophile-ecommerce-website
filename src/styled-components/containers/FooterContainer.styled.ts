import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    padding: 0px 39px;
    align-items: flex-start;
  }

  img {
    margin-top: 52px;
    margin-top: 48px;

    @media (min-width: 768px) {
      margin-top: 56px;
    }
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

    @media (min-width: 768px) {
      flex-direction: row;
      width: 460px;
      height: 30px;
    }
  }

  .text,
  .copyright {
    margin-top: 48px;
    width: 90%;
    text-align: center;
    color: white;
    font-weight: 500;
    font-size: 15px;
    line-height: 25px;
    opacity: 0.5;
    margin: 48px auto 0px;

    @media (min-width: 768px) {
      margin-left: 0px;
      text-align: start;
    }
  }

  .for-flex {
    @media (min-width: 768px) {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }

    .icons {
      width: 100px;
      display: flex;
      justify-content: space-between;
      margin: 0px auto 38px;
    }
  }
`;

export default FooterContainer;
