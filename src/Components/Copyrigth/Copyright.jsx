import payMethodImg from '../../Assets/credit-card-brands.png'

export default function Copyright() {
  return (
    <section className="py-3 text-white bg-black">
      <div className="flex items-center justify-between max-w-[1120px] font-Poppins m-auto">
        <p>
          &copy; RAFCART - All Rights Reserved
        </p>
        <img className='object-fit w-[310px]' src={payMethodImg} alt="credit-carts-brands" />
      </div>
    </section>
  )
}