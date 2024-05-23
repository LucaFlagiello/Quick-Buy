import BannerHeroInformation from '../../Components/BannerHeroInformation/BannerHeroInformation';
import { useSelector } from 'react-redux';

export default function ContactUs() {

  const theme = useSelector((state) => state.theme.value);  

  return (
    <section>
      <BannerHeroInformation pageComponent={'Contact us'} />
      
      <main className='my-10'>
        <div className='flex justify-center px-4 gap-x-6 sm:flex-col sm:gap-y-6 sm:max-w-[550px] md:flex-col md:gap-y-6 md:max-w-[750px] m-auto'>
          <form onClick={(e) => e.preventDefault()} className='px-6 pt-4 pb-8 shadow-contact'>
            <div>
              <h2 className='uppercase font-Roboto text-[1.8rem] font-medium 2xs:text-[1.4rem] xs:text-[1.6rem]'>leave us a message</h2>
              <p className='font-Poppins text-[15px] mb-4'>Use the form below to get in touch with the sales team</p>
            </div>
            
            <div className='font-Poppins'>
              <div className='flex mb-4 gap-x-6 sm:flex-col sm:gap-y-6 md:flex-col'>
                <div>
                  <label htmlFor="first_name">
                    First Name <span className={`text-${theme}`}>*</span>
                  </label>
                  <input type="text" id='first_name' className={`w-full border outline-${theme} h-[40px] rounded-sm mt-2 text-[14px] pl-2`}/>
                </div>
                
                <div>
                  <label htmlFor="last_name">
                    Last Name <span className={`text-${theme}`}>*</span>
                  </label>
                  <input type="text" id='last_name' className={`w-full border outline-${theme} h-[40px] rounded-sm mt-2 text-[14px] pl-2`}/>
                </div>
              </div>

              <div className='mt-6'>
                <label htmlFor="email_address">
                  Email Address <span className={`text-${theme}`}>*</span>
                </label>
                <input type="text" id='email_address' className={`w-full border outline-${theme} h-[40px] rounded-sm mt-2 text-[14px] pl-2`}/>
              </div>
              
              <div className='mt-6'>
                <label htmlFor="subject">
                  Subject <span className={`text-${theme}`}>*</span>
                </label>
                <input type="text" id='subject' className={`w-full border outline-${theme} h-[40px] rounded-sm mt-2 text-[14px] pl-2`}/>
              </div>
              
              <div className='mt-6'>
                <label htmlFor="your_message">
                  Your message <span className={`text-${theme}`}>*</span>
                </label>
                <textarea id='your_message' className={`w-full border outline-${theme} h-[70px] rounded-sm mt-2 text-[14px] pl-2 pt-2`}></textarea>
              </div>

              <button className={`uppercase bg-${theme} text-white border border-${theme} rounded-[6px] font-medium py-2 px-6 mt-4 transition duration-500 ease hover:bg-white hover:border-${theme} hover:text-${theme}`} type='submit'>Send Message</button>
            </div>
          </form>
          
          <div className='px-6 py-4 shadow-contact max-w-[350px] sm:max-w-full md:max-w-full'>
            <div>
              <h3 className='font-bold font-Roboto text-[1.2rem] uppercase mb-4'>Our Store</h3>
              <div className='flex mb-3 gap-x-2'>
                <span className="text-[28px] icon-[la--map-marker]"></span>
                <p className='text-[15px] font-Poppins'>
                  7895 Dr New Albuquerue, NM 19800, nited States Of America
                </p>
              </div>
              <div className='flex items-center mb-3 gap-x-2'>
                <span className="text-[17px] icon-[la--phone]"></span>
                <p className='text-[15px] font-Poppins'>
                  +566 477 256, +566 254 575
                </p>
              </div>
              <div className='flex items-center gap-x-2'>
                <span className="text-[17px] icon-[la--envelope]"></span>
                <p className='text-[15px] font-Poppins'>
                  info@domain.com
                </p>
              </div>
              
              <div className='my-4 leading-7 font-Poppins'>
                <h3 className='font-Roboto text-[1.2rem] font-bold uppercase mb-3'>Hours of operation</h3>
                <div className='flex justify-between'>
                  <p>Saturday</p>
                  <p>12:00 PM</p>
                </div>
                <div className='flex justify-between'>
                  <p>Sunday</p>
                  <p>12:00 PM</p>
                </div>
                <div className='flex justify-between'>
                  <p>Monday</p>
                  <p>12:00 PM</p>
                </div>
                <div className='flex justify-between'>
                  <p>Tuesday</p>
                  <p>12:00 PM</p>
                </div>
                <div className='flex justify-between'>
                  <p>Wednesday</p>
                  <p>12:00 PM</p>
                </div>
                <div className='flex justify-between'>
                  <p>Thursday</p>
                  <p>12:00 PM</p>
                </div>
                <div className='flex justify-between'>
                  <p>Friday</p>
                  <p>12:00 PM</p>
                </div>
              </div>

              <div>
                <h3 className='font-bold font-Roboto text-[1.2rem] uppercase mb-3'>Careers</h3>
                <p className='font-Poppins text-[15px]'>
                  If you are interesting in emplyment opportunities at RAFCARTs. Please email us : <span className={`text-${theme} cursor-pointer`}>contact@familiar.com</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  )
};