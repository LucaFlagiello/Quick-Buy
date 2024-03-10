import downloadImg from '../../Assets/download-img.png'
import { useSelector } from 'react-redux'
import playStoreImg from '../../Assets/google-pay-img.png'
import appleStoreImg from '../../Assets/app-store-img.png'

export default function Download() {
  const theme = useSelector((state) => state.theme.value);

  return (
    <section className='mb-[3rem]'>
      <div className="flex justify-center max-w-[1120px] max-h-[450px] bg-[#f3f3f3] m-auto gap-x-14">
        <img className='object-fit max-h-[450px]' src={downloadImg} alt="download-img" />
        <div className='py-[6rem]'>
          <h2 className='text-[1.7rem] font-medium font-Roboto mb-3'>Download QUICKBUY App Now!</h2>
          <p className='font-Poppins max-w-[470px] mb-4'>
            Shopping fastly and easily more with our app. Get a link to download the app on your phone
          </p>
          <form action="" className='mb-5'>
            <div className='flex items-center'>
              <input className={`border border-${theme} border-r-0 w-full px-[1rem] py-[10px] rounded-md rounded-r-none outline-none`} type="text" placeholder='Email Address' />
              <button className={`border border-${theme} bg-${theme} text-white font-Poppins font-medium py-[10px] px-4 rounded-r-md my-3 hover:bg-transparent hover:text-${theme} transition duration-400 ease`}>Subscribe</button>
            </div>
          </form>
          <div className='flex items-center gap-x-3'>
            <img className='max-w-[120px] cursor-pointer' src={playStoreImg} alt="google-pay-img" />
            <img className='max-w-[120px] cursor-pointer rounded-md' src={appleStoreImg} alt="apple-store-img" />
          </div>
        </div>
      </div>
    </section>
  )
}