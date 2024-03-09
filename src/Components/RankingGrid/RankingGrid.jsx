import productList from '../../Data/productList/productsList'
import ProductComponent from '../RankingGrid/RankingProduct/ProductComponent'

export default function RankingGrid() {

  return (
    <section className='flex justify-center'>
      <div>
        <h2 className='mb-[2rem] text-[32px] font-medium text-Roboto'>Top Ranking</h2>
        <div className="grid grid-cols-4 gap-x-[2rem]">
          <ul className="grid grid-cols-1 gap-y-[2rem] font-Roboto"> 
            <h4 className='font-medium text-[18px]'>Watch</h4>
            {productList.map(product => {
              if(product.inRanking && product.type === 'watch') {
                return (
                  <li key={product.model}>
                    <ProductComponent 
                      model={product.model}
                      originalPrice={product.originalPrice}
                      newPrice={product.newPrice}
                      reviewsNum={product.reviewsNum}
                      rank={product.rank}
                      img={product.img}
                    />
                  </li>
                )} return null
            })}
          </ul>

          <ul className="grid grid-cols-1 gap-y-[2rem]"> 
            <h4 className='font-medium text-[18px]'>Mobile</h4>
            {productList.map(product => {
              if(product.inRanking && product.type === 'phone') {
                return (
                  <li key={product.model}>
                    <ProductComponent 
                      model={product.model}
                      originalPrice={product.originalPrice}
                      newPrice={product.newPrice}
                      reviewsNum={product.reviewsNum}
                      rank={product.rank}
                      img={product.img}
                    />
                  </li>
                )} return null
            })}
          </ul>

          <ul className="grid grid-cols-1 gap-y-[2rem]"> 
            <h4 className='font-medium text-[18px]'>Laptop</h4>
            {productList.map(product => {
              if(product.inRanking && product.type === 'laptop') {
                return (
                  <li key={product.model}>
                    <ProductComponent 
                      model={product.model}
                      originalPrice={product.originalPrice}
                      newPrice={product.newPrice}
                      reviewsNum={product.reviewsNum}
                      rank={product.rank}
                      img={product.img}
                    />
                  </li>
                )} return null
            })}
          </ul>

          <ul className="grid grid-cols-1 gap-y-[2rem]"> 
            <h4 className='font-medium text-[18px]'>Headphones</h4>
            {productList.map(product => {
              if(product.inRanking && product.type === 'headphone') {
                return (
                  <li key={product.model}>
                    <ProductComponent 
                      model={product.model}
                      originalPrice={product.originalPrice}
                      newPrice={product.newPrice}
                      reviewsNum={product.reviewsNum}
                      rank={product.rank}
                      img={product.img}
                    />
                  </li>
                )} return null
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}