import productList from "../../Data/productList/productsList"
import Product from "../Product/Product";
import { useDispatch, useSelector } from "react-redux";
import { showPreview } from "../../state/productPreviewSlice";

export default function Recomended() {
  
  const theme = useSelector((state) => state.theme.value);
  const productPreviewStatus = useSelector((state) => state.productPreview);
  const dispatch = useDispatch()
  
  return (
    <section className="max-w-[1120px] py-[6rem] m-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-medium text-[2rem]">Recomended</h2>
        <span className={`text-${theme} cursor-pointer flex items-center font-medium font-Poppins text-[15px] mt-3`}>
          See more <span className="icon-[la--angle-right]"></span>
        </span>
      </div>
      <ul className="grid grid-cols-4 gap-x-[1.4rem] gap-y-5">
        {productList.map(product => {
          if(product.isRecomended) {
            return (
              <li key={product.model} className="border-[1px] border-[#dddddd] rounded-t-md">
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
                />
              </li>
            )
          } return null;
        })}
      </ul>
    </section>
  )
}
