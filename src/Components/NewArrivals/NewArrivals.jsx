import productList from "../../Data/productsRankingData/rankingProductsList"
import NewArrivalsProduct from "./NewArrivalsProduct";
import { useSelector } from "react-redux";

export default function NewArrivals() {
  
  const theme = useSelector((state) => state.theme.value);
  
  return (
    <section className="max-w-[1120px] py-[6rem] m-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-medium text-[2rem]">New Arrivals</h2>
        <span className={`text-${theme} cursor-pointer flex items-center font-medium font-Poppins text-[15px] mt-3`}>
          See more <span className="icon-[la--angle-right]"></span>
        </span>
      </div>
      <ul className="grid grid-cols-4 gap-x-[1.2rem]">
        {productList.map(product => {
          if(product.isNewArrival) {
            return (
              <li key={product.model} className="border-[1px] border-[#dddddd] rounded-t-md">
                <NewArrivalsProduct
                  img={product.img}
                  model={product.model}
                  originalPrice={product.originalPrice}
                  newPrice={product.newPrice}
                  reviewsNum={product.reviewsNum}
                />
              </li>
            )
          } return null;
        })}
      </ul>
    </section>
  )
}
