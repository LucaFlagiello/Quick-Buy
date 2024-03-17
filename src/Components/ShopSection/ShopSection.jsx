import { nanoid } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import ProductColorComponent from "../ProductColorComponent/ProductColorComponent";
import ProductSizeComponent from "../ProductSizeComponent/ProductSizeComponent";
import SearchCategory from "../SearchCategory/SearchCategory";
import Categories from "../../Data/navSideCategories";
import Recomended from "../Recomended/Recomended";
import ProductPreview from "../ProductPreview/ProductPreview";

export default function ShopSection() {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(800);
  const [filterSortProducts, setFilterSortProducts] = useState('');
  const [filteredTypesProducts, setFilteredTypesProducts] = useState([]);
  const [filteredBrandsProducts, setFilteredBrandsProducts] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const theme = useSelector((state) => state.theme.value);
  const rangeValues = [min, max];
  const productsTypes = [ 
    {category: 'Laptop', stock: 15,}, 
    {category: 'Phone', stock: 32,}, 
    {category: 'Watch', stock: 51,}, 
    {category: 'Headphones', stock: 7,}, 
    {category: 'Tv', stock: 10,},
  ];
  const productsBrands = [ 
    {brand:'Apple'}, 
    {brand:'Oppo'}, 
    {brand:'Xiaomi'}, 
    {brand:'Dell'}, 
    {brand:'Beats'},
  ];
 
  const onChangeEventSlider = (value) => {
    setMin(value[0]);
    setMax(value[1]);
  };
  
  let trackColor = '';
  switch (theme) {
    case 'primary-color':
      trackColor = '#FD3D57';
      break
    case 'primary-color2':
      trackColor = '#3498db';
      break
    case 'primary-color3':
      trackColor = '#1abc9c';
      break
    case 'primary-color4':
      trackColor = '#f79f1f';
      break
    default:
      trackColor = '#FD3D57';  
  };

  const filterProductType = (category) => {
    const formattedCategory = category.charAt(0).toLowerCase() + category.slice(1);
    if(!filteredTypesProducts.includes(formattedCategory)) {
      setFilteredTypesProducts([ ...filteredTypesProducts, formattedCategory ])
    } else {
      setFilteredTypesProducts(prev => prev.filter(cat => cat !== formattedCategory));
    };
  };
  
  const filterProductBrand = (category) => {
    const formattedCategory = category.charAt(0).toLowerCase() + category.slice(1);
    if(!filteredBrandsProducts.includes(formattedCategory)) {
      setFilteredBrandsProducts([ ...filteredBrandsProducts, formattedCategory ])
    } else {
      setFilteredBrandsProducts(prev => prev.filter(cat => cat !== formattedCategory));
    };
  };

  return (
    <section className="max-w-[1265px] m-auto px-4 lg:max-w-[1000px]">
      <div className="flex mt-6 gap-x-6">
        <div className={"w-[300px] max-h-[750px] p-4 bg-white shadow-shop-shadow  sm:hidden md:hidden"}>
          <h3 className="font-medium font-Roboto text-[1.3rem] mb-4">CATEGORIES</h3>
          <ul className="leading-[30px] pb-4 border-b">
            {productsTypes.map(product => {
              const formattedCategory = product.category.charAt(0).toLowerCase() + product.category.slice(1);
              const isSelected = filteredTypesProducts.includes(formattedCategory);

              return (
                <li key={nanoid()} className="flex items-center justify-between font-Poppins">
                  <div className="flex items-center cursor-pointer gap-x-2">
                    <input 
                      className={`w-[16px] h-[16px] border border-gray-300 rounded text-white accent-${theme}  cursor-pointer`} 
                      id={product.category} 
                      type="checkbox" 
                      onClick={() => filterProductType(product.category)}
                      defaultChecked={isSelected}
                    />
                    <label htmlFor={product.category} className="cursor-pointer">{product.category}</label> 
                  </div>
                  <span className="">&#x28;{product.stock}&#x29;</span>
                </li>
              )
            })}
          </ul>
          <ul className="leading-[30px] py-4 border-b">
            {productsBrands.map(product => {
              const formattedCategory = product.brand.charAt(0).toLowerCase() + product.brand.slice(1);
              const isSelected = filteredBrandsProducts.includes(formattedCategory);

              return (
                <li key={nanoid()} className="flex items-center justify-between font-Poppins">
                  <div className="flex items-center cursor-pointer gap-x-2">
                    <input 
                      className={`w-[16px] h-[16px] border  border-gray-300 rounded text-white accent-${theme} cursor-pointer`} 
                      id={product.brand} 
                      type="checkbox" 
                      onClick={() => filterProductBrand(product.brand)}
                      defaultChecked={isSelected}
                    />
                    <label htmlFor={product.brand} className="cursor-pointer">{product.brand}</label> 
                  </div>
                </li>
              )
            })}
          </ul>
          <div className="py-4 border-b">
            <h3 className="font-medium font-Roboto text-[1.3rem] mb-4">PRICE</h3>
            <Slider 
              width={300}
              value={rangeValues}
              min={1}
              max={1000}
              railStyle={{ backgroundColor: "lightgray" }}
              trackStyle={{ backgroundColor: trackColor }}
              handleStyle={{ color: "white", border: "1px solid gray", opacity: 1, boxShadow: 'none',  cursor: 'pointer' }}
              range={true}
              onChange={onChangeEventSlider}
            />
            <p className="mt-3 font-medium font-Poppins">&#36;{min} - &#36;{max}</p>
          </div>
          <div className="w-full py-4 bg-white border-b">
            <ProductSizeComponent theme={theme} page={'shop'} />
          </div>
          <div className="w-full py-4 bg-white">
            <ProductColorComponent theme={theme} page={'shop'} />
          </div>
        </div>
        <div className="w-full md:max-w-[658px] md:m-auto">
          <div className="flex items-center justify-between">
            <div className="relative flex gap-x-4">
              <button className={` bg-${theme} py-[7px] text-white w-[150px] rounded-[6px] font-Poppins font-medium border border-${theme} hover:bg-white hover:text-${theme} transition duration-500 ease lg:hidden xl:hidden`} onClick={() => setIsFilterOpen(prev => !prev)}>
                FILTER
              </button>
              <div className={isFilterOpen ? "w-[300px] max-h-[750px] p-4 bg-white shadow-shop-shadow top-[48px] z-10 sm:absolute md:absolute lg:hidden xl:hidden" : 'hidden invisible'}>
          <div className="pb-2 mb-4 border-b">
            <h3 className="font-medium font-Roboto text-[1.3rem] mb-3">SORT BY</h3>  
            <SearchCategory 
              categories={Categories} 
              page={'shop'} 
              setFilterSortProducts={setFilterSortProducts}
            />
          </div>
          <h3 className="font-medium font-Roboto text-[1.3rem] mb-4">CATEGORIES</h3>
          <ul className="leading-[30px] pb-4 border-b">
            {productsTypes.map(product => {
              const formattedCategory = product.category.charAt(0).toLowerCase() + product.category.slice(1);
              const isSelected = filteredTypesProducts.includes(formattedCategory);

              return (
                <li key={nanoid()} className="flex items-center justify-between font-Poppins">
                  <div className="flex items-center cursor-pointer gap-x-2">
                    <input 
                      className={`w-[16px] h-[16px] border border-gray-300 rounded text-white accent-${theme}  cursor-pointer`} 
                      id={product.category} 
                      type="checkbox" 
                      onClick={() => filterProductType(product.category)}
                      defaultChecked={isSelected}
                    />
                    <label htmlFor={product.category} className="cursor-pointer">{product.category}</label> 
                  </div>
                  <span className="">&#x28;{product.stock}&#x29;</span>
                </li>
              )
            })}
          </ul>
          <ul className="leading-[30px] py-4 border-b">
            {productsBrands.map(product => {
              const formattedCategory = product.brand.charAt(0).toLowerCase() + product.brand.slice(1);
              const isSelected = filteredBrandsProducts.includes(formattedCategory);

              return (
                <li key={nanoid()} className="flex items-center justify-between font-Poppins">
                  <div className="flex items-center cursor-pointer gap-x-2">
                    <input 
                      className={`w-[16px] h-[16px] border  border-gray-300 rounded text-white accent-${theme} cursor-pointer`} 
                      id={product.brand} 
                      type="checkbox" 
                      onClick={() => filterProductBrand(product.brand)}
                      defaultChecked={isSelected}
                    />
                    <label htmlFor={product.brand} className="cursor-pointer">{product.brand}</label> 
                  </div>
                </li>
              )
            })}
          </ul>
          <div className="py-4 border-b">
            <h3 className="font-medium font-Roboto text-[1.3rem] mb-4">PRICE</h3>
            <Slider 
              width={300}
              value={rangeValues}
              min={1}
              max={1000}
              railStyle={{ backgroundColor: "lightgray" }}
              trackStyle={{ backgroundColor: trackColor }}
              handleStyle={{ color: "white", border: "1px solid gray", opacity: 1, boxShadow: 'none',  cursor: 'pointer' }}
              range={true}
              onChange={onChangeEventSlider}
            />
            <p className="mt-3 font-medium font-Poppins">&#36;{min} - &#36;{max}</p>
          </div>
          <div className="w-full py-4 bg-white border-b">
            <ProductSizeComponent theme={theme} page={'shop'} />
          </div>
          <div className="w-full py-4 bg-white">
            <ProductColorComponent theme={theme} page={'shop'} />
          </div>
        </div>
            <div className="sm:hidden">  
              <SearchCategory 
                categories={Categories} 
                page={'shop'} 
                setFilterSortProducts={setFilterSortProducts}
              />
            </div>
            </div>
            <div className="flex h-[32px] gap-x-2 lg:pr-4">
              <button className={`flex bg-${theme} items-center px-[12px] rounded-[3px]`}><span className="icon-[mingcute--grid-fill] text-white"></span></button>
              <button className={`flex items-center px-[7px] border border-[#c1c1c1;] rounded-[3px]`}><span className="icon-[la--list] w-[24px] h-[24px] text-[#717171]"></span>
              </button>
           </div>
          </div>
          <Recomended 
            page={'shop'} 
            filterSortProducts={filterSortProducts}
            filterBrandsCategories={filteredTypesProducts}
            filteredBrandsProducts={filteredBrandsProducts}
            rangeValues={rangeValues}
          />
        </div>
      </div>
      <ProductPreview />
    </section>
  )
};
