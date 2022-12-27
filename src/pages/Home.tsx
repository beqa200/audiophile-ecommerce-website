import React from "react";
import { HomeContainer, OrangeButton } from "../styled-components";

export default function Home() {
  return (
    <HomeContainer>
      <section className="section1">
        <div className="content">
          <p className="head">NEW PRODUCT</p>
          <h1>XX99 Mark II HeadphoneS</h1>
          <p className="text">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <OrangeButton>SEE PRODUCT</OrangeButton>
        </div>
      </section>
    </HomeContainer>
  );
}
