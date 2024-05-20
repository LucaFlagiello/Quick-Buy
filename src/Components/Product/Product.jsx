import { incrementCartQuantity } from "../../state/cartQuantitySlice";
import { addCartProduct } from "../../state/cartListSlice";
import { incrementWishListQuantity } from "../../state/wishListQuantitySlice"
import { addWishListProduct } from "../../state/wishListSlice";
import productList from "../../Data/productList/productsList";
import { Link } from "react-router-dom";

export default function NewArrivalsProduct({ img, model, originalPrice, newPrice, reviewsNum, theme, productPreviewStatus, dispatch, showPreview, productTag, isProductsList }) {

  const addNewProduct = (list) => {
    const product = productList.find(prdct => prdct.model === model);
    if(list === 'cart') {
      dispatch(incrementCartQuantity());
      dispatch(addCartProduct(product));
    } else {
      dispatch(incrementWishListQuantity());
      dispatch(addWishListProduct(product));
    }
  };

  return (
    <div className={isProductsList ? 'flex sm:flex-col' : "group"}>
        <div className={isProductsList ? 'relative w-[250px] bg-[#f3f3f3] rounded-tl-md py-6 sm:w-full' :"relative bg-[#f3f3f3] rounded-t-md py-6"}>
          <img src={img} alt="product-img" className={isProductsList ? "m-auto object-contain h-[170px]" :  "object-contain w-full h-[140px]"}/>
          <div className={isProductsList ? 'hidden' :'absolute top-0 left-0 flex justify-center items-center w-full group:hover-rounded-t-md h-full group-hover:bg-[#e5e5e58c] group-hover:transition duration-[.3s] ease'}>
            <div className='flex items-center gap-x-4 transition duration-[.3s] ease opacity-0 group-hover:opacity-100'>
              <button onClick={() => productPreviewStatus = true} className={`flex items-center bg-${theme} items-center justify-center rounded-[50%] w-[39px] h-[39px] text-white hover:bg-secondary-color`}><span onClick={() => dispatch(showPreview(true))} className="icon-[material-symbols-light--search] w-[27px] h-[27px]"></span></button>
              <button onClick={() => addNewProduct('wishList')} className={`flex items-center justify-center bg-${theme} rounded-[50%] w-[39px] h-[39px] text-white hover:bg-secondary-color`}><span className="icon-[mdi-light--heart]  w-[27px] h-[27px]"></span></button>
            </div>
          </div>
          <span className={`absolute top-0 bg-${theme} text-white rounded-tl-md rounded-br-md font-Poppins font-medium py-1 px-2 text-[13px]`}>{productTag}</span>
        </div>

        <div className={isProductsList ? "pl-[1.5rem] py-[1rem] sm:px-2" : "relative py-[1rem] pl-[1rem] font-Roboto leading-[27px]"}>
          <Link to={'/product-view'}>
            <h4 className={isProductsList ? `font-medium text-[23px] hover:text-${theme} mb-[2px] cursor-pointer` : `font-medium text-[18px] hover:text-${theme} mb-[2px] cursor-pointer`}>{model}</h4>
          </Link>
          <div className="flex gap-x-[.5rem] w-full items-center">
            <span className={isProductsList ? `font-medium text-[17px] text-${theme}` : `font-medium text-[15px] text-${theme}`}>&#36;{newPrice}</span>
            <span className={isProductsList ? "line-through text-light-gray-price font-medium text-[15px]" : "line-through text-light-gray-price font-medium text-[13px]"}>&#36;{originalPrice}</span>
          </div>
          <div className="flex items-center gap-x-2">
            <div>
              <span className={isProductsList ? 'h-[18px] w-[18px] mt-1 icon-[emojione--star]' : "h-[16px] icon-[emojione--star]"}></span>
              <span className={isProductsList ? 'h-[18px] w-[18px] icon-[emojione--star]' : "h-[16px] icon-[emojione--star]"}></span>
              <span className={isProductsList ? 'h-[18px] w-[18px] icon-[emojione--star]' : "h-[16px] icon-[emojione--star]"}></span>
              <span className={isProductsList ? 'h-[18px] w-[18px] icon-[emojione--star]' : "h-[16px] icon-[emojione--star]"}></span>
              <span className={isProductsList ? 'h-[18px] w-[18px] icon-[emojione--star]' : "h-[16px] icon-[emojione--star]"}></span>
            </div>
            <span className="text-Poppins text-[12px] text-light-gray-price">{`(${reviewsNum})`}</span>
          </div>
            <div className={isProductsList ? "" : "hidden"}>
              <p className="mt-2 font-Poppins">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim.
              </p>
              <div className="flex mt-4 gap-x-4 2xs:grid 2xs:gap-y-3 2xs:max-w-[175px]">
                <button onClick={() => addNewProduct('cart')} className={`flex items-center gap-x-3 bg-${theme} text-white border border-${theme} text-Poppins font-medium py-[10px] px-6 rounded-[4px] text-[15px] hover:bg-transparent hover:text-${theme} transition duration-[.5s] ease group sm:px-[1rem]`}>
                <span className={`icon-[cil--cart]  text-white items-center h-[16px] w-[16px] transition duration-[.5s] ease group-hover:text-${theme} transition duration-[.5s] ease`}></span> ADD TO CART
                </button>
                
                <button onClick={() => addNewProduct('list')} className={`flex items-center gap-x-3 bg-white text-${theme} border border-${theme} text-Poppins font-medium py-[10px] px-8 rounded-[4px] text-[15px] hover:bg-${theme} hover:text-white transition duration-[.5s] ease group sm:px-[1rem]`}>
                <span className={`icon-[teenyicons--heart-outline] text-${theme} w-[16px] h-[16px] group-hover:text-white transition duration-[.5s] ease`}></span>WISHLIST
                </button>
              </div>
            </div>
          <button onClick={() => addNewProduct('cart')} className={ isProductsList ? 'hidden' : `group-hover:translate-y-[-23px] bg-${theme}  group-hover:opacity-100 absolute bottom-0 transform translate-y-0 text-white font-medium font-Poppins text-[14px] border border-${theme} rounded-[4px] py-[7px] px-8 opacity-0 transition-all duration-[.3s] ease hover:text-${theme} hover:bg-white sm:px-[12px]`}>ADD TO CART</button>
        </div>
      </div>
  )
}