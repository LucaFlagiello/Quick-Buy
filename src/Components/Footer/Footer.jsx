import { nanoid } from "@reduxjs/toolkit";
import { useSelector } from "react-redux"

export default function Footer() {
  const theme = useSelector((state) => state.theme.value);  
  const footerLinks = [
    [
      {link: 'MY ACCOUNT', path: '/my-account'},
      {link: 'Orders', path: '/order-history'},
      {link: 'Wishlist', path: '/wishlist'},
    ],
    [
      {link: 'INFORMATION', path: '/profile-information'},
      {link: 'About Us', path: '/about-us'},
      {link: 'FAQ', path: '/faq'},
    ]
  ];
  
  return (
    <footer className="bg-[#f3f3f3] px-4">
      <section className="flex justify-center py-8 m-auto gap-x-[4rem] 2xs:grid 2xs:grid-cols-1 2xs:gap-y-8 xs:grid xs:grid-cols-1 xs:gap-y-8   sm:grid sm:grid-cols-2 sm:max-w-[700px] md:gap-y-10 md:max-w-[700px] md:grid md:grid-cols-2 md:m-auto lg:gap-x-[2rem] lg:max-w-[930px]">
        <div>
          <h2 className="text-[1.8rem] font-Roboto font-medium mb-3"><span className="text-primary-color">QUICK</span>BUY</h2>
          <p className="max-w-[360px] text-secondary-color text-[15px] font-Poppins">
            Lorem ipsum, or lipsum as it is sometimes kno wn, is dummy text used in laying out print, gra phic or web designs the passage.
          </p>
          <h4 className="text-[1.2rem] font-Roboto font-medium mt-5 mb-3">NEWSLETTER</h4>
          <form className="flex" action="">
            <input className="w-full px-4 py-2 border border-[#c7c7c7] rounded-l-md bg-[#f3f3f3] outline-none" type="text" placeholder="Your email address" />  
            <button className={`text-white bg-${theme} border border-${theme} font-medium font-Poppins px-3 rounded-r-md hover:bg-transparent hover:text-${theme} transition duration-400 ease`}>SUBSCRIBE</button>
          </form>
        </div>
        {footerLinks.map(list => {
          return (
            <ul className="leading-[35px] " key={nanoid()}>
              {list.map(listLink => {
                return (<li className={`first:font-Roboto first:font-medium first:text-[1.1rem] lg:first:text-[16px] first:mb-2  first:pointer-events-none hover:text-${theme} text-[#18181b] cursor-pointer transition duration-600 ease`} key={nanoid()}>{listLink.link}</li>)
              })}
            </ul>
          )
        })}  
        <ul className="leading-[35px] text-secondary-color text-[15px]">
          <li className='font-Roboto first:font-medium text-[1.1rem] lg:first:text-[17px] mb-3'>CONTACT</li>
          <li className="flex mb-2 font-Poppins gap-x-3">
            <span className="icon-[la--map-marker] w-[17px] h-[17px] mt-[3px]"></span>
            <p className="max-w-[300px] leading-[25px]">
              7895 Dr New Albuquerue, NM 19800, United States Of America
            </p>
          </li>
          <li className="flex items-center mb-2 font-Poppins gap-x-3">
            <span className="icon-[la--phone] w-[17px] h-[17px]"></span>
            <p>
              +566 477 256, +566 254 575
            </p>
          </li>
          <li className="flex items-center mb-2 font-Poppins gap-x-3">
            <span className="icon-[la--envelope] w-[17px] h-[17px]"></span>
            <p>
              info@domain.com
            </p>
          </li>
          <li className="flex mt-3 gap-x-3">
            <div className="w-[32px] h-[32px] bg-[#3b5998] rounded-full flex items-center justify-center cursor-pointer"> 
              <span className="icon-[la--facebook-f] text-white"></span>
            </div>
            <div className="w-[32px] h-[32px] bg-black rounded-full flex items-center justify-center cursor-pointer"> 
              <span className="icon-[pajamas--twitter] text-white"></span>
            </div>
            <div className="w-[32px] h-[32px] bg-[#d53982] rounded-full flex items-center justify-center cursor-pointer"> 
              <span className="icon-[la--instagram] text-white"></span>
            </div>            
          </li>
        </ul>
      </section>
    </footer>
  )
}