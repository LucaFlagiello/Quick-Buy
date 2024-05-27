import '../../App.css'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = ({ component, closeLinks }) => {
  const theme = useSelector((state) => state.theme.value)

  return (
    <header className={component === 'mobile-menu' ? '' : "flex items-center justify-between py-4 m-auto max-w-[1140px] lg:max-w-[930px] md:hidden sm:hidden"}>
      <div className='flex items-center gap-x-24 sm:gap-x-0 md:gap-x-0'>
        <Link to={"/"}>
          <div className={component === 'mobile-menu' ? 'hidden' : ''}>
            <span className='text-primary-color cursor-pointer font-Roboto font-bold text-[28px]'>QUICK<span className='text-black'>BUY</span></span>
          </div>
        </Link>
          
        <ul className={component === 'mobile-menu' ? 'gap-y-3 font-Poppins  text-[1.1rem] w-full' : 'flex gap-x-8 font-Poppins font-medium text-secondary-color text-[16px]'}>
          <Link to={'/'} onClick={closeLinks}>
            <li className={component === 'mobile-menu' ? 'hover:bg-[#f3f3f3] pt-[14px] pb-3 pl-4 border-b' : `hover:text-${theme} cursor-pointer transition duration-[.3s] ease`}>Home</li>
          </Link>
          
          <Link to={'/Shop/:page'} onClick={closeLinks}><li className={component === 'mobile-menu' ? 'hover:bg-[#f3f3f3] pt-[10px] pb-3 pl-4 border-b' : `hover:text-${theme} cursor-pointer transition duration-[.3s] ease`}>Shop</li>
          </Link>
          
          <Link to={'/contact-us'} onClick={closeLinks}>
            <li className={component === 'mobile-menu' ? 'hover:bg-[#f3f3f3] pt-[10px] pb-3 pl-4 border-b' : `hover:text-${theme} cursor-pointer transition duration-[.3s] ease`}>Contact</li>
          </Link>  
          
          <div>
            <div className={component !== 'mobile-menu' ? 'relative flex items-center group cursor-pointer gap-x-1' : ''}>
              <li className={component === 'mobile-menu' ? ' justify-between items-center group hover:bg-[#f3f3f3] pt-[10px] pb-3 pl-4 border-b' : `hover:text-${theme} transition duration-300 ease`}>
                Pages
                <span className={component === 'mobile-menu' ? 'absolute right-[20px] icon-[la--angle-down] mt-1 transform traanslate-x-[3px] transition-all duration-[.4s] ease' : 'hidden'}></span>

                <ul className={component === 'mobile-menu' ? 'pl-4 gap-y-3 font-Poppins text-[1.1rem] w-full hidden group-hover:block' : 'hidden'}>
                  <Link to={'/about-us'} onClick={closeLinks}>
                    <li className={'hover:bg-[#f3f3f3] pt-[14px]'}>About us</li>
                  </Link>
            
                  <Link to={'/contact-us'} onClick={closeLinks}>
                    <li className={'hover:bg-[#f3f3f3] pt-[14px]'}>Contact us</li>
                  </Link>
            
                  <Link to={'/faq'} onClick={closeLinks}>
                    <li className={'hover:bg-[#f3f3f3] pt-[14px]'}>FAQ</li>
                  </Link>

                  <Link to={'/checkout'} onClick={closeLinks}>
                    <li className={'hover:bg-[#f3f3f3] pt-[14px]'}>Checkout</li>
                  </Link>

                  <Link to={'/payment'} onClick={closeLinks}>
                    <li className={'hover:bg-[#f3f3f3] pt-[14px]'}>Payment</li>
                  </Link>

                  <Link to={'/order-complete'} onClick={closeLinks}>
                    <li className={'hover:bg-[#f3f3f3] pt-[14px]'}>Order Complete</li>
                  </Link>
                </ul>
              </li>
                <div className={component !== 'mobile-menu' ? 'absolute top-[30px] bg-white shadow-shop-shadow py-4 px-6 z-[-1] translate-y-[20px] w-[470px] transition duration-500 ease-in-out opacity-0 group-hover:translate-y-0 group-hover:z-10 group-hover:block group-hover:opacity-100' : 'hidden'}>
                  <div className='flex justify-between font-normal font-Poppins'>
                    <ul className='leading-[25px]'>
                      <li className={`mb-2 font-medium font-Roboto`}>
                        Other pages
                      </li>
                      <Link to={'/about-us'}>
                        <li className={`hover:text-${theme} transition duration-300 ease text-[15px]`}>
                          About us
                        </li>
                      </Link>
                      <Link to={'/contact-us'}>
                        <li className={`hover:text-${theme} transition duration-300 ease text-[15px]`}>
                          Contact us
                        </li>
                      </Link>
                      <Link to={'/faq'}>
                        <li className={`hover:text-${theme} transition duration-300 ease text-[15px]`}>
                          FAQ
                        </li>
                      </Link>
                      <Link to={'/404'}>
                        <li className={`hover:text-${theme} transition duration-300 ease text-[15px]`}>
                          404
                        </li>
                      </Link>
                    </ul>
                    
                    <ul className='leading-[25px]'>
                      <li className={`mb-2 font-medium font-Roboto`}>
                        Account Pages
                      </li>
                      <Link to={'/my-account'}>
                        <li className={`hover:text-${theme} transition duration-300 ease text-[15px]`}>
                          My Account
                        </li>
                      </Link>
                      <Link to={'/login'}>
                        <li className={`hover:text-${theme} transition duration-300 ease text-[15px]`}>
                          Login
                        </li>
                      </Link>
                      <Link to={'/register'}>
                        <li className={`hover:text-${theme} transition duration-300 ease text-[15px]`}>
                          Register
                        </li>
                      </Link>
                      <Link to={'/forgot-password'}>
                        <li className={`hover:text-${theme} transition duration-300 ease text-[15px]`}>
                          Forgot Password
                        </li>
                      </Link>
                    </ul>
                    
                    <ul className='leading-[25px]'>
                      <li className={`mb-2 font-medium font-Roboto`}>
                        Checkout page
                      </li>
                      <Link to={'/checkout'}>
                        <li className={`hover:text-${theme} transition duration-300 ease text-[15px]`}>
                        Checkout
                        </li>
                      </Link>
                      <Link to={'/payment'}>
                        <li className={`hover:text-${theme} transition duration-300 ease text-[15px]`}>
                          Payment
                        </li>
                      </Link>
                      <Link to={'/wishlist'}>
                        <li className={`hover:text-${theme} transition duration-300 ease text-[15px]`}>
                          Wishlist
                        </li>
                      </Link>
                      <Link to={'/order-complete'}>
                        <li className={`hover:text-${theme} transition duration-300 ease text-[15px]`}>
                          Order complete 
                        </li>
                      </Link>
                    </ul>
                  </div>
                </div>
                <span className={component !== 'mobile-menu' ? `icon-[gridicons--dropdown] group-hover:text-${theme} transition duration-300 ease` : 'hidden'}></span>
                <div className='absolute bottom-[-30px] h-[30px] w-full'></div>
            </div>
          </div>
        </ul>
      </div>

      <div className={component === 'mobile-menu' ? 'hidden' : 'text-[16px] font-Poppins text-secondary-color font-medium'}>
        <a href='/' className={`hover:text-${theme} cursor-pointer transition duration-[.3s] ease`}>Login</a><span className='hover:text-black'>/</span><a className={`hover:text-${theme} cursor-pointer transition duration-[.3s] ease`} href='/'>Register</a>
      </div>
    </header>
  )
};

export default Header;