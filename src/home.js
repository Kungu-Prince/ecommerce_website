import React from 'react'
import {Link} from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs';
import { FiTruck } from 'react-icons/fi';
import { BsCurrencyDollar } from 'react-icons/bs';
import { CiPercent} from 'react-icons/ci';
import { BiHeadphone} from 'react-icons/bi';
import { AiOutlineShoppingCart, AiOutlineCloseCircle} from 'react-icons/ai';
import { BsEye} from 'react-icons/bs';
import { AiOutlineHeart} from 'react-icons/ai';
import Homeproduct from './homeproduct';
import './home.css'
const Home= ({detail, view, close, setClose, addtocart}) =>{
  return (
 <>
     {
            close ?
    <div className='product_detail'>
        <div className='container'>
            <button onClick={() =>setClose (false)} className='closebtn'><AiOutlineCloseCircle/></button>
            {
                detail.map((curElm) =>
                {
                    return (
                        <div className='productbox'>
                             <div className='img-box'>
                                <img src = {curElm.Img} alt={curElm.Title}></img>
                             </div>
                             <div className='detail'>
                               <h4>{curElm.Cat}</h4>
                               <h2>{curElm.Title}</h2>
                               <p>A Book That Everyone Will Love: Whether Your Family is set To Reading Adventures Or Fantasy this Book..</p>
                               <h3>ksh.{curElm.Price}</h3>
                               <button> Add To Cart</button>
                             </div>
                        </div>
                    )
                })
            }
            <div className='productbox'></div>
        </div> 
    </div> :null
        }
 <div className='top_banner'>
    <div className='container'>
        <div className='detail'>
        <h2>The Best Novel Collection 2023</h2>
        <Link to='/product'className='link'>Shop Now <BsArrowRight></BsArrowRight></Link>
    </div>
    </div>
 </div>
<div className='product_type'>
    <div className='container'>
        <div className='box'>
            <div className='img_box'>
                <img src={process.env.PUBLIC_URL + '/img/fea6232b-f0cf-47c7-bc41-0245a08b5d15.jpg'}width={200} height={250} alt='mobile'></img>
            </div>
            <div className='detail'>
                <p>18 products</p>
            </div> 
        </div>
        <div className='box'>
            <div className='img_box'>
                <img src={process.env.PUBLIC_URL + '/img/Horror Novels By Women To Terrify You This Fall.jpg'}width={200} height={250} alt='mobile'></img>
            </div>
            <div className='detail'>
                <p>52 products</p>
            </div>
        </div>
        <div className='box'>
            <div className='img_box'>
                <img src={process.env.PUBLIC_URL + '/img/The Amazing Son-in-Law Novel Full Story _ Book - BabelNovel (1).jpg'}width={200} height={250} alt='mobile'></img>
            </div>
            <div className='detail'>
                <p>52 products</p>
            </div>
        </div>
        <div className='box'>
            <div className='img_box'>
                <img src={process.env.PUBLIC_URL + '/img/Rainstorm_ A second-chance, stand-alone romance.jpg'}width={200} height={250} alt='mobile'></img>
            </div>
            <div className='detail'>
                <p>63 products</p>
            </div>
        </div>
    </div>
</div>
    <div className='about'>
        <div className='container'>
            <div className='box'>
                <div className='icon'>
                 <FiTruck/>
                </div>
                <div className='detail'>
                    <h3>FREE SHIPPING</h3>
                    <p>Order above $1000</p>
                </div>
            </div> 
            <div className='box'>
                <div className='icon'>
                 <BsCurrencyDollar/>
                </div>
                <div className='detail'>
                    <h3>Return & Refund</h3>
                    <p>Money back guarantee</p>
                </div>
            </div>   
            <div className='box'>
                <div className='icon'>
                 <CiPercent/>
                </div>
                <div className='detail'>
                    <h3>Member Discount</h3>
                    <p>On Every Order</p>
                </div>
            </div>  
            <div className='box'>
                <div className='icon'>
                 <BiHeadphone/>
                </div>
                <div className='detail'>
                    <h3>Customer Support</h3>
                    <p>Every Time Call Support</p>
                </div>
            </div>     
        </div>
    </div>
    <div className='product'>
        <h2>Top Books</h2>
        <div className='container'>
            {
                Homeproduct.map((curElm) => 
                {
                  return (
                    <div className='box'key={curElm.id}>
                        <div className='img_box'>
                                 <img src={curElm.Img} alt={curElm.Title}></img>
                                <div className='icon'>
                                    <li onClick={() => addtocart (curElm)}> <AiOutlineShoppingCart/></li>
                                    <li onClick={() => view (curElm)}><BsEye/></li>
                                    <li><AiOutlineHeart/></li>
                                </div>
                        </div>
                        <div className='detail'>
                            <p>{curElm.Cat}</p>
                            <h3>{curElm.Title}</h3>
                            <h4>{curElm.Price}</h4>
                        </div>
                    </div>
                  )  
                })
            }
        </div>
    </div>
    <div className='banner'>
        <div className='container'>
        <div className='detail'>
            <h4>Latest Books Added</h4>
            <h3>Mystic Falls Book 3</h3>
            <p>KSH.2550</p>
            <Link to='/product' className='link'>Shop Now<BsArrowRight/></Link>
        </div>
        <div className='img_box'>
            <img src={process.env.PUBLIC_URL + '/img/Mystic River_ A Novel.jpg'} alt='sliderimg'></img>
        </div>
        </div>
    </div>
 </>
  )
}

export default Home