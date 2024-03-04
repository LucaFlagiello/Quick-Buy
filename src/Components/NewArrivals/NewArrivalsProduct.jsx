import { useState } from "react";

export default function NewArrivalsProduct({ img, model, originalPrice, newPrice, reviewsNum, theme }) {

  const [isMouseOnProduct, setIsMouseOnProduct] = useState(false);

  return (
    <div onMouseEnter={() => setIsMouseOnProduct(true)} onMouseLeave={() => setIsMouseOnProduct(false)}>
      <div className="relative bg-[#e5e5e58c] rounded-t-md py-6">
        <img src={img} alt="product-img" className="object-contain w-[100%] h-[140px]"/>
        <div className={isMouseOnProduct ? "absolute top-0 left-0 flex justify-center items-center w-[100%] rounded-t-md h-[100%] bg-[#e5e5e58c] transition duration-[.3s] ease" : 'absolute top-0 left-0 flex justify-center items-center'}>
          <div className={isMouseOnProduct ? "flex items-center gap-x-4 transform  transition duration-[.3s] ease  opacity-1" : 'flex items-center gap-x-4 transition duration-[.3s] ease invisible opacity-0'}>
            <button className={`flex items-center bg-${theme} items-center justify-center rounded-[50%] w-[39px] h-[39px] text-white hover:bg-secondary-color`}><span className="icon-[material-symbols-light--search] w-[27px] h-[27px]"></span></button>
            <button className={`flex items-center justify-center bg-${theme} rounded-[50%] w-[39px] h-[39px] text-white hover:bg-secondary-color`}><span className="icon-[mdi-light--heart]  w-[27px] h-[27px]"></span></button>
          </div>
        </div>
      </div>

      <div className="relative py-[1rem] pl-[1rem] font-Roboto leading-[27px]">
        <h4 className={`font-medium text-[18px] hover:text-${theme} mb-[2px] cursor-pointer`}>{model}</h4>
        <div className="flex gap-x-[.5rem] w-[100%] items-center">
           <span className={`font-medium text-[15px] text-${theme}`}>&#36;{newPrice}</span>
          <span className="line-through text-light-gray-price font-medium text-[13px]">&#36;{originalPrice}</span>
        </div>
        <div className="flex items-center gap-x-2 mt-[.1rem]">
          <div>
            <span className="h-[16px] icon-[emojione--star]"></span>
            <span className="h-[16px] icon-[emojione--star]"></span>
            <span className="h-[16px] icon-[emojione--star]"></span>
            <span className="h-[16px] icon-[emojione--star]"></span>
            <span className="h-[16px] icon-[emojione--star]"></span>
          </div>
          <span className="text-Poppins text-[12px] text-light-gray-price">{`(${reviewsNum})`}</span>
        </div>
        <button className={isMouseOnProduct ? `absolute bottom-0 transform translate-y-[-23px] bg-${theme} text-white font-medium font-Poppins text-[14px] border border-${theme} rounded-[4px] py-[7px] px-8 hover:text-${theme} hover:bg-white transition-all duration-[.3s] ease` : `absolute bottom-0 transform translate-y-0 text-white font-medium font-Poppins text-[14px] border border-${theme} rounded-[4px] py-[7px] px-8  opacity-0 transition-all duration-[.3s] ease`}>ADD TO CART</button>
      </div>
    </div>
  )
}