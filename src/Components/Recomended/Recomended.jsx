import { useDispatch, useSelector } from "react-redux";
import { showPreview } from "../../state/productPreviewSlice";
import productList from "../../Data/productList/productsList";
import RecomendedProductsList from "../RecomendedProductsList/RecomendedProductsList";

export default function Recomended({ page, isProductsList, pageProductsList, start, end }) {
  const theme = useSelector((state) => state.theme.value);
  const productPreviewStatus = useSelector((state) => state.productPreview);
  const dispatch = useDispatch();

  //handle render productsList error
  if(pageProductsList === undefined) {
    pageProductsList = productList.filter(prod => prod.isRecomended).slice(start, end);  
  };

  return (
    <section className={page === 'shop' ? 'max-w-[1150px] pt-10 pb-12 m-auto md:max-w-[740px] lg:max-w-[965px]' : "max-w-[1150px] pt-10 pb-12 m-auto md:max-w-[740px] lg:max-w-[965px] px-4"}>
      <div className={page === 'shop' ? 'hidden' : 'flex items-center justify-between mb-6'}>
        <h2 className="font-medium text-[2rem]">Recomended</h2>
        <span className={`text-${theme} cursor-pointer flex items-center font-medium font-Poppins text-[15px] mt-3`}>
          See more <span className="icon-[la--angle-right]"></span>
        </span>
      </div>
      
      <RecomendedProductsList 
        page={'home'}
        theme={theme}
        showPreview={showPreview}
        productPreviewStatus={productPreviewStatus}
        isProductsList={isProductsList}
        pageProductsList={pageProductsList}
        dispatch={dispatch}
      />
    </section>
  )
};
