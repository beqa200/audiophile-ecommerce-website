import styled from "styled-components";

const CheckoutContainer = styled.div`
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
        border: 1px solid #cfcfcf;
        border-radius: 8px;
        height: 47px;
        padding-bottom: 9px;
        padding-left: 16px;
        margin-top: 16px;

        input {
          max-width: 20px;
          max-height: 20px;
          accent-color: #D87D4A;
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
`;

export default CheckoutContainer;
