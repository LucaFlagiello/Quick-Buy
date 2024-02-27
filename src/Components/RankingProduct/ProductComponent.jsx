

export default function product({ model, originalPrice, newPrice, rank, reviewsNum, img, theme }) {

  return (
    <div className="grid grid-cols-[105px,1fr] gap-x-[1rem] items-center">
      <div className="relative bg-[#f2f0f0] max-w-[120px] py-[12px] object-contain rounded-[6px] cursor-pointer">
        <img className="w-[100%] h-[75px] object-contain" src={img} alt=""/>
        <span className={`absolute top-0 right-0 rounded-tr-[6px] rounded-bl-[6px] text-[12px] w-[24px] h-[18px] text-center font-medium text-white bg-${theme}`}>{rank}</span>
      </div>

      <div className="w-[100%]">
        <h4 className={`font-medium hover:text-${theme} transition duration-[.3s] ease cursor-pointer`}>{model}</h4>
        <div className="flex gap-x-[.5rem] w-[100%] items-center">
           <span className={` font-medium text-[16px]`} style={{color: theme}}>&#36;{newPrice}</span>
          <span className="line-through text-light-gray-price font-medium text-[14px]">&#36;{originalPrice}</span>
        </div>
        <div className="flex items-center gap-x-2 mt-[.1rem]">
          <div>
            <span className="h-[13px] icon-[emojione--star]"></span>
            <span className="h-[13px] icon-[emojione--star]"></span>
            <span className="h-[13px] icon-[emojione--star]"></span>
            <span className="h-[13px] icon-[emojione--star]"></span>
            <span className="h-[13px] icon-[emojione--star]"></span>
          </div>
          <span className="text-Poppins text-[12px] text-light-gray-price">{`(${reviewsNum})`}</span>
        </div>
      </div>
    </div>
  )
}