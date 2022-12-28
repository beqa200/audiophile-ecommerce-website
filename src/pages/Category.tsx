import React, { ReactNode, useState } from "react";
import { useParams } from "react-router";
import { Advert, Products } from "../components";
import data from "../data.json";
import { CategoryContainer, OrangeButton } from "../styled-components";
export default function Category() {
  const params: any = useParams();
  const products: any = data.filter(
    (product) => product.category == params.category
  );

  return (
    <CategoryContainer>
      <section className="section1">
        {products.map((product: any) => {
          return (
            <div key={product.id}>
              <img src={product.categoryImage.mobile} />
              <p className="new">
                {product.new == true ? "NEW PRODUCT" : null}
              </p>
              <h2>{product.name}</h2>
              <p className="description">{product.description}</p>
              <OrangeButton>SEE PRODUCT</OrangeButton>
            </div>
          );
        })}
      </section>
      <section className="section2">
        <Products />
      </section>
      <section className="section3">
        <Advert />
      </section>
    </CategoryContainer>
  );
}
