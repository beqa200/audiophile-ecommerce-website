import React from "react";
import { useParams } from "react-router";
import { DetailsContainer, OrangeButton } from "../styled-components";
import data from "../data.json";
import { Advert, Products } from "../components";
export default function Details() {
  const params = useParams();
  console.log(data);
  const product: Product | undefined = data.find(
    (product) =>
      product.slug == params.product && product.category == params.category
  );

  return (
    <DetailsContainer>
      <section className="section1">
        <p className="back"> Go Back</p>
        <img className="product-image" src={"." + product?.image.mobile} />
        <p>{product?.new == true ? "NEW PRODUCT" : null}</p>
        <h2 className="product-name">{product?.name}</h2>
        <p className="description">{product?.description}</p>
        <p className="price">{"$ " + product?.price}</p>
        <div className="add-cart"></div>
        <div className="features">
          <h2>FEATURES</h2>
          <p>{product?.features}</p>
        </div>
        <div className="equipments">
          <h2>IN THE BOX</h2>
          {product?.includes.map((include) => {
            return (
              <div className="includes" key={Math.random()}>
                <p className="quantity">{include.quantity + "x"}</p>
                <p className="item">{include.item}</p>
              </div>
            );
          })}
        </div>
        <div className="gallery">
          <img src={"." + product?.gallery.first.mobile} />
          <img src={"." + product?.gallery.second.mobile} />
          <img src={"." + product?.gallery.third.mobile} />
        </div>
        <div className="others">
          <h2>YOU MAY ALSO LIKE</h2>
          {product?.others.map((other) => {
            return (
              <div key={Math.random()}>
                <img src={"." + other.image.mobile} />
                <h2>{"." + other.name}</h2>
                <OrangeButton>SEE PRODUCT</OrangeButton>
              </div>
            );
          })}
        </div>
      </section>
      <section className="section2">
        <Products />
      </section>
      <section className="section3">
        <Advert />
      </section>
    </DetailsContainer>
  );
}
