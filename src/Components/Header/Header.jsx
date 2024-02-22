import '../../App.css'

const Header = () => {
  return (
    <header className="flex justify-between items-center max-w-6xl m-auto py-3">
      <div className='flex items-center gap-x-24'>
        <span className='text-primary-color cursor-pointer font-Roboto font-bold text-[28px]'>QUICK<span className='text-black'>BUY</span></span>

        <ul className='flex gap-x-8 font-Poppins font-medium text-secondary-color text-[16px]'>
          <li className='hover:text-primary-color cursor-pointer transition duration-[.3s] ease'>Home</li>
          <li className='hover:text-primary-color cursor-pointer transition duration-[.3s] ease'>Shop</li>
          <li className='hover:text-primary-color cursor-pointer transition duration-[.3s] ease'>Contact</li>
        </ul>
      </div>

      <div className='text-[16px] font-Poppins text-secondary-color font-medium'>
        <a href='/' className='hover:text-primary-color cursor-pointer transition duration-[.3s] ease'>Login</a><span className='hover:text-black'>/</span><a className='  hover:text-primary-color cursor-pointer transition duration-[.3s] ease' href='/'>Register</a>
      </div>
    </header>
  )
}

export default Header;