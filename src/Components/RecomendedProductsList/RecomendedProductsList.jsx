import Product from "../Product/Product";
import { useSelector, useDispatch } from "react-redux";
import productList from "../../Data/productList/productsList";

export default function RecomendedProductsList({page, isProductsList , showPreview}) {


  const theme = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();
  const productPreviewStatus = useSelector((state) => state.productPreview);
  const recomendedProducts = productList.filter(prod => prod.isRecomended)

  return (
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
  )
};

