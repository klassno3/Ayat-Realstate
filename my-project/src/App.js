import Navbar from "./component/navbar/Navbar"
import Footer from "./component/footer/Footer"
import ContactUs from "./pages/contactUs/ContactUs"
import Home from "./pages/home/Home"
import News from "./pages/news/News"
import Portfolio from "./pages/portfolio/Portfoio.jsx"
import Register from "./pages/register/Register"
import PriceInfo from "./pages/price/PriceInfo"
import { useState } from "react"
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
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
          path: "/portfolio",
          element:<Portfolio/>,
        },
        {
          path: "/register",
          element:<Register/>,
        },
        {
          path: "/news",
          element:<News/>,
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
