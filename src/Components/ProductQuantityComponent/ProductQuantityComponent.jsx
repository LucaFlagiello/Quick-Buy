export default function ProductQuantityComponent({ productQuantity, setProductQuantity }) {
  return (
    <div className='my-5'>
      <h5 className='font-Roboto'>Quantity</h5>
      <div className='flex items-center mt-1'>
        <button onClick={() => productQuantity > 0 ? setProductQuantity(prevQuantity => prevQuantity - 1) : null} className='flex items-center justify-center border border-[1px] w-[32px] h-[32px]'><span className="icon-[la--minus] h-[17px] w-[17px]"></span></button>
        <div className='flex items-center justify-center border border-[1px] w-[32px] h-[32px]'>{productQuantity}</div>
        <button onClick={() => setProductQuantity(prevQuantity => prevQuantity + 1)} className='flex items-center justify-center border border-[1px]  w-[32px] h-[32px]'><span className="icon-[la--plus] h-[17px] w-[17px]"></span></button>
      </div>
    </div>
  )
}