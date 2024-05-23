import payMethodImg from '../../Assets/credit-card-brands.png'

export default function Copyright() {
  return (
    <section className="py-3 text-white bg-black mb-[4rem] lg:mb-0 xl:mb-0">
      <div className="flex items-center justify-between max-w-[1120px] sm:gap-y-3 sm:flex-col md:max-w-[700px] lg:max-w-[930px] font-Poppins m-auto px-4">
        <p>
          &copy; RAFCART - All Rights Reserved
        </p>
        <img className='object-fit w-[310px]' src={payMethodImg} alt="credit-carts-brands" />
      </div>
    </section>
  )
};