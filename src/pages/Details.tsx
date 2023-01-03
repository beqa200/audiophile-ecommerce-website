import React from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import { DetailsContainer, OrangeButton } from "../styled-components";
import data from "../data.json";
import { Advert, Products } from "../components";
import { Link } from "react-router-dom";
import ScrollToTop from "../ScrollOnTop";
export default function Details() {
  const params = useParams();
  
  const navigate = useNavigate();
  

  const product: Product | undefined = data.find(
    (product) =>
      product.slug == params.product && product.category == params.category
  );

  return (
    <DetailsContainer>
      <section className="section1">
        <Link to={"/" + product?.category}>
          <p className="back" onClick={() => {navigate(-1); ScrollToTop()}}> Go Back</p>
        </Link>
        <img className="product-image" src={"." + product?.image.mobile} />
        <p className="new">{product?.new == true ? "NEW PRODUCT" : null}</p>
        <h2 className="product-name">{product?.name}</h2>
        <p className="description">{product?.description}</p>
        <p className="price">{"$ " + product?.price}</p>
        <div className="add-cart">
          <div className="quantity">
            <p>-</p>
            <p className="num">0</p>
            <p>+</p>
          </div>
          <OrangeButton>ADD TO CART</OrangeButton>
        </div>
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
             const category = data.find((prod) => prod.slug == other.slug);
            
            return (
              <div key={Math.random()}>
                <img src={"." + other.image.mobile} />
                <h2>{other.name}</h2>

                <Link to={"/" + category?.category + "/" + other.slug}>
                  <OrangeButton>SEE PRODUCT</OrangeButton>
                </Link>
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
