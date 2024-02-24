import deliveryVanImg from '../../Assets/delivery-van.svg'
import moneyBackImg from '../../Assets/money-back.svg'
import serviceHours from '../../Assets/service-hours.svg'

export default function FeaturesArea() {
  return (
    <section className="w-max-[1000px] my-[4rem]">
      <div className="flex justify-center gap-x-6">
        <div className="flex justify-center gap-x-[1rem] border-primary-color w-[300px] py-[1.3rem] border-solid border-[1px] rounded-[4px]">
          <img src={deliveryVanImg} alt="van-img" />
          <div>
            <h4 className='font-Roboto font-semibold'>Free shipping</h4>
            <p className='font-Poppins text-[#6b6b6b] text-[13px]'>Orders over &#36;200</p>
          </div>
        </div>
        <div className="flex justify-center gap-x-[1rem] border-primary-color text-[18p6] w-[300px] py-[1.3rem] border-solid border-[1px] rounded-[4px]">
          <img src={moneyBackImg} alt="van-img" />
          <div>
            <h4 className='font-Roboto font-semibold'>Money Returns</h4>
            <p className='font-Poppins text-[#6b6b6b] text-[13px]'>30 Days money return</p>
          </div>
        </div>
        <div className="flex justify-center gap-x-[1rem] border-primary-color text-[18p6] w-[300px] py-[1.3rem] border-solid border-[1px] rounded-[4px]">
          <img src={serviceHours} alt="van-img" />
          <div>
            <h4 className='font-Roboto font-semibold'>24/7 Support</h4>
            <p className='font-Poppins text-[#6b6b6b] text-[13px]'>Customer support</p>
          </div>
        </div>
      </div>
    </section>
  )
}