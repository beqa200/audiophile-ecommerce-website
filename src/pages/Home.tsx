import React from "react";
import {
  HomeContainer,
  OrangeButton,
  BlackButton,
  TransparentButton,
} from "../styled-components";
import data from "../data.json";
import { Products, Advert } from "../components";
import { earphonesyx1Mobile, speakerZX9Mobile } from "../assets";
import { Link } from "react-router-dom";

export default function Home() {
  console.log(data);

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
          <Link to="/headphones/xx99-mark-two-headphones">
            <OrangeButton>SEE PRODUCT</OrangeButton>
          </Link>
        </div>
      </section>
      <section className="section2">
        <Products />
      </section>
      <section className="section3">
        <div className="speaker9">
          <img src={speakerZX9Mobile} />
          <h2>ZX9 SPEAKER</h2>
          <p>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Link to="/speakers/zx9-speaker">
            <BlackButton>SEE PRODUCT</BlackButton>
          </Link>
        </div>
        <div className="speaker7">
          <h2>ZX7 SPEAKER</h2>
          <Link to="/speakers/zx7-speaker">
            <TransparentButton>SEE PRODUCT</TransparentButton>
          </Link>
        </div>
        <div className="earphones">
          <img src={earphonesyx1Mobile} />

          <div>
            <h2>YX1 EARPHONES</h2>
            <Link to="/earphones/yx1-earphones">
              <TransparentButton>SEE PRODUCT</TransparentButton>
            </Link>
          </div>
        </div>
      </section>
      <section className="section4">
        <Advert />
      </section>
    </HomeContainer>
  );
}
