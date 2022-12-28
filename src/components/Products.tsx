import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../App";
import { ProductsContainer } from "../styled-components";

export default function Products() {
  const context = useContext(MyContext);
  const productsArr = [
    {
      img: "./assets/home/mobile/headphones-removebg-preview.png",
      name: "HEADPHONES",
      link: "/headphones",
    },
    {
      img: "./assets/home/mobile/speakers-removebg-preview.png",
      name: "SPEAKERS",
      link: "/speakers",
    },
    {
      img: "./assets/home/mobile/earphones-removebg-preview.png",
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
                context?.setMenu(!context?.menu);
              }}
            >
              <img src={product.img} />
              <p style={{ color: "black" }}>{product.name}</p>

              <div className="forflex">
                <p>SHOP</p>
                <img src="./assets/icons/icon-arrow-right.svg" />
              </div>
            </div>
          </Link>
        );
      })}
    </ProductsContainer>
  );
}
