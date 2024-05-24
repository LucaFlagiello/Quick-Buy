import PageIndicator from "../../Components/PageIndicator/PageIndicator";
import errorImg from '../../Assets/error-404.png';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Error() {

  const theme = useSelector((state) => state.theme.value);

  return (
    <section className="px-4 py-6">
      <PageIndicator page={'404'}/>

      <main className="flex justify-center mb-4">
        <div className="text-center">
          <img src={errorImg} className="w-[500px] m-auto" alt="error-img" />
          <h2 className="font-Roboto mt-4 font-medium uppercase text-[1.8rem] sm:text-[1.6rem]">the page you've requested is not available</h2>

          <Link to={'/'}>
            <button className={`uppercase bg-${theme} text-white mt-4 font-medium px-6 py-[8px] rounded-md border border-${theme} hover:text-${theme} hover:bg-white transition duration-300 ease-in-out`}>back to home</button>
          </Link>
        </div>
      </main>
    </section>
  )
};