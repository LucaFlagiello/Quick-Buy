export default function StarsProductReview({ starsNum }) {
  return (
    <div>
      {starsNum === 5 
      
        ? <div className="flex items-center gap-x-1">
            <span className="icon-[la--star-solid] text-[#f6bc3e]"></span>
            <span className="icon-[la--star-solid] text-[#f6bc3e]"></span>
            <span className="icon-[la--star-solid] text-[#f6bc3e]"></span>
            <span className="icon-[la--star-solid] text-[#f6bc3e]"></span>
            <span className="icon-[la--star-solid] text-[#f6bc3e]"></span>
          </div>
          
          
        : starsNum === 4
        
          ? <div className="flex items-center gap-x-1">
              <span className="icon-[la--star-solid] text-[#f6bc3e]"></span>
              <span className="icon-[la--star-solid] text-[#f6bc3e]"></span>
              <span className="icon-[la--star-solid] text-[#f6bc3e]"></span>
              <span className="icon-[la--star-solid] text-[#f6bc3e]"></span>
              <span className="icon-[la--star] text-[#f6bc3e]"></span>
            </div>
            
          : starsNum === 3
          
            ? <div className="flex items-center gap-x-1">
                <span className="icon-[la--star-solid] text-[#f6bc3e]"></span>
                <span className="icon-[la--star-solid] text-[#f6bc3e]"></span>
                <span className="icon-[la--star-solid] text-[#f6bc3e]"></span>
                <span className="icon-[la--star] text-[#f6bc3e]"></span>
                <span className="icon-[la--star] text-[#f6bc3e]"></span>
              </div>
            
            : starsNum === 2
            
              ? <div className="flex items-center gap-x-1">
                  <span className="icon-[la--star-solid] text-[#f6bc3e]"></span>
                  <span className="icon-[la--star-solid] text-[#f6bc3e]"></span>
                  <span className="icon-[la--star] text-[#f6bc3e]"></span>
                  <span className="icon-[la--star] text-[#f6bc3e]"></span>
                  <span className="icon-[la--star] text-[#f6bc3e]"></span>
                </div>
            
              : starsNum === 1 
              
                ? <div className="flex items-center gap-x-1">
                    <span className="icon-[la--star-solid] text-[#f6bc3e]"></span>
                    <span className="icon-[la--star] text-[#f6bc3e]"></span>
                    <span className="icon-[la--star] text-[#f6bc3e]"></span>
                    <span className="icon-[la--star] text-[#f6bc3e]"></span>
                    <span className="icon-[la--star] text-[#f6bc3e]"></span>
                  </div>
                  
                : null
      }
    </div>
  )
};