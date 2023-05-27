import Navbar from "./component/navbar/Navbar"
import Footer from "./component/footer/Footer"
import ContactUs from "./pages/contactUs/ContactUs"
import Home from "./pages/home/Home"
import News from "./pages/news/News"
import Register from "./pages/register/Register"
import PriceInfo from "./pages/price/PriceInfo"
import { useState } from "react"
import AyatApartment from "./pages/ayatApartment/AyatApartment.jsx"
import CmcApartment from "./pages/cmcApartment/CmcApartment.jsx"
import AyatHill from "./pages/ayatHill/AyatHill.jsx"
import CmcBusiness from "./pages/cmcBusiness/CmcBusiness.jsx"


import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import HomePortfolio from "./component/homePortfolio/HomePortfolio"
function App () {
  
   const [isHomePage, setIsHomePage] = useState(false);

  const Layout = () => {
    return (
      <div className="">

        <Navbar isHomePage={isHomePage}/>
        <Outlet/>
     <Footer/>
      </div>
    );
  }
  const router = createBrowserRouter([
  {
    path: "/",
      element: <Layout />,
      children: [
        
        {
          path: "/contactUs",
          element:<ContactUs/>,
        },
        {
          path: "/",
          element:<Home setIsHomePage={setIsHomePage} />,
        },
        {
          path: "/priceinfo",
          element:<PriceInfo/>,
        },
        {
          path: "/portfolio/ayat-hill",
          element:<AyatHill/>,
        },
        {
          path: "/portfolio/cmc-business",
          element:<CmcBusiness/>,
        },
        {
          path: "/portfolio/cmc-apartment",
          element:<CmcApartment/>,
        },
        {
          path: "/portfolio/ayat-apartment",
          element:<AyatApartment/>,
        },
        {
          path: "/register",
          element:<Register/>,
        },
        {
          path: "/news",
          element:<News/>,
        },
        {
          path: "/cards",
          element:<HomePortfolio/>,
        },
      ]
    
  },
]);
  return (
     
    <div className="" >
       <RouterProvider router={router} />
      
      </div> 
  );
}

export default App;

