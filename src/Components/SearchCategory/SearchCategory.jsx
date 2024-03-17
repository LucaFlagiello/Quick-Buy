import { useState } from "react";

export default function SearchCategory({ page, setFilterSortProducts }) {
  const searchCategoriesData = [
    {category: 'Men', isSelected: false}, 
    {category: 'Women',  isSelected: true}, 
    {category: 'Babies', isSelected: false}
  ];
  const filterProductsData = [
    {category: 'Default sorting', isSelected: true}, 
    {category: 'Price Low-High',  isSelected: false}, 
    {category: 'Price High-Low',  isSelected: false} 
  ];

  const [dropSelectCategory, setdropSelectCategory] = useState(false);
  const [searchCategory, setSearchCategory] = useState('Women');
  const [shownFilterProduct, setShownFilterProducts] = useState('Default sorting');
  const [data, setData] = useState(page === 'shop' ? filterProductsData : searchCategoriesData);
  
  const opendropSearchCategory = () => {
    setdropSelectCategory(prevStatus => !prevStatus);
  };

  const changeSelectedCategory = (value) => {
    setShownFilterProducts(value) 
    setSearchCategory(value);
    setFilterSortProducts(value);

    let updateData = data.map(item => {
      if(item.category === value) {
        return { ...item, isSelected: true }
      } return { ...item, isSelected: false }
    })
    setData(updateData);
  };

  return (
    <div className={page === 'shop' ? 'relative flex items-center justify-between border border-[#c1c1c1] rounded-[2px] cursor-pointer pl-5 pr-2 py-2 w-[190px] font-Poppins text-[14px] sm:mb-4' : 'bg-white relative cursor-pointer pr-0 flex  items-center rounded-l-md justify-between min-w-[110px] text-[14px] px-5 z-10 border'} onClick={() => opendropSearchCategory()}>
            {page === 'shop' ? shownFilterProduct : searchCategory} 
            <svg  className={dropSelectCategory ? 'transition-all duration-[0.15s] ease-in-out rotate-180' : ' transition-all duration-[0.15s] ease-in-out rotate-[360deg]'} xmlns="http://www.w3.org/2000/svg" height="1.6em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m7 10l5 5l5-5"/></svg>
            <ul className={dropSelectCategory ? page === 'shop' ? 'absolute top-[42px] left-0 bg-white w-full shadow-md duration-[.2s] ease transition-drop-in transform-[50%] scale-[1] translate-y-[0] z-10 rounded-b-[4px]' : 'opacity-1 visible absolute top-[45px] left-0 rounded-[4px] text-[13px] bg-white w-full shadow-md duration-[.2s] ease transition-drop-in transform-[50%] scale-[1] translate-y-[0] z-10' : 'absolute w-full left-0 invisible transform-[50% 0] scale-[0.75] translate-y-[-21px] ease-out z-10'}>
              {data.map(((item) => {
                return (
                  <li key={item.category} className={item.isSelected ? 'bg-gray-200 pl-5 py-1.5 rounded-t-[4px] transition duration-[.2s] ease w-full font-semibold' : 'hover:bg-slate-100 pl-5 py-1.5 rounded-t-[4px] transition duration-[.2s] ease w-full'} onClick={(e) => changeSelectedCategory(e.target.getAttribute('value'))} value={item.category}>{item.category}</li>
                )
              }))}           
            </ul>
          </div>  
  )
};