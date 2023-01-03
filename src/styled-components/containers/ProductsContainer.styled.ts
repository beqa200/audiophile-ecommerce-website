import styled from "styled-components";

const ProductsContainer = styled.div`
  .wrapper {
    background: #f1f1f1;
    width: 90%;
    height: 165px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 68px auto;

    img {
      max-width: 40%;
      margin-top: -50px;
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
