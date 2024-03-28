import iphone11ProImg  from '../../Assets/iphone.png'
import iphoneXrImg  from '../../Assets/iphone-xr.png'
import iphone12Img  from '../../Assets/iphone-12.png'
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function Hero() {
  const theme = useSelector((state) => state.theme.value);
  const [currSlide, setcurrSlide] = useState(1);
  const dataSlider = [
    { 
      model: 'iPhone 11 Pro Max',
      newPrice: '450.00',
      oldPrice: '550.45',
      img: iphone11ProImg,
      bgColor: 'bg-hero-bg-pink'
    },
    {
      model: 'iPhone 12 Pro Max',
      newPrice: '450.00',
      oldPrice: '550.45',
      img: iphone12Img,
      bgColor: 'bg-hero-bg-gray'
    }, 
    { model: 'Apple iPhone XR',
      newPrice: '450.00',
      oldPrice: '550.45',
      img: iphoneXrImg,
      bgColor: 'bg-hero-bg-blue'
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setcurrSlide(prevSlide => (prevSlide === dataSlider.length ? 1 : prevSlide + 1));        
    }, 5000);
  
    return () => clearInterval(interval);
  }, [currSlide, dataSlider.length]);
  
  return (
    <section className={'px-[1rem] sm:px-0 md:w-full md:p-0'}>
      <div className="pl-[14.2rem] sm:pl-0 sm:w-full md:w-full md:pl-0 lg:pl-[14.2rem]">
        <div className="relative flex justify-center items-center lg:max-w-[705px] m-auto h-[407px] overflow-hidden md:w-full md:m-0 sm:w-full xl:max-w-[918px]">
          {dataSlider.map((slide,index) => {
            const indexSlide = index+1;
            return (
              <div key={index} className={currSlide === indexSlide ? `absolute transform translate-x-0 transition duration-[1s] ease w-[918px] h-[100%] md:w-full ${slide.bgColor}` : currSlide < indexSlide ? `absolute  transition duration-[1s] ease transform translate-x-[918px] h-[100%] w-[100%] ${slide.bgColor} lg:translate-x-[810px] md:translate-x-[991px]` : `absolute top-0  transition duration-[1s] ease transform translate-x-[-918px] lg:translate-x-[-810px] md:translate-x-[-991px] h-[100%] w-[100%] ${slide.bgColor}`}>
                <div className="flex justify-center items-center gap-x-[6rem] h-[100%] md:gap-[9rem] sm:gap-x-[5rem]">  
                  <div className='sm:text-center'>
                    <p className="font-Poppins">Get up to 50&#37; off Today only</p>
                    <h2 className="font-Roboto text-[2.5rem] font-medium md:text-[2rem] sm:text-[1.8rem]">{slide.model}</h2>
                    <div className="flex items-center font-medium text-center gap-x-3 font-Roboto sm:justify-center">
                      <span className={`text-${theme}`}>&#36;{slide.newPrice}</span>
                      <span className="text-light-gray-price text-[12px] line-through">&#36;{slide.oldPrice}</span>
                    </div>
                    <button className={`heroBtn font-Poppins border-${theme}  border-[1px] text-[15px] font-medium text-white py-[8px] px-[1.3rem] hover:text-${theme} bg-${theme} rounded-md cursor-pointer hover:bg-transparent transition duration-[.5s] ease mt-[2rem]`}>SHOP NOW</button>
                  </div>
                  <img className="h-[280px] object-contain sm:hidden" src={slide.img} alt="phone-img" />
                </div>
              </div>
            )
          })}
          <ul className="flex gap-x-[.4rem] absolute bottom-[18px]">
            {dataSlider.map((dot, index) => {
              let indexDot = index+1;
              return (
                <li key={indexDot} onClick={() => setcurrSlide(indexDot)} className={currSlide === indexDot ? `bg-${theme} border-[2px] rounded-[50%] border-${theme} cursor-pointer  h-[12px] w-[12px]` : `border-[2px] rounded-[50%] border-${theme} cursor-pointer  h-[12px] w-[12px]`}></li>    
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}