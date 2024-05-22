import React from "react";
import PageIndicator from "../../../Components/PageIndicator/PageIndicator";
import ShopSection from "../../../Components/ShopSection/ShopSection";

export default function Shop() {
  return (
    <div className="pt-6">
        <PageIndicator page={'Shop'}/>
        <ShopSection />
    </div>
  )
};