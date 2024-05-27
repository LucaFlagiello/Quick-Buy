import PageIndicator from "../../../Components/PageIndicator/PageIndicator";
import MyAccountNavBar from "../../../Components/MyAccountNavBar/MyAccountNavBar";
import TextInput from "../../../Components/TextInput/TextInput";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function ProfileInformation() {
  
  const theme = useSelector((state) => state.theme.value);

  return (
    <section className="px-4 py-6">
      <PageIndicator pagesNumber={2} prevPage={'My Account'} prevPathPage={'/my-account'} page={'Profile Information'}/>

      <main className="flex gap-x-6 gap-y-4 m-auto py-6 max-w-[1138px] sm:flex-col sm:w-full md:flex-col md:w-[713px] lg:w-[935px]">
        <MyAccountNavBar page={'Profile Information'} theme={theme}/> 

        <div className="w-full p-6 shadow-shop-shadow font-Poppins">
          <h4 className="font-medium font-Roboto text-[1.1rem] mb-4">Profile Information</h4>
          <div>

            <div className="flex gap-x-6 sm:flex-col">
              <TextInput label={'First Name'} inputType={'text'} theme={theme}/>
              <TextInput label={'Last Name'} inputType={'text'} theme={theme}/>
            </div>
            
            <div className="flex gap-x-6 sm:flex-col">
              <TextInput label={'Birthday'} inputType={'date'} theme={theme}/>
              <div className="w-full">
                <label htmlFor="gender">
                  Gender <span className={`text-${theme}`}>*</span>
                </label>
                <select id="gender" className="cursor-pointer w-full mt-2 pl-4 h-[43px] border rounded-sm outline-none" type="select">
                  <option value="Select gender">Select gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
                
              </div>
            </div>
            
            <div className="flex gap-x-6 sm:flex-col">
              <TextInput label={'Email Address'} theme={theme}/>
              <TextInput label={'Phone Number'} theme={theme}/>
            </div>
          </div>
            
          <Link to={'/my-account'}>
            <button className={`bg-${theme} text-white uppercase py-[8px] px-4 text-[15px] rounded-md font-medium border border-${theme} transition duration-500 ease hover:text-${theme} hover:bg-white`}>save changes</button>
          </Link>
        </div>
      </main>
    </section>

      
  )
};