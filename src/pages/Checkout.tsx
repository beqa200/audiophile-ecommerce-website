import React, { useContext, useEffect } from "react";
import { useNavigate, Navigate } from "react-router";
import { MyContext } from "../App";
import { CheckoutContainer } from "../styled-components";

export default function Checkout() {
  const context = useContext(MyContext);
  const navigate = useNavigate();

//   useEffect(() => {
//     if (context?.cartObject.length == 0) {
//       navigate(-1);
//     }
//   }, []);

  return (
    <CheckoutContainer>
      <p className="back">Go Back</p>
      <div className="checkout">
        <h1>CHECKOUT</h1>
        <div className="billing-details">
          <p className="headname">BILLING DETAILS</p>
          <div className="name">
            <p>Name</p>
            <input placeholder="Alexei Ward" />
          </div>
          <div className="email">
            <p>Email Address</p>
            <input placeholder="alexei@mail.com" />
          </div>
          <div className="phone-number">
            <p>Phone Number</p>
            <input placeholder="+1 202-555-0136" />
          </div>
        </div>
        <div className="shipping-info">
          <p className="headname">SHIPPING INFO</p>
          <div className="adress">
            <p>Your Address</p>
            <input placeholder="1137 Williams Avenue" />
          </div>
          <div className="zip">
            <p>ZIP Code</p>
            <input placeholder="10001" />
          </div>
          <div className="City">
            <p>City</p>
            <input placeholder="New York" />
          </div>
          <div className="country">
            <p>Country</p>
            <input placeholder="United States" />
          </div>
        </div>
        <div className="payment-details">
          <p className="headname">PAYMENT DETAILS</p>
          <div className="method">
            <p>Payment Method</p>
            <div>
              <input type="radio" name="payment" className="radio-input" checked />
              <label>e-Money</label>
            </div>

            <div>
              <input type="radio" className="radio-input" name="payment" />
              <label>Cash on Delivery</label>
            </div>
          </div>
          <div className="e-money-number">
            <p>e-Money Number</p>
            <input placeholder="238521993" />
          </div>
          <div className="e-money-pin">
            <p>e-Money PIN</p>
            <input placeholder="6891"/>
          </div>
        </div>
      </div>
    </CheckoutContainer>
  );
}
