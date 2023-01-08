import React from "react";
import { gearDesktop, gearMobile, gearTablet } from "../assets";
import { AdvertContainer } from "../styled-components";
export default function Advert() {
  return (
    <AdvertContainer>
      <img className="mobile" src={gearMobile} />
      <img className="tablet" src={gearTablet} />
      <img className="desktop" src={gearDesktop} />
      <div>
        <h2>
          BRINGING YOU THE <span style={{ color: "#D87D4A" }}>BEST</span> AUDIO
          GEAR
        </h2>
        <p>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </AdvertContainer>
  );
}
