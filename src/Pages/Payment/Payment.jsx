import creditCardIcon from '../../Assets/credit-card.png';
import paypalIcon from '../../Assets/paypal.png';
import cashOn from '../../Assets/cash-on.png';
import visaIcon from '../../Assets/payment-visa.png';
import mastercardIcon from '../../Assets/payment-master.png';
import expressIcon from '../../Assets/payment-express.png';
import PageIndicator from "../../Components/PageIndicator/PageIndicator";
import { useSelector } from "react-redux";
import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import TextInput from '../../Components/TextInput/TextInput';
import OrderSummary from '../../Components/OrderSummary/OrderSummary';
import { Link } from 'react-router-dom';

export default function Payment() {

  const theme = useSelector((state) => state.theme.value);
  const [paymentsMethods, setPaymentsMethods] = useState([
    {methodImage: creditCardIcon, paymentMethod: 'Credit Card', isSelected: true}, 
    {methodImage: paypalIcon, paymentMethod: 'Paypal', isSelected: false}, 
    {methodImage: cashOn, paymentMethod: 'Cash on Delivery', isSelected: false} 
  ]);  

  const handleSelectedMethods = (method) => {
    const upgradePaymentsMethods = paymentsMethods.map(card => (
      card.paymentMethod === method 
        ? { ...card, isSelected: !card.isSelected }
        : { ...card, isSelected: false }
    ));
    
    setPaymentsMethods(upgradePaymentsMethods)
  };
  
  return (
    <section className="px-4 py-6">
      <PageIndicator page={'Payment'} pagesNumber={2} prevPage={'Shop'} prevPathPage={'/Shop/:page'}/>

      <main className="flex justify-center m-auto mt-4 gap-x-10 gap-y-6 w-[1135px] sm:w-full sm:flex-col md:max-w-[710px] lg:max-w-[930px]">
        <div className="flex w-full gap-x-6 gap-y-6 sm:flex-col md:flex-col">
          <div className="w-full font-Poppins">
            <div className="bg-[#e9e4e4] w-full py-2">
              <h4 className="pl-6 font-medium font-Roboto">Select Payment Method</h4>
            </div>
            <div className="flex items-center w-full gap-x-4 sm:justify-center sm:flex-col">
              {paymentsMethods.map(method => (  
                <div key={nanoid()} className="flex gap-x-4 mt-10 font-Poppins text-[13px] sm:mt-4 sm:w-full">
                  <div onClick={() => handleSelectedMethods(method.paymentMethod)} className={method.isSelected ? `relative border border-${theme} w-[150px] justify-center rounded-md pb-2 sm:w-full` : `border w-[150px] justify-center rounded-md pb-2 cursor-pointer sm:w-full`}>
                    <div className="flex items-center h-[69px] justify-center">
                      <img src={method.methodImage} alt="payment-method-icon" />
                    </div>  
                    <p className="text-center">{method.paymentMethod}</p>
                    <div className={method.isSelected ? `absolute top-[-8px] right-[-6px] w-[20px] h-[20px] flex justify-center items-center rounded-full bg-${theme}` : 'hidden'}>
                      <span className="icon-[material-symbols--check]  text-white"></span>
                    </div>
                  </div>
                </div>
              ))}      
            </div>
            
            <div className="shadow-contact font-Poppins max-w-[660px] mt-8 px-8 pb-8 rounded-md sm:max-w-full md:max-w-full">
              { paymentsMethods[0].isSelected 
                
                ? <div className="flex items-center justify-between mb-2 md:w-full">
                    <h4 className="font-medium font-Roboto">Credit Card</h4>
                    <div className="flex gap-x-2">
                      <img className='sm:w-[50px] sm:h-[50px]' src={visaIcon} alt="visa-icon" />
                      <img className='sm:w-[50px] sm:h-[50px]' src={mastercardIcon} alt="mastercard-icon" />
                      <img className='sm:w-[50px] sm:h-[50px]' src={expressIcon} alt="express-icon" />
                    </div> 
                  </div>
                
                : paymentsMethods[1].isSelected
                
                  ? <div className="flex items-center justify-between pt-6 mb-6 md:w-full">
                      <h4 className="font-medium font-Roboto">Paypal</h4>
                      <img src={paypalIcon} alt="paypal-icon" />
                    </div>
                  
                  : <div className="flex items-center justify-between pt-6 mb-6 md:w-full">
                      <h4 className="font-medium font-Roboto">Cash on Delivery</h4>
                      <img src={cashOn} alt="cashOn-icon" />
                    </div>
              }
              
              {
                paymentsMethods[2].isSelected 
                
                ? <div>
                    <div className='flex justify-center'>
                      <p className='text-center max-w-[500px]'>
                        you can pay in cash to our courier when you receive the goods at your doorstep.
                      </p>
                    </div>
                    
                    <div className='flex justify-center'>
                      <Link to={'/order-complete'}>
                        <button className={`uppercase bg-${theme} text-white mt-4 font-medium px-6 py-[8px] rounded-md border border-${theme} hover:text-${theme} hover:bg-white transition duration-300 ease-in-out`}>Confirm Order</button>
                      </Link>
                    </div>
                  </div>
                  
                : <div>
                    <TextInput label={'Card Number'} theme={theme}/>
                    <TextInput label={'Name on Card'} theme={theme}/>

                    <div className='flex items-center gap-x-6 sm:flex-col'>
                      <TextInput label={'Expiration Date'} theme={theme} placeholder={'MM/YY'}/>
                      <TextInput label={'CVV'} theme={theme}/>
                    </div>

                    <Link to={'/order-complete'}>
                      <button className={`uppercase bg-${theme} text-white mt-6 font-medium px-6 py-[8px] rounded-md border border-${theme} hover:text-${theme} hover:bg-white transition duration-300 ease-in-out`}>Pay Now</button>
                    </Link>
                  </div>
              }
            </div>
          </div>
          
          <OrderSummary />
        </div>
      </main>
    </section>
  )
};