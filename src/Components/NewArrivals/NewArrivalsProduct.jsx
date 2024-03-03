import { useSelector } from "react-redux"

export default function NewArrivalsProduct({ img, model, originalPrice, newPrice, reviewsNum }) {

  const theme = useSelector((state) => state.theme.value);

  return (
    <div>
      <div className="bg-[#e5e5e58c] rounded-t-md py-6">
        <img src={img} alt="product-img" className="object-contain w-[100%] h-[140px]"/>
      </div>

      <div className="py-[1rem] pl-[1rem] font-Roboto leading-[27px]">
        <h4 className="font-medium text-[18px] mb-[2px]">{model}</h4>
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
      </div>
    </div>
  )
}