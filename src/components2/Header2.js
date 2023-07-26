import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search'; // This is for icon of search
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'; //  This is for cart Icon
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link } from 'react-router-dom';
// import { Language } from '@mui/icons-material';

function Header({ cartItems, user, signOut }) {
    const getCount = () => {
        let count = 0;
        // loop for all cart item
        cartItems.forEach((item) => {
            count += item.product.quantity; // count the all item present in cart
        });
        return count;
    }

    return (
        <div>
            <Container>
                <HeaderLogo>
                    <Link to="/">
                        <img src={"https://i0.wp.com/www.dafontfree.co/wp-content/uploads/2021/11/Amazon-Logo-Font-1-scaled.jpg?fit=2560%2C1578&ssl=1"} alt=' ' />
                    </Link>
                </HeaderLogo>
                <HeaderOptionAddress>
                    <LocationOnIcon />
                    <HeaderOption>
                        <OptionLineOne>Hello</OptionLineOne>
                        <OptionLineTwo>Select your address</OptionLineTwo>
                    </HeaderOption>
                </HeaderOptionAddress>
                <HeaderSearch>
                    <Arrow className="p-2 bg-gray-300 text-black border text-xs xl:text-sm">
                        {/* <select
                        > */}
                        <option>All</option>
                        <option>Deals</option>
                        <option>Amazon</option>
                        <option>Fashion</option>
                        <option>Computers</option>
                        <option>Home</option>
                        <option>Mobiles</option>
                        {/* </select> */}
                    </Arrow>
                    <HeaderSearchInput type='text' />
                    <HeaderSearchContainer><SearchIcon /></HeaderSearchContainer>
                </HeaderSearch>

                <HeaderNavItem>
                    <div>

                        <Language>
                            <img src='https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/255px-Flag_of_India.svg.png' />
                            <Lan className=' text-white'>
                                <option>EN</option>
                                <hr />
                                <option>Hindi</option>
                                <option>Tamil</option>
                                <option>Gujrati</option>
                                <option>Panjabi</option>
                                <option>Telgu</option>
                            </Lan>
                        </Language>
                    </div>
                    <HeaderOption >
                        <OptionLineOne>Hello,sign in</OptionLineOne>
                        <OptionLineTwo>
                            Account & Lists
                            <Sing className=' text-white'>
                                <option></option>
                                <hr />
                                {/* <option onClick={signOut}>signOut</option> */}
                            </Sing>
                        </OptionLineTwo>
                    </HeaderOption>
                    <HeaderOption>
                        <OptionLineOne>Return</OptionLineOne>
                        <OptionLineTwo>& Orders</OptionLineTwo>
                    </HeaderOption>
                    <HeaderOptionCart>
                        <Link to="/Cart">
                            <ShoppingBasketIcon />
                            <CartCount>{getCount()} Cart</CartCount>
                        </Link>
                    </HeaderOptionCart>
                </HeaderNavItem>
            </Container>
            <Second className="flex bg text-white space-x-3 text-xs xl:text-sm p-2 pl-6">
                <div>Today's Deals</div>
                <div>Customer Service</div>
                <div>Registry</div>
                <div>Gift Cards</div>
                <div>Sell</div>
            </Second>
        </div>
    )
}

export default Header
const Container = styled.div`
    height: 60px;
    background-color: #0F1111;
    display: flex;
    align-items: center;
    color: white;
    justify-content: space-between;
`
const HeaderLogo = styled.div`
    img{
        width: 100px;
        margin-left: 11px;
    }
`
const HeaderOptionAddress = styled.div`
    padding-left: 9px;
    display: flex;
    align-items: center;
`
const OptionLineOne = styled.div`

`
const OptionLineTwo = styled.div`
    font-weight: 700;  
`
const HeaderSearch = styled.div`
    display:flex;
    flex-grow: 1;
    height: 40px;
    border-radius: 4px;
    overflow: hidden; // It just match the border 
    margin-left: 4px;

`
const HeaderSearchInput = styled.input`
    flex-grow: 1;
    border: 0;
    outline: none;
 
`
const HeaderSearchContainer = styled.div`
    background-color: orange;
    width: 45px;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    
`
const HeaderNavItem = styled.div`
    display: flex;
`
const HeaderOption = styled.div`
// TROUBLE
    padding: 10px 9px 10px 9px;
    cursor: pointer;
    // margin-left: 8px;
    // margin-right:8px;
`
const HeaderOptionCart = styled.div`
    display: flex;
    a{  // This is the link of cart
        display: flex;
        align-items: center;
        padding-right: 9px;
        color: white;
    }
    // margin-left: 21px;
    // margin-right:15px;
`
const CartCount = styled.div`
    padding-left: 4px;
`
const Second = styled.div`
    background-image: none;
    background-color: #232f3e;
`
const Arrow = styled.select`
    border: none;
    outline: none;
`
const Language = styled.div`
    img{
        max-width:20px;
        margin-left: 21px;
        // margin-right:15px;
        margin-top:20px;
    }
    display:flex;
`
const Lan = styled.select`
    border: none;
    outline: none;
    background-color: #0F1111;
    max-width:40px;
    margin-top:20px;
    // margin-bottom:2px;
    font-weight: 700; 
`
const Sing = styled.select`
    border: none;
    outline: none;
    background-color: #0F1111;
`