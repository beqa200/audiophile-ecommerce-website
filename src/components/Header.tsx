import React from 'react'
import HeaderContainer from '../styled-components/HeaderContainer'
import { hamburger, logo, cart } from '../assets'
export default function Header() {
  return (
    <HeaderContainer>
        <img src={hamburger} />
        <img src={logo}/>
        <img src={cart} />
    </HeaderContainer>
  )
}
