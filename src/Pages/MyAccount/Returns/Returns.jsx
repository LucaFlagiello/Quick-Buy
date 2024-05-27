import PageIndicator from "../../../Components/PageIndicator/PageIndicator";
import MyAccountNavBar from "../../../Components/MyAccountNavBar/MyAccountNavBar";
import { useSelector } from "react-redux"
import productList from "../../../Data/productList/productsList";

export default function Returns() {

  const theme = useSelector((state) => state.theme.value);
  
  return (
    <section className="px-4 py-6">
      <PageIndicator page={'My Returns'} pagesNumber={2} prevPage={'My Account'} prevPathPage={'/my-account'}/>

      <main className="flex justify-center">
        <div className="w-[1138px] flex justify-center my-6 gap-x-6 sm:flex-col sm:w-full md:flex-col md:w-[713px] lg:w-[935px]">
          <MyAccountNavBar page={'My Returns'} theme={theme}/> 

          <div className="w-full xs:mt-6 sm:mt-6 md:mt-6">
            <div className="p-6 shadow-shop-shadow">
              <div className="grid items-center grid-cols-5 gap-y-6 font-Poppins xs:grid-cols-1 sm:grid-cols-1"> 
                <img className="w-[70px] sm:w-[150px] sm:m-auto" src={productList[6].img} alt="product-img" />
                
                <div className="text-center">
                  <h5 className="font-medium font-Roboto">{productList[6].model}</h5>
                  <p>&#36;{productList[6].newPrice}</p>
                </div>

                <div className="text-center">
                  <h5 className="font-medium font-Roboto">Order Number</h5>
                  <p>23E34RT3</p>
                </div>
                
                <div className="text-center">
                  <h5 className="font-medium font-Roboto">Status</h5>
                  <p className="text-[#08b54c]">Successfull</p>
                </div>
                
                <button className={`w-[120px] bg-${theme} text-white uppercase py-[6px] text-[15px] rounded-sm font-medium border m-auto border-${theme} transition duration-500 ease hover:text-${theme} hover:bg-white`}>View Order</button>
              </div>
            </div>            
              
              <div className="p-6 mt-6 shadow-shop-shadow">
                <div className="grid items-center justify-between grid-cols-5 gap-y-6 font-Poppins xs:grid-cols-1 sm:grid-cols-1"> 
                  <img className="w-[70px] sm:w-[150px] sm:m-auto" src={productList[3].img} alt="product-img" />
                  
                  <div className="text-center">
                    <h5 className="font-medium font-Roboto">{productList[3].model}</h5>
                    <p>&#36;{productList[3].newPrice}</p>
                  </div>

                  <div className="text-center">
                    <h5 className="font-medium font-Roboto">Order Number</h5>
                    <p>23E34RT3</p>
                  </div>
                  
                  <div className="text-center">
                    <h5 className="font-medium font-Roboto">Status</h5>
                    <p className="text-[#f6bc3e]">Processing</p>
                  </div>
                  
                  <button className={`w-[120px] bg-${theme} text-white uppercase py-[6px] text-[15px] rounded-sm m-auto font-medium border border-${theme} transition duration-500 ease hover:text-${theme} hover:bg-white`}>View Order</button>
                </div>
              </div>            
          </div>
        </div>
      </main>
    </section>
  )
};