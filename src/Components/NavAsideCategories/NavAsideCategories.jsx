import brand1Img from '../../Assets/brand-1.png';
import brand2Img from '../../Assets/brand-2.png';
import brand3Img from '../../Assets/brand-3.png';
import brand4Img from '../../Assets/brand-4.png';
import brand5Img from '../../Assets/brand-5.png';
import brand6Img from '../../Assets/brand-6.png';
import brand7Img from '../../Assets/brand-7.png';
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { nanoid } from "@reduxjs/toolkit";
import NavSubCategories from '../NavSubCategories/NavSubCategories';
import SideCategoriesBrand from "../SideCategoriesBrand/SideCategoriesBrand";
import Categories from '../../Data/navSideCategories';

export default function NavAsideCategories({ theme }) {
  const [navCategories, setNavCategories] = useState(Categories);
  const [sideCategorySelected, setSideCategorySelected] = useState('');
  const location = useLocation();
  const isSideCategoriesOpen = location.pathname === '/' ? true : false;

  const sideCategoriesBrands = [{img: brand1Img}, {img: brand2Img}, {img: brand3Img}, {img: brand4Img}, {img: brand5Img}, {img: brand6Img}, {img: brand7Img}, {img: brand1Img}, {img: brand2Img}, {img: brand3Img}, {img: brand4Img}, {img: brand5Img}, {img: brand6Img}, {img: brand7Img}];

  const rightArrowCategoriesAnimation = (value) => {
    setSideCategorySelected(value);
    let updateCategories = navCategories.map(item => {
      if(item.category === value) {
        return { ...item, isOnCategory: true , showSideContainer: true};
      } return { ...item, isOnCategory: false, showSideContainer: false };
    })
    setNavCategories(updateCategories);
  };

  return (
    <ul className={isSideCategoriesOpen ? 'visible transition ease duration-[.2s] absolute w-full text-gray-800 text-[15px] font-Poppins bottom-0 left-0 top-14 shadow-light-shadow h-fit pt-[14px] pb-[13px] z-10 sm:hidden' : 'invisible bg-white opacity-0 transition ease duration-[.3s] absolute w-full text-gray-800 text-[15px] font-Poppins bottom-[0px] left-0 top-[0px] transform translate-y-[100px] group-hover:translate-y-[58px] group-hover:opacity-100 group-hover:visible shadow-light-shadow h-fit pt-[14px] pb-[13px] z-10 sm:hidden'}>
      {navCategories.map((item, i) => 
        <li value={item.category} onMouseEnter={() => rightArrowCategoriesAnimation(item.category)} onMouseLeave={() => rightArrowCategoriesAnimation('')} key={item.category} className='flex items-center border-b-[1px] border-dotted gap-x-3 py-3 pl-8 hover:bg-gray-100 last:border-b-0 transition duration-[.2s] cursor-pointer'>
          <span className={`${item.icon} text-tertiary-color text-[1.5em]`}></span>
          <span>{item.category}</span>
          <span className={item.isOnCategory ? 'absolute right-[20px] icon-[la--angle-right] transform translate-x-[3px] transition-all duration-[.4s] ease' : 'absolute right-[20px] transform transalte-x-0 icon-[la--angle-right] transition-all duration-[.4s] ease'}></span>
          <div className={item.showSideContainer ? 'absolute top-[1px] bottom-0 right-[-1023px] h-[407px] w-[1024px] border-[2px] border-[#e9e4e4] rounded-[6px] bg-white translate-x-0 transition duration-[.4s] ease lg:w-[750px] lg:right-[-750px]': 'absolute top-[1px] bottom-0 invisible translate-x-[20px] opacity-0'}>
          <div className='absolute grid grid-cols-3 gap-y-[1rem] gap-x-[4rem] p-[1rem] px-[2.5rem] lg:gap-x-[1rem]'>
            {navCategories.map(item => {
              if(item.category === sideCategorySelected) {
                return item.sideCategories.map(list => {
                  return (
                    <ul key={nanoid()} className= 'leading-[28px]'>
                      <NavSubCategories theme={theme} list={list}/>
                    </ul>
                  )
                })
              } return null
            })} 
            <div className={sideCategorySelected ? 'absolute top-[20px] right-[-250px] grid grid-cols-2 gap-2 lg:right-[-120px]' : 'hidden'}>
              {sideCategoriesBrands.map(brand => {
                return (
                  <SideCategoriesBrand key={nanoid()} brandImg={brand.img} />  
                )
              })}
            </div>
          </div>
        </div>
      </li>
      )}
    </ul>
  )
};