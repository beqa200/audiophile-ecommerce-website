import React from "react";
import { Link } from "react-router-dom";
import { facebookIcon, instagramIcon, logo, twitterIcon } from "../assets";
import { FooterContainer } from "../styled-components";
export default function Footer() {
  return (
    <FooterContainer>
      <img src={logo} />
      <div className="pages" >
        
          <Link to="/">
            <p style={{color: "white"}}>HOME</p>
          </Link>
          <Link to="/headphones">
            <p style={{color: "white"}}> HEADPHONES</p>
          </Link>

          <Link to="/speakers">
            <p style={{color: "white"}}>SPEAKERS</p>
          </Link>
          <Link to="/earphones">
            <p style={{color: "white"}}>EARPHONES</p>
          </Link>
        
      </div>

      <p className="text">
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </p>

      <p className="copyright">Copyright 2021. All Rights Reserved</p>

      <div className="icons">
        <img src={facebookIcon} />
        <img src={twitterIcon} />
        <img src={instagramIcon} />
      </div>
    </FooterContainer>
  );
}
