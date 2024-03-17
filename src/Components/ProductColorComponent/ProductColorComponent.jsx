import { useState } from "react";

export default function ProductColorComponent({ theme, page }) {
  const [productColorData, setProductColorData] = useState([{isColorClicked: true},{isColorClicked: false}, {isColorClicked: false}]);

  const isColorClicked = (btnColorIndex) => {
    const updateColorData = productColorData.map((btnColor, i) => {
      return i === btnColorIndex ? { ...btnColor, isColorClicked: true } : { ...btnColor, isColorClicked: false };
    });
    setProductColorData(updateColorData);
  };
  
  return (
    <div>
      <h5 className={page === 'shop' ? 'font-medium font-Roboto text-[1.3rem] mb-4' : 'mt-3 mb-1 font-Roboto'}>Color</h5>
      <div className='flex items-center gap-x-2'>  
        <div className={productColorData[0].isColorClicked ? `flex  border-[1px] bg-${theme} border-${theme} p-[1px] rounded-[5px]` : 'flex border-[1px] rounded-[5px]'}>
          <button onClick={() => isColorClicked(0)} className={productColorData[0].isColorClicked ? `bg-${theme} w-[20px] h-[20px] border-[2px]  border-[#e9e4e4] rounded-[3px]` : `bg-${theme}  w-[20px] h-[20px] rounded-[3px] border-[#e9e4e4]`}></button>
        </div>
        
        <div className={productColorData[1].isColorClicked ? `flex  border-[1px] bg-${theme} border-${theme} p-[1px] rounded-[5px]` : 'flex border-[1px] rounded-[5px]'}>  
          <button onClick={() => isColorClicked(1)} className={productColorData[1].isColorClicked ? `bg-white w-[20px] h-[20px] border-[2px] rounded-[3px] border-[#e9e4e4]` : 'bg-white w-[20px] h-[20px] rounded-[3px] border-[#e9e4e4]'}></button>
        </div>
        
        <div className={productColorData[2].isColorClicked ? `flex  border-[1px] border-${theme} bg-${theme} p-[1px] rounded-[5px]`: `flex border p-[1px] rounded-[5px]`}>
          <button onClick={() => isColorClicked(2)} className={productColorData[2].isColorClicked ? `bg-secondary-color w-[20px] h-[20px] border-[2px] rounded-[3px] border-[#e9e4e4]` : 'bg-secondary-color w-[20px] h-[20px] rounded-[3px] border-[#e9e4e4]'}></button>
        </div>  
      </div>
    </div>
  )
};