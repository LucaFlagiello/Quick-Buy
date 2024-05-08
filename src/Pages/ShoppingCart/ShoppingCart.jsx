import { nanoid } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import ProductQuantityComponent from "../../Components/ProductQuantityComponent/ProductQuantityComponent";
import { removeCartProduct } from '../../state/cartListSlice';
import { Link } from "react-router-dom";

export default function ShoppingCart() {

  const cartList = useSelector(state => state.cartProductsList);
  const theme = useSelector(state => state.theme.value);  
  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState(1);
   
  const calcolateTotalPrice = (product) => {
    setTotalPrice((Math.round((product.newPrice * product.quantity) * 100) / 100).toFixed(2));
  };

  console.log(totalPrice)
  return (
    <section className="flex justify-center my-6 min-h-[417px]">
      {cartList.length === 0 
        ? <div className="flex items-center">
            <div className='pl-6 pt-6 pb-6 border-2 border-l-0 border-r-0 h-[150px] w-[800px]'>
              <h2 className="font-Poppins text-[1.8rem]">Your cart is empty</h2>
              <p className="pt-1 font-Roboto text-[1.1rem]">Visit the <Link className={`text-${theme} font-medium`} to={'/Shop/:page'}>shop</Link> page to choose the product that you wish.</p> 
            </div>  
          </div>
        : <div className="flex gap-x-6">
            <div className="w-[]">
              <table className="font-Roboto">
                <thead>
                  <tr className="flex gap-x-[6rem] bg-[#E9E4E4] py-1 pl-52 w-[850px] pt-1 pb-1">
                    <th className="mr-[10.2rem] font-medium">
                      Product 
                    </th>
                    <th className="font-medium">
                      Quantity
                    </th>
                    <th className="font-medium">
                      Total Price 
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cartList.map(product => ( 
                    <tr key={nanoid()} className="">
                      <td className="flex items-center justify-between pl-16 mt-6 border rounded">
                        <div className="flex items-center">
                          <div className="w-[120px] py-4">
                            <img className="max-w-[120px]" src={product.img} alt="product-img"/>
                          </div>  
                          <div className="font-Roboto">
                            <h2 className="font-medium uppercase">{product.model}</h2>
                            <h3 className={`text-${theme} font-medium mt-2`}>&#36;{product.newPrice}</h3>
                            <div className="flex text-green-500 gap-x-2">
                              <h3 className={`font-medium`}>Available:</h3>
                              <h3 className={`font-medium`}>{product.stock}</h3>
                            </div>
                          </div>
                        </div>
                      
                        <div className="flex items-center w-[340px]">
                          <div className="flex items-center gap-x-[2rem]">
                            <div>
                              <ProductQuantityComponent 
                                page={'shopping-cart'}
                                product={product}
                                productQuantity={product.quantity}
                                calcolateTotalPrice={calcolateTotalPrice}
                                />
                            </div> 
                          </div>
                          
                          <div className="w-[200px]">
                            <h3 className={`text-${theme} ml-[5.5rem] font-medium font-Roboto`}>&#36;{(Math.round((product.newPrice * product.quantity) * 100) / 100).toFixed(2)}</h3>
                          </div>  
                          <span onClick={() => dispatch(removeCartProduct(product))} className="icon-[la--trash-alt] text-[23px]  mb-[3px] cursor-pointer"></span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 pl-5 pr-5 border rounded h-fit">
              <div>
                <h3 className="font-Roboto text-[18px] font-bold pb-3">ORDER SUMMARY</h3>
                <div className="mb-2 border-b font-Poppins">
                  <div className="flex justify-between mb-2">
                    <p className="font-medium">Subtotal</p>
                    <p className="font-medium">&#36;{totalPrice}</p>
                  </div>
                  <div className="flex justify-between mb-2">
                    <p>Delivery</p>
                    <p>Free</p>
                  </div>
                  <div className="flex justify-between mb-2">
                    <p>Tax</p>
                    <p>Free</p>
                  </div>
                </div>
                <div className="flex justify-between mt-4 font-bold">
                  <p>TOTAL</p>
                  <p>&#36;{totalPrice}</p>
                </div>
              </div>
              <form className="mt-4" action="">
                <div className="flex">
                  <input className="pl-4 border border-r-0 rounded rounded-r-none outline-none max-w-[150px]" type="text" placeholder="Enter a coupon" />
                  <button className={`bg-${theme} text-white font-Poppins p-[10px] px-5 text-[12px] rounded rounded-l-none font-medium border hover:border-${theme} hover:text-${theme} hover:bg-white transition ease duration-300`}>APPLY</button>
                </div>
                <button className={`bg-${theme} text-white font-Poppins p-[10px] px-5 text-[15px] w-full rounded mt-5 font-medium hover:border-${theme} border hover:text-${theme} hover:bg-white transition ease duration-300`}>PROCESS TO CHECKOUT</button>
              </form>
            </div>
          </div>
      }
    </section>
  )
};