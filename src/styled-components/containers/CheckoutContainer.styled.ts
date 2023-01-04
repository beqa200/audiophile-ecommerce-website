import styled from "styled-components";

const CheckoutContainer = styled.div`
  position: relative;
  .back {
    color: black;
    opacity: 0.7;
    font-size: 15px;
    line-height: 25px;
    margin: 16px auto 0px;
    width: 90%;
  }

  .checkout {
    width: calc(90% - 48px);
    margin: 24px auto;
    padding: 24px;
    background-color: white;
    border-radius: 8px;

    h1 {
      margin-bottom: 32px;
    }
    div {
      .headname {
        font-weight: 700;
        font-size: 13px;
        line-height: 25px;
        color: #d87d4a;
        letter-spacing: 0.928571px;
        margin-top: 32px;
      }
      div {
        p {
          margin-top: 24px;
          font-size: 12px;
          font-weight: 700;
        }

        input {
          height: 52px;
          width: calc(100% - 24px);
          padding-left: 24px;
          font-size: 14px;
          margin-top: 9px;
          border: 1px solid #cfcfcf;
          border-radius: 8px;
        }
      }
    }
  }

  .payment-details {
    .method {
      div {
        display: flex;
        align-items: center;
        border-radius: 8px;
        height: 47px;
        padding-bottom: 9px;
        padding-left: 16px;
        margin-top: 16px;
        border: 1px solid #cfcfcf;

        input {
          max-width: 20px;
          max-height: 20px;
          accent-color: #d87d4a;
          padding: 20px;
        }

        label {
          margin-top: 9px;
          margin-left: 16px;
          font-weight: 700;
          font-size: 14px;
          line-height: 19px;
          letter-spacing: -0.25px;
        }
      }
    }
  }

  .summary {
    background-color: white;
    width: calc(90% - 57px);
    max-width: 377px;
    margin: 32px auto 97px;
    padding: 32px 29px 31px 28px;
    border-radius: 8px;

    p {
      font-size: 15px;
    }

    .head {
      display: flex;
      justify-content: space-between;
      align-items: center;

      p {
        opacity: 0.5;
        text-decoration: underline;
      }
    }
    .products {
      margin-top: 31px;
      margin-bottom: 24px;
      max-height: 300px;
      overflow-y: auto;
      border-top: 1px solid #cfcfcf;
      border-bottom: 1px solid #cfcfcf;
      .prod {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 24px;
        margin-bottom: 24px;
        img {
          width: 64px;
          border-radius: 8px;
        }

        .for-flex {
          display: flex;
          align-items: center;
          .for-flex-inner {
            margin-left: 16px;
            font-size: 15px;
            font-weight: 700;
            .name {
              line-height: 25px;
            }
            .price {
              opacity: 0.5;
              line-height: 25px;
            }
          }
        }
        .quantity {
          p {
            color: black;
            font-size: 15px;
            font-weight: 700;
            opacity: 0.5;
          }
        }
      }
    }

    .total,
    .shipping,
    .grand-total {
      margin-top: 8px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      p {
        font-size: 15px;
        opacity: 0.5;
      }

      .number {
        font-size: 18px;
        font-weight: 700;
        opacity: 1;
      }
    }

    .grand-total {
      margin-top: 24px;
      .number {
        color: #d87d4a;
      }
    }

    button {
      width: 100%;
      margin-top: 24px;
    }
  }
`;

export default CheckoutContainer;
