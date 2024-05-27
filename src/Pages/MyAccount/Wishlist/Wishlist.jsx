import { nanoid } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { removeWishProduct } from "../../../state/wishListSlice";
import { addCartProduct } from "../../../state/cartListSlice";
import { Link } from "react-router-dom";
import MyAccountNavBar from "../../../Components/MyAccountNavBar/MyAccountNavBar";
import PageIndicator from "../../../Components/PageIndicator/PageIndicator";

export default function Wishlist() {

  const theme = useSelector((state) => state.theme.value);
  const wishlist = useSelector((state) => state.wishList);
  const dispatch = useDispatch();

  return (
    <section className="px-4 py-6">
      <PageIndicator page={'Wishlist'}/>

      <main className="flex justify-center ">
        <div className="flex justify-center my-6 gap-x-6 sm:flex-col sm:w-full md:flex-col md:w-[713px] lg:w-[935px]">
          <MyAccountNavBar page={'Wishlist'} theme={theme}/>
          
          <div className="max-w-[738px] sm:w-full md:w-full sm:mt-6 md:mt-6 lg:w-[560px]">
            { wishlist.length 
                ?  wishlist.map(product => (
                    <div key={nanoid()} className="flex items-center py-6 pl-10 mb-6 border sm:relative gap-y-4 gap-x-12 font-Poppins sm:pl-0 sm:flex-col md:pl-6 lg:gap-x-5 lg:pl-8">
                      <img className="max-w-[70px] max-h-[52px] sm:max-h-full sm:max-w-[100px]" src={product.img} alt="product-img" />
                      <div>
                        <h4 className="font-medium font-Roboto text-[1.1rem] sm:text-center sm:text-[1.4rem]">{product.model}</h4>
                        <p>Avaiability: <span className="text-[#5DB972]">In stock</span></p>
                      </div>

                      <span className={`text-${theme} font-medium sm:text-[1.2rem]`}>&#36;{product.newPrice}</span>
                      <button onClick={() => dispatch(addCartProduct(product))} className={`flex gap-x-4 bg-${theme} text-white uppercase px-3 py-[8px] text-[15px] rounded font-medium border border-${theme} transition duration-500 ease hover:text-${theme} hover:bg-white sm:px-5`}>
                        <span className="icon-[cil--cart] mt-[2px] w-[20px] h-[18px] sm:mt-0"></span>  Add to Cart
                      </button>
                      <span onClick={() => dispatch(removeWishProduct(product))} className="icon-[la--trash-alt] w-[25px] h-[25px] cursor-pointer sm:absolute sm:right-[5px] sm:top-[10px] sm:h-[25px]"></span>
                    </div>
                  ))
                  
                : <div className="flex items-center h-full text-center">
                    <div className='h-[150px] w-[800px] sm:w-full sm:mt-6 md:w-full md:mt-6'>
                      <h2 className="font-Poppins text-[1.8rem] 2xs:text-[1.4rem] 2xs:font-medium xs:text-[1.5rem] xs:font-medium">Your wishlist is empty</h2>
                      <p className="pt-1 font-Roboto text-[1.1rem]">Visit the <Link className={`text-${theme} font-medium`} to={'/Shop/:page'}>shop</Link> page to choose the product that you wish.</p> 
                    </div>  
                  </div>
              }
          </div>
        </div>
      </main>
    </section>
  )
};