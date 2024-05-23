import { useState, useMemo, useEffect } from "react";
import sliderImg1 from '../../Assets/img-product-preview.png'
import sliderImg2 from '../../Assets/slider-1.png'
import sliderImg3 from '../../Assets/slider-2.png'
import sliderImg4 from '../../Assets/slider-3.png'
import sliderImg5 from '../../Assets/slider-4.png'
import { useSelector, useDispatch } from "react-redux";
import { showPreview } from '../../state/productPreviewSlice'
import { nanoid } from "@reduxjs/toolkit";
import ProductSizeComponent from "../ProductSizeComponent/ProductSizeComponent";
import ProductColorComponent from "../ProductColorComponent/ProductColorComponent";
import ProductQuantityComponent from "../ProductQuantityComponent/ProductQuantityComponent";

export default function PreviewProductComponent({ page }) {

  const [mainImg, setMainImg] = useState(sliderImg1);
  const [countSlide, setCountSlide] = useState(1);
  const theme = useSelector((state) => state.theme.value);

  const sliderData = useMemo(() => [
    {slideImg: sliderImg1, index: 1},
    {slideImg: sliderImg2, index: 2},
    {slideImg: sliderImg3, index: 3},
    {slideImg: sliderImg4, index: 4},
    {slideImg: sliderImg5, index: 5}
  ], []);
    
  const dispatch = useDispatch();

  const selectImgOnSlide = (img) => {
    setCountSlide(img.index);
    setMainImg(img.slideImg);
  };
  
  const selectImgOnArrow = (direction) => {
    if(direction === 'right') {
      if(countSlide + 1 > sliderData.length) {
        setCountSlide(1);
      } else {
        setCountSlide(prevCount => prevCount + 1)
      }
    } else if(direction === 'left'){
      if(countSlide - 1 < 1) {
        setCountSlide(sliderData.length);
      } else {
        setCountSlide(prevCount => prevCount - 1);
      }
    } 
  };

  useEffect(() => {
    const selectedSlide = sliderData.find((slide) => slide.index === countSlide);
    if (selectedSlide) {setMainImg(selectedSlide.slideImg);}
  }, [countSlide, sliderData]);
  
  
  return (
    <div className={page === 'home' ? "relative flex p-8 bg-white rounded-[4px] gap-x-6 transition duration-[.6s] ease sm:flex-col sm:max-h-[800px] sm:w-[900px] sm:overflow-y-auto sm:pt-14 md:overflow-y-auto md:flex-col md:max-h-[800px] md:w-[900px] md:pt-14" : " flex pt-4 bg-white rounded-[4px] gap-x-6 transition duration-[.6s] ease   xs:w-full sm:flex-col sm:w-full sm:pt-4 md:flex-col md:w-[710px] md:pt-4 sm:mr-0 md:mr-0 lg:mr-0 "}>
        <div className={page === 'home' ? 'max-w-[452px] sm:max-w-full md:max-w-full' : 'w-[540px] sm:w-full md:w-full lg:w-[460px]'}>
          { page === 'home' ?
            <div onClick={() => dispatch(showPreview(false))} className={`flex bg-${theme} absolute top-[8px] right-[8px] p-1 rounded-[3px] cursor-pointer`}>
              <span className="icon-[la--times] text-white font-extrabold w-[17px] h-[17px]"></span>
            </div> : null
          }

          <div className='p-1 bg-[#eceef0] max-w-full'>
            <img className={page === 'home' ? 'w-[444px] h-[444px] object-contain 2xs:h-[200px] xs:h-[300px] sm:max-w-full sm:m-auto md:m-auto' : 'w-[444px] h-[444px] object-contain 2xs:h-[200px] xs:h-[300px] m-auto sm:max-w-full sm:m-auto md:m-auto'} src={mainImg} alt="" />
          </div>
    
          <div className='relative flex items-center mt-4 overflow-x-auto gap-x-3'>
            {sliderData.map(img => {
              return ( 
                page === 'home' 
                
                ? <img key={nanoid()} onClick={() => selectImgOnSlide(img)} className={img.index === countSlide ? `max-w-[80px] 2xs:max-w-[75px] xs:max-w-[95px] sm:max-w-[115px] md:max-w-[160px] object-contain cursor-pointer border border-${theme}` : '2xs:max-w-[75px] xs:max-w-[95px] sm:max-w-[115px] max-w-[80px] md:max-w-[160px] object-contain cursor-pointer'} src={img.slideImg} alt="" />
                
                : <img key={nanoid()} onClick={() => selectImgOnSlide(img)} className={img.index === countSlide ? `max-h-[98px] 2xs:max-w-[75px] xs:max-w-[95px] sm:max-h-[130px] sm:max-w-[130px] md:max-w-[133px] md:max-h-[133px] object-contain cursor-pointer border border-${theme}` : '2xs:max-w-[75px] xs:max-w-[95px] sm:max-h-[130px] sm:max-w-[133px] max-h-[98px] md:max-w-[133px] md:max-h-[133px] object-contain cursor-pointer'} src={img.slideImg} alt="" />
              )
            })}
            <button onClick={() => selectImgOnArrow('left')} className='absolute flex items-center justify-center left-[3px] text-white bg-white w-[28px] h-[28px] shadow-default'><span className="icon-[la--angle-left] text-secondary-color"></span></button>
            <button onClick={() => selectImgOnArrow('right')} className='absolute flex items-center justify-center right-[5px] text-white bg-white w-[28px]  h-[28px] shadow-default'><span className="icon-[la--angle-right] text-secondary-color"></span></button>
          </div>
        </div>
        <div className='sm:mt-6 md:mt-6'>
          <h2 className='font-Roboto font-medium text-[1.8rem] '>MEN'S ADIDAS COURTSMASH</h2>
          <div className="flex items-center gap-x-2 mt-[.1rem]">
          <div className='flex gap-x-1'>
            <span className="h-[16px] icon-[emojione--star]"></span>
            <span className="h-[16px] icon-[emojione--star]"></span>
            <span className="h-[16px] icon-[emojione--star]"></span>
            <span className="h-[16px] icon-[emojione--star]"></span>
            <span className="h-[16px] icon-[emojione--star]"></span>
          </div>
          <span className="text-Poppins text-[14px] text-[#687188]">{`332 Reviews`}</span>
        </div>
        <ul className='mt-4 leading-[33px] mb-3'>
          <li className='flex font-medium font-Poppins gap-x-3'>Availability:<span className='text-[#08b54c]'>In Stock</span></li>
          <li className='flex font-Poppins gap-x-3'><span className='font-medium'>Brand:</span><span className=''>Bata</span></li>
          <li className='flex font-Poppins gap-x-3'><span className='font-medium'>Category:</span><span className=''>Clothing</span></li>
          <li className='flex font-Poppins gap-x-3'><span className='font-medium'>SKU:</span><span className=''>BE45VGRT</span></li>
        </ul>
        <div className='flex items-center gap-x-2 font-Roboto'>
          <span className='line-through text-light-gray-price text-[16px] font-medium'>&#36;5000.00</span>
          <span className={`text-[1.4rem] font-semibold text-${theme}`}>&#36;4500.00</span>
          <div className={`relative bg-${theme} flex items-center justify-center w-[38px] h-[24px] text-white text-[12px] ml-2 z-[10] `}>
            -30&#37;
            <div className={`absolute bg-${theme} left-[-4px] top-[7px] w-[18px] h-[13px] translate rotate-[45deg] z-[-1]`}></div>
          </div>
        </div>
        <p className='font-Poppins text-[16px] max-w-[450px] text-[#18181b] py-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim exercitationem quaerat....</p>
        <div>
          <ProductSizeComponent theme={theme} />
          <ProductColorComponent theme={theme} />
          <ProductQuantityComponent />
          
          <div className={page === "home" ? 'flex border-b-[1px] gap-x-3 pb-5 2xs:flex-col 2xs:max-w-[175px] 2xs:gap-y-4 xs:flex-col xs:max-w-[175px] xs:gap-y-4' : "flex border-b-[1px] gap-x-3 pb-5 w-[566px] 2xs:flex-col 2xs:max-w-[175px] 2xs:w-full 2xs:gap-y-4 xs:flex-col xs:max-w-[175px] xs:gap-y-4 xs:w-full sm:w-full md:w-full lg:w-[450px]"}>
            <button className={`flex items-center gap-x-3 bg-${theme} text-white border border-${theme} text-Poppins font-medium py-[10px] px-6 rounded-[4px] text-[15px] hover:bg-transparent hover:text-${theme} transition duration-[.5s] ease group`}>
              <span className={`icon-[cil--cart]  text-white items-center h-[16px] w-[16px] transition duration-[.5s] ease group-hover:text-${theme} transition duration-[.5s] ease`}></span> ADD TO CART
            </button>
            
            <button className={`flex items-center gap-x-3 bg-white text-${theme} border border-${theme} text-Poppins font-medium py-[10px] px-6 rounded-[4px] text-[15px] hover:bg-${theme} hover:text-white transition duration-[.5s] ease group`}>
              <span className={`icon-[teenyicons--heart-outline] text-${theme} w-[16px] h-[16px] group-hover:text-white transition duration-[.5s] ease`}></span>WISHLIST
            </button>
          </div>
          
          <div className='flex mt-4 gap-x-3'>
            <button className='flex  border-[1px] rounded-full p-[6px] hover:bg-[#e9e4e4] transition duration-[.3s]'>
              <span className="icon-[la--facebook-f] w-[17px] h-[17px]"></span>
            </button>
            
            <button className='flex  border-[1px] rounded-full p-[6px] hover:bg-[#e9e4e4] transition duration-[.3s]'>
              <span className="icon-[pajamas--twitter] w-[17px] h-[17px]"></span>
            </button>
            
            <button className='flex  border-[1px] rounded-full p-[6px] hover:bg-[#e9e4e4] transition duration-[.3s]'>
              <span className="icon-[la--instagram] w-[17px] h-[17px]"></span>
            </button>
          </div>
        </div>
        </div>
      </div>
  )
}; 