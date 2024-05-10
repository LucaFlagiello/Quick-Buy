import { useDispatch } from "react-redux"
import { addCartProduct, decrementCartProduct } from "../../state/cartListSlice";

export default function ProductQuantityComponent({ page, product, productQuantity, calcolateTotalPrice}) {
  
  const dispatch = useDispatch();

  const handleProductIncrement = () => {
    dispatch(addCartProduct(product));
    calcolateTotalPrice(product);
  };  
  
  const handleProductDecrement = () => {
    dispatch(decrementCartProduct(product));
    calcolateTotalPrice();
  };

  return (
    <div className='my-5'>
      {
        page === 'shopping-cart' 
        ? null 
        : <h5 className='font-Roboto'>Quantity</h5>
      }
      <div className='flex items-center mt-1'>
        <button onClick={handleProductDecrement} className='flex items-center justify-center border-[1px] w-[32px] h-[32px]'><span className="icon-[la--minus] h-[17px] w-[17px]"></span></button>
         <div className='flex items-center justify-center border-[1px] w-[32px] h-[32px]'>{productQuantity}</div> 
        <button onClick={handleProductIncrement} className='flex items-center justify-center border-[1px]  w-[32px] h-[32px]'><span className="icon-[la--plus] h-[17px] w-[17px]"></span></button>
      </div>
    </div>
  )
}; 