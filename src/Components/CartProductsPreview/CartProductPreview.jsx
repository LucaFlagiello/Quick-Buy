import { nanoid } from "@reduxjs/toolkit";
import { removeCartProduct } from '../../state/cartListSlice';
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function CartProductPreview({ theme, mobileStyle, isCartOpen }) {
  const dispatch = useDispatch();
  const cartProductsList = useSelector((state) => state.cartProductsList);
  let carSubTotal = 0;

  const removeProduct = (product) => {
    dispatch(removeCartProduct(product));
  };
  
  return (
    <div className={mobileStyle ? 'relative grid gap-y-[2px] text-center cursor-pointer mt-1' : 'relative grid gap-y-[2px] text-center cursor-pointer group sm:hidden md:hidden'}>
      <Link to={'/Shopping-cart'}>
        <div className='relative grid'>
          <span className={mobileStyle ? "icon-[cil--cart] items-center h-[22px] w-[22px]" : "icon-[cil--cart] text-white items-center h-[28px] w-[28px]"}></span>
          <span className={mobileStyle ? `absolute cursor-pointer top-[-5px] right-[-8px] bg-${theme} text-white text-[9px] font-medium rounded-full flex justify-center items-center w-[15px] h-[15px]` : `absolute cursor-pointer top-[-5px] right-[-8px] bg-black text-white text-[9px] font-medium rounded-full flex justify-center items-center w-[15px] h-[15px]`}>{cartProductsList.length}</span>
        </div>
      </Link>
    <div className={mobileStyle ? isCartOpen ? 'fixed top-0 bottom-0 left-0 w-[310px] bg-white z-10 pb-4 duration-600 ease transform duration-500 ease translate-x-0' : 'fixed top-0 bottom-0 left-0 w-[310px] bg-white z-10 pb-4 duration-600 ease transform duration-500 ease translate-x-[-400px]' : 'absolute top-[53px] right-[-5px] w-[310px] bg-white z-10 pb-4 duration-600 ease opacity-0 transform duration-500 ease translate-y-4 shadow-default invisible group-hover:translate-y-0 group-hover:visible group-hover:opacity-100'}>
      <div className={mobileStyle ? `flex items-center justify-center text-white font-Roboto font-medium h-[50px] text-[1.3rem] bg-${theme}` : `hidden`}>
        <h2>Cart</h2>
      </div>
      <div className='mt-6 ml-6 font-medium text-start font-Roboto'>{cartProductsList.length} Items</div>
      {cartProductsList.length > 0 ? 
        <div className={mobileStyle ? 'flex flex-col py-3 mx-6 mt-1 border-y gap-y-6 border-[#d8d8d8] h-[720px] overflow-auto' : 'flex flex-col py-3 mx-6 mt-1 border-y gap-y-6 border-[#d8d8d8]'}>
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
                <span onClick={() => removeProduct(product)} className="absolute top-[5px] right-0 icon-[la--times] hover:text-red-500"></span>
              </div>
            )
          })}
        </div> : null}
        <div className='flex justify-between mx-6 mt-4'>
          <h4 className='font-medium font-Roboto'>SUB TOTAL :</h4>
          <span className='font-medium font-Roboto'>&#36;{carSubTotal}</span>
        </div>
        <div className='flex justify-center mt-4 gap-x-4'>
        <Link to={'/Shopping-cart'}>
          <button className={`bg-${theme} text-white font-Poppins py-[9px] px-[22px] border border-${theme} rounded-[4px] font-medium text-[14px] transition duration-500 ease hover:bg-transparent hover:text-${theme}`}>VIEW CART</button>
        </Link>
          <button className={`text-${theme} font-Poppins py-[9px] px-[22px] border border-${theme} rounded-[4px] font-medium text-[14px] transition duration-500 ease hover:bg-${theme} hover:text-white`}>CHECKOUT</button>
        </div>
    </div>
    <span className={mobileStyle ? 'text-[11px] font-Poppins' : 'text-white text-[11px] font-Poppins'}>cart</span>
  </div>
  )
};