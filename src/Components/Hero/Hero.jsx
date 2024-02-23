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
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className={''}>
      <Slider {...settings}>
        <div className=" w-max-[100px]">
          <img className="w-[100px]" src={iphone11ProImg} alt="" />
        </div>
        <div className=" w-max-[100px]">
          <img className="w-[100px]" src={iphoneXrImg} alt="" />
        </div>
        <div className=" w-max-[100px]">
          <img className="w-[100px]" src={iphone12Img} alt="" />
        </div>
      </Slider>
    </section>
  );
}