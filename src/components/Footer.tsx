import React from "react";
import { FooterContainer } from "../styled-components";
import { logo, facebook, twitter, instagram } from "../assets";
export default function Footer() {
  return (
    <FooterContainer>
      <img src={logo} />
      <div className="pages">
        <p>HOME</p>
        <p> HEADPHONES</p>
        <p>SPEAKERS</p>
        <p>EARPHONES</p>
      </div>

      <p className="text">
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </p>

      <p className="copyright">Copyright 2021. All Rights Reserved</p>

      <div className="icons">
        <img src={facebook} />
        <img src={twitter} />
        <img src={instagram} />
      </div>
    </FooterContainer>
  );
}
