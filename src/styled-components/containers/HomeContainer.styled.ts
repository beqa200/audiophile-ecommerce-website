import styled from "styled-components";
import { homeMainMobile } from "../../assets";

const HomeContainer = styled.main`
  .section1 {
    width: 100%;
    height: 600px;
    background-image: url(${homeMainMobile}),
      linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)); /* black with 50% opacity */
    background-blend-mode: multiply;
    background-size: 100% 100%;
    background-position: center -90px;
    background-repeat: no-repeat;
  }

  .content {
    width: 100%;
    margin: auto;
    padding-top: 110px;
    .head {
      position: absolute;
      color: white;
      margin-bottom: -20px;
      width: 100%;
      text-align: center;
      font-weight: 400;
      font-size: 14px;
      letter-spacing: 10px;
      opacity: 0.5;
    }

    h1 {
      color: white;
      width: 100%;
      text-align: center;
      font-size: 36px;
      margin-top: 50px;
      letter-spacing: 1.28571px;
      line-height: 40px;
    }

    .text {
        width: 328px;
        margin: 24px auto;
        text-align: center;
        font-size: 15px;
        color: white;
        opacity: 0.75;
    }

    button {
      display: block;
      margin: auto;
      
    }
  }

  .section2 {
    margin-top: -70px;
  }
`;

export default HomeContainer;
