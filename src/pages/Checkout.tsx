import React, { useContext, useEffect, useState } from "react";
import { useNavigate, Navigate } from "react-router";
import { Link } from "react-router-dom";
import { MyContext } from "../App";
import { Products } from "../components";
import Ordered from "../components/Ordered";
import {
  BlackScreen,
  CheckoutContainer,
  OrangeButton,
} from "../styled-components";

export default function Checkout() {
  const context = useContext(MyContext);
  const navigate = useNavigate();
  const [name, setName] = useState<any>("");
  const [email, setEmail] = useState<any>("");
  const [phone, setPhone] = useState<any>("");
  const [adress, setAdress] = useState<any>("");
  const [zip, setZip] = useState<any>("");
  const [city, setCity] = useState<any>("");
  const [country, setCountry] = useState<any>("");
  const [emoneyNumber, setEmoneyNumber] = useState<any>("");
  const [emoneyPin, setEmoneyPin] = useState<any>("");

  const [nameVal, setNameVal] = useState(false);
  const [emailVal, setEmailVal] = useState(false);
  const [phoneVal, setPhoneVal] = useState(false);
  const [adressVal, setAdressVal] = useState(false);
  const [zipVal, setZipVal] = useState(false);
  const [cityVal, setCityVal] = useState(false);
  const [countryVal, setCountryVal] = useState(false);
  const [numberVal, setNumberVal] = useState(false);
  const [pinVal, setPinVal] = useState(false);

  useEffect(() => {
    if (context?.cartObject.length == 0) {
      navigate(-1);
    }
  }, []);

  return (
    <CheckoutContainer>
      <p className="back">Go Back</p>
      <form className="checkout">
        <h1>CHECKOUT</h1>
        <div className="billing-details">
          <p className="headname">BILLING DETAILS</p>
          <div className="name">
            <p>Name</p>
            <input
              placeholder="Alexei Ward"
              required
              value={name}
              onChange={(e) => {
                if (/^[A-Z]+$/i.test(e.target.value) || e.target.value == "") {
                  setName(e.target.value);
                }

                if (e.target.value.length > 0) {
                  setNameVal(true);
                } else {
                  setNameVal(false);
                }
              }}
            />
          </div>
          <div className="email">
            <p>Email Address</p>
            <input
              placeholder="alexei@mail.com"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (e.target.value.length > 0) {
                  setEmailVal(true);
                } else {
                  setEmailVal(false);
                }
              }}
            />
          </div>
          <div className="phone-number">
            <p>Phone Number</p>
            <input
              placeholder="+1 202-555-0136"
              value={phone}
              required
              onChange={(e) => {
                if (/^\d+$/.test(e.target.value) || e.target.value == "") {
                  setPhone(e.target.value);
                }
                if (e.target.value.length > 0) {
                  setPhoneVal(true);
                } else {
                  setPhoneVal(false);
                }
              }}
            />
          </div>
        </div>
        <div className="shipping-info">
          <p className="headname">SHIPPING INFO</p>
          <div className="adress">
            <p>Your Address</p>
            <input
              placeholder="1137 Williams Avenue"
              required
              value={adress}
              onChange={(e) => {
                setAdress(e.target.value);
                if (e.target.value.length > 0) {
                  setAdressVal(true);
                } else {
                  setAdressVal(false);
                }
              }}
            />
          </div>
          <div className="zip">
            <p>ZIP Code</p>
            <input
              value={zip}
              maxLength={5}
              required
              placeholder="10001"
              onChange={(e) => {
                if (/^\d+$/.test(e.target.value) || e.target.value == "") {
                  setZip(e.target.value);
                }
                if (e.target.value.length == 5) {
                  setZipVal(true);
                } else {
                  setZipVal(false);
                }
              }}
            />
          </div>
          <div className="City">
            <p>City</p>
            <input
              placeholder="New York"
              required
              value={city}
              onChange={(e) => {
                if (/^[A-Z]+$/i.test(e.target.value) || e.target.value == "") {
                  setCity(e.target.value);
                }
                if (e.target.value.length > 0) {
                  setCityVal(true);
                } else {
                  setCityVal(false);
                }
              }}
            />
          </div>
          <div className="country">
            <p>Country</p>
            <input
              placeholder="United States"
              required
              value={country}
              onChange={(e) => {
                if (/^[A-Z]+$/i.test(e.target.value) || e.target.value == "") {
                  setCountry(e.target.value);
                }
                if (e.target.value.length > 0) {
                  setCountryVal(true);
                } else {
                  setCountryVal(false);
                }
              }}
            />
          </div>
        </div>
        <div className="payment-details">
          <p className="headname">PAYMENT DETAILS</p>
          <div className="method">
            <p>Payment Method</p>
            <div>
              <input
                type="radio"
                name="payment"
                value="e-money"
                className="radio-input"
                checked
                readOnly
              />
              <label>e-Money</label>
            </div>

            <div>
              <input
                type="radio"
                value="Cash on Delivery"
                className="radio-input"
                name="payment"
              />
              <label>Cash on Delivery</label>
            </div>
          </div>
          <div className="e-money-number">
            <p>e-Money Number</p>
            <input
              placeholder="238521993"
              value={emoneyNumber}
              maxLength={9}
              required
              onChange={(e) => {
                if (/^\d+$/.test(e.target.value) || e.target.value == "") {
                  setEmoneyNumber(e.target.value);
                }
                if (e.target.value.length == 9) {
                  setNumberVal(true);
                } else {
                  setNumberVal(false);
                }
              }}
            />
          </div>
          <div className="e-money-pin">
            <p>e-Money PIN</p>
            <input
              placeholder="6891"
              value={emoneyPin}
              maxLength={4}
              required
              onChange={(e) => {
                if (/^\d+$/.test(e.target.value) || e.target.value == "") {
                  setEmoneyPin(e.target.value);
                }

                if (e.target.value.length == 4) {
                  setPinVal(true);
                } else {
                  setPinVal(false);
                }
              }}
            />
          </div>
        </div>
      </form>
      <div className="summary">
        <h2>SUMMARY</h2>
        <div className="products">
          {context?.cartObject.map((element) => {
            if (element.price != undefined) {
              context.total = context.total + element.price * element.quantity;
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
                  <p>{"x" + element.quantity}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="total">
          <p>TOTAL</p>
          <p className="number">{"$ " + context?.total.toLocaleString()}</p>
        </div>
        <div className="shipping">
          <p>SHIPPING</p>
          <p className="number">{"$ " + 50}</p>
        </div>
        <div className="grand-total">
          <p>GRAND TOTAL</p>
          <p className="number">
            {"$ " +
              (
                context?.cartObject != undefined && context.total + 50
              ).toLocaleString()}
          </p>
        </div>
        <OrangeButton
          onClick={(e) => {
            if (
              nameVal == true &&
              emailVal == true &&
              phoneVal == true &&
              adressVal == true &&
              zipVal == true &&
              cityVal == true &&
              countryVal == true &&
              numberVal == true &&
              pinVal == true
            ) {
              context?.setSubmit(true);
              setName("");
              setEmail("");
              setPhone("");
              setAdress("");
              setZip("");
              setCity("");
              setCountry("");
              setEmoneyNumber("");
              setEmoneyPin("");
            }
          }}
        >
          CONTINUE & PAY
        </OrangeButton>
      </div>
      {context?.submit && <Ordered />}
    </CheckoutContainer>
  );
}
