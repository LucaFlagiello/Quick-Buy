import { nanoid } from '@reduxjs/toolkit';
import AboutVisionImg from '../../Assets/about-vision-img-2.jpg';
import teamFounderImg from '../../Assets/team-founder-1.jpg';
import teamLeaderImg from '../../Assets/team-teamLeader2.jpg';
import teamSeniorOfficere from '../../Assets/team-senior-officer-4.jpg';
import teamMarketingOfficer from '../../Assets/team-marketing-officer-3.jpg';
import partner1 from '../../Assets/partner1.png';
import partner2 from '../../Assets/partner2.png';
import partner3 from '../../Assets/partner3.png';
import AboutHistoryImg from '../../Assets/about-history-img.jpg';
import { useSelector } from 'react-redux';
import BannerHeroInformation from '../../Components/BannerHeroInformation/BannerHeroInformation';

export default function AboutUs() {

  const theme = useSelector((state) => state.theme.value)
  
  //Using team datas to make code more readble
  const teamDatas = [
    {
      img: teamFounderImg,
      name: 'Jane Cooper',
      role: 'Founder',
    },
    {
      img: teamLeaderImg,
      name: 'Esther Howard',
      role: 'Team Leader',
    },
    {
      img: teamSeniorOfficere,
      name: 'Kristin Watson',
      role: 'Senior Officer',
    },
    {
      img: teamMarketingOfficer,
      name: 'Arlene McCoy',
      role: 'Marketing Officer',
    },
  ];

  return (
    <section>
      <BannerHeroInformation pageComponent={'about us'} pagesNummber={1} />
    
      <div className='grid items-center m-auto justify-center px-5 mt-10  sm:max-w-[540px] md:max-w-[720px]'>
        <div className='flex justify-center m-auto gap-x-6 md:max-w-[720px] sm:max-w-[540px] sm:flex-col sm:gap-y-6 md:flex-col md:gap-y-6'>
          <div className='m-auto'>
            <h4 className={`text-${theme} font-medium font-Roboto text-[15px]`}>OUR HISTORY</h4>
            <h2 className='font-medium font-Roboto text-[1.8rem] max-w-[450px] leading-10 mt-2 sm:leading-8 sm:max-w-full sm:text-[1.3rem] md:max-w-full'>CREATIVE AND NEW FASHION
            TRENDS COLLECTION</h2>
            <p className='max-w-[700px] font-Poppins mt-5 lg:max-w-[400px]'>
              Fashion is a potent visual marker of our times,” says Caroline Stevenson, head of cultural and ... “Trend analysis of any given era will reveal society's values and aspirations.” ... The urge to creative expression runs deep
            </p>

            <div className='flex mt-4 gap-x-14 sm:gap-x-5 md:gap-x-5 lg:gap-x-6'>
              <div>
                <span className={`text-${theme} font-medium text-[2rem] sm:text-[1.6rem]`}>12</span>
                <p className='font-Poppins'>Years Exprience</p>
              </div>
              
              <div>
                <span className={`text-${theme} font-medium text-[2rem] sm:text-[1.6rem]`}>20K</span>
                <p>Happy Customer</p>
              </div>
              
              <div>
                <span className={`text-${theme} font-medium text-[2rem] sm:text-[1.6rem]`}>100&#37;</span>
                <p>Clients Satisfaction</p>
              </div>
            </div>
          </div>

          <div className='max-w-[476px] sm:max-w-full md:max-w-full'>
            <img className='w-full' src={AboutHistoryImg} alt="history-img" />
          </div>
        </div>

        <div className='flex justify-center m-auto mt-14 gap-x-10 sm:max-w-[540px] sm:flex-col-reverse sm:gap-y-6 md:max-w-[720px] md:flex-col-reverse lg:gap-x-5'>
          <div className='max-w-[476px] sm:max-w-full md:mt-4 md:max-w-full'>
            <img className='w-full' src={AboutVisionImg} alt="vision-img" />
          </div>
          
          <div>
            <h4 className={`text-${theme} font-medium font-Roboto text-[15px]`}>OUR VISION</h4>
            <h2 className='font-medium font-Roboto text-[1.9rem] max-w-[670px] leading-10 mt-2 sm:leading-8 sm:text-[1.3rem] lg:text-[1.8rem] lg:max-w-[500px]'>OUR VISION IS SIMPLE - WE EXIST TO
            ACCELERATE OUR CUSTOMERS’ PROGRESS</h2>
            <p className='max-w-[700px] font-Poppins mt-5 lg:max-w-[450px]'>
              we design and deliver our customers’ digital transformation by bringing together their vision with our industry knowledge and deep technological expertise. we design and deliver our customers’ digital transformation
            </p>

            <div className='mt-8'>
              <div className='flex items-center mb-2 gap-x-4'>
                <span className={`icon-[mdi--like-outline] text-${theme}`}></span>
                <p className='font-Poppins'>We build strong relationships</p>
              </div>
              
              <div className='flex items-center mb-2 gap-x-4'>
                <span className={`icon-[mdi--like-outline] text-${theme}`}></span>
                <p className='font-Poppins'>We encourage initiative and provide opportunity</p>
              </div>
              
              <div className='flex items-center mb-2 gap-x-4'>
                <span className={`icon-[mdi--like-outline] text-${theme}`}></span>
                <p className='font-Poppins'>We embrace change and creativity</p>
              </div>
              
              <div className='flex items-center mb-2 gap-x-4'>
                <span className={`icon-[mdi--like-outline] text-${theme}`}></span>
                <p className='font-Poppins'>We champion an environment of honesty</p>
              </div>
            </div>
          </div>
        </div>
        
          <div className='mt-14'>
            <h2 className='font-medium font-Roboto text-[1.8rem] text-center mb-6'>MEET WITH OUR TEAM</h2>
            <div className='flex gap-x-8 sm:grid sm:grid-cols-2 md:grid md:grid-cols-2 md:gap-y-5'>
              {teamDatas.map(teamMember => (
                <div key={nanoid()} className='max-w-[270px] sm:max-w-full md:max-w-full'>
                <div className='relative flex items-center justify-center group'>
                  <img className='w-full rounded-t-md' src={teamMember.img} alt="" />
                  <div className='absolute top-0 bottom-0 left-0 right-0 transition duration-400 ease rounded-t w-full h-full group-hover:bg-[#1e1d1d6b]'></div>
                    <div className='absolute flex transition opacity-0 duration-300 translate-y-0 bottom-[1px] group-hover:translate-y-[-15px]  group-hover:opacity-100 gap-x-3 ease'>
                      <span className='bg-[#3b5998] flex justify-center items-center rounded w-[24px] h-[24px] cursor-pointer'>
                        <span className="icon-[ri--facebook-fill] text-white"></span>
                      </span>
                      <span className='bg-[black] rounded flex justify-center items-center w-[24px] h-[24px] cursor-pointer'>
                        <span className="icon-[pajamas--twitter] text-white"></span>
                      </span>
                      <span className='bg-[#d53982] rounded flex justify-center items-center w-[24px] h-[24px] cursor-pointer'>
                        <span className="icon-[mdi--instagram] text-white"></span>
                      </span>
                    </div>
                </div>
                <div className='grid justify-center mt-2 text-center'>
                  <h4 className='font-medium font-Roboto text-[20px]'>{teamMember.name}</h4>
                  <p className='font-Poppins'>{teamMember.role}</p>
                </div>  
              </div>  
              ))}
            </div>
          </div>

        <div className="my-10">
          <h2 className='font-medium text-center font-Roboto text-[1.8rem]'>OUR PARTNERS</h2>
          
          <div className='flex justify-center'>  
            <div className='flex max-w-[200px]'>
              <img src={partner1} alt="partner1" />
            </div>
            
            <div className='flex max-w-[200px]'>
              <img src={partner2} alt="partner2" />
            </div>
            
            <div className='flex max-w-[200px]'>
              <img src={partner3} alt="partner3" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};