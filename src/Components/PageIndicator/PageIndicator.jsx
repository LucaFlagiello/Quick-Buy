import { useSelector } from "react-redux"
import { Link } from "react-router-dom";

export default function PageIndicator({ page, pagesNumber, prevPage, prevPathPage }) {
  const theme = useSelector((state) => state.theme.value);

  return (
    <div className={"max-w-[1138px] m-auto sm:max-w-[670px] md:pb-2 md:pl-3 md:max-w-[735px] lg:max-w-[935px]"}>
      <div> 
        <div className="flex items-center gap-x-2">
          <Link to={'/'}>
            <span className={`icon-[la--home] mt-1 text-${theme}`}></span>
          </Link>
          
          {
            pagesNumber > 1  
            
              ? 
                <div className="flex items-center gap-x-2">
                  <span className="icon-[la--angle-right] text-[14px]"></span>
                  <Link to={prevPathPage}>
                    <h4  className={`font-Poppins text-${theme}`}>{prevPage}</h4>
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