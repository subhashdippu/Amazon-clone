import React from 'react'
import styled from 'styled-components'
import CartItem from './CartItem'

function CartItems({ cartItems }) {
    return (
        <Container>
            <Title>Shopping Cart</Title>
            <hr />
            <ItemsContainer>
                {
                    cartItems.map((item) => (
                        <CartItem
                            id={item.id}
                            item={item.product}
                        />
                    ))
                }
            </ItemsContainer>
        </Container>
    )
}

export default CartItems
const Container = styled.div`
    flex: 0.8;
    margin-right: 18px;
    padding: 20px;
    height: 100%;
    background-color: White;
`
const ItemsContainer = styled.div``

const Title = styled.h1`
    margin-bottom: 8px;
`