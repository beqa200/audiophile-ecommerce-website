import styled from "styled-components";

const DetailsContainer = styled.div`
  width: 90%;
  margin: auto;

  p {
    color: black;
    opacity: 0.7;
    font-size: 15px;
    line-height: 25px;
  }

  img {
    width: 100%;
  }

  h2 {
    font-weight: 700;
    font-size: 28px;
    line-height: 38px;
    letter-spacing: 1px;
  }

  .back {
    margin-top: 15px;
  }

  .product-image {
    margin-top: 24px;
  }

  .tablet {
    display: none;
  }

  @media (min-width: 768px) {
    .for-flex {
      display: flex;
      justify-content: space-between;
      .mobile {
        display: none;
      }

      .tablet {
        display: block;
        width: 281px;
        height: 480px;
      }

      .for-flex-inner {
        width: 400px;
      }
    }
  }

  .new {
    margin-top: 32px;
    color: #d87d4a;
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 10px;
  }

  .product-name {
    margin-top: 24px;

    @media (min-width: 768px) {
      width: 339px;
    }
  }

  .description {
    margin-top: 24px;

    @media (min-width: 768px) {
      width: 339px;
    }
  }

  .price {
    font-weight: 700;
    font-size: 18px;
    letter-spacing: 1.28px;
    opacity: 1;
    margin-top: 24px;
  }

  .add-cart {
    display: flex;
    margin-top: 31px;

    .quantity {
      display: flex;
      align-items: center;
      justify-content: space-around;
      background-color: #f1f1f1;
      width: 120px;
      height: 48px;

      p {
        font-size: 13px;
        font-weight: 700;
        width: 20%;
        line-height: 40px;
        text-align: center;
        cursor: pointer;
      }

      .num {
        opacity: 1;
        cursor: text;
      }
    }

    button {
      margin-left: 16px;
    }
  }

  .features {
    margin-top: 88px;

    h2 {
      @media (min-width: 768px) {
        font-size: 32px;
      }
    }

    p {
      margin-top: 24px;
    }
  }

  .equipments {
    margin-top: 113px;

    @media (min-width: 768px) {
      display: flex;
    }

    h2 {
      margin-bottom: 24px;

      @media (min-width: 768px) {
        font-size: 32px;
        width: 339px;
      }
    }

    .includes {
      display: flex;
      margin-top: 8px;

      .quantity {
        color: #d87d4a;
        font-weight: 700;
        margin-right: 21px;
        opacity: 1;
      }
    }
  }

  .gallery {
    margin-top: 90px;

    @media (min-width: 768px) {
      display: flex;
      justify-content: space-between;

      img {
        width: 49%;
      }

      div {
        width: 49%;

        img {
          width: 100%;
        }
      }
    }

    img {
      border-radius: 8px;
      margin-top: 15px;
    }

    .tablet {
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
  }

  .others {
    margin-top: 113px;

    @media (min-width: 768px) {
      .for-flex {
        display: flex;

        div {
          width: 32%;

          img {
            width: 100%;
            height: 318px;
          }
        }
      }
    }

    h2 {
      text-align: center;
      margin: 32px 0px;
    }

    button {
      display: block;
      margin: 32px auto 56px;
    }
  }

  .section2 {
    margin-top: 172px;

    @media (min-width: 768px) {
      margin-top: 60px;
    }

    img {
      max-width: 80px;
      max-height: 104px;
    }
  }

  .section3 {
    margin: 120px 0px;

    @media (min-width: 768px) {
      .tablet {
        display: block;
        margin-top: -40px;
      }
    }
  }
`;

export default DetailsContainer;
