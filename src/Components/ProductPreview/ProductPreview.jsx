import sliderImg1 from '../../Assets/img-product-preview.png'
import sliderImg2 from '../../Assets/slider-1.png'
import sliderImg3 from '../../Assets/slider-2.png'
import sliderImg4 from '../../Assets/slider-3.png'
import sliderImg5 from '../../Assets/slider-4.png'
import { useState, useEffect, useMemo } from 'react'
import { nanoid } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'

export default function ProductPreview() {
  
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

  const productSizeData = [
    {size: 'XS'},{size: 'S'}, {size: 'M'},{size: 'L'},{size: 'XL'},
  ]
    
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
    <div className='fixed top-0 left-0 flex justify-center items-center w-full h-full bg-[#00000080] z-[999999]'>
      <div className="flex p-8 bg-white rounded-[4px] gap-x-6">
        <div className='max-w-[452px]'>
          <div className='bg-[#e5e5e58c] p-1'>
            <img className= 'w-full max-h[444px]' src={mainImg} alt="" />
          </div>
    
          <div className='relative flex items-center mt-4 overflow-x-auto gap-x-3'>
            {sliderData.map(img => {
              return (
                <img key={nanoid()} onClick={() => selectImgOnSlide(img)} className={img.index === countSlide ? `max-w-[80px] object-contain cursor-pointer border border-${theme}` : 'max-w-[80px] object-contain cursor-pointer'} src={img.slideImg} alt="" />
              )
            })}
            <button onClick={() => selectImgOnArrow('left')} className='absolute flex items-center justify-center left-0 text-white shadow-md bg-white w-[28px] h-[28px] shadow-default'><span className="icon-[la--angle-left] text-secondary-color"></span></button>
            <button onClick={() => selectImgOnArrow('right')} className='absolute flex items-center justify-center right-0 text-white bg-white w-[28px]  h-[28px] shadow-default'><span className="icon-[la--angle-right] text-secondary-color"></span></button>
          </div>
        </div>
        <div>
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
        <ul className='mt-4 leading-[30px] mb-3'>
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
        <div className='penultimo div'>
          <div className='size div'>
            <h5 className='font-Roboto'>Size</h5>
            <div className='flex gap-x-1'>
              {productSizeData.map(productSize => {
                return (
                  <button key={nanoid()} className='border-[1px] border-[#e9e4e4] rounded-[3px] font-Poppins text-[12px] w-[24px] h-[23px]'>{productSize.size}</button>
                )
              })}
            </div>
          </div>
          <div className='color div'>
            <h5>Color</h5>
            <div className='flex'>
              <button className={`bg-${theme} w-[24px] h-[24px]`}></button>
              <button className='bg-white w-[24px] h-[24px]'></button>
              <button className='bg-black w-[24px] h-[24px]'></button>
            </div>
          </div>
          <div className='quantity div'>
            <h5>Quantity</h5>
            <div className='flex'>
              <button >-</button>
              <div></div>
              <button>+</button>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}