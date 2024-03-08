export default function ProductColorComponent({ theme, isColorClicked, productColorData }) {
  return (
    <div>
      <h5 className='mt-3 mb-1 font-Roboto'>Color</h5>
      <div className='flex items-center gap-x-2'>  
        <div className={productColorData[0].isColorClicked ? `flex border border-[1px] bg-${theme} border-${theme} p-[1px] rounded-[5px]` : 'flex border-[1px] rounded-[5px]'}>
          <button onClick={() => isColorClicked(0)} className={productColorData[0].isColorClicked ? `bg-${theme} w-[20px] h-[20px] border-[2px]  border-[#e9e4e4] rounded-[3px]` : `bg-${theme}  w-[20px] h-[20px] rounded-[3px] border-[#e9e4e4]`}></button>
        </div>
        
        <div className={productColorData[1].isColorClicked ? `flex border border-[1px] bg-${theme} border-${theme} p-[1px] rounded-[5px]` : 'flex border-[1px] rounded-[5px]'}>  
          <button onClick={() => isColorClicked(1)} className={productColorData[1].isColorClicked ? `bg-white w-[20px] h-[20px] border-[2px] rounded-[3px] border-[#e9e4e4]` : 'bg-white w-[20px] h-[20px] rounded-[3px] border-[#e9e4e4]'}></button>
        </div>
        
        <div className={productColorData[2].isColorClicked ? `flex border border-[1px] border-${theme} bg-${theme} p-[1px] rounded-[5px]`: `flex border p-[1px] rounded-[5px]`}>
          <button onClick={() => isColorClicked(2)} className={productColorData[2].isColorClicked ? `bg-secondary-color w-[20px] h-[20px] border-[2px] rounded-[3px] border-[#e9e4e4]` : 'bg-secondary-color w-[20px] h-[20px] rounded-[3px] border-[#e9e4e4]'}></button>
        </div>  
      </div>
    </div>
  )
}