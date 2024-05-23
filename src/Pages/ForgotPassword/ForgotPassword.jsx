import PageIndicator from "../../Components/PageIndicator/PageIndicator";
import { useSelector } from "react-redux";

export default function ForgotPassword() {
  const theme = useSelector((state) => state.theme.value);

  return (
    <section className="p-4">
      <PageIndicator page={'Forgot password'} />

      <main className="flex justify-center py-24 items font-Poppins">
        <div className="p-6 m-auto shadow-contact max-w-[476px]">
          <h2 className="uppercase font-Roboto font-medium text-[1.75rem]">reset password</h2>
          <p className="text-[15px]">Please enter your email address below to receive a link</p>

          <form className="grid mt-6" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="email">
              Email Address <span className={`text-${theme}`}>*</span>
            </label>
            <input className={`border outline-${theme} py-2 rounded-sm pl-4 mt-2 placeholder:text-[14px]`} id="email" type="text" placeholder="example@gmail.com"/>

            <button className={`w-[200px] bg-${theme} text-white uppercase py-[10px] mt-5 text-[15px] rounded-md font-medium border border-${theme} transition duration-500 ease hover:text-${theme} hover:bg-white`}>reset my password</button>
          </form>
        </div>
      </main>
    </section>
  )
};