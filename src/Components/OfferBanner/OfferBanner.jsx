import offerBannerImg from '../../Assets/home-page-banner-offer.jpg'

export default function OfferBanner() {
  return (
    <section className='max-w-[1120px] m-auto'>
      <img src={offerBannerImg} alt="offer-banner" />
    </section>
  )
}