import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './hero-slide.css'
import iphone11ProImg  from '../../Assets/iphone.png'
import iphoneXrImg  from '../../Assets/iphone-xr.png'
import iphone12Img  from '../../Assets/iphone-12.png'

export default function Hero() {
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
      <Slider {...settings}>
        <div className="w-[600px] h-[407px] bg-hero-bg-pink">
          <div className="flex justify-center items-center gap-x-[9rem] h-[100%]">  
            <div>
              <p className="font-Poppins">Get up to 50&#37; off Today only</p>
              <h2 className="font-Roboto text-[2.5rem] font-medium">iPhone 11 Pro Max</h2>
              <div className="flex gap-x-3 mt-1 font-Roboto font-medium">
                <span className="text-primary-color">	&#36;450.00</span>
                <span className="text-light-gray-price line-through">	&#36;550.45</span>
              </div>
              <button className="font-Poppins bg-primary-color border-primary-color border-[1px] text-[15px] font-medium text-white py-[8px] px-[1.3rem] rounded-md cursor-pointer hover:bg-white hover:text-primary-color transition duration-[.5s] ease mt-[2rem]">SHOP NOW</button>
            </div>
            <img className="h-[280px]" src={iphone11ProImg} alt="" />
          </div>
        </div>
        <div className="w-[600px] h-[407px] bg-hero-bg-gray">
          <div className="flex justify-center items-center gap-x-[9rem] h-[100%]">  
            <div>
              <p className="font-Poppins">Get up to 50&#37; off Today only</p>
              <h2 className="font-Roboto text-[2.5rem] font-medium">iPhone 12 Pro Max</h2>
              <div className="flex gap-x-3 mt-1 font-Roboto font-medium">
                <span className="text-primary-color">	&#36;450.00</span>
                <span className="text-light-gray-price line-through">	&#36;550.45</span>
              </div>
              <button className="font-Poppins bg-primary-color border-primary-color border-[1px] text-[15px] font-medium text-white py-[8px] px-[1.3rem] rounded-md cursor-pointer hover:bg-white hover:text-primary-color transition duration-[.5s] ease mt-[2rem]">SHOP NOW</button>
            </div>
            <img className="h-[280px]" src={iphoneXrImg} alt="" />
          </div>
        </div>
        <div className="w-[600px] h-[407px] bg-hero-bg-blue">
          <div className="flex justify-center items-center gap-x-[9rem] h-[100%]">  
            <div>
              <p className="font-Poppins">Get up to 50&#37; off Today only</p>
              <h2 className="font-Roboto text-[2.5rem] font-medium">Apple iPhone XR</h2>
              <div className="flex gap-x-3 mt-1 font-Roboto font-medium">
                <span className="text-primary-color">	&#36;450.00</span>
                <span className="text-light-gray-price line-through">	&#36;550.45</span>
              </div>
              <button className="font-Poppins bg-primary-color border-primary-color border-[1px] text-[15px] font-medium text-white py-[8px] px-[1.3rem] rounded-md cursor-pointer hover:bg-white hover:text-primary-color transition duration-[.5s] ease mt-[2rem]">SHOP NOW</button>
            </div>
            <img className="h-[280px]" src={iphone12Img} alt="" />
          </div>
        </div>
      </Slider>
    </section>
  );
}