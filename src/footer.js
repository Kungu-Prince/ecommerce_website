import React from 'react'
import { RiFacebookFill } from 'react-icons/ri';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { BsYoutube } from 'react-icons/bs';
import './footer.css'
const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div className='container'>
                    <div className='about'>
                        <div className='logo'>
                            <img src={process.env.PUBLIC_URL + '/img/Book logo.jpeg'} width={100} height={100} alt='logo'></img>
                            <h4>BOOKHAVEN</h4>
                        </div>
                        <div className='detail'>
                            <p>We are a group of book lovers that collect eccentric and classical books for you</p>
                            <div className='icon'>
                                <li><RiFacebookFill /></li>
                                <li><AiOutlineInstagram /></li>
                                <li><AiOutlineTwitter /></li>
                                <li><BsYoutube /></li>
                            </div>
                        </div>
                    </div>
                    <div className='account'>
                        <h3>My Account</h3>
                        <ul>
                            <li>Account</li>
                            <li>Order</li>
                            <li>Cart</li>
                            <li>Shipping</li>
                            <li>Return</li>
                        </ul>
                    </div>
                    <div className='page'>
                        <h3>Page</h3>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact</li>
                            <li>Terms And Conditions</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer