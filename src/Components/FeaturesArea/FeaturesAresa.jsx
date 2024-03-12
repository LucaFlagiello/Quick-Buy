import deliveryVanImg from '../../Assets/delivery-van.svg'
import moneyBackImg from '../../Assets/money-back.svg'
import serviceHours from '../../Assets/service-hours.svg'
import { useSelector } from 'react-redux'

export default function FeaturesArea() {

  const theme = useSelector((state) => state.theme.value);

  return (
    <section className="w-max-[1000px] my-[4rem] md:px-4 sm:flex sm:justify-center sm:max-w-[400px] sm:px-5 m-auto">
      <div className="flex justify-center gap-x-6 md:gap-x-2 sm:flex-col sm:gap-y-4 sm:w-full">
        <div className={`flex justify-center gap-x-[1rem] border-${theme} w-[300px] py-[1.3rem] border-solid border-[1px] rounded-[4px] sm:flex-col sm:text-center sm:w-full md:max-w-[230px]`}>
          <img className='w-[48px] sm:m-auto sm:w-[33px] md:w-[35px]' src={deliveryVanImg} alt="van-img" />
          <div>
            <h4 className='font-Roboto text-[18px] leading-[33px] font-medium'>Free shipping</h4>
            <p className='font-Poppins text-[#6b6b6b] text-[13px]'>Orders over &#36;200</p>
          </div>
        </div>
        <div className={`flex justify-center items-center gap-x-[1rem] border-${theme} text-[18px] w-[300px] py-[1.3rem] border-solid border-[1px] rounded-[4px] sm:flex-col sm:text-center sm:w-full md:max-w-[230px]`}>
          <img className='w-[48px] sm:m-auto sm:w-[33px] md:w-[35px]' src={moneyBackImg} alt="van-img" />
          <div>
            <h4 className='text-Roboto text-[18px] leading-[33px] font-semibold'>Money Returns</h4>
            <p className='font-Poppins text-[#6b6b6b] text-[13px]'>30 Days money return</p>
          </div>
        </div>
        <div className={`flex justify-center gap-x-[1rem] border-${theme} text-[18px] w-[300px] py-[1.3rem] border-solid border-[1px] rounded-[4px] sm:flex-col sm:text-center sm:w-full md:max-w-[230px]`}>
          <img className='w-[48px] sm:m-auto sm:w-[33px] md:w-[35px]' src={serviceHours} alt="van-img" />
          <div>
            <h4 className='text-Roboto text-[18px] leading-[33px] font-semibold'>24/7 Support</h4>
            <p className='font-Poppins text-[#6b6b6b] text-[13px]'>Customer support</p>
          </div>
        </div>
      </div>
    </section>
  )
}