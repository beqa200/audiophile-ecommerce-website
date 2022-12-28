import styled from "styled-components";

const CategoryContainer = styled.div`
  .section1 {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    margin-top: -56px;
    div {
      width: 90%;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 120px;
      img {
        max-width: 100%;
      }

      .new {
        text-align: center;
        margin-top: 32px;
        color: #d87d4a;
        font-weight: 400;
        font-size: 14px;
        letter-spacing: 10px;
      }

      h2 {
        text-align: center;
        margin-top: 24px;
        width: 327px;
        font-weight: 700;
        font-size: 28px;
        line-height: 38px;
        letter-spacing: 1px;
      }

      .description {
        text-align: center;
        width: 327px;
        font-weight: 500;
        font-size: 15px;
        line-height: 25px;
        opacity: 0.5;
        margin-top: 24px;
      }

      button {
        margin-top: 24px;
      }
    }
  }

  .section2 {
    margin-top: 135px;
  }

  .section3 {
    margin: 120px 0px;
  }
`;

export default CategoryContainer;
