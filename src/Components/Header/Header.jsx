import '../../App.css'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
  const theme = useSelector((state) => state.theme.value)

  return (
    <header className="flex items-center justify-between py-3 m-auto max-w-[1230px] lg:max-w-[960px] md:hidden sm:hidden">
      <div className='flex items-center gap-x-24 md:gap-x-0'>
        <span className='text-primary-color cursor-pointer font-Roboto font-bold text-[28px]'>QUICK<span className='text-black'>BUY</span></span>

        <ul className='flex gap-x-8 font-Poppins font-medium text-secondary-color text-[16px]'>
          <Link to={'/'}><li className={`hover:text-${theme} cursor-pointer transition duration-[.3s] ease`}>Home</li></Link>
          <Link to={'/Shop'}><li className={`hover:text-${theme} cursor-pointer transition duration-[.3s] ease`}>Shop</li></Link>
          <li className={`hover:text-${theme} cursor-pointer transition duration-[.3s] ease`}>Contact</li>
        </ul>
      </div>

      <div className='text-[16px] font-Poppins text-secondary-color font-medium'>
        <a href='/' className={`hover:text-${theme} cursor-pointer transition duration-[.3s] ease`}>Login</a><span className='hover:text-black'>/</span><a className={`hover:text-${theme} cursor-pointer transition duration-[.3s] ease`} href='/'>Register</a>
      </div>
    </header>
  )
}

export default Header;