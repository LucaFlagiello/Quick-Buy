import Header from '../../Components/Header/Header'
import Nav from '../../Components/Nav/Nav'
import Hero from '../../Components/Hero/Hero'
import FeaturesArea from '../../Components/FeaturesArea/FeaturesAresa'
import RankingGrid from '../../Components/RankingGrid/RankingGrid'
import NewArrivals from '../../Components/NewArrivals/NewArrivals'

const Home = () => {
  return (
    <div>
      <Header />
      <Nav />
      <Hero />
      <FeaturesArea />
      <RankingGrid />
      <NewArrivals />
    </div>
  )
}

export default Home;