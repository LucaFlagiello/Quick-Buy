import PageIndicator from "../../../Components/PageIndicator/PageIndicator";
import MyAccountNavBar from "../../../Components/MyAccountNavBar/MyAccountNavBar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function ChangePassword() {
  
  const theme = useSelector((state) => state.theme.value);
  const  [inputType1, setInputType1] = useState('password');
  const  [inputType2, setInputType2] = useState('password');
  const  [inputType3, setInputType3] = useState('password');
  
  const handlePassword = (inputType) => {
    if(inputType === 'current') { 
      inputType1 === 'password' 
        ? setInputType1('text')
        : setInputType1('password')
    } else if(inputType === 'new')  {
        inputType2 === 'password' 
          ? setInputType2('text')
          : setInputType2('password')
    } else {
      inputType3 === 'password' 
          ? setInputType3('text')
          : setInputType3('password')
    }
  };

  return (
    <section className="px-4 py-6">
      <PageIndicator pagesNumber={2} prevPage={'My Account'} prevPathPage={'/my-account'} page={'Change Password'}/>

      <main className="flex gap-x-6 gap-y-4 m-auto py-6 max-w-[1138px] sm:flex-col sm:w-full md:flex-col md:w-[713px] lg:w-[935px]">
        <MyAccountNavBar page={'Change Password'} theme={theme}/> 

        <div className="w-full p-6 shadow-shop-shadow font-Poppins">
          <h4 className="font-medium font-Roboto text-[1.1rem] mb-4">Change Password</h4>
          <div className="max-w-[360px] mb-6">
            <div className="mb-4">
              <label htmlFor="current_password">
                Current Password <span className={`text-${theme}`}>*</span>
                <div className="relative">
                  <input id="current_password" className={`mt-2 h-[43px] w-full pl-4 border rounded-sm outline-${theme} placeholder:text-[14px]`} placeholder='enter current password' type={inputType1} />
                  <span onClick={() => handlePassword('current')} className="icon-[la--eye-slash] absolute right-[10px] top-[22px]"></span>
                </div>
              </label>
            </div>
            
            <div className="mb-4">  
              <label htmlFor="current_password">
                New Password <span className={`text-${theme}`}>*</span>
                <div className="relative">
                  <input id="current_password" className={`mt-2 h-[43px] w-full pl-4 border rounded-sm outline-${theme} placeholder:text-[14px]`} placeholder='enter new password' type={inputType2} />
                  <span  onClick={() => handlePassword('new')} className="icon-[la--eye-slash] absolute right-[10px] top-[22px]"></span>
                </div>
              </label>
            </div>
            
            <label htmlFor="confirm_new_password">
              Confirm New Password <span className={`text-${theme}`}>*</span>
              <div className="relative">
                <input id="confirm_new_password" className={`mt-2 h-[43px] w-full pl-4 border rounded-sm outline-${theme} placeholder:text-[14px]`} placeholder='confirm new password' type={inputType3} />
                <span onClick={() => handlePassword('confirm')} className="icon-[la--eye-slash] absolute right-[10px] top-[22px]"></span>
              </div>
            </label>
          </div>
            
          <Link to={'/my-account'}>
            <button className={`bg-${theme} text-white uppercase py-[8px] px-4 text-[15px] rounded-md font-medium border border-${theme} transition duration-500 ease hover:text-${theme} hover:bg-white`}>save changes</button>
          </Link>
        </div>
      </main>
    </section>

      
  )
};