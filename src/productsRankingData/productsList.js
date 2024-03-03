import watch1Img from '../Assets/apple-watch.png'
import watch2Img from '../Assets/watch2.png'
import watch3Img from '../Assets/watch3.png'
import phone1Img from '../Assets/phone-1.png'
import phone2Img from '../Assets/phone-2.png'
import phone3Img from '../Assets/phone-3.png'
import laptop1Img from '../Assets/laptop-1.png'
import laptop2Img from '../Assets/laptop-2.png'
import laptop3Img from '../Assets/laptop-3.png'
import headphone1Img from '../Assets/headphone-1.png'
import headphone2Img from '../Assets/headphone-2.png'
import headphone3Img from '../Assets/headphone-3.png'

const productList = {
  pc: [
    {
      model: 'Dell inspire 14',
      originalPrice: '655.45',
      newPrice: '445.00',
      reviewsNum: '375',
      rank: '1',
      img: laptop1Img
    },
    {
      model: 'HP Pavillon 15',
      originalPrice: '355.45',
      newPrice: '258.99',
      reviewsNum: '624',
      rank: '2',
      img: laptop2Img
    },
    {
      model: 'HP Omen 13',
      originalPrice: '181.17',
      newPrice: '133.12',
      reviewsNum: '624',
      rank: '3',
      img: laptop3Img
    }],
    phone: [
      {
        model: 'iPhone 11 max',
        originalPrice: '855.45',
        newPrice: '645.30',
        reviewsNum: '875',
        rank: '1',
        img: phone1Img
      },
      {
        model: 'Xiaomi Note 7',
        originalPrice: '486.25',
        newPrice: '235.73',
        reviewsNum: '321',
        rank: '2',
        img: phone2Img
      },
      {
        model: 'Oppo poco f1',
        originalPrice: '372.5',
        newPrice: '148.99',
        reviewsNum: '114',
        rank: '3',
        img: phone3Img
      },
    ],
    headphone: [
      {
        model: 'Bose Headphones',
        originalPrice: '486.25',
        newPrice: '235.73',
        reviewsNum: '321',
        rank: '1',
        img: headphone1Img
      },
      {
        model: 'COWIN E7 Active',
        originalPrice: '46.25',
        newPrice: '25.23',
        reviewsNum: '621',
        rank: '2',
        img: headphone2Img
      },
      {
        model: 'Beats Headphones',
        originalPrice: '263.15',
        newPrice: '191.23',
        reviewsNum: '521',
        rank: '3',
        img: headphone3Img
      },
    ],
    watch: [
      {
        model: 'Apple Watch',
        originalPrice: '836.25',
        newPrice: '628.39',
        reviewsNum: '921',
        rank: '1',
        img: watch1Img
      },
      {
        model: 'Callie Smartwatch',
        originalPrice: '216.25',
        newPrice: '164.93',
        reviewsNum: '473',
        rank: '2',
        img: watch2Img
      },
      {
        model: 'Cruz Smartwatch',
        originalPrice: '119.99',
        newPrice: '103.22',
        reviewsNum: '79',
        rank: '3',
        img: watch3Img
      },
    ],
  }

export default productList;