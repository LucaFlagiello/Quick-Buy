import { nanoid } from '@reduxjs/toolkit';
import profileImg from '../../Assets/user-profile.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function MyAccountNavBar({ theme, page }) {

  const [isNavOpen, setIsNavOpen] = useState(false);

  const navLinks = [
    { 
      link1: 'My Account',
      link2: 'Profile Information',
      link3: 'Manage Address',
      link4: 'Change Password',
    },
    { 
      link1: 'Order History',
      link2: 'My Returns',
      link3: 'My Cancellations',
    },
    {link1: 'Wishlist'},
    {link1: 'Log Out'},
  ];

  return (
    <aside className='relative font-Poppins w-[376px] sm:w-full md:w-full'>
      <div className="flex items-center p-4 shadow-shop-shadow gap-x-4">
        <div className='w-[30px] h-[30px] flex justify-center items-center rounded-full border'>
          <img className='w-[20px]' src={profileImg} alt="profile-img" />
        </div>

        <h4 className='flex items-center justify-between w-full font-medium font-Roboto'>
          Russell Ahmed <span onClick={() => setIsNavOpen(prev => !prev)} className={`icon-[la--bars] hover:text-${theme} transition duration-300 ease-in-out cursor-pointer w-[22px] h-[22px] lg:hidden xl:hidden 2xl:hidden`}></span>
        </h4>
      </div>

      <div className={isNavOpen ? 'z-10 p-4 mt-6 bg-white shadow-shop-shadow sm:absolute sm:translate-y-[-20px] sm:w-[280px] md:absolute md:translate-y-[-20px] 2xs:w-full md:w-[280px] transition duration-400 ease-in-out opacity-100' : 'sm:absolute sm:translate-y-0 sm:w-[280px] sm:opacity-0 md:absolute md:translate-y-0 p-4 mt-6 md:w-[280px] bg-white z-[-1] transition duration-400 ease-in-out md:opacity-0 shadow-shop-shadow '}>
        { navLinks.map(links => (
          <div key={nanoid()} className='py-4 border-b last:border-b-0 last:pb-0 first:pt-0'>
            <ul>
              <Link to={
                  links.link1 === 'My Account' 
                    ? '/my-account' 
                    : links.link1 === 'Order History' 
                      ? '/order-history'
                      : links.link1 === 'Wishlist' 
                        ? '/wishlist'
                        : '/login'
              }>
                <li className={page === links.link1 ? `font-medium font-Roboto text-[1.1rem] text-${theme} flex items-center cursor-pointer gap-x-4` : `font-medium font-Roboto text-[1.1rem] flex items-center cursor-pointer gap-x-4 hover:text-${theme} transition duration-400 ease-in-out`}>
                  {
                    links.link1 === 'My Account' 
                      ? <span className="icon-[la--id-card] w-[22px] h-[22px]"></span>
                      : links.link1 === 'Order History'
                      ? <span className="icon-[la--gift] w-[22px] h-[22px]"></span>
                      : links.link1 === 'Wishlist'
                      ? <span className="icon-[teenyicons--heart-outline] w-[22px] h-[22px]"></span>
                      : <span className="icon-[la--power-off] w-[24px] h-[24px]"></span>
                  }
                  <p className='font-medium font-Roboto text-[1.1rem]'>{links.link1}</p>
                </li>
              </Link>
              {
                links.length < 4
                
                  ? null
                  
                  : <ul className='pl-10 leading-[28px] text-[15px] pt-1'>
                  <Link to={links.link2 === 'Profile Information' ? '/profile-information' : '/Returns'}>
                    <li className={page === links.link2 ? `text-${theme}` : `cursor-pointer hover:text-${theme} transition duration-400 ease-in-out`}>{links.link2}</li>
                  </Link>
                  <Link to={links.link3 === 'Manage Address' ? '/manage-address' : '/my-cancellations'}>
                    <li className={page === links.link3 ? `text-${theme}` : `cursor-pointer hover:text-${theme} transition duration-400 ease-in-out`}>{links.link3}</li>
                  </Link>
                  <Link to={'/change-password'}>
                    <li className={page === links.link4 ? `text-${theme}` : `cursor-pointer hover:text-${theme} transition duration-400 ease-in-out`}>{links.link4}</li>
                  </Link>
                  </ul>
              }
            </ul>
          </div>
        ))}
      </div>
    </aside>
  )
};