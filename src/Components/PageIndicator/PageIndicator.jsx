import { useSelector } from "react-redux"
import { useLocation } from "react-router-dom";

export default function PageIndicator() {
  const theme = useSelector((state) => state.theme.value);
  const location = useLocation();
  const page = location.pathname.slice(1);
  
  return (
    <div className="max-w-[1270px] m-auto px-4 pt-6 md:max-w-[690px] lg:max-w-[1000px]">
      <div className="flex items-center gap-x-2">
        <span className={`icon-[la--home] text-${theme}`}></span>
        <span className="icon-[la--angle-right] text-[14px]"></span>
        <h4 className="font-Poppins">{page}</h4>
      </div>
    </div>
  )
}