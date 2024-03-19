import Hero from '../../Components/Hero/Hero'
import FeaturesArea from '../../Components/FeaturesArea/FeaturesAresa'
import RankingGrid from '../../Components/RankingGrid/RankingGrid'
import NewArrivals from '../../Components/NewArrivals/NewArrivals'
import ProductPreview from '../../Components/ProductPreview/ProductPreview'
import OfferBanner from '../../Components/OfferBanner/OfferBanner'
import Recomended from '../../Components/Recomended/Recomended'
import Download from '../../Components/Download/Download'
import ScrollTopBtn from '../../Components/ScrollTopBtn/ScrollTopBtn'

const Home = () => {
  return (
    <div className='relative'>
      <Hero />
      <FeaturesArea />
      <RankingGrid />
      <NewArrivals />
      <ProductPreview />
      <OfferBanner />
      <Recomended />
      <Download />
    </div>
  )
}

export default Home;