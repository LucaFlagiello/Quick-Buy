import { nanoid } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import ProductQuantityComponent from "../../Components/ProductQuantityComponent/ProductQuantityComponent";
import { removeCartProduct } from '../../state/cartListSlice';
import { Link } from "react-router-dom";
import PageIndicator from "../../Components/PageIndicator/PageIndicator";

export default function ShoppingCart() {

  const cartList = useSelector(state => state.cartProductsList);
  const theme = useSelector(state => state.theme.value);  
  const dispatch = useDispatch();
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
  
  const calcolateTotalPrice = () => {
    setTotalProductsPrice(totalProductsPrice);
  };

  return (
    <section className="my-6 px-4 min-h-[417px]">
      <PageIndicator page={'Shopping Cart'} />
      <div className="flex justify-center mt-4">
        {cartList.length === 0 
          ? <div className="flex items-center h-full mt-20 text-center">
              <div className='h-full w-[800px] sm:w-full sm:mt-6 md:w-full md:mt-6'>
                <h2 className="font-Poppins font-medium text-[1.8rem] 2xs:text-[1.4rem] 2xs:font-medium xs:text-[1.5rem] xs:font-medium">Your cart is empty</h2>
                <p className="pt-1 font-Roboto text-[1.1rem]">Visit the <Link className={`text-${theme} font-medium`} to={'/Shop/:page'}>shop</Link> page to choose the product that you wish.</p> 
              </div>  
            </div>
          : <div className="flex gap-x-6 sm:grid sm:gap-y-5 md:grid md:gap-y-5 lg:grid lg:gap-y-5">
              <div>
                <table className="w-full font-Roboto">
                  <thead>
                    <tr className="flex gap-x-[6rem] bg-[#E9E4E4] py-1 pl-52 w-[850px] pt-1 pb-1 xs:hidden sm:hidden md:pl-32 md:w-[710px] lg:w-[930px]">
                      <th className="mr-[10.2rem] font-medium md:mr-[6.5rem] lg:mr-[15rem]">
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
                        <td className="flex items-center justify-between pl-16 mt-6 border rounded 2xs:grid 2x-pl-0 xs:pl-0 xs:grid sm:pl-0 md:pl-1">
                          <div className="flex items-center justify-center 2xs:grid">
                            <div className="w-[120px] py-4">
                              <img className="max-w-[120px]" src={product.img} alt="product-img"/>
                            </div>  
                            <div className="font-Roboto">
                              <Link to={'/product-view'}>
                                <h2 className={`font-medium uppercase hover:text-${theme} transition duration-300 ease`}>{product.model}</h2>
                              </Link>
                              <h3 className={`text-${theme} font-medium mt-2`}>&#36;{product.newPrice}</h3>
                              <div className="flex text-green-500 gap-x-2">
                                <h3 className={`font-medium`}>Available:</h3>
                                <h3 className={`font-medium`}>{product.stock}</h3>
                              </div>
                            </div>
                          </div>
                        
                          <div className="flex items-center w-[340px] sm:justify-center">
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
                            
                            <div className="sm:w-[140px] w-[200px]">
                              <h3 className={`text-${theme} ml-[5.5rem] font-medium font-Roboto sm:ml-[2.6rem]`}>&#36;{(Math.round((product.newPrice * product.quantity) * 100) / 100).toFixed(2)}</h3>
                            </div>  
                            <span onClick={() => dispatch(removeCartProduct(product))} className="icon-[la--trash-alt] text-[23px] mb-[3px] cursor-pointer"></span>
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
                      <p className="font-medium">&#36;{totalProductsPrice}</p>
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
                    <p>&#36;{totalProductsPrice}</p>
                  </div>
                </div>
                <form className="mt-4" onClick={(e) => e.preventDefault()}>
                  <div className="flex">
                    <input className="pl-4 border border-r-0 rounded rounded-r-none outline-none w-[150px] sm:w-full md:w-full lg:w-full" type="text" placeholder="Enter a coupon"/>
                    <button className={`bg-${theme} text-white font-Poppins p-[10px] px-5 text-[12px] rounded rounded-l-none font-medium border hover:border-${theme} hover:text-${theme} hover:bg-white transition ease duration-300 sm:w-[140px] sm:text-[14px] md:w-[140px] md:text-[14px] lg:w-[200px] lg:text-[14px]`}>APPLY</button>
                  </div>
                  <Link to={'/checkout'}>
                    <button className={`bg-${theme} text-white font-Poppins p-[10px] px-5 text-[15px] w-full rounded mt-5 font-medium hover:border-${theme} border hover:text-${theme} hover:bg-white transition ease duration-300`}>PROCESS TO CHECKOUT</button>
                  </Link>
                </form>
              </div>
            </div>
          }
        </div>
    </section>
  )
};