import { nanoid } from "@reduxjs/toolkit";
import OrderSummary from "../../Components/OrderSummary/OrderSummary";
import PageIndicator from "../../Components/PageIndicator/PageIndicator"
import TextInput from "../../Components/TextInput/TextInput";
import { useSelector } from "react-redux"

export default function Checkout() {

  const theme = useSelector((state) => state.theme.value);
  const billingInputs = [
    {label: 'Company Name'},
    {label: 'Country/Region'},
    {label: 'Street Address'},
    {label: 'Town/City'},
    {label: 'Zip Code'},
    {label: 'Phone Number'},
    {label: 'Email Address'},
  ];

  return (
    <section className="px-4 py-6">
      <PageIndicator page={'Checkout'} pagesNumber={2} prevPage={'Shop'} prevPathPage={'/Shop/:page'}/>

      <main className="flex justify-center m-auto mt-4 gap-x-6 max-w-[1328px] gap-y-6 sm:w-full sm:flex-col md:max-w-[700px] lg:max-w-[930px]">
        <div className="flex w-[760px] gap-x-4] sm:w-full md:max-w-[335px]">
          <div className="w-full font-Poppins">
            <div className="bg-[#e9e4e4] w-full mb-5 py-2">
              <h4 className="pl-4 font-medium font-Roboto">Billing Details</h4>
            </div>
            <div>
              <div className="flex gap-x-6 2xs:flex-col xs:flex-col sm:flex-col md:flex-col">
                <TextInput inputType={'text'} theme={theme} label={'First Name'} />
                <TextInput inputType={'text'} theme={theme} label={'Last Name'} />
              </div>
              <div>
                {billingInputs.map(inputs => (
                  <TextInput key={nanoid()} inputType={'text'} theme={theme} label={inputs.label} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <OrderSummary page={'checkout'}/>
      </main>
    </section>
  )
};