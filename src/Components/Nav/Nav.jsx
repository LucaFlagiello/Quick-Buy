import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Nav = () => {

  const [isVisible, setIsVisible] = useState(false);

  return (
    <nav className="bg-primary-color max-w-full h-[65px] flex justify-center gap-x-10 items-center">
      <div onMouseEnter={() => setIsVisible(true)} className="bg-secondary-color relative flex items-center gap-x-2 h-10 px-10 py-6 rounded-[5px] cursor-pointer">
        <FontAwesomeIcon icon={faBars} className='text-white' />
        <h3 className='text-white font-Poppins font-medium text-md'>All categories</h3>
        <ul onMouseLeave={() => setIsVisible(false)} className={isVisible ? 'visible  transition ease duration-[.2s] absolute w-full text-gray-800 text-[15px] font-Poppins bottom-0 left-0 top-14 shadow-lg h-fit' :  'invisible hidden'}>
          <li className='flex items-center border-b-[1px] border-dotted  gap-x-3 py-3 pt-5 pl-8 hover:bg-gray-100  transition duration-[.2s]'>
          <svg xmlns="http://www.w3.org/2000/svg" className='text-tertiary-color' height='1.5em' viewBox="0 0 32 32"><path fill="currentColor" d="M10 3C7.805 3 6.203 4.605 5.281 6.5C4.36 8.395 3.961 10.68 4 12.688c.047 2.332 1.063 4.687 1.063 4.687l.28.625h8.407l.219-.75s.789-2.941 1-5.75c.082-1.105.047-3.027-.563-4.844c-.304-.91-.746-1.8-1.469-2.5C12.216 3.457 11.188 3 10 3m12 0c-1.188 0-2.215.457-2.938 1.156c-.722.7-1.164 1.59-1.468 2.5c-.61 1.817-.645 3.739-.563 4.844c.211 2.809 1 5.75 1 5.75l.219.75h8.406l.282-.625S27.953 15.02 28 12.687c.04-2.007-.36-4.292-1.281-6.187C25.797 4.605 24.195 3 22 3M10 5c.703 0 1.129.203 1.531.594c.403.39.762 1.011 1 1.718c.473 1.415.531 3.215.469 4.063c-.164 2.176-.684 3.996-.844 4.625H6.72c-.242-.684-.692-2.016-.719-3.344c-.035-1.695.355-3.761 1.094-5.281C7.832 5.855 8.77 5 10 5m12 0c1.23 0 2.168.855 2.906 2.375c.739 1.52 1.125 3.586 1.094 5.281c-.027 1.328-.477 2.66-.719 3.344h-5.437c-.16-.629-.68-2.45-.844-4.625c-.063-.848-.004-2.648.469-4.063c.238-.707.597-1.328 1-1.718C20.87 5.204 21.297 5 22 5M5 21v1c-.012 1.379.121 2.988.813 4.406C6.502 27.824 7.957 29 10 29c2.262 0 3.98-2.215 4-5c.004-.645-.023-1.402-.25-2.25l-.188-.75zm13.438 0l-.188.75c-.227.848-.254 1.605-.25 2.25c.02 2.785 1.738 5 4 5c2.043 0 3.496-1.176 4.188-2.594c.69-1.418.824-3.027.812-4.406v-1zM7.155 23h4.75c.035.328.098.664.094 1c-.016 2.023-1.07 3-2 3c-1.379 0-1.95-.535-2.406-1.469c-.328-.668-.367-1.629-.438-2.531m12.938 0h4.75c-.07.902-.11 1.863-.438 2.531C23.95 26.465 23.38 27 22 27c-.93 0-1.984-.977-2-3c-.004-.336.059-.672.094-1z"/></svg>

          <span>Shoes</span>
          </li>
          <li className='flex items-center gap-x-3 py-3 pl-8 hover:bg-gray-100 border-b-[1px] border-dotted transition duration-[.2s]'>
          <svg xmlns="http://www.w3.org/2000/svg" className='text-tertiary-color' height="1.5em" viewBox="0 0 32 32"><path fill="currentColor" d="M16 2c-2.2 0-4 1.8-4 4a3.96 3.96 0 0 0 1.125 2.75C11.273 9.773 10 11.746 10 14v5.406l.281.313L12 21.437V30h2v-9.406l-.281-.313L12 18.563V14c0-2.219 1.781-4 4-4c2.219 0 4 1.781 4 4v4.563l-1.719 1.718l-.281.313V30h2v-8.563l1.719-1.718l.281-.313V14c0-2.254-1.273-4.227-3.125-5.25A3.958 3.958 0 0 0 20 6c0-2.2-1.8-4-4-4m0 2c1.117 0 2 .883 2 2s-.883 2-2 2s-2-.883-2-2s.883-2 2-2"/></svg>

            <span>Men</span>
          </li>
          <li className='flex items-center gap-x-3 py-3 pl-8 hover:bg-gray-100 border-b-[1px] border-dotted transition duration-[.2s]'>
          <svg xmlns="http://www.w3.org/2000/svg" className='text-tertiary-color' height="1.5em" viewBox="0 0 32 32"><path fill="currentColor" d="M16 2c-2.2 0-4 1.8-4 4c0 1.129.488 2.145 1.25 2.875a4.531 4.531 0 0 0-.656.563c-.84.89-1.364 2.078-1.594 3.374h.031l-2 10L8.781 24H13v6h2v-6h2v6h2v-6h4.219l-.25-1.188l-2-10c-.23-1.234-.73-2.41-1.563-3.312a4.752 4.752 0 0 0-.687-.625C19.492 8.145 20 7.137 20 6c0-2.2-1.8-4-4-4m0 2c1.117 0 2 .883 2 2s-.883 2-2 2s-2-.883-2-2s.883-2 2-2m0 6c.828 0 1.422.316 1.938.875c.515.559.921 1.387 1.093 2.313L20.781 22H11.22l1.75-8.813H13c.176-1 .559-1.84 1.063-2.374c.503-.536 1.09-.813 1.937-.813"/></svg>

            <span>Women</span>
          </li>
          <li className='flex items-center gap-x-3 py-3 pl-8 hover:bg-gray-100 border-b-[1px] border-dotted transition duration-[.2s]'>
          <svg xmlns="http://www.w3.org/2000/svg" className='text-tertiary-color' height="1.5em" viewBox="0 0 32 32"><path fill="currentColor" d="M16 5C9.937 5 5 9.938 5 16v8c0 1.645 1.355 3 3 3h3v-9H7v-2c0-4.984 4.016-9 9-9s9 4.016 9 9v2h-4v9h3c1.645 0 3-1.355 3-3v-8c0-6.063-4.938-11-11-11M7 20h2v5H8c-.566 0-1-.434-1-1zm16 0h2v4c0 .566-.434 1-1 1h-1z"/></svg>

            <span>Headphones</span>
          </li>
          <li className='flex items-center gap-x-3 py-3 pl-8 hover:bg-gray-100 border-b-[1px] border-dotted transition duration-[.2s]'>
          <svg xmlns="http://www.w3.org/2000/svg" className='text-tertiary-color' height="1.5em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M12 9v3l2 1m4-1a6 6 0 1 1-12 0a6 6 0 0 1 12 0"/><path d="M15 6.5V3a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v3.5m6 11V21a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-3.5"/></g></svg>

            <span>Watches</span>
          </li>
          <li className='flex items-center gap-x-3 py-3 pl-8 hover:bg-gray-100 border-b-[1px] border-dotted transition duration-[.2s]'>
          <svg xmlns="http://www.w3.org/2000/svg" className='text-tertiary-color' height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M2 5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2h-7v2h3a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2h3v-2H4a2 2 0 0 1-2-2zm18 11V5H4v11z"/></svg>      

            <span>Computer</span>
          </li>
          <li className='flex items-center gap-x-3 py-3 pb-4 pl-8 hover:bg-gray-100 border-b-[1px] border-dotted transition duration-[.2s]'>
          <svg xmlns="http://www.w3.org/2000/svg" className='text-tertiary-color' height="1.5em" viewBox="0 0 32 32"><path fill="currentColor" d="M11 4C9.355 4 8 5.355 8 7v18c0 1.645 1.355 3 3 3h10c1.645 0 3-1.355 3-3V7c0-1.645-1.355-3-3-3zm0 2h10c.555 0 1 .445 1 1v18c0 .555-.445 1-1 1H11c-.555 0-1-.445-1-1V7c0-.555.445-1 1-1m5 17c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1"/></svg>

            <span>Mobile</span>
          </li>
        </ul>
      </div>

      <div className='flex h-[44px] font-Poppins'>
        <button className='bg-white pr-0 flex items-center  rounded-l-md gap-x-2 text-[14px] px-5'>Women <svg  xmlns="http://www.w3.org/2000/svg" height="1.6em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokelinecap="round" strokeLinejoin="round" d="m7 10l5 5l5-5"/></svg></button>
        <input className='border-l pl-5 w-[22rem] border-black text-[14px] outline-none placeholder:text-[14px] placeholder:text-gray-400' type='text' placeholder='Search product...'/>
        <button className='bg-secondary-color rounded-l-none font-medium px-10 text-white font-Poppins rounded-r-[6px]'>Search</button>
      </div>

      <div className='flex gap-x-5'>
        <div className='flex-col cursor-pointer'>
          <div className='relative '>
            <svg xmlns="http://www.w3.org/2000/svg" className='mt-1  text-white m-auto' height="1.5em" viewBox="0 0 15 15"><path fill="currentColor" d="m7.5 13.5l-.354.354a.5.5 0 0 0 .708 0zM1.536 7.536l-.354.353zm5-5l-.354.353zM7.5 3.5l-.354.354a.5.5 0 0 0 .708 0zm.964-.964l-.353-.354zm-.61 10.61L1.889 7.182l-.707.707l5.964 5.965zm5.257-5.964l-5.965 5.964l.708.708l5.964-5.965zM6.182 2.889l.964.965l.708-.708l-.965-.964zm1.672.965l.964-.965l-.707-.707l-.965.964zM10.964 1c-1.07 0-2.096.425-2.853 1.182l.707.707A3.037 3.037 0 0 1 10.964 2zM14 5.036c0 .805-.32 1.577-.89 2.146l.708.707A4.036 4.036 0 0 0 15 5.036zm1 0A4.036 4.036 0 0 0 10.964 1v1A3.036 3.036 0 0 1 14 5.036zM4.036 2c.805 0 1.577.32 2.146.89l.707-.708A4.036 4.036 0 0 0 4.036 1zM1 5.036A3.036 3.036 0 0 1 4.036 2V1A4.036 4.036 0 0 0 0 5.036zm.89 2.146A3.035 3.035 0 0 1 1 5.036H0c0 1.07.425 2.096 1.182 2.853z"/></svg>

            <span className='absolute top-[-6px] right-[2px] bg-black text-white text-[9px] font-medium rounded-full flex justify-center items-center w-[16px] h-[16px]'>3</span>
          </div>
          <span className='text-white text-[11px] font-Poppins'>Wish List</span>
        </div>
        <div className='flex-col cursor-pointer'>
          <div className='relative '>
            <svg xmlns="http://www.w3.org/2000/svg" className='mt-1  text-white m-auto' height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M0 1h4.764l.545 2h18.078l-3.666 11H7.78l-.5 2H22v2H4.72l1.246-4.989L3.236 3H0zm7.764 11h10.515l2.334-7H5.855zM4 21a2 2 0 1 1 4 0a2 2 0 0 1-4 0m14 0a2 2 0 1 1 4 0a2 2 0 0 1-4 0"/></svg>

            <span className='absolute cursor-pointer top-[-6px] right-[-7px] bg-black text-white text-[9px] font-medium rounded-full flex justify-center items-center w-[16px] h-[16px]'>2</span>
          </div>
          <span className='text-white text-[11px] font-Poppins'>Cart</span>
        </div>
        <div className='flex-col'>
          <div className='relative '>
            <svg xmlns="http://www.w3.org/2000/svg" className='mt-1  text-white m-auto cursor-pointer' height="1.5em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-dasharray="28" stroke-dashoffset="28" stroke-linecap="round" stroke-width="2"><path d="M4 21V20C4 16.6863 6.68629 14 10 14H14C17.3137 14 20 16.6863 20 20V21"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="28;0"/></path><path d="M12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7C16 9.20914 14.2091 11 12 11Z"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.4s" values="28;0"/></path></g></svg>
          </div>
          <span className='text-white text-[11px] font-Poppins'>Account</span>
        </div>
      </div>
    </nav>
    
  )
}

export default Nav;