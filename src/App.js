import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import ScrollTopChangePage from './Components/ScrollTopChangePage/ScrollTopChangePage';
import Home from "./Pages/Home/Home";
import SettingsBtn from "./Components/SettingsBtn/SettingsBtn";
import Shop from './Pages/ShoppingCart/Shop/Shop';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';
import Copyright from './Components/Copyrigth/Copyright';
import ScrollTopBtn from './Components/ScrollTopBtn/ScrollTopBtn';
import MobileNavBar from './Components/MobileNavBar/MobileNavBar';
import ShoppingCart from './Pages/ShoppingCart/ShoppingCart';
import ProductView from './Pages/ProductView/ProductView';
import AboutUs from './Pages/AboutUs/AboutUs';
import ContactUs from './Pages/ContactUs/ContactUs';
import Faq from './Pages/Faq/Faq';
import LoginRegister from './Pages/LoginRegister/LoginRegister';
import ForgotPassword from './Pages/ForgotPassword/ForgotPassword';
import Checkout from './Pages/Checkout/Checkout';
import Payment from './Pages/Payment/Payment';
import OrderComplete from './Pages/OrderComplete/OrderComplete';
import Error from './Pages/Error/Error';
import MyAccount from './Pages/MyAccount/MyAccount';
import ProfileInformation from './Pages/MyAccount/ProfileInformation/ProfileInformation';
import ManageAddress from './Pages/MyAccount/ManageAddress/ManageAddress';
import ChangePassword from './Pages/MyAccount/ChangePassword/ChangePassword';
import OrderHistory from './Pages/MyAccount/OrderHistory/OrderHistory';
import Returns from './Pages/MyAccount/Returns/Returns';
import Cancellations from './Pages/MyAccount/Cancellations/Cancellations';
import Wishlist from './Pages/MyAccount/Wishlist/Wishlist';
import NewsletterNotification from './Components/NewsletterNotification/NewsletterNotification';

/*Tailwind can't process dinamically variables changes, first it needs to see those classes somewhere in source code*/
const colorVariants = {
  primaryColor: 'hover:bg-primary-color bg-primary-color hover:text-primary-color text-primary-color border-primary-color hover:border-primary-color group-hover:text-primary-color accent-primary-color outline-primary-color',
  primaryColor2: 'hover:bg-primary-color2 bg-primary-color2 hover:text-primary-color2 text-primary-color2 border-primary-color2 hover:border-primary-color2 group-hover:text-primary-color2 accent-primary-color2 outline-primary-color2',
  primaryColor3: 'hover:bg-primary-color3 bg-primary-color3 hover:text-primary-color3 text-primary-color3 border-primary-color3 hover:border-primary-color3 group-hover:text-primary-colo3 accent-primary-color3 outline-primary-colo3',
  primaryColor4: 'hover:bg-primary-color4 bg-primary-color4 hover:text-primary-color4 text-primary-color4 border-primary-color4 hover:border-primary-color4 group-hover:text-primary-color4 accent-primary-color4 outline-primary-color4',
};

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <ScrollTopChangePage />
        <NewsletterNotification />
        <Header />
        <Nav />
        <Outlet />
        <SettingsBtn />
        <ScrollTopBtn />
        <MobileNavBar />
        <Footer />
        <Copyright />
      </>
    ),
    children: [
      {
        path: '/',
        element: <Home/>,
      },
      {
        path: '/Shop/:page',
        element: <Shop />,
      },
      {
        path: '/Shopping-cart',
        element: <ShoppingCart />,
      },
      {
        path: '/product-view',
        element: <ProductView />,
      },
      {
        path: '/about-us',
        element: <AboutUs />,
      },
      {
        path: '/contact-us',
        element: <ContactUs />,
      },
      {
        path: '/faq',
        element: <Faq />,
      },
      {
        path: '/login',
        element: <LoginRegister componentPage={'Login'}/>,
      },
      {
        path: '/register',
        element: <LoginRegister componentPage={'Register'}/>,
      },
      {
        path: '/forgot-password',
        element: <ForgotPassword />,
      },
      {
        path: '/checkout',
        element: <Checkout />,
      },
      {
        path: '/payment',
        element: <Payment />,
      },
      {
        path: '/order-complete',
        element: <OrderComplete />,
      },
      {
        path: '/404',
        element: <Error />,
      },
      {
        path: '/my-account',
        element: <MyAccount />,
      },
      {
        path: '/profile-information',
        element: <ProfileInformation />,
      },
      {
        path: '/manage-address',
        element: <ManageAddress />,
      },
      {
        path: '/change-password',
        element: <ChangePassword />,
      },
      {
        path: '/order-history',
        element: <OrderHistory />,
      },
      {
        path: '/returns',
        element: <Returns />,
      },
      {
        path: '/my-cancellations',
        element: <Cancellations />,
      },
      {
        path: '/wishlist',
        element: <Wishlist />,
      },
    ]
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
