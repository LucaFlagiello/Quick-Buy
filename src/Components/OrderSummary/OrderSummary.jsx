import { useState,useEffect } from "react";
import { useSelector } from "react-redux"
import { Link } from "react-router-dom";

export default function OrderSummary({ page }) {

  const theme = useSelector((state) => state.theme.value);
  const cartList = useSelector((state) => state.cartProductsList)
  const [totalProductsPrice, setTotalProductsPrice] = useState(1);

  useEffect(() => {
    let totalPrice = 0;
    const pricesList = cartList.map(product => product.newPrice * product.quantity);
    
    if(cartList.length === 1) {
      totalPrice = pricesList[0];
    } else if(cartList.length > 1) {
      totalPrice = pricesList.reduce((prev, curr) => Number(prev) + Number(curr)); 
    };
    
    setTotalProductsPrice(totalPrice.toFixed(2));
    
  },[ cartList ]);

  return (
    <div className="min-w-[350px] sm:min-w-0">      
      <div className="bg-[#e9e4e4] w-full py-2">
        <h4 className="pl-4 font-medium font-Roboto">Your Order</h4>
      </div>

      <div className="px-4 py-6 mt-6 border rounded">
        <div>
          <h4 className="pb-3 font-medium uppercase border-b font-Roboto">{page === 'checkout' ? 'Your Order' : 'Order Summary'}</h4>
        </div>
        
        <div>
          {cartList.map(product => (
            <div key={product.id} className="flex items-center justify-between py-2">
              <div className="flex items-center w-full gap-x-4">
                <div className="flex items-center flex-1 min-w-0 gap-x-14">
                  <h4 className="font-medium truncate w-[120px] font-Roboto">{product.model}</h4>
                  <p className="flex-shrink-0">x{product.quantity}</p>
                </div>
                <span className={`font-medium font-Roboto flex-shrink-0`}>
                  &#36;{(Math.round((product.newPrice * product.quantity) * 100) / 100).toFixed(2)}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between pb-3 mt-4 border-b">
          <h3 className="font-medium text-[15px] uppercase font-Roboto">subtotal</h3>
          <span className={`font-medium font-Roboto flex-shrink-0`}>&#36;{totalProductsPrice}</span>
        </div>
        
        <div className="flex justify-between pb-3 mt-4 border-b">
          <h3 className="font-medium text-[15px] uppercase font-Roboto">shipping</h3>
          <span className={`font-medium font-Roboto  uppercase`}>free</span>
        </div>            
        
        <div className="flex justify-between pb-3 mt-4 border-b">
          <h3 className="font-medium text-[18px] uppercase font-Roboto">total</h3>
          <span className={` font-medium font-Roboto flex-shrink-0`}>&#36;{totalProductsPrice}</span>
        </div>
        
        { 
          page === 'checkout'
          
          ? <form onSubmit={(e) => e.preventDefault()}>
              <div className="flex items-center justify-between pl-4 mt-4 gap-x-2">
                <div className="flex items-center gap-x-3">
                  <input type="checkbox" id="terms_conditions" className={`border w-[18px] h-[16px] mt-1 rounded-[3px] accent-${theme}`}></input>
                  <label className="cursor-pointer" htmlFor="terms_conditions">
                    agree to our <span className={`text-${theme} cursor-pointer`}>terms &#38; conditions</span>
                  </label>
                </div>
              </div>

              <Link to={'/payment'}>
                <button className={`w-full bg-${theme} text-white uppercase py-[7px] mt-5 rounded-md font-medium border border-${theme} transition duration-500 ease hover:text-${theme} hover:bg-white`}>Place order</button>
              </Link>
            </form>
            
          : null
        }
      </div>
    </div>
  )
};