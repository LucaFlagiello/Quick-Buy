import { useState } from "react";
import { useSelector } from "react-redux"


export default function ScrollTopBtn() {
  const [isVisible, setIsVisible] = useState(false);
  const theme = useSelector((state) => state.theme.value);
  
  const ToggleVisible = () => {
    return document.documentElement.scrollTop > 300 ? setIsVisible(true) : setIsVisible(false); 
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  window.addEventListener('scroll', ToggleVisible);

  return (
    <>
      <div onClick={scrollToTop} className={isVisible ? `fixed flex justify-center items-center bottom-[20px] right-[20px] w-[40px] h-[40px] bg-${theme} text-white  rounded-full cursor-pointer` : 'hidden '}>
      <span className="icon-[la--arrow-up] text-[18px] font-extrabold"></span>      
      </div>
    </>
  )
}