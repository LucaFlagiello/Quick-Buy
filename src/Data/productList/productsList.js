import watch1Img from '../../Assets/apple-watch.png'
import watch2Img from '../../Assets/watch2.png'
import watch3Img from '../../Assets/watch3.png'
import phone1Img from '../../Assets/phone-1.png'
import phone2Img from '../../Assets/phone-2.png'
import phone3Img from '../../Assets/phone-3.png'
import laptop1Img from '../../Assets/laptop-1.png'
import laptop2Img from '../../Assets/laptop-2.png'
import laptop3Img from '../../Assets/laptop-3.png'
import headphone1Img from '../../Assets/headphone-1.png'
import headphone2Img from '../../Assets/headphone-2.png'
import headphone3Img from '../../Assets/headphone-3.png'
import tvSamsung from '../../Assets/tv-samsung.png'
import mousePad from '../../Assets/coverpad.png'

const productList = [
  {
    type: 'laptop',
    model: 'Dell inspire 14',
    brand: 'dell',
    originalPrice: '655.45',
    newPrice: '445.00',
    reviewsNum: '375',
    inRanking: true,
    rank: '1',
    img: laptop1Img,
    isNewArrival: false,
    isRecomended: true,
    quantity: 1,
    stock: 5
  },
  {
    type: 'laptop',
    model: 'HP Pavillon 15',
    brand: 'hp',
    originalPrice: '355.45',
    newPrice: '258.99',
    reviewsNum: '624',
    inRanking: true,
    rank: '2',
    img: laptop3Img,
    isNewArrival: true,
    isRecomended: false,
    quantity: 1,
    stock: 2
  },
  {
    type: 'laptop',
    model: 'HP Omen 13',
    brand: 'hp',
    originalPrice: '181.17',
    newPrice: '133.12',
    reviewsNum: '624',
    inRanking: true,
    rank: '3',
    img: laptop2Img,
    isNewArrival: false,
    isRecomended: true,
    quantity: 1,
    stock: 3
  },
  {
    type: 'phone',
    model: 'iPhone 11 max',
    brand: 'apple',
    originalPrice: '855.45',
    newPrice: '645.30',
    reviewsNum: '875',
    inRanking: true,
    rank: '1',
    img: phone2Img,
    isNewArrival: false,
    isRecomended: true,
    quantity: 1,
    stock: 7
  },
  {
    type: 'phone',
    model: 'Xiaomi Note 7',
    brand: 'xiaomi',
    originalPrice: '486.25',
    newPrice: '235.73',
    reviewsNum: '321',
    inRanking: true,
    rank: '2',
    img: phone1Img,
    isNewArrival: true,
    isRecomended: false,
    quantity: 1,
    stock: 10
  },
  {
    type: 'phone',
    model: 'Oppo poco f1',
    brand: 'oppo',
    originalPrice: '372.5',
    newPrice: '148.99',
    reviewsNum: '114',
    inRanking: true,
    rank: '3',
    img: phone3Img,
    isNewArrival: false,
    isRecomended: true,
    quantity: 1,
    stock: 22
  },
  {
    type: 'headphones',
    model: 'Bose Headphones',
    brand: 'bose',
    originalPrice: '486.25',
    newPrice: '235.73',
    reviewsNum: '321',
    inRanking: true,
    rank: '1',
    img: headphone1Img,
    isNewArrival: false,
    isRecomended: true,
    quantity: 1,
    stock: 13
  },
  {
    type: 'headphones',
    model: 'COWIN E7 Active',
    brand: 'cowin',
    originalPrice: '46.25',
    newPrice: '25.23',
    reviewsNum: '621',
    inRanking: true,
    rank: '2',
    img: headphone2Img,
    isNewArrival: true,
    isRecomended: true,
    quantity: 1,
    stock: 4
  },
  {
    type: 'headphones',
    model: 'Beats Headphones',
    brand: 'beats',
    originalPrice: '263.15',
    newPrice: '191.23',
    reviewsNum: '521',
    inRanking: true,
    rank: '3',
    img: headphone3Img,
    isNewArrival: false,
    isRecomended: true,
    quantity: 1,
    stock: 34
  },
  {
    type: 'watch',
    model: 'Apple Watch',
    brand: 'apple',
    originalPrice: '836.25',
    newPrice: '628.39',
    reviewsNum: '921',
    inRanking: true,
    rank: '1',
    img: watch1Img,
    isNewArrival: false,
    isRecomended: false,
    quantity: 1,
    stock: 26
  },
  {
    type: 'watch',
    model: 'Callie Smartwatch',
    brand: 'callie',
    originalPrice: '216.25',
    newPrice: '164.93',
    reviewsNum: '473',
    inRanking: true,
    rank: '2',
    img: watch2Img,
    isNewArrival: false,
    isRecomended: false,
    quantity: 1,
    stock: 7
  },
  {
    type: 'watch',
    model: 'Cruz Smartwatch',
    brand: 'cruz',
    originalPrice: '119.99',
    newPrice: '103.22',
    reviewsNum: '79',
    inRanking: true,
    rank: '3',
    img: watch3Img,
    isNewArrival: false,
    isRecomended: false,
    quantity: 1,
    stock: 11
  },   
  {
    type: 'tv',
    model: "SAMSUNG 27'' Class Curved",
    brand: 'samsung',
    originalPrice: '419.99',
    newPrice: '243.22',
    reviewsNum: '88',
    inRanking: false,
    img: tvSamsung,
    isNewArrival: true,
    isRecomended: false,
    quantity: 1,
    stock: 19
  },
  {
    type: 'mouse pad',
    model: "Anti-Fray Cloth Gaming",
    brand: 'corsair',
    originalPrice: '85.23',
    newPrice: '43.22',
    reviewsNum: '81',
    inRanking: false,
    img: mousePad,
    isNewArrival: false,
    isRecomended: true,
    quantity: 1,
    stock: 20
  },
]

export default productList;


