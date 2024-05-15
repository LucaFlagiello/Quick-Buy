import { useSelector } from "react-redux"
import { Link } from "react-router-dom";

export default function PageIndicator({ page }) {
  const theme = useSelector((state) => state.theme.value);

  return (
    <div className={page === 'Shopping Cart' ? "max-w-[1144px] m-auto sm:max-w-[670px] 2xs:px-2 xs:px-2 sm:px-2 md:px-7 md:max-w-[770px] lg:max-w-[935px]" : "max-w-[1168px] m-auto px-4 pt-6 md:pl-8 md:pb-2 md:max-w-[780px] lg:max-w-[965px]"}>
      <div> 
        <div className="flex items-center gap-x-2">
          <Link to={'/'}>
            <span className={`icon-[la--home] text-${theme}`}></span>
          </Link>
          
          {
            page === "Men's Adidas Courtsmash" 
            ? <div className="flex items-center gap-x-2">
                  <span className="icon-[la--angle-right] text-[14px]"></span>
                  <Link to={'/Shop/:page'}>
                    <h4  className={`font-Poppins text-${theme}`}>Shop</h4>
                  </Link>
                </div>
                
              : null
          }
          <span className="icon-[la--angle-right] 2xs:text-[14px] text-[14px]"></span>
          <h4 className="font-Poppins 2xs:text-[14px]">{page}</h4>
        </div>
      </div>
    </div>
  )
}