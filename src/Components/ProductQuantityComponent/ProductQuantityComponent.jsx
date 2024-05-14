import { useDispatch } from "react-redux"
import { addCartProduct, decrementCartProduct } from "../../state/cartListSlice";
import { useState } from "react";

export default function ProductQuantityComponent({ page, product, productQuantity, calcolateTotalPrice}) {
  
  const [productPageQuantity, setProductPageQuantity ] = useState(0)
  
  const dispatch = useDispatch();
  const quantity = page === 'shopping-cart' ? productQuantity : productPageQuantity;

  const handleProductIncrement = () => {
    if(page === 'shopping-cart') { 
      dispatch(addCartProduct(product));
      calcolateTotalPrice(product);
    } else {
      setProductPageQuantity(prev => prev + 1);
    };
  };  
  
  const handleProductDecrement = () => {
    if(page === 'shopping-cart') { 
      dispatch(decrementCartProduct(product));
      calcolateTotalPrice();
    } else if(productPageQuantity !== 0) {
        setProductPageQuantity(prev => prev - 1); 
      };
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
         <div className='flex items-center justify-center border-[1px] w-[32px] h-[32px]'>{quantity}</div> 
        <button onClick={handleProductIncrement} className='flex items-center justify-center border-[1px]  w-[32px] h-[32px]'><span className="icon-[la--plus] h-[17px] w-[17px]"></span></button>
      </div>
    </div>
  )
}; 