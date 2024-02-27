import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './hero-slide.css'
import iphone11ProImg  from '../../Assets/iphone.png'
import iphoneXrImg  from '../../Assets/iphone-xr.png'
import iphone12Img  from '../../Assets/iphone-12.png'
import { useSelector } from "react-redux";

export default function Hero() {
  const theme = useSelector((state) => state.theme.value);

  console.log(theme)

  let settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className={''}>
      {/*To make the tailwind variables dynamically change works*/}
      <div className="
        border-primary-color 
        hover:text-primary-color 
        hover:border-primary-color 
        text-primary-color
        hidden">
     </div>
      <div className="
        border-primary-color2
        hover:text-primary-color2
        text-primary-color2
        hidden">
     </div>
      <div className="
      border-primary-color3
      hover:text-primary-color3
      text-primary-color3  
        hidden">
     </div>
      <div className="
      border-primary-color4
      hover:text-primary-color4
      text-primary-color4
        hidden">
     </div>
      <Slider {...settings}>
        <div className="w-[600px] h-[407px] bg-hero-bg-pink">
          <div className="flex justify-center items-center gap-x-[9rem] h-[100%]">  
            <div>
              <p className="font-Poppins">Get up to 50&#37; off Today only</p>
              <h2 className="font-Roboto text-[2.5rem] font-medium">iPhone 11 Pro Max</h2>
              <div className="flex  items-center  gap-x-3 mt-1 font-Roboto font-medium">
                <span className={`text-${theme}`}>	&#36;450.00</span>
                <span className="text-light-gray-price text-[12px] line-through">&#36;550.45</span>
              </div>
              <button className={`heroBtn font-Poppins border-${theme}  border-[1px] text-[15px] font-medium text-white py-[8px] px-[1.3rem] hover:text-${theme} bg-${theme} rounded-md cursor-pointer hover:bg-transparent transition duration-[.5s] ease mt-[2rem]`}>SHOP NOW</button>
            </div>
            <img className="h-[280px]" src={iphone11ProImg} alt="" />
          </div>
        </div>
        <div className="w-[600px] h-[407px] bg-hero-bg-gray">
          <div className="flex justify-center items-center gap-x-[9rem] h-[100%]">  
            <div>
              <p className="font-Poppins">Get up to 50&#37; off Today only</p>
              <h2 className="font-Roboto text-[2.5rem] font-medium">iPhone 12 Pro Max</h2>
              <div className="flex items-center  gap-x-3 mt-1 font-Roboto font-medium">
                <span className={`text-${theme}`}>&#36;450.00</span>
                <span className="text-light-gray-price text-[12px] line-through">	&#36;550.45</span>
              </div>
              <button className={`font-Poppins bg-${theme} border-${theme} border-[1px] text-[15px] font-medium text-white py-[8px] px-[1.3rem]  rounded-md cursor-pointer hover:text-${theme} hover:bg-transparent transition duration-[.5s] ease mt-[2rem]`}>SHOP NOW</button>
            </div>
            <img className="h-[280px]" src={iphoneXrImg} alt="" />
          </div>
        </div>
        <div className="w-[600px] h-[407px] bg-hero-bg-blue">
          <div className="flex justify-center items-center gap-x-[9rem] h-[100%]">  
            <div>
              <p className="font-Poppins">Get up to 50&#37; off Today only</p>
              <h2 className="font-Roboto text-[2.5rem] font-medium">Apple iPhone XR</h2>
              <div className="flex  items-center  gap-x-3 mt-1 font-Roboto font-medium">
                <span className={`text-${theme}`}>	&#36;450.00</span>
                <span className="text-light-gray-price text-[12px] line-through">	&#36;550.45</span>
              </div>
              <button className={`font-Poppins bg-${theme} border-${theme} border-[1px] text-[15px] font-medium text-white py-[8px] px-[1.3rem] rounded-md cursor-pointer  hover:text-${theme} hover:bg-transparent transition duration-[.5s] ease mt-[2rem]`}>SHOP NOW</button>
            </div>
            <img className="h-[280px]" src={iphone12Img} alt="" />
          </div>
        </div>
      </Slider>
    </section>
  );
}