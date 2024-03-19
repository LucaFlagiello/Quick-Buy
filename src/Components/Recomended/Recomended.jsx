import productList from "../../Data/productList/productsList"
import Product from "../Product/Product";
import { useDispatch, useSelector } from "react-redux";
import { showPreview } from "../../state/productPreviewSlice";

export default function Recomended({ page, filterSortProducts, filterBrandsCategories, rangeValues, filteredBrandsProducts, isProductsList, pageProductsList }) {
  
  const theme = useSelector((state) => state.theme.value);
  const productPreviewStatus = useSelector((state) => state.productPreview);
  const dispatch = useDispatch();
  let recomendedProducts = [];

  //Filter products
  if(filterSortProducts === 'Price Low-High') {
    recomendedProducts = [ ...pageProductsList ]
    .sort((a,b) => a.newPrice-b.newPrice);
  } else if(filterSortProducts === 'Price High-Low') {
    recomendedProducts = [ ...pageProductsList ]
    .sort((a,b) => b.newPrice-a.newPrice);
  } else {
    recomendedProducts = page === 'shop' 
      ? [ ...pageProductsList ] 
      : productList.filter(product => product.isRecomended === true) ;
  };
  //Product Type filter
  if(page === 'shop' && filterBrandsCategories.length > 0){ 
    recomendedProducts = recomendedProducts.filter(product => filterBrandsCategories.includes(product.type));
  };
  //Product Brand filter
  if(page === 'shop' && filteredBrandsProducts.length > 0){ 
    recomendedProducts = recomendedProducts.filter(product => filteredBrandsProducts.includes(product.brand));
  };
  //Product Range Price Filter
  if(page === 'shop') {
    recomendedProducts = recomendedProducts.filter(product => product.newPrice > rangeValues[0] && product.newPrice < rangeValues[1]);
  };
    
  return (
    <section className={page === 'shop' ? 'max-w-[1150px] pt-10 pb-12 m-auto md:max-w-[740px] lg:max-w-[965px]' : "max-w-[1150px] pt-10 pb-12 m-auto md:max-w-[740px] lg:max-w-[965px] px-4"}>
      <div className={page === 'shop' ? 'hidden' : 'flex items-center justify-between mb-6'}>
        <h2 className="font-medium text-[2rem]">Recomended</h2>
        <span className={`text-${theme} cursor-pointer flex items-center font-medium font-Poppins text-[15px] mt-3`}>
          See more <span className="icon-[la--angle-right]"></span>
        </span>
      </div>
      <ul className={page === 'shop' ? isProductsList ? 'grid grid-cols-1 gap-x-[1.4rem] gap-y-5 w-full 2xs:grid-cols-1 sm:m-auto sm:grid-cols-1 lg:max-w-[700px]' : 'grid grid-cols-3  gap-x-[1.4rem] gap-y-5 w-full 2xs:grid-cols-1 sm:m-auto sm:max-w-[720px] sm:grid-cols-2 md:grid-cols-3 lg:max-w-[700px]' : "grid grid-cols-4 gap-x-[1.4rem] gap-y-5 2xs:grid-cols-1 sm:m-auto sm:max-w-[720px] sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2"}>
        {recomendedProducts.map(product => {
          return (
            <li key={product.model} className={"border-[1px] border-[#dddddd] rounded-t-md"}>
              <Product
                img={product.img}
                model={product.model}
                originalPrice={product.originalPrice}
                newPrice={product.newPrice}
                reviewsNum={product.reviewsNum}
                theme={theme}
                productPreviewStatus={productPreviewStatus}
                dispatch={dispatch}
                showPreview={showPreview}
                productTag={'Hot'}
                page={page}
                isProductsList={isProductsList}
              />
            </li>
          )
        })}
      </ul>
    </section>
  )
};
