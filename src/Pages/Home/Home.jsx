import Header from '../../Components/Header/Header'
import Nav from '../../Components/Nav/Nav'
import Hero from '../../Components/Hero/Hero'
import FeaturesArea from '../../Components/FeaturesArea/FeaturesAresa'
import RankingGrid from '../../Components/RankingGrid/RankingGrid'
import NewArrivals from '../../Components/NewArrivals/NewArrivals'
import ProductPreview from '../../Components/ProductPreview/ProductPreview'
import OfferBanner from '../../Components/OfferBanner/OfferBanner'
import Recomended from '../../Components/Recomended/Recomended'
import Download from '../../Components/Download/Download'
import Footer from '../../Components/Footer/Footer'
import Copyright from '../../Components/Copyrigth/Copyright'

const Home = () => {
  return (
    <div className='relative'>
      <Header />
      <Nav />
      <Hero />
      <FeaturesArea />
      <RankingGrid />
      <NewArrivals />
      <ProductPreview />
      <OfferBanner />
      <Recomended />
      <Download />
      <Footer />
      <Copyright />
    </div>
  )
}

export default Home;