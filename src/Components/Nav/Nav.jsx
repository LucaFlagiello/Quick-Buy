import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import Categories from '../../Data/navSideCategories';
import SearchCategory from '../SearchCategory/SearchCategory';
import NavAsideCategories from '../NavAsideCategories/NavAsideCategories';
import CartProductPreview from '../CartProductsPreview/CartProductPreview';

const Nav = () => {
  const [isMouseOnAccount, setIsMouseOnAccount] = useState(false);
  const theme = useSelector((state) => state.theme.value);
  const wishListQuantity = useSelector((state) => state.wishListQuantity);
  let carSubTotal = 0;

  return (
    <nav className={`bg-${theme} box-border h-[65px] flex justify-center w-full`}>
      <div className='box-border h-[65px] flex items-center justify-center gap-x-[4rem] sm:justify-between sm:gap-x-0 sm:w-full sm:px-4 md:justify-between md:w-[770px] md:px-7 lg:gap-x-[2rem]'>
        <Link to={"/"} className='xl:hidden lg:hidden'>
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
        
        <div className={`hidden hover:bg-${theme}`}></div>
        <div className='flex mt-[6px] items-center gap-x-5'>
          <div className='grid gap-y-[2px] text-center cursor-pointer'>
            <div className='relative grid'>
              <span className="icon-[teenyicons--heart-outline]  text-white m-auto w-[28px] h-[28px] sm:w-[20px]"></span>
              <span className='absolute top-[-5px] right-[2px] sm:top-[-2px] sm:right-[3px] bg-black text-white text-[9px] font-medium rounded-full flex justify-center items-center w-[15px] h-[15px]'>{wishListQuantity}</span>
            </div>
            <span className='text-white text-[11px] font-Poppins'>Wish List</span>
          </div>
          <CartProductPreview 
            theme={theme}
            carSubTotal={carSubTotal}
          />
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