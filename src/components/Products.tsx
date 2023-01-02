import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../App";
import { arrowIcon, earphonesMobile, headphonesMobile, speakersMobile } from "../assets";
import { ProductsContainer } from "../styled-components";

export default function Products() {
  const context = useContext(MyContext);
  const productsArr = [
    {
      img: headphonesMobile,
      name: "HEADPHONES",
      link: "/headphones",
    },
    {
      img: speakersMobile,
      name: "SPEAKERS",
      link: "/speakers",
    },
    {
      img: earphonesMobile,
      name: "EARPHONES",
      link: "/earphones",
    },
  ];

  return (
    <ProductsContainer>
      {productsArr.map((product) => {
        return (
          <Link to={product.link} key={Math.random()}>
            <div
              className="wrapper"
              onClick={() => {
                context?.setMenu(false);
              }}
            >
              <img src={product.img} />
              <p style={{ color: "black" }}>{product.name}</p>

              <div className="forflex">
                <p>SHOP</p>
                <img src={arrowIcon} />
              </div>
            </div>
          </Link>
        );
      })}
    </ProductsContainer>
  );
}
