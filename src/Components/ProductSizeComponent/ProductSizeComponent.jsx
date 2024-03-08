import { nanoid } from "@reduxjs/toolkit"

export default function ProductSizeComponent({ productSizeData, theme, isSizeClicked }) {
  return (
    <div>
      <h5 className='mb-1 font-Roboto'>Size</h5>
      <div className='flex gap-x-2'>
        {productSizeData.map(productSize => {
          return (
            <button onClick={() => isSizeClicked(productSize)} key={nanoid()} className={productSize.isBtnClicked ? `border-[1px] border-[#e9e4e4] rounded-[3px] font-Poppins text-[12px] w-[24px] h-[24px] bg-${theme} text-white` : `border-[1px] border-[#e9e4e4] rounded-[3px] font-Poppins text-[12px] w-[24px] h-[23px]`}>{productSize.size}</button>
          )
        })}
      </div>
    </div>
  ) 
}