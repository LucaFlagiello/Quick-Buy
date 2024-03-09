import sliderImg1 from '../../Assets/img-product-preview.png'
import sliderImg2 from '../../Assets/slider-1.png'
import sliderImg3 from '../../Assets/slider-2.png'
import sliderImg4 from '../../Assets/slider-3.png'
import sliderImg5 from '../../Assets/slider-4.png'
import { useState, useEffect, useMemo } from 'react'
import { nanoid } from '@reduxjs/toolkit'
import { useSelector, useDispatch } from 'react-redux'
import { showPreview } from '../../state/productPreviewSlice'
import { incrementCartQuantityByAmount } from '../../state/cartQuantitySlice'
import { incrementWishListQuantity } from '../../state/wishListQuantitySlice'
import ProductSizeComponent from '../ProductSizeComponent/ProductSizeComponent'
import ProductColorComponent from '../ProductColorComponent/ProductColorComponent'
import ProductQuantityComponent from '../ProductQuantityComponent/ProductQuantityComponent'

export default function ProductPreview() {
  
  const [mainImg, setMainImg] = useState(sliderImg1);
  const [countSlide, setCountSlide] = useState(1);
  const [productSizeData, setProductSizeData] = useState([
    {size: 'XS', isBtnClicked: false},{size: 'S', isBtnClicked: false}, {size: 'M', isBtnClicked: true},{size: 'L', isBtnClicked: false},{size: 'XL', isBtnClicked: false}
  ]);
  const [productColorData, setProductColorData] = useState([{isColorClicked: true},{isColorClicked: false}, {isColorClicked: false}]);
  const [productQuantity, setProductQuantity] = useState(1);
  const theme = useSelector((state) => state.theme.value);
  const productPreviewStatus =useSelector((state) => state.productPreview);
  
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
  

  const isSizeClicked = (productBtnSize) => {
    const updateSizeData = productSizeData.map(btnSize => {
      return btnSize === productBtnSize ? { ...productBtnSize, isBtnClicked: true } : { ...btnSize, isBtnClicked: false };
    });
    setProductSizeData(updateSizeData);
  }
  
  const isColorClicked = (btnColorIndex) => {
    const updateColorData = productColorData.map((btnColor, i) => {
      return i === btnColorIndex ? { ...btnColor, isColorClicked: true } : { ...btnColor, isColorClicked: false };
    });
    setProductColorData(updateColorData);
  }


  return (
    <div className={productPreviewStatus ? 'fixed top-0 left-0 flex justify-center items-center w-full h-full bg-[#00000080] z-[999999] transition duration-[.3s] ease' : 'fixed transition duration-[.3s] ease top-[-3000px]'}>
      <div className={productPreviewStatus ? "relative flex p-8 bg-white rounded-[4px] gap-x-6 transition duration-[.6s] ease" : "opacity-0 relative flex p-8 bg-white rounded-[4px] gap-x-6 transition duration-[.6s] ease"}>
        <div className='max-w-[452px]'>
          <div onClick={() => dispatch(showPreview(false))} className={`flex bg-${theme} absolute top-[8px] right-[8px] p-1 rounded-[3px] cursor-pointer`}>
            <span className="icon-[la--times] text-white font-extrabold w-[17px] h-[17px]"></span>
          </div>

          <div className='bg-[#e5e5e58c] p-1'>
            <img className= 'w-[444px] h-[444px]' src={mainImg} alt="" />
          </div>
    
          <div className='relative flex items-center mt-4 overflow-x-auto gap-x-3'>
            {sliderData.map(img => {
              return (
                <img key={nanoid()} onClick={() => selectImgOnSlide(img)} className={img.index === countSlide ? `max-w-[80px] object-contain cursor-pointer border border-${theme}` : 'max-w-[80px] object-contain cursor-pointer'} src={img.slideImg} alt="" />
              )
            })}
            <button onClick={() => selectImgOnArrow('left')} className='absolute flex items-center justify-center left-[3px] text-white bg-white w-[28px] h-[28px] shadow-default'><span className="icon-[la--angle-left] text-secondary-color"></span></button>
            <button onClick={() => selectImgOnArrow('right')} className='absolute flex items-center justify-center right-[5px] text-white bg-white w-[28px]  h-[28px] shadow-default'><span className="icon-[la--angle-right] text-secondary-color"></span></button>
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
          <ProductSizeComponent 
          theme={theme}
          isSizeClicked={isSizeClicked}
          productSizeData={productSizeData}
          />
          
          <ProductColorComponent 
          theme={theme}
          isColorClicked={isColorClicked}
          productColorData={productColorData}
          />

          <ProductQuantityComponent 
            productQuantity={productQuantity}
            setProductQuantity={setProductQuantity}
          />
          
          <div className='flex border-b-[1px] gap-x-3 pb-5'>
            <button onClick={() => dispatch(incrementCartQuantityByAmount(productQuantity))} className={`flex items-center gap-x-3 bg-${theme} text-white border border-${theme} text-Poppins font-medium py-[10px] px-6 rounded-[4px] text-[15px] hover:bg-transparent hover:text-${theme} transition duration-[.5s] ease group`}>
              <span className={`icon-[cil--cart]  text-white items-center h-[16px] w-[16px] transition duration-[.5s] ease group-hover:text-${theme} transition duration-[.5s] ease`}></span> ADD TO CART
            </button>
            
            <button onClick={() => dispatch(incrementWishListQuantity())} className={`flex items-center gap-x-3 bg-white text-${theme} border border-${theme} text-Poppins font-medium py-[10px] px-6 rounded-[4px] text-[15px] hover:bg-${theme} hover:text-white transition duration-[.5s] ease group`}>
              <span className={`icon-[teenyicons--heart-outline] text-${theme} w-[16px] h-[16px] group-hover:text-white transition duration-[.5s] ease`}></span>WISHLIST
            </button>
          </div>
          
          <div className='flex mt-4 gap-x-3'>
            <button className='flex  border-[1px] rounded-full p-[6px] hover:bg-[#e9e4e4] transition duration-[.3s]'>
              <span className="icon-[la--facebook-f] w-[17px] h-[17px]"></span>
            </button>
            
            <button className='flex  border-[1px] rounded-full p-[6px] hover:bg-[#e9e4e4] transition duration-[.3s]'>
              <span className="icon-[la--twitter] w-[17px] h-[17px]"></span>
            </button>
            
            <button className='flex  border-[1px] rounded-full p-[6px] hover:bg-[#e9e4e4] transition duration-[.3s]'>
              <span className="icon-[la--instagram] w-[17px] h-[17px]"></span>
            </button>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}