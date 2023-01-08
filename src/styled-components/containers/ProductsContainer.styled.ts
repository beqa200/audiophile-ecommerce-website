import styled from "styled-components";

const ProductsContainer = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  a {
    display: block;
    margin: auto;
    width: 90%;

    @media (min-width: 768px) {
      width: 223px;
    }

    @media (min-width: 1440px) {
      width: 350px;
    }
  }

  .wrapper {
    background: #f1f1f1;
    width: 100%;
    height: 165px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 68px auto;

    @media (min-width: 1440px) {
      height: 190px

    }

    img {
      max-width: 40%;
      margin-top: -50px;
    }

    .tablet,
    .desktop {
      display: none;
    }

    @media (min-width: 768px) {
      .mobile {
        display: none;
      }

      .tablet {
        display: block;
      }
    }

    @media (min-width: 1440px) {
      .tablet {
        display: none;
      }

      .desktop {
        display: block;
      }
    }

    p {
      font-size: 15px;
      font-weight: 700;
      letter-spacing: 1px;
      margin-top: 36px;
    }

    .forflex {
      display: flex;
      align-items: center;
      width: 60px;
      height: 10px;
      justify-content: space-between;

      img {
        height: 11px;
        width: 7px;
        margin-top: -15px;
        margin-left: 10px;
        margin-top: 35px;
      }

      p {
        font-size: 13px;
        font-weight: 700;
        opacity: 0.5;
        color: black;
      }
    }
  }
`;

export default ProductsContainer;
