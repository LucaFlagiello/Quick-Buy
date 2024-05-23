import { useSelector } from "react-redux"
import { nanoid } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../Components/Header/Header";
import MobileNavCategories from "../MobileNavCategories/MobileNavCategories";
import productList from "../../Data/productList/productsList";
import CartProductPreview from "../CartProductsPreview/CartProductPreview";

export default function MobileNavBar() {
  const theme = useSelector((state) => state.theme.value);
  const page = useLocation();
  const [isNavLinkOpen, setIsNavLinkOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  //Search products states
  const [searchValue, setSearchValue] = useState('');
  const [updateProductList, setUpdateProductsList] = useState([]);
  
  useEffect(() => {
    if(page.pathname === '/Shopping-cart') {
      setIsCartOpen(false);    
      setIsNavLinkOpen(false);
    };
  },[page]);

  const handleProductSearch = (value) => {
    setSearchValue(value.toLowerCase());
    setUpdateProductsList(productList.filter(product => {
      let model = product.model.toLowerCase();
      return model.includes(searchValue);  
    }));
    
    if(!value) {
      setUpdateProductsList([]);
    };
  };

  const openLinks = (setLink) => {
    setIsNavLinkOpen(true);
    setLink(true);
  };
  
  const closeLinks = () => {
    setIsMenuOpen(false);
    setIsCategoriesOpen(false);
    setIsCartOpen(false);
    setIsSearchOpen(false);
    setIsNavLinkOpen(false);
    setUpdateProductsList([]);
  };

  return (
    <nav className="flex justify-center fixed bottom-0 h-[60px] bg-white border-t-[1px] w-full z-[9999999999999999] lg:hidden xl:hidden">
      <div className="flex items-center justify-between w-[600px] px-2 gap-x-3 2xs:px-5 xs:px-5 sm:px-10">
        <div onClick={() => openLinks(setIsMenuOpen)} className="grid cursor-pointer">
          <span className="icon-[basil--menu-outline] w-[24px] h-[24px] m-auto"></span>
          <span className="text-xs font-Poppins">Menu</span>
        </div>
        
        <div onClick={() => openLinks(setIsCategoriesOpen)} className="grid cursor-pointer pt-[3px]">
          <span className="icon-[bi--list-task] w-[23px] h-[23px] m-auto"></span>
          <span className="text-xs font-Poppins">Categories</span>
        </div>
        
        <div onClick={() => openLinks(setIsSearchOpen)} className="grid cursor-pointer pt-[3px]">
          <span className="icon-[carbon--search] w-[24px] h-[24px] m-auto"></span>
          <span className="text-xs font-Poppins">Search</span>
        </div>
        
        <div onClick={() => openLinks(setIsCartOpen)} className="grid cursor-pointer pt-[3px]">
          <CartProductPreview 
            mobileStyle={true}
            isCartOpen={isCartOpen}
            theme={theme}
          />
        </div>
        <span onClick={closeLinks} className={isCartOpen ? "icon-[material-symbols--close] fixed text-[23px] text-white left-[280px] z-30 top-[13px] transform translate-x-0 cursor-pointer transition duration-1000 ease" : "icon-[material-symbols--close] fixed text-[23px] text-white left-[280px] z-30 top-[12px] cursor-pointer opacity-0 invisible transform translate-x-[-400]"}></span>
      </div>

      <div onClick={closeLinks} className={isNavLinkOpen ? "fixed top-0 bottom-0 left-0 right-0 bg-[#00000080]" : ""}></div>
      <aside className={isMenuOpen ? "fixed top-0 bottom-0 left-0 bg-white w-[310px] transform translate-x-0 transition duration-500 ease" : "transform translate-x-[-500px] fixed top-0 bottom-0 left-0 w-[310px] transition duration-700 ease opacity-0"}>
        <div className={`flex items-center justify-center text-white font-Roboto font-medium h-[50px] text-[1.3rem] bg-${theme}`}>
          <h2>Menu</h2>
          <span onClick={closeLinks} className="icon-[material-symbols--close] absolute text-[23px] right-[10px] cursor-pointer"></span>
        </div>
          <Header 
            component={'mobile-menu'}
            closeLinks={closeLinks}
          />
      </aside>

      <aside className={isCategoriesOpen ? "fixed top-0 bottom-0 left-0 bg-white w-[310px] transform translate-x-0 transition duration-500 ease" : "transform translate-x-[-500px] fixed top-0 bottom-0 left-0 w-[310px] transition duration-700 ease opacity-0"}>
        <div className={`flex items-center justify-center text-white font-Roboto font-medium h-[50px] text-[1.3rem] bg-${theme}`}>
          <h2>Categories</h2>
          <span onClick={closeLinks} className="icon-[material-symbols--close] absolute text-[23px] right-[10px] cursor-pointer"></span>
        </div>
          <MobileNavCategories 
          closeLinks={closeLinks}  
          theme={theme}
          isNavLinkOpen={isNavLinkOpen}
          />
      </aside>
      
      <aside className={isSearchOpen ? "fixed top-0 bottom-0 left-0 right-0 bg-white  transform translate-y-0 transition duration-500 ease px-8 overflow-auto" : "transform translate-y-[-1200px] fixed top-0 bottom-0 left-0 right-0 transition duration-700 ease px-8"}>
        <div className={`flex items-center justify-betweebn text-white font-Roboto font-medium h-[50px] text-[1.3rem] pt-8`}>
          
          <span className="text-[13px] text-[#8a8a8a] font-Poppins font-normal ">WHAT YOU ARE LOOKING FOR?</span>
          <span onClick={closeLinks} className="icon-[material-symbols--close] absolute text-[23px] right-[10px] text-[#8a8a8a] cursor-pointer"></span>
        </div>
          
        <form action="submit" className="mt-5 pb-1 border-b-[2px]">
          <input onChange={(e) => handleProductSearch(e.target.value)} type="text" placeholder="search products..." className="relative w-full outline-none text-[18px] placeholder:text-[#8a8a8a] placeholder:text-[18px] placeholder:font-Poppins"/>
          <span onClick={(e) => e.preventDefault()} className="absolute icon-[carbon--search] right-[38px] w-[20px] h-[20px] text-[#8a8a8a] cursor-pointer mt-1"></span>
        </form>

        <div>
          <ul className="py-4">
            {updateProductList.map(product => {
              return (
                <li key={nanoid()} className="flex items-center px-6 py-4 transition duration-300 border-b cursor-pointer gap-x-8 hover:bg-gray-200 ease 2xs:gap-x-2 xs:gap-x-4">
                  <img className="w-[60px]" src={product.img} alt="product"/>
                  <div>
                    <h4 className="font-medium font-Roboto text-[1.1rem]">{product.model}</h4>
                    <div className="flex items-center font-medium gap-x-2 font-Roboto">
                      <span className={`text-${theme} `}>&#36;{product.newPrice}</span>
                      <span className="text-[14px] text-[#687188] line-through">&#36;{product.originalPrice}</span>
                    </div>  
                  </div>
                </li>
              ) 
            })}
          </ul>
        </div>
      </aside>

    </nav>
  )
};