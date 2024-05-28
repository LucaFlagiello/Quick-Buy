import { useEffect, useRef, useState } from 'react';
import productImg from '../../Assets/headphone-1.png';
import { useSelector } from 'react-redux';

export default function NewsletterNotification() {
  const [showNewsletter, setShowNewsletter] = useState(false);
  const theme = useSelector((state) => state.theme.value);
  const utentAccessedRef = useRef(false);

  useEffect(() => {
    const notificationSeen = localStorage.getItem('notificationSeen');
    
    if (!notificationSeen) {
      const interval = setInterval(() => {
        setShowNewsletter(true);
      }, 2000);

      return () => clearInterval(interval);
    }
  }, []);

  const closeNotification = () => {
    localStorage.setItem('notificationSeen', 'true');
    utentAccessedRef.current = true;
    setShowNewsletter(false);
  };
  
  return (
    <div className={showNewsletter ? 'fixed top-0 flex justify-center items-center w-full h-full bg-[#00000080] transition duration-800 ease-in-out z-[99999999999999]' : 'fixed transition duration-[.3s] ease top-[-3000px]'}>
      <div className='relative flex items-center p-6 transition duration-300 ease-in-out bg-white rounded-md'>
        <span onClick={closeNotification} className={`absolute top-2 right-2 cursor-pointer icon-[la--times] text-gray-500 font-extrabold w-[20px] h-[20px] hover:text-${theme} transition duration-300 ease-in-out`}></span>
        <div className='text-center font-Poppins max-w-[350px]'>
          <h2 className='font-medium uppercase text-[2.8rem] font-Roboto'>get <span className={`text-${theme}`}>30&#37;</span> off</h2>
          <p>
            Subscribe to the newsletter to receive updates about new products.
          </p>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className='flex items-center'>
              <input className={`border border-${theme} border-r-0 w-full pl-[1rem] py-[10px] rounded-md rounded-r-none outline-none`} type="text" placeholder='Your email address' />
              <button className={`uppercase border border-${theme} bg-${theme} text-white font-Poppins font-medium py-[10px] px-4 rounded-r-md my-3 hover:bg-transparent hover:text-${theme} transition duration-400 ease`}>Subscribe</button>
            </div>
          </form>

          <div className='flex justify-center text-center gap-x-3'>
            <input className={`cursor-pointer accent-${theme}`} id='newsletter' type="checkbox" />
            <label className='cursor-pointer' htmlFor='newsletter'>Do not show this again</label>
          </div>
        </div>

        <img src={productImg} alt="product-img" />
      </div>
    </div>
  );
}