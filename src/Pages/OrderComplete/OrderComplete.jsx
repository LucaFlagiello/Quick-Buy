import { Link } from "react-router-dom";
import PageIndicator from "../../Components/PageIndicator/PageIndicator";
import { useSelector } from "react-redux";

export default function OrderComplete() {
  const theme = useSelector((state) => state.theme.value);

  return (
    <section className="px-6 py-4">
      <PageIndicator page={'Order Complete'}/>

      <main className="flex justify-center my-[7.05rem]">
        <div className="text-center font-Poppins">
          <div className={`m-auto w-[70px] h-[70px] bg-${theme} rounded-full flex justify-center items-center`}>
            <span className="icon-[material-symbols--check] text-white text-[80px]"></span>
          </div>

          <h2 className="font-Roboto mt-4 font-medium uppercase text-[2.2rem] sm:text-[1.6rem]">Your order is complete!</h2>
          <p className="max-w-[700px] mt-2">
            Thank you for your order! Your order is being processed and will be completed within 3-6 hours. You will receive an email confirmation when your order is completed.
          </p>

          <Link to={'/Shop/page:'}>
            <button className={`uppercase bg-${theme} text-white mt-6 font-medium px-6 py-[8px] rounded-md border border-${theme} hover:text-${theme} hover:bg-white transition duration-300 ease-in-out`}>continue shopping</button>
          </Link>
        </div>
      </main>
    </section>
  )
};