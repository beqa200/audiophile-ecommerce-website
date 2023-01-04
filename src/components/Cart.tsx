import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../App";
import { CartContainer, OrangeButton } from "../styled-components";

export default function Cart() {
  const context = useContext(MyContext);
  let total = 0;
  return (
    <CartContainer>
      <div className="head">
        <h2>CART ({context?.cartObject.length})</h2>
        <p
          onClick={() => {
            context?.setCartObject([]);
          }}
        >
          Remove all
        </p>
      </div>

      <div className="products">
        {context?.cartObject.map((element) => {
          if (element.price != undefined) {
            total = total + element.price * element.quantity;
          }
          return (
            <div className="prod" key={Math.random()}>
              <div className="for-flex">
                <img src={element.img} />
                <div className="for-flex-inner">
                  <p className="name">{element.name}</p>
                  <p className="price">{"$ " + element.price}</p>
                </div>
              </div>
              <div className="quantity">
                <p
                  onClick={() => {
                    if (element.quantity >= 1) {
                      element.quantity--;
                      const copied = [...context.cartObject];
                      context.setCartObject(copied);
                    }
                  }}
                >
                  -
                </p>
                <p style={{ opacity: "1" }}>{element.quantity}</p>
                <p
                  onClick={() => {
                    element.quantity++;
                    const copied = [...context.cartObject];
                    context.setCartObject(copied);
                  }}
                >
                  +
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="total">
        <p>TOTAL</p>
        <p className="number">{"$ " + total.toLocaleString()}</p>
      </div>
      <Link to="/checkout">
        <OrangeButton onClick={() => {context?.setCart(false)}}>CHECKOUT</OrangeButton>
      </Link>
    </CartContainer>
  );
}
