import React from 'react';
import PageIndicator from "../PageIndicator/PageIndicator";
import coffeeWorkProductivity from '../../Assets/coffee-work-productivity.jpg';

export default function BannerHeroInformation({ pageComponent }) {
  return (
    <div
      className="relative h-[350px] bg-center bg-cover sm:h-[280px]"
      style={{ backgroundImage: `url(${coffeeWorkProductivity})` }}
    >
      <div className="absolute inset-0 grid items-center justify-center h-10 grid-cols-1 m-auto text-white">
        <h2 className="text-[1.8rem] uppercase text-center font-Roboto font-medium 2xs:text-[1.2rem] xs:text-[1.2rem] md:pl-4">
          {pageComponent}
        </h2>
        <PageIndicator page={pageComponent} />
      </div>
    </div>
  );
}