import styled from "styled-components";

const Button = styled.button`
  width: 160px;
  height: 48px;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1px;
  border: none;
`;

export const OrangeButton = styled(Button)`
  background-color: #d87d4a;
  color: white;
`;

export const BlackButton = styled(Button)`
  background-color: black;
  color: white;
`;

export const TransparentButton = styled(Button)`
  background-color: transparent;
  border: 1px solid #000000;
  color: black;
`;
