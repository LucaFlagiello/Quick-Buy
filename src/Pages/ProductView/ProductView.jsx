import { nanoid } from "@reduxjs/toolkit";
import PageIndicator from "../../Components/PageIndicator/PageIndicator"
import { useState } from "react";
import { useSelector } from "react-redux";
import StarsProductReview from "../../Components/StarsProductReview/StarsProductReview";
import reviewerProfileImg from "../../Assets/client-review.png";
import RecomendedProductsList from "../../Components/RecomendedProductsList/RecomendedProductsList";
import { showPreview } from "../../state/productPreviewSlice";
import ProductPreview from "../../Components/ProductPreview/ProductPreview";
import PreviewProductComponent from "../../Components/PreviewProductComponent/PreviewProductComponent";

export default function ProductView() {
  
  const [selectedBtnName, setSelectedBtnName] = useState('Product Info');
  const theme = useSelector(state => state.theme.value);

  //Handle buttons switch with their names
  const tableBtns = [
    {
      name: 'Product Info',
      selected: selectedBtnName === 'Product Info',
    },
    {
      name: 'Question & Answer',
      selected: selectedBtnName === 'Question & Answer',
    },
    {
      name: 'Review (20)',
      selected: selectedBtnName === 'Review (20)',
    },
  ];

  const handleSelectedBtns = (btn) => {
    setSelectedBtnName(btn.name);
  };

  return (
    <section className="px-4 pt-6">
      <PageIndicator page={"Men's Adidas Courtsmash"} pagesNumber={2} prevPage={'Shop'} prevPathPage={'/Shop/:page'}/>
      <div className="flex justify-center ">
        <PreviewProductComponent page={'product-view'} />
      </div>
      
      <div className="mt-10 mb-6 max-w-[1114px] m-auto  sm:w-full md:max-w-[700px] lg:max-w-[940px]">
        <div className="flex w-full border-b gap-x-2">
          {tableBtns.map(btn => 
            <button key={nanoid()} onClick={() => handleSelectedBtns(btn)} className={btn.selected ? `px-3  py-2 font-medium border border-b-0 border-${theme} text-${theme} rounded-t cursor-pointer  font-Roboto max-w-fit xs:text-[13px]` : "px-3 py-2 font-medium border border-b-0 border-[#b2b2b2] rounded-t cursor-pointer font-Roboto max-w-fit xs:text-[13px]"}>{btn.name}
            </button>)
          }
        </div>
        
        {selectedBtnName === 'Product Info' 
          ? <div className=" xl:w-[730px] font-Poppins text-[15px] grid gap-y-4 mt-5 xs:text-[13px] 2xs:block xs:block lg:w-[670px]">
              <p className=" sm:mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est nec condimentum lorem lacus. Lectus libero in vulputate quis massa nisl risus, libero ut. Morbi praesent ipsum sed morbi turpis sed. Amet sed fames fermentum, augue dignissim. Montes, velit velit eu gravida nibh in feugiat.
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est nec condimentum lorem lacus. Lectus libero in vulputate quis massa nisl risus, libero ut. Morbi praesent ipsum sed morbi turpis sed. Amet sed fames fermentum, augue dignissim. Montes, velit velit eu gravida nibh in feugiat.
              </p>

              <div className="w-full border border-[#b2b2b2] 2xs:mt-4 xs:mt-4">
                <div className="flex border-b border-[#b2b2b2]">
                  <div className="border-r border-[#b2b2b2] px-3 py-3 min-w-[190px] 2xs:min-w-[140px]">Color</div>
                  <div className="w-full border-[#b2b2b2] px-3 py-3">Black, Brown, Red</div>
                </div>
                
                <div className="flex border-b border-[#b2b2b2]">
                  <div className="border-r border-[#b2b2b2] min-w-[190px] px-3 py-3 2xs:min-w-[140px]">Material</div>
                  <div className="border-[#b2b2b2] w-full px-3 py-3">Artificial Leather</div>
                </div>
                
                <div className="flex  border-[#b2b2b2]">
                  <div className="border-r border-[#b2b2b2] min-w-[190px] px-3 py-3 2xs:min-w-[140px]">Weight</div>
                  <div className=" border-[#b2b2b2] w-[190px] px-3 py-3">0.5kg</div>
                </div>
              </div>
            </div> 
          : selectedBtnName === 'Question & Answer' 
            ? <div className="font-Roboto">
                <h3 className="mt-6 mb-4 font-medium text-[18px]">Question about this product (3)</h3>
                <div>
                  <div className="grid grid-cols-1 pb-4 mb-4 border-b gap-y-3">
                    <div className="flex items-center gap-x-4">
                      <span className="icon-[clarity--user-line] text-[25px]"></span>

                      <div>
                        <h5 className="font-medium">Any discount?</h5>
                        <p className="font-Poppins text-[12px] text-[#7d7979]">Dr.SaifuzZ. - 27 Oct 2021</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-x-4">
                      <span className="icon-[la--headset] text-[25px]"></span>

                      <div>
                        <h5 className="font-medium">There is no discount sir</h5>
                        <p className="font-Poppins text-[12px] text-[#7d7979]">Store Admin - 27 Oct 2021</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 pb-4 border-b gap-y-3">
                    <div className="flex items-center gap-x-4">
                      <span className="icon-[clarity--user-line] text-[25px]"></span>

                      <div>
                        <h5 className="font-medium">Any discount?</h5>
                        <p className="font-Poppins text-[12px] text-[#7d7979]">Dr.SaifuzZ. - 27 Oct 2021</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-x-4">
                      <span className="icon-[la--headset] text-[25px]"></span>

                      <div>
                        <h5 className="font-medium">There is no discount sir</h5>
                        <p className="font-Poppins text-[12px] text-[#7d7979]">Store Admin - 27 Oct 2021</p>
                      </div>
                    </div>
                  </div>
                </div>

                <form className="w-full" type="submit" onSubmit={(e) => e.preventDefault()}>
                  <textarea className="w-full border rounded border-[#18181b] my-4 pl-4 pt-4 h-[130px] outline-none" placeholder="Type your question"></textarea>
                  
                  <button className={`bg-${theme} font-Poppins font-medium px-6 py-2 rounded-md text-white border border-${theme} hover:bg-white hover:text-${theme}  transition duration-500 ease hover:border border-${theme}`}>ASK QUESTION</button>
                </form>
              </div>

            : <div className="mt-6 font-Roboto">
                <div className="flex items-center gap-x-10 2xs:flex-col 2xs:items-start 2xs:gap-y-5 xs:flex-col xs:items-start xs:gap-y-5">
                  <div>
                    <span className="text-[35px] font-medium">4.9</span>
                    <span className="text-[35px]">/5</span>

                    <StarsProductReview starsNum={5}/>

                    <p className="text-[13px] text-[#9e9ea0] mt-2 font-Poppins">20 Ratings</p>
                  </div>

                  <div>
                    <div className="flex items-center font-Poppins gap-x-4">
                      <StarsProductReview starsNum={5}/>
                      <div className="relative w-[140px] bg-[#eff0f5] h-[8px] rounded">
                        <span className="absolute left-0 h-[8px] w-[20%] bg-[#faca51]"></span>
                      </div>
                      <p className="text-[14px]">18</p>
                    </div>

                    <div className="flex items-center font-Poppins gap-x-4">
                      <StarsProductReview starsNum={4}/>
                      <div className="relative w-[140px] bg-[#eff0f5] h-[8px] rounded">
                        <span className="absolute left-0 h-[8px] w-[10%] bg-[#faca51]"></span>
                      </div>
                      <p className="text-[14px]">2</p>
                    </div>
                    
                    <div className="flex items-center font-Poppins gap-x-4">
                      <StarsProductReview starsNum={3}/>
                      <div className="relative w-[140px] bg-[#eff0f5] h-[8px] rounded"></div>
                      <p className="text-[14px]">0</p>
                    </div>
                    
                    <div className="flex items-center font-Poppins gap-x-4">
                      <StarsProductReview starsNum={2}/>
                      <div className="relative w-[140px] bg-[#eff0f5] h-[8px] rounded"></div>
                      <p className="text-[14px]">0</p>
                    </div>
                    
                    <div className="flex items-center font-Poppins gap-x-4">
                      <StarsProductReview starsNum={1}/>
                      <div className="relative w-[140px] bg-[#eff0f5] h-[8px] rounded"></div>
                      <p className="text-[14px]">0</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="mb-6 font-medium font-Poppins">Product Reviews</h3>
                  <div className="pb-4 border-b">
                    <div className="flex gap-x-7">
                      <img className="max-w-[70px] max-h-[70px]" src={reviewerProfileImg} alt="reviewer-profile-img" />

                      <div className="grid grid-cols-1 gap-y-2">
                        <h5 className="font-medium">by Sadat A.</h5>
                        <StarsProductReview starsNum={5}/>
                        <p className="font-Poppins text-[12px] text-[#a1a2a3]">30 Jul 2021</p>
                        <p>
                          Lorem Ipsumin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="py-4 border-b">
                    <div className="flex gap-x-7">
                      <img className="max-w-[70px] max-h-[70px]" src={reviewerProfileImg} alt="reviewer-profile-img" />

                      <div className="grid grid-cols-1 gap-y-2">
                        <h5 className="font-medium">by Sadat A.</h5>
                        <StarsProductReview starsNum={4}/>
                        <p className="font-Poppins text-[12px] text-[#a1a2a3]">30 Jul 2021</p>
                        <p>
                          Lorem Ipsumin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        }
        
        <div className="mt-10">
          <h2 className="font-Roboto text-[1.8rem] font-medium mb-10">Related Products</h2>
          
          <RecomendedProductsList showPreview={showPreview}  />
        </div>
      </div>

      <ProductPreview />
    </section>
  )
};