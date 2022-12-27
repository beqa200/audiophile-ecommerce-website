import React from "react";
import { HomeContainer, OrangeButton } from "../styled-components";
import data from "../data.json";
import { Products } from "../components";
import { headphonesMobile, speakersMobile, earphonesMobile } from "../assets";
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
        return <Products key={Math.random()} img={product.img} name={product.name}/>

        })}
      </section>
    </HomeContainer>
  );
}
