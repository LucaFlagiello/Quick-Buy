

export default function RankingGrid() {
  return (
    <section>
      <div>
        <h2>Top Ranking</h2>
        <div className="flex    ">
          <div className="flex">
            <div className="container-img">
              <img src="" alt="watch" />
            </div> 

            <div>
              <h4>Apple Watch</h4>
              <div className="flex">
                <span>200.00</span>  
                <span className="line-through">300.45</span>  
              </div> 
              <div className="container stars number flex ">
                <div className="flex container stars">
                <span className="icon-[emojione--star]"></span>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}