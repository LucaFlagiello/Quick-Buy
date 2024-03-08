import Header from '../../Components/Header/Header'
import Nav from '../../Components/Nav/Nav'
import Hero from '../../Components/Hero/Hero'
import FeaturesArea from '../../Components/FeaturesArea/FeaturesAresa'
import RankingGrid from '../../Components/RankingGrid/RankingGrid'
import NewArrivals from '../../Components/NewArrivals/NewArrivals'
import ProductPreview from '../../Components/ProductPreview/ProductPreview'

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
    </div>
  )
}

export default Home;