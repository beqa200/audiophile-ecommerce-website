import React from "react";
import {
  HomeContainer,
  OrangeButton,
  BlackButton,
  TransparentButton,
} from "../styled-components";
import data from "../data.json";
import { Products, Advert } from "../components";
import {
  headphonesMobile,
  speakersMobile,
  earphonesMobile,
  biggerSpeakersMobile,
  biggerEarphonesMobile,
} from "../assets";

export default function Home() {
  console.log(data);
  const productsArr = [
    {
      img: headphonesMobile,
      name: "HEADPHONES",
    },
    {
      img: speakersMobile,
      name: "SPEAKERS",
    },
    {
      img: earphonesMobile,
      name: "EARPHONES",
    },
  ];
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
      <section className="section2">
        {productsArr.map((product) => {
          return (
            <Products
              key={Math.random()}
              img={product.img}
              name={product.name}
            />
          );
        })}
      </section>
      <section className="section3">
        <div className="speaker9">
          <img src={biggerSpeakersMobile} />
          <h2>ZX9 SPEAKER</h2>
          <p>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <BlackButton>SEE PRODUCT</BlackButton>
        </div>
        <div className="speaker7">
          <h2>ZX7 SPEAKER</h2>
          <TransparentButton>SEE PRODUCT</TransparentButton>
        </div>
        <div className="earphones">
          <img src={biggerEarphonesMobile} />

          <div>
            <h2>YX1 EARPHONES</h2>
            <TransparentButton>SEE PRODUCT</TransparentButton>
          </div>
        </div>
      </section>
      <section className="section4">
        <Advert />
      </section>
    </HomeContainer>
  );
}
