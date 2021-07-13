import React from 'react'
import {FiHome, FiShoppingCart} from 'react-icons/fi'
import {BsPerson} from 'react-icons/bs'
import styled from '@emotion/styled'
import {useRouteMatch, NavLink} from 'react-router-dom'
import homeIcon from '../../img/homeIcon.svg'
import inactiveHomeIcon from '../../img/inactiveHome.svg'
import cartActive from '../../img/cartActive.svg'
import cartInactive from '../../img/cartInactive.svg'
import accountActive from '../../img/accountActive.svg'
import accountInactive from '../../img/accountInactive.svg'
import { textLight } from '../../Styles/themes'

const Navbar = () => {
    let homeMatch = useRouteMatch("/home");
    let cartMatch =useRouteMatch("/orders");
    let accountMatch = useRouteMatch("/account")
    console.log(homeMatch);
    console.log(cartMatch)
    return (
        <NavbarContainer>
            <NavLink to='/home' style={{textDecoration:'none', color:'grey' }} 
            activeStyle={{fontWeight: "bold", color: "#EE5046" }}>
            <div className='home'>
                {homeMatch ? <img className="icon" src={homeIcon} /> : <img className="icon" src={inactiveHomeIcon} /> }
                <span>Home</span>
            </div>
            </NavLink>
            
            <NavLink to='/orders' style={{textDecoration:'none', color:'grey'}}
            activeStyle={{fontWeight: "bold", color: "#EE5046" }}>
                <div className='orders'>
                    {cartMatch ? <img className="icon" src={cartActive} /> : <img className="icon" src={cartInactive} />}
                    <span>Orders</span>
                </div>
            </NavLink>
            <NavLink to='/account' style={{textDecoration:'none', color:'grey'}}
            activeStyle={{fontWeight: "bold", color: "#EE5046" }}>
                <div className='account'>
                    {accountMatch ? <img className="icon" src={accountActive} /> : <img className="icon" src={accountInactive} />}
                    <span>Account</span>
                </div>
            </NavLink>
        </NavbarContainer>
    )
}

const NavbarContainer = styled.div`
    display: flex;
    color: #535665;
    justify-content: space-around;
    align-items: center;
    bottom: 0;
    width: 100%;
    position: fixed;
    height: 50px;
    background-color: white;
    font-size: 10px;
    list-style: none;
    text-decoration: none;
    z-index:1;
        .home {
        display: flex;
        flex-flow: column;
        align-items: center;
        background-color: white;
        .icon{
            background-color: white;
            height: 20px;
        }
        
     }
    .orders{
        display: flex;
        flex-flow: column;
        align-items: center;
        .icon{
            background-color: white;
            height: 20px;
        }
    }
    .account{
        display: flex;
        flex-flow: column;
        align-items: center;
        .icon{
            background-color: white;
            height: 20px;
        }
    }`;

export default Navbar