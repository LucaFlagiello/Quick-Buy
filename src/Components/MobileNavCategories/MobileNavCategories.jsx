import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import navSideCategories from '../../Data/navSideCategories';
import { Link } from "react-router-dom";

export default function MobileNavCategories ({ theme, closeLinks }) {
  const [navCategories, setNavCategories] = useState(navSideCategories);

  const handleCategorySelected = (category) => {
    const updateCategoris = navCategories.map(cat => {
      if(cat.category === category) {
        return { ...cat, isOnCategory: !cat.isOnCategory }  
      } else {
        return cat;
      }
    })
    setNavCategories(updateCategoris);
  };
  
  const handleSubCategorySelected = (categoryName, subCategoryName) => {
    const updatedCategories = navCategories.map(item => {
      const updatedSideCategories = item.sideCategories.map(subCategory => {
        if (item.category === categoryName && subCategory.headerCategory.name === subCategoryName) {
          return { ...subCategory, headerCategory: { ...subCategory.headerCategory, isSelected: !subCategory.headerCategory.isSelected } };
        } else {
          return subCategory;
        }
      });
      return { ...item, sideCategories: updatedSideCategories };
    });
    setNavCategories(updatedCategories);
  };
   
  const closeSelectedCategories = (category, subCategoryName) => {
    const updatedSubCategories = navCategories.map(item => {
      const updatedSideCategories = item.sideCategories.map(subCategory => {
        if (item.category === category && subCategory.headerCategory.name === subCategoryName) {
          return { ...subCategory, headerCategory: { ...subCategory.headerCategory, isSelected: !subCategory.headerCategory.isSelected } };
        } else {
          return subCategory;
        }
      });
      return { ...item, sideCategories: updatedSideCategories };
    });
    
    const updateCategories = updatedSubCategories.map(cat => {
      if(cat.category === category) {
        return { ...cat, isOnCategory: !cat.isOnCategory }  
      } else {
        return cat;
      }
    });
    
    setNavCategories(updateCategories);
    closeLinks();
  };
    
  
  
  return (
    <ul className={'visible transition ease duration-[.2s] absolute w-full text-gray-800 text-[15px] font-Poppins bottom-0 left-0 top-14  h-fit pt-[14px] pb-[13px] z-10 '}>
      {navCategories.map((item, i) => 
        <li key={item.category} className={item.isOnCategory ? 'border-b-[1px] overflow-hidden' : "border-b-[1px] h-[50px] overflow-hidden"}>
          <div onClick={() => handleCategorySelected(item.category)} className='flex items-center border-dotted gap-x-3 py-3 pl-8 hover:bg-gray-100 last:border-b-0 transition duration-[.2s] cursor-pointer'>
            <span className={`${item.icon} text-tertiary-color text-[1.5em]`}></span>
            <span className="text-[16px]">{item.category}</span>
            <span className={'absolute right-[20px] icon-[la--angle-down] transform translate-x-[3px] transition-all duration-[.4s] ease'}></span>
          </div>
          <div className={item.isOnCategory ? "w-full pl-[4.2rem] py-1 leading-[32px]" : "hidden"}>
            <ul> 
              {item.sideCategories.map((subCat) => (
                  <li key={nanoid()} className="relative items-center font-Roboto">
                    <div onClick={() => handleSubCategorySelected(item.category, subCat.headerCategory.name)} className="cursor-pointer">{subCat.headerCategory.name}</div>
                    <span className={subCat.headerCategory.isSelected ? "icon-[ph--minus-thin] absolute right-[16px] top-[10px] text-[#424242]" : "icon-[ph--plus-thin] absolute right-[16px] top-[10px] text-[#424242] "}></span>
                    <ul className={subCat.headerCategory.isSelected ? "pl-3 text-gray-500 font-Poppins" : 'hidden'}>
                      <Link to={"/Shop/:page"}>
                        <li onClick={() => closeSelectedCategories(item.category, subCat.headerCategory.name)} className={`cursor-pointer hover:text-${theme} transition duration-300 ease`}>{subCat.subCategory1}</li>
                      </Link>
                      
                      <Link to={"/Shop/:page"}>
                        <li onClick={() => closeSelectedCategories(item.category, subCat.headerCategory.name)} className={`cursor-pointer hover:text-${theme} transition duration-300 ease`}>{subCat.subCategory2}</li>
                      </Link>
                      
                      <Link to={"/Shop/:page"}>
                        <li onClick={() => closeSelectedCategories(item.category, subCat.headerCategory.name)} className={`cursor-pointer hover:text-${theme} transition duration-300 ease`}>{subCat.subCategory3}</li>
                      </Link>

                      <Link to={"/Shop/:page"}>
                        <li onClick={() => closeSelectedCategories(item.category, subCat.headerCategory.name)} className={`cursor-pointer hover:text-${theme} transition duration-300 ease`}>{subCat.subCategory4}</li>
                      </Link>

                      <Link to={"/Shop/:page"}>
                        <li onClick={() => closeSelectedCategories(item.category, subCat.headerCategory.name)} className={`cursor-pointer hover:text-${theme} transition duration-300 ease`}>{subCat.subCategory5}</li>
                      </Link>
                    </ul>
                  </li>
              ))}
            </ul>
          </div>
        </li>
      )}
    </ul>
  )
};