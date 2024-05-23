import PageIndicator from "../../Components/PageIndicator/PageIndicator";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function LoginRegister({ componentPage }) {

  const theme = useSelector((state) => state.theme.value);
  
  return (
    <div className="px-4 pt-4 pb-16">
      <PageIndicator page={componentPage === 'Register' ? 'Register' : 'Login'}/>
      <section className="pt-6 max-w-[476px] m-auto">
        
        <div className="p-6 pb-10 m-auto shadow-contact">
          <div className="font-Poppins">
            { 
              componentPage === 'Register'
              
                ? <div>
                    <h2 className="font-medium font-Roboto text-[1.8rem] uppercase">Create an account</h2>
                    <p className="text-[15px]">Register here if you are a new customer</p>
                  </div>
                  
                : <div>
                    <h2 className="font-medium font-Roboto text-[1.8rem] uppercase">Login</h2>
                    <p className="text-[15px]">Login if you a a returing customer</p>
                  </div>
            }
  
            <form className="mt-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                { 
                  componentPage === 'Register'
                  
                    ?
                      <div className="mb-4">
                        <label htmlFor="name">
                          Full Name
                        <span className={`text-${theme}`}> *</span>
                        </label>
                        <input className={`outline-${theme} placeholder:text-[14px] border mt-2 py-2 pl-4 w-full rounded-sm`} type="text" id="name" placeholder="your name"/>
                      </div>
                      
                    : null
                }

                <label htmlFor="email">
                  Email Address
                  <span className={`text-${theme}`}> *</span>
                </label>
                <input className={`outline-${theme} placeholder:text-[14px] border mt-2 py-2 pl-4 w-full rounded-sm mb-4`} type="text" id="email" placeholder="example@mail.com"/>
              </div>
              
              <div>
                <label htmlFor="password">
                  Password
                  <span className={`text-${theme}`}> *</span>
                </label>
                <input className={`outline-${theme} border placeholder:text-[14px] mt-2 py-2 pl-4 w-full rounded-sm`} type="text" id="password" placeholder="type password"/>
              </div>

              { 
                componentPage === 'Register'
                
                  ?
                    <div className="mt-4">
                      <label htmlFor="confirm_password">
                        Confirm Password
                      <span className={`text-${theme}`}> *</span>
                      </label>
                      <input className={`outline-${theme} placeholder:text-[14px] border mt-2 py-2 pl-4 w-full rounded-sm`} type="text" id="confirm_password" placeholder="confirm your password"/>
                    </div>
                    
                  : null
              }

              { 
                componentPage === 'Register'
                  ? 
                    <div className="flex items-center justify-between mt-6 gap-x-2">
                      <div className="flex items-center gap-x-3">
                        <input type="checkbox" id="terms_conditions" className={`border w-[18px] h-[16px] rounded-[3px] accent-${theme}`}></input>
                        <label className="cursor-pointer" htmlFor="terms_conditions">
                          I have read and agree to the <span className={`text-${theme} cursor-pointer`}>terms &#38; conditions</span>
                        </label>
                      </div>
                    </div>
                  : 
                    <div className="flex items-center justify-between mt-6 gap-x-2">
                      <div className="flex items-center gap-x-3">
                        <input type="checkbox" id="remember_me" className={`border w-[18px] h-[16px] rounded-[3px] accent-${theme}`}></input>
                        <label className="cursor-pointer" htmlFor="remember_me">
                          Remember Me
                        </label>
                      </div>
                      <Link to={'/forgot-password'}>
                        <span className={`text-${theme} cursor-pointer`}>Forgot Password?</span>
                      </Link>
                    </div>
              }

              <button className={`w-full bg-${theme} text-white uppercase py-[7px] mt-5 rounded-md font-medium border border-${theme} transition duration-500 ease hover:text-${theme} hover:bg-white`}>{componentPage === 'Register' ? 'Create account' : 'Login'}</button>

              <div className="relative mt-4 text-center">
                <span className="relative px-2 uppercase bg-white">{componentPage === 'Register' ? 'or signup in with' : 'or login in with'}</span>
                <div className="absolute bottom-[12px] z-[-1] w-full h-[1px] bg-[#e9e4e4]"></div>
              </div>

              <div className="flex items-center justify-center gap-x-4 2xs:flex-col xs:flex-col">
                <div className="w-full">
                  <button className={`bg-[#3b5999] text-white  py-2 px-16 mt-5 rounded-[5px] font-medium border transition duration-500 ease border-[#3b5999] hover:text-[#3b5999] hover:bg-white 2xs:w-full xs:w-full`}>Facebook</button>
                </div>
                
                <div className="w-full">
                  <button className={`bg-[#d85040] text-white py-2 mt-5 rounded-[5px] font-medium border transition px-[4.6rem] duration-500 ease border-[#d85040] hover:text-[#d85040] hover:bg-white 2xs:mt-2 2xs:w-full xs:mt-2 xs:w-full`}>Google</button>
                </div>
              </div>
              
              
              {
                componentPage === 'Register'
                  ?
                    <div className="mt-4 text-center">
                      <p>
                      Already have an account?
                        <Link to={'/login'}>
                          <span className={`text-${theme} cursor-pointer`}>  Login Now</span>
                        </Link>
                      </p>
                    </div>
                  
                  :
                    <div className="mt-4 text-center">
                      <p>
                        Don't have an account?
                        <Link to={'/register'}>
                          <span className={`text-${theme} cursor-pointer`}>  Register Now</span>
                        </Link>
                      </p>
                    </div>
              }
            </form>
          </div>
        </div>
      </section>
    </div>
  )
};