import styled from "styled-components";

type PropsType = {
  img: String;
};

const ProductsContainer = styled.div`
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

  div {
    display: flex;
    align-items: center;
    height: 10px;
    width: 60px;
    margin-top: -6px;
    justify-content: space-between;
    img {
      height: 11px;
      width: 7px;
      margin-top: 36px;
    }

    p {
      font-size: 13px;
      font-weight: 700;
      opacity: 0.5;
    }
  }
`;

export default ProductsContainer;
