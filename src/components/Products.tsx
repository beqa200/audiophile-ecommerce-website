import React from 'react'
import { arrowIcon } from '../assets'
import { ProductsContainer } from '../styled-components'

export default function Products(props: ProductProps) {
  return (
    <ProductsContainer >
        <img src={props.img}/>
        <p>{props.name}</p>
        <div>
            <p>SHOP</p>
            <img src={arrowIcon} />
        </div>
    </ProductsContainer>
  )
}
