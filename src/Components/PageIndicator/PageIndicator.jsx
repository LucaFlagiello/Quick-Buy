import { useSelector } from "react-redux"

export default function PageIndicator({ page }) {
  const theme = useSelector((state) => state.theme.value);
  
  return (
    <div className="max-w-[1265px] m-auto px-4 pt-6 md:max-w-[690px] lg:max-w-[995px]">
      <div className="flex items-center gap-x-2">
        <span className={`icon-[la--home] text-${theme}`}></span>
        <span className="icon-[la--angle-right] text-[14px]"></span>
        <h4 className="font-Poppins">{page}</h4>
      </div>
    </div>
  )
}