import '../../App.css'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = ({ component, setIsNavLinkOpen }) => {
  const theme = useSelector((state) => state.theme.value)

  return (
    <header className={component === 'mobile-menu' ? '' : "flex items-center justify-between py-4 m-auto max-w-[1230px] lg:max-w-[960px] md:hidden sm:hidden"}>
      <div className='flex items-center gap-x-24 md:gap-x-0'>
        <Link to={"/"}>
          <div className={component === 'mobile-menu' ? 'hidden' : ''}>
            <span className='text-primary-color cursor-pointer font-Roboto font-bold text-  [28px]'>QUICK<span className='text-black'>BUY</span></span>
          </div>
        </Link>
          
        <ul className={component === 'mobile-menu' ? 'gap-y-3 font-Poppins  text-[1.1rem] w-full' : 'flex gap-x-8 font-Poppins font-medium text-secondary-color text-[16px]'}>
          <Link to={'/'} onClick={() => setIsNavLinkOpen(false)}><li className={component === 'mobile-menu' ? 'hover:bg-[#f3f3f3] pt-[14px] pb-3 pl-4 border-b' : `hover:text-${theme} cursor-pointer transition duration-[.3s] ease`}>Home</li></Link>
          <Link to={'/Shop/:page'} onClick={() => setIsNavLinkOpen(false)}><li className={component === 'mobile-menu' ? 'hover:bg-[#f3f3f3] pt-[10px] pb-3 pl-4 border-b' : `hover:text-${theme} cursor-pointer transition duration-[.3s] ease`}>Shop</li></Link>
          <li className={component === 'mobile-menu' ? 'hover:bg-[#f3f3f3] pt-[10px] pb-3 pl-4 border-b cursor-pointer' : `hover:text-${theme} cursor-pointer transition duration-[.3s] ease`}>Contact</li>
        </ul>
      </div>

      <div className={component === 'mobile-menu' ? 'hidden' : 'text-[16px] font-Poppins text-secondary-color font-medium'}>
        <a href='/' className={`hover:text-${theme} cursor-pointer transition duration-[.3s] ease`}>Login</a><span className='hover:text-black'>/</span><a className={`hover:text-${theme} cursor-pointer transition duration-[.3s] ease`} href='/'>Register</a>
      </div>
    </header>
  )
}

export default Header;