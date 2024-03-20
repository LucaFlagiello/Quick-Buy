import { nanoid } from '@reduxjs/toolkit';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { decrement } from '../../state/cartQuantitySlice';
import { removeCartProduct } from '../../state/cartListSlice';
import Categories from '../../Data/navSideCategories';
import SearchCategory from '../SearchCategory/SearchCategory';
import NavAsideCategories from '../NavAsideCategories/NavAsideCategories';

const Nav = () => {
  const [isMouseOnAccount, setIsMouseOnAccount] = useState(false);
  const theme = useSelector((state) => state.theme.value);
  const cartQuantity = useSelector((state) => state.cartQuantity);
  const cartProductsList = useSelector((state) => state.cartProductsList);
  const wishListQuantity = useSelector((state) => state.wishListQuantity);
  const dispatch = useDispatch();
  let carSubTotal = 0; 

  const removeCartListProduct = (product) => {
    dispatch(decrement(product));
    dispatch(removeCartProduct(product));
  };

  return (
    <nav className={`bg-${theme} box-border h-[65px] flex justify-center w-full`}>
      <div className='box-border h-[65px] flex justify-center items-center sm:justify-between sm:gap-x-0 sm:px-2 w-full md:justify-between md:px-7 gap-x-[4.7rem] lg:gap-x-[2rem]'>
        <Link to={"/"}>
          <span className='text-white cursor-pointer font-Roboto font-bold text-[28px] xl:hidden lg:hidden'>QUICK<span className='text-black'>BUY</span></span>
        </Link>
        <div className="bg-secondary-color relative flex items-center gap-x-2 h-10 px-10 py-6 rounded-[5px] group sm:hidden md:hidden">
          <span className="icon-[la--bars] text-white text-[22px]"></span>
          <h3 className='font-medium text-white font-Poppins text-md'>All categories</h3>
          <div className='w-[220px] absolute h-[12px] left-0  bottom-[-12px]'>  
          </div>
          <NavAsideCategories theme={theme} />
        </div>
        <div className='flex h-[44px] font-Poppins md:hidden sm:hidden'>
          <SearchCategory categories={Categories} />
          <input className='border-l pl-5 w-[24rem] border-black text-[14px] outline-none placeholder:text-[14px] placeholder:text-gray-400 lg:w-[15rem]' type='text' placeholder='Search product...'/>
          <button className='bg-secondary-color rounded-l-none font-medium px-10 text-white font-Poppins rounded-r-[6px]'>Search</button>
        </div>
        
        <div className={`hover:bg-${theme}`}></div>
        <div className='flex mt-[6px] items-center gap-x-5'>
          <div className='grid gap-y-[2px] text-center cursor-pointer'>
            <div className='relative grid'>
              <span className="icon-[teenyicons--heart-outline]  text-white m-auto w-[28px] h-[28px] sm:w-[20px]"></span>
              <span className='absolute top-[-5px] right-[2px] sm:top-[-2px] sm:right-[3px] bg-black text-white text-[9px] font-medium rounded-full flex justify-center items-center w-[15px] h-[15px]'>{wishListQuantity}</span>
            </div>
            <span className='text-white text-[11px] font-Poppins'>Wish List</span>
          </div>
          <div className='relative grid gap-y-[2px] text-center cursor-pointer group sm:hidden md:hidden'>
            <div className='relative grid'>
              <span className="icon-[cil--cart] text-white items-center h-[28px] w-[28px]"></span>
              <span className='absolute cursor-pointer top-[-5px] right-[-8px] bg-black text-white text-[9px] font-medium rounded-full flex justify-center items-center w-[15px] h-[15px]'>{cartQuantity}</span>
            </div>
            <div className='absolute top-[53px] right-[-5px] w-[310px] bg-white z-10 pb-4 duration-600 ease opacity-0 group-hover:opacity-100 transform duration-500 ease translate-y-4 shadow-default  invisible group-hover:translate-y-0 group-hover:visible'>
              <div className='mt-6 ml-6 font-medium text-start font-Roboto'>{cartQuantity} Items</div>
              
              {cartProductsList.length > 0 ? 
                <div className='flex flex-col py-3 mx-6 mt-1 border-y gap-y-6 border-[#d8d8d8]'>
                  {cartProductsList.map((product) => {
                    carSubTotal += parseFloat(product.newPrice * product.quantity);
                    carSubTotal= parseFloat(carSubTotal.toFixed(2));
                    const shortModelName = product.model.length > 15 ? product.model.slice(0, 15) + '...' : product.model;
                    
                    return (
                      <div key={nanoid()} className='relative flex gap-x-4'>
                        <img className='w-[60px] object-fit' src={product.img} alt="product" />
                        <div>
                          <h4 className={`font-medium font-Roboto max-w-[170px] text-start hover:text-${theme} transition duration-300 ease`}>{shortModelName}</h4>
                          <div className='flex items-center gap-x-3 font-Poppins text-[14px]'>
                            <p>x{product.quantity}</p>
                            <p>&#36;{product.newPrice}</p>
                          </div>
                        </div>
                        <span onClick={() => removeCartListProduct(product)} className="absolute top-[5px] right-0 icon-[la--times] hover:text-red-500"></span>
                      </div>
                    )
                  })}
                </div> : null}
                <div className='flex justify-between mx-6 mt-4'>
                  <h4 className='font-medium font-Roboto'>SUB TOTAL :</h4>
                  <span className='font-medium font-Roboto'>&#36;{carSubTotal}</span>
                </div>
                <div className='flex justify-center mt-4 gap-x-4'>
                  <button className={`bg-${theme} text-white font-Poppins py-[9px] px-[22px] border border-${theme} rounded-[4px] font-medium text-[14px] transition duration-500 ease hover:bg-transparent hover:text-${theme}`}>VIEW CART</button>
                  <button className={`text-${theme} font-Poppins py-[9px] px-[22px] border border-${theme} rounded-[4px] font-medium text-[14px] transition duration-500 ease hover:bg-${theme}  hover:text-white`}>CHECKOUT</button>
                </div>
            </div>
            <span className='text-white text-[11px] font-Poppins'>cart</span>
          </div>
          <div className='relative grid text-center cursor-pointer' onMouseEnter={() => setIsMouseOnAccount(true)} onMouseLeave={() => setIsMouseOnAccount(false)}>
            <div className='grid justify-center'>
            <span className="icon-[clarity--user-line]  text-white w-[30px] h-[30px] sm:w-[25px]"></span>
            </div>
            <span className='text-white text-[11px] font-Poppins'>Account</span>
            <div className='absolute h-[20px] w-[100%] bottom-[-20px]' onMouseEnter={() => setIsMouseOnAccount(true)}>
              <div className={isMouseOnAccount ? 'bg-white absolute opacity-1 transition duration-[.3s] easy  shadow-md left-[-168px] mt-[6px] px-4 pt-5 rounded-[4px] z-[10]' : ' translate-y-[20px] shadow-md left-[-168px]  px-4 pt-5 absolute transition-drop-in duration-[.4s]  pointer-events-none opacity-0 z-10'}>
                <h3 className='font-Roboto text-light-black font-medium text-[14px]'>Welcome to QUICKBUY Shop</h3>
                <div className='flex justify-between mt-4 gap-x-3'>
                  <button className={`bg-${theme} font-Roboto font-medium text-[14px] text-white px-[26px] py-[4px] rounded-[4px] hover:bg-white hover:text-${theme} border-${theme} border-[1px] transition duration-[.5s] ease`}>JOIN</button>
                  <button className={`font-Roboto font-medium text-[14px] border-${theme} border-[1px] rounded-[4px] px-[16px] text-${theme} hover:bg-${theme} hover:text-white transition duration-[.5s] ease`}>SIGN IN</button>
                </div>
                <ul className='font-Poppins text-light-black grid gap-y-[10px] my-4'>
                  <li className={`flex items-center gap-x-2 hover:text-${theme} cursor-pointer transition duration-[.3s] ease`}>
                    <span className="icon-[la--id-card]  h-[20px] w-[20px] "></span>
                    <span className='text-[15px]'>My Account</span>
                  </li>
                  <li className={`flex items-center gap-x-2 hover:text-${theme} cursor-pointer transition duration-[.3s] ease`}>
                    <span className="icon-[la--gift]  h-[20px] w-[20px] "></span>
                    <span className='text-[15px] mt-[3px]'>My Order</span>
                  </li>
                  <li className={`flex items-center gap-x-2 hover:text-${theme} cursor-pointer transition duration-[.3s] ease`}>
                  <span className="icon-[teenyicons--heart-outline] w-[18px] h-[18px]"></span>
                  <span className='text-[15px] mt-[3px]'>My Wishlist</span>
                  </li>
                  <li className={`flex items-center gap-x-2 hover:text-${theme} cursor-pointer transition duration-[.3s] ease`}>
                    <span className="icon-[cil--cart] w-[18px] h-[18px]"></span>
                    <span className='text-[15px] mt-[3px]'>My Cart</span>
                  </li>
                  <li className={`flex items-center gap-x-2 hover:text-${theme} cursor-pointer transition duration-[.3s] ease`}>
                    <span className="icon-[la--power-off] w-[20px] h-[20px]"></span>
                    <span className='text-[15px]'>Log Out</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav;