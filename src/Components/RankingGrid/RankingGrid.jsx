import productsList from '../../productsData/productsList';
import ProductComponent from '../RankingProduct/ProductComponent';

export default function RankingGrid() {
  const pc = productsList.pc;
  const phone = productsList.phone;
  const watch = productsList.watch;
  const headphones = productsList.headphone;
  const tv = productsList.tv;

  return (
    <section className='flex justify-center'>
      <div>
        <h2 className='mb-[2rem] text-[32px] font-medium text-Roboto'>Top Ranking</h2>
        <div className="grid grid-cols-4 gap-x-[2rem]">
          <ul className="grid grid-cols-1 gap-y-[2rem] font-Roboto"> 
            <h4 className='font-medium text-[18px]'>Watch</h4>
            {watch.map(product =>
            <li key={product.model}>
            <ProductComponent 
              model={product.model}
              originalPrice={product.originalPrice}
              newPrice={product.newPrice}
              reviewsNum={product.reviewsNum}
              rank={product.rank}
              img={product.img}
            />
          </li>)}
          </ul>

          <ul className="grid grid-cols-1 gap-y-[2rem]"> 
            <h4 className='font-medium text-[18px]'>Mobile</h4>
            {phone.map(product =>
            <li key={product.model}>
            <ProductComponent 
              model={product.model}
              originalPrice={product.originalPrice}
              newPrice={product.newPrice}
              reviewsNum={product.reviewsNum}
              rank={product.rank}
              img={product.img}
            />
          </li>)}
          </ul>

          <ul className="grid grid-cols-1 gap-y-[2rem]"> 
            <h4 className='font-medium text-[18px]'>Laptop</h4>
            {pc.map(product =>
            <li key={product.model}>
            <ProductComponent 
              model={product.model}
              originalPrice={product.originalPrice}
              newPrice={product.newPrice}
              reviewsNum={product.reviewsNum}
              rank={product.rank}
              img={product.img}
            />
          </li>)}
          </ul>

          <ul className="grid grid-cols-1 gap-y-[2rem]"> 
            <h4 className='font-medium text-[18px]'>Headphones</h4>
            {headphones.map(product =>
            <li key={product.model}>
            <ProductComponent 
              model={product.model}
              originalPrice={product.originalPrice}
              newPrice={product.newPrice}
              reviewsNum={product.reviewsNum}
              rank={product.rank}
              img={product.img}
            />
          </li>)}
          </ul>
        </div>
      </div>
    </section>
  )
}