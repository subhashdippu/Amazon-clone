import React from 'react'
import styled from 'styled-components'
function CartTotal({ getTotalPrice, getCount }) {

    return (
        <Container>
            <Subtotal>SubTotal({getCount()} items): ${getTotalPrice()}</Subtotal>
            <CheckoutButton>Proceed to Checkout</CheckoutButton>
        </Container>
    )
}

export default CartTotal

const Container = styled.div`
    height: 200px; // Always give the semi colun
    flex:0.2;
    background-color: white;
    padding: 20px;
`
const Subtotal = styled.h2`
    margin-bottom: 16px;  
`
const CheckoutButton = styled.button`
    background-color: #f0c14b;
    width: 100%;
    padding: 4px 8px;
    border: 2px solid #a88734;
    border-radius: 4px;
    font-size: 16px;
    :hover{
        background: #ddb347;
    }
`