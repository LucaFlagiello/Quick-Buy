import PageIndicator from "../../Components/PageIndicator/PageIndicator"
import MyAccountNavBar from "../../Components/MyAccountNavBar/MyAccountNavBar"
import { useSelector } from "react-redux"
import productList from "../../Data/productList/productsList";
import { Link } from "react-router-dom";

export default function MyAccount() {

  const theme = useSelector((state) => state.theme.value);
  
  return (
    <section className="px-4 py-6">
      <PageIndicator page={'My Account'}/>

      <main className="flex justify-center">
        <div className="flex justify-center my-6 gap-x-6 sm:flex-col sm:w-full md:flex-col md:w-[713px] lg:w-[935px]">
          <MyAccountNavBar page={'My Account'} theme={theme}/> 

          <div className="w-full xs:mt-6 sm:mt-6 md:mt-6">
            <div className="flex gap-x-6 gap-y-6 sm:flex-col md:flex-col">
              <div className="p-6 font-Poppins w-full h-[200px] shadow-shop-shadow xs:w-full sm:w-full md:w-full">
                <div>
                  <div className="flex justify-between mb-4">
                    <h4 className='font-medium font-Roboto text-[1.1rem]'>Personal Profile</h4>
                    <Link to={'/profile-information'}>
                      <span className={`text-${theme} cursor-pointer hover:underline`}>Edit</span>
                    </Link>
                  </div>

                  <div className="leading-[26px]">
                    <h5>Russell Ahmed</h5>
                    <p>example@mail.com</p>
                    <p>(123) 456-789</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 font-Poppins w-full h-[200px] shadow-shop-shadow xs:w-full sm:w-full md:w-full">
                <div>
                  <div className="flex justify-between mb-4">
                    <h4 className='font-medium font-Roboto text-[1.1rem]'>Shipping Address</h4>
                    <Link to={'/manage-address'}>
                      <span className={`text-${theme} cursor-pointer hover:underline`}>Edit</span>
                    </Link>
                  </div>

                  <div className="leading-[26px]">
                    <h5>Ralph Bohner</h5>
                    <p className="max-w-[200px]">3891 Ranchview Dr.Richardson, California</p>
                    <p>(123) 456-789</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 mt-6 shadow-shop-shadow">  
              <div className="flex items-center w-full gap-x-4 sm:text-center sm:flex-col">
                <img className="w-[70px] sm:w-[150px]" src={productList[0].img} alt="product-img" />
                <div className="w-full ">
                  <h4 className="font-medium font-Roboto sm:text-[1.1rem]">{productList[0].model}</h4>
                  <p className={`text-${theme} font-medium sm:text-[1.1rem]`}>&#36;{productList[0].newPrice}</p>
                </div>

                  <div className="flex justify-end w-full sm:hidden">
                    <button className={`w-[150px] bg-${theme} text-white uppercase py-[6px] text-[15px] rounded-sm font-medium border border-${theme} transition duration-500 ease hover:text-${theme} hover:bg-white sm:m-auto sm:mt-4`}>View Order</button>
                  </div>  
              </div>
                
              <div className="flex items-center justify-between mt-6 gap-y-4 sm:grid sm:justify-center">
                <div className="text-center">
                  <h5 className="font-medium font-Roboto sm:text-[1.1rem]">Order Number</h5>
                  <p>23E34RT3</p>
                </div>
                
                <div className="text-center">
                  <h5 className="font-medium font-Roboto sm:text-[1.1rem]">Purchased</h5>
                  <p>01 March 2021</p>
                </div>

                <div className="text-center">
                  <h5 className="font-medium font-Roboto sm:text-[1.1rem]">Quantity</h5>
                  <p>x{productList[0].quantity}</p>
                </div>
                
                <div className="text-center">
                  <h5 className="font-medium font-Roboto sm:text-[1.1rem]">Status</h5>
                  <p className="text-[#08b54c]">Delivered</p>
                </div>
              </div>
              
              <div className="flex justify-center">
                <button className={`w-[150px] bg-${theme} text-white uppercase py-[10px] text-[15px] rounded-md font-medium border border-${theme} transition duration-500 ease hover:text-${theme} hover:bg-white sm:m-auto sm:mt-4 md:hidden lg:hidden xl:hidden 2xl:hidden`}>View Order</button>
              </div>
            </div>  
          </div>
        </div>
      </main>
    </section>
  )
};