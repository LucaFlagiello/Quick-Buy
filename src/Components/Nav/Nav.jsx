import { useState } from 'react';
import { useSelector } from "react-redux";

const Nav = () => {

  const [dropSearchCategory, setdropSearchCategory] = useState(false);
  const [isMenCategorySelected, setIsMenCategorySelected] = useState(false);
  const [isWomenCategorySelected, setIsWomenCategorySelected] = useState(true);
  const [isBabiesCategorySelected, setIsBabiesCategorySelected] = useState(false);
  const [category, setCategory] = useState('Women');
  const [isMouseOnAccount, setIsMouseOnAccount] = useState(false);
  const theme = useSelector((state) => state.theme.value);

  const searchCategories = [
    {category: 'Men', selectCategory: setIsMenCategorySelected, isSelected: isMenCategorySelected}, 
    {category: 'Women', selectCategory: setIsWomenCategorySelected, isSelected: isWomenCategorySelected}, 
    {category: 'Babies', selectCategory: setIsBabiesCategorySelected, isSelected: isBabiesCategorySelected}]

  const [categories, setCategories] = useState([
    {
      category: 'Shoes',
      icon: 'icon-[la--shoe-prints]',
      isOnCategory: false,
    },
    {
      category: 'Men',
      icon: 'icon-[la--male]',
      isOnCategory: false,
      sideCategories: [
        {  
          hotSale: 'Hot sale',
          HoodiesSweatshirts: 'Hoodies $ Sweatshirts',
          tShirt: 'T-Shirt',
          menSets: "Men'Sets",
          jacket: 'Jacket',
          shoes: 'Shoes',
        },
        {
          bottoms: 'Bottoms',
          casualPants: 'Casual Pants',
          MenSleepLounge: "Men's Sleep & Lounge",
          jeans: "Jeans",
          shorts: "Shorts",
          towel: "Towel",
        },
        {
          outerwearJackets: 'Outerwear $ Jackets',
          jacket: 'Jacket',
          sweaters: 'Sweaters',
          casualFauxLeather: 'Casual Faux Leather',
          parks: 'Parks',
          jeans: 'Jeans',
        }
      ],
    },
    {
      category: 'Women',
      icon: 'icon-[la--female]',
      isOnCategory: false,
    },
    {
      category: 'Electronics',
      icon: 'icon-[la--plug]',
      isOnCategory: false,
    },
    {
      category: 'Headphones',
      icon: 'icon-[la--headphones]',
      isOnCategory: false,
    },
    {
      category: 'Watches',
      icon: 'icon-[majesticons--watch-line]',
      isOnCategory: false,
    },
    {
      category: 'Computer',
      icon: 'icon-[la--desktop]',
      isOnCategory: false,
    },
    {
      category: 'Mobile',
      icon: 'icon-[la--mobile]',
      isOnCategory: false,
    },
  ]);

  
  console.log(categories['category'])


  const changeSelectedCategory = (value) => {
    setCategory(value);
    searchCategories.map(item => item.category === value ? item.selectCategory(true) : item.selectCategory(false));
  }

  const opendropSearchCategory = () => {
    setdropSearchCategory(prevStatus => !prevStatus);
  }

  const rightArrowCategoriesAnimation = (value) => {
    let updateCategories = categories.map(item => {
      if(item.category === value) {
        return { ...item, isOnCategory: true };
      } return { ...item, isOnCategory: false };
    })
    setCategories(updateCategories);
  };

 

  return (
    <nav className={`static bg-${theme} box-border max-w-full h-[65px] flex justify-center gap-x-[4.8rem] items-center`}>
      <div className="bg-secondary-color relative flex items-center gap-x-2 h-10 px-10 py-6 rounded-[5px]">
        <span className="icon-[la--bars] text-white text-[22px]"></span>
        <h3 className='text-white font-Poppins font-medium text-md'>All categories</h3>
        <ul className='visible transition ease duration-[.2s] absolute w-full text-gray-800 text-[15px] font-Poppins bottom-0 left-0 top-14 shadow-light-shadow h-fit pt-[14px] pb-[13px] z-10'>
          {categories.map((item, i) => 
            <li value={item.category} onMouseEnter={() => rightArrowCategoriesAnimation(item.category)} onMouseLeave={() => rightArrowCategoriesAnimation('')} key={item.category} className='relative flex items-center border-b-[1px] border-dotted  gap-x-3 py-3 pl-8 hover:bg-gray-100 last:border-b-0 transition duration-[.2s]  cursor-pointer'>
              <span className={`${item.icon} text-tertiary-color text-[1.5em]`}></span>
              <span>{item.category}</span>
              <span className={item.isOnCategory ? 'absolute right-[20px] icon-[la--angle-right] transform translate-x-[3px] transition-all duration-[.4s] ease' : 'absolute right-[20px] transform transalte-x-0 icon-[la--angle-right] transition-all duration-[.4s] ease'}></span>
            </li>
          )}
          <div className={'absolute top-0 bottom-0 right-[-1000px] h-[407px] w-[1000px] border-[2px] border-[#e9e4e4] rounded-[6px] bg-white'}>




          </div>
        </ul>
      </div>

      <div className='flex h-[44px] font-Poppins'>
        <div className='bg-white relative cursor-pointer pr-0 flex  items-center  rounded-l-md justify-between min-w-[110px] text-[14px] px-5 z-10' onClick={() => opendropSearchCategory()}>
          {category} 
          
          <svg  className={dropSearchCategory ? 'transition-all duration-[0.15s] ease-in-out rotate-180' : ' transition-all duration-[0.15s] ease-in-out rotate-[360deg]'} xmlns="http://www.w3.org/2000/svg" height="1.6em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m7 10l5 5l5-5"/></svg>
          
          <ul className={dropSearchCategory ? 'opacity-1 visible absolute top-[46px] left-0 rounded-[4px] text-[13px] bg-white w-full shadow-md duration-[.2s] ease transition-drop-in transform-[50%] scale-[1] translate-y-[0] z-10' : 'absolute w-full left-0 invisible transform-[50% 0] scale-[0.75] translate-y-[-21px] ease-out z-10'}>
            {searchCategories.map(((item,i) => {
              return (
                <li key={item.category} className={item.isSelected ? 'bg-gray-200 pl-5 py-1.5 rounded-t-[4px] transition duration-[.2s] ease w-full font-semibold' : 'hover:bg-slate-100 pl-5 py-1.5 rounded-t-[4px] transition duration-[.2s] ease w-full'} onClick={(e) => changeSelectedCategory(e.target.getAttribute('value'))} value={item.category}>{item.category}</li>
              )
            }))}            
          </ul>
        </div>
        <input className='border-l pl-5 w-[24rem] border-black text-[14px] outline-none placeholder:text-[14px] placeholder:text-gray-400' type='text' placeholder='Search product...'/>
        <button className='bg-secondary-color rounded-l-none font-medium px-10 text-white font-Poppins rounded-r-[6px]'>Search</button>
      </div>
      
      <div className={`hover:bg-${theme}`}></div>
      <div className='flex mt-[6px] items-center gap-x-5'>
        <div className='grid gap-y-[2px] text-center cursor-pointer'>
          <div className='relative grid'>
            <span className="icon-[teenyicons--heart-outline]  text-white m-auto w-[28px] h-[28px]"></span>
            <span className='absolute top-[-5px] right-[2px] bg-black text-white text-[9px] font-medium rounded-full flex justify-center items-center w-[15px] h-[15px]'>3</span>
          </div>
          <span className='text-white text-[11px] font-Poppins'>Wish List</span>
        </div>
        <div className='grid gap-y-[2px] text-center cursor-pointer'>
          <div className='relative grid'>
            <span className="icon-[cil--cart]  text-white items-center h-[28px] w-[28px] "></span>
            <span className='absolute cursor-pointer top-[-5px] right-[-8px] bg-black text-white text-[9px] font-medium rounded-full flex justify-center items-center w-[15px] h-[15px]'>2</span>
          </div>
          <span className='text-white text-[11px] font-Poppins'>Cart</span>
        </div>
        <div className='grid text-center relative cursor-pointer' onMouseEnter={() => setIsMouseOnAccount(true)} onMouseLeave={() => setIsMouseOnAccount(false)}>
          <div className='grid justify-center'>
          <span className="icon-[clarity--user-line]  text-white w-[30px] h-[30px]"></span>
          </div>
          <span className='text-white text-[11px] font-Poppins'>Account</span>
          <div className='absolute h-[20px] w-[100%] bottom-[-20px]' onMouseEnter={() => setIsMouseOnAccount(true)}>
            <div className={isMouseOnAccount ? 'bg-white absolute opacity-1 transition duration-[.3s] easy  shadow-md left-[-170px] mt-[4px] px-4 pt-5 rounded-[4px] z-[10]' : ' translate-y-[20px] shadow-md left-[-170px] px-4 pt-6 absolute transition-drop-in duration-[.4s]  pointer-events-none opacity-0 z-[10'}>
              <h3 className='font-Roboto text-light-black font-medium text-[14px]'>Welcome to QUICKBUY Shop</h3>
              <div className='flex gap-x-3 justify-between mt-4'>
                <button className={`bg-${theme} font-Roboto font-medium text-[14px] text-white px-[26px] py-[4px] rounded-[4px] hover:bg-white hover:text-${theme} border-${theme} border-[1px] transition duration-[.5s] ease`}>JOIN</button>
                <button className={`font-Roboto font-medium text-[14px] border-${theme} border-[1px] rounded-[4px] px-[16px] text-${theme} hover:bg-${theme} hover:text-white transition duration-[.5s] ease`}>SIGN IN</button>
              </div>
              <ul className='font-Poppins text-light-black grid gap-y-[10px] my-4'>
                <li className={`flex items-center gap-x-2 hover:text-${theme} cursor-pointer transition duration-[.3s] ease`}>
                  <span className="icon-[la--id-card]  h-[20px] w-[20px] "></span>
                  <span className='text-[15px]'>My Account</span>
                </li>
                <li className={`flex items-center gap-x-2 hover:text-${theme} cursor-pointer transition duration-[.3s] ease`}>
                  <span className="icon-[la--gift]  h-[20px] w-[20px] "></span>
                  <span className='text-[15px] mt-[3px]'>My Order</span>
                </li>
                <li className={`flex items-center gap-x-2 hover:text-${theme} cursor-pointer transition duration-[.3s] ease`}>
                <span className="icon-[teenyicons--heart-outline] w-[18px] h-[18px]"></span>
                <span className='text-[15px] mt-[3px]'>My Wishlist</span>
                </li>
                <li className={`flex items-center gap-x-2 hover:text-${theme} cursor-pointer transition duration-[.3s] ease`}>
                  <span className="icon-[cil--cart] w-[18px] h-[18px]"></span>
                  <span className='text-[15px] mt-[3px]'>My Cart</span>
                </li>
                <li className={`flex items-center gap-x-2 hover:text-${theme} cursor-pointer transition duration-[.3s] ease`}>
                  <span className="icon-[la--power-off] w-[20px] h-[20px]"></span>
                  <span className='text-[15px]'>Log Out</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav;