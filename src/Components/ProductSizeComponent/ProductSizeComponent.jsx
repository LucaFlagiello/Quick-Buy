import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit"

export default function ProductSizeComponent({ theme, page }) {
  const [productSizeData, setProductSizeData] = useState([
    {size: 'XS', isBtnClicked: false},{size: 'S', isBtnClicked: false}, {size: 'M', isBtnClicked: true},{size: 'L', isBtnClicked: false},{size: 'XL', isBtnClicked: false}
  ]);
  
  const isSizeClicked = (productBtnSize) => {
    const updateSizeData = productSizeData.map(btnSize => {
      return btnSize === productBtnSize ? { ...productBtnSize, isBtnClicked: true } : { ...btnSize, isBtnClicked: false };
    });
    setProductSizeData(updateSizeData);
  };
  
  return (
    <div>
      <h5 className={page === 'shop' ? 'font-medium font-Roboto text-[1.3rem] pb-4' : 'mb-1 font-Roboto'}>Size</h5>
      <div className='flex gap-x-2'>
        {productSizeData.map(productSize => {
          return (
            <button onClick={() => isSizeClicked(productSize)} key={nanoid()} className={productSize.isBtnClicked ? `border-[1px] border-[#e9e4e4] rounded-[3px] font-Poppins text-[12px] w-[24px] h-[24px] bg-${theme} text-white` : `border-[1px] border-[#e9e4e4] rounded-[3px] font-Poppins text-[12px] w-[24px] h-[24px]`}>{productSize.size}</button>
          )
        })}
      </div>
    </div>
  ) 
};