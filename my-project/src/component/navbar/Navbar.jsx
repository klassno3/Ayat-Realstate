import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import LogoGreen from "../../images/Logo-green.svg"
import LogoWhite from "../../images/Logo-white.svg"


const Navbar = ({isHomePage}) => {
  const [ active, setActive ] = useState( false );
  
  const isActive = () => {
    window.scrollY > 0 ? setActive( true ) : setActive( false )
    
  }
  useEffect( () => {
    window.addEventListener("scroll",isActive)
  },[])
  
  const location = useLocation()
  const [ selectedTab, setSelectedTab ] = useState( "home" )
  
  useEffect( () => {
    if ( location.pathname === "/" ) {
      setSelectedTab("home")
    }
    else if ( location.pathname === "/news" ) {
      setSelectedTab("news")
    }
    else if ( location.pathname === "/contactUs" ) {
      setSelectedTab("contactUs")
    }
    else if ( location.pathname.startsWith("/portfolio")) {
      setSelectedTab("portfolio")
    }
    else if ( location.pathname === "/register" ) {
      setSelectedTab("register")
    }
    
  }, [ location.pathname ] )

  
  return (
    <div className={ active ? " bg-tertiary-100 text-secondary-100 shadow-xl z-20 fixed top-0 left-0 w-screen py-2" :
      "z-20 bg-secondary-100 text-tertiary-100 py-3 pt-4" }> 
    <div className="w-10/12 mx-auto z-30 font-sub text-lg tracking-widest" >
      
        <div className=" flex justify-between items-start">

        <div className="logo">
            <img src={ LogoGreen } alt="logop" className={ active ? "w-14 h-14" : "hidden" } />
            <img src={ LogoWhite } alt="logop" className={ active ? "hidden" : "w-14 h-14"} />
        </div>
        <div className="links flex gap-14 items-center">
 

            

              <Link to="/" onClick={() => setSelectedTab('Home')} className={`group ${
              selectedTab === 'home' ? 'font-semibold' : ''
              }` }>
              Home
              <div className={`border-b-4 border-solid opacity-0 border-primary-200 rounded-lg w-1/2 group-hover:opacity-100 ${selectedTab === 'home' ? "opacity-100" : ''}` }></div>
              </Link>
              <Link to="/news" onClick={() => setSelectedTab('aboutUs')} className={`group ${
              selectedTab === 'aboutUs' ? 'font-semibold' : ''
              }` }>
              News
              <div className={ `border-b-4 border-solid opacity-0 border-primary-200 rounded-lg w-1/2 
              group-hover:opacity-100 ${ selectedTab === 'news' ? "opacity-100" : '' }` }></div>

              </Link>
              <Link to="/contactUs" onClick={() => setSelectedTab('contactUs')} className={`group ${
              selectedTab === 'contactUs' ? 'font-semibold' : ''
              }` }>
              Contact Us
              <div className={ `border-b-4 border-solid opacity-0 border-primary-200 rounded-lg w-1/2 
              group-hover:opacity-100 ${ selectedTab === 'contactUs' ? "opacity-100" : '' }` }></div>

            </Link>
               <Link to="/portfolio/ayat-hill"  onClick={() => setSelectedTab('portfolio')}className={`group ${
              selectedTab === 'portfolio' ? 'font-semibold' : ''
              }` }>
              Portfolio
              <div className={ `border-b-4 border-solid opacity-0 border-primary-200 rounded-lg w-1/2 
              group-hover:opacity-100 ${ selectedTab === 'portfolio' ? "opacity-100" : '' }` }></div>

            </Link> 
            {/* <a  className="hover:text-red-400" href="#portfolio">Portfolio</a> */}
            
            <Link to="/register" className={ ` bg-primary-200 shadow-lg px-10 h-10 py-5 text-secondary-100 flex items-center tracking-widest  rounded-md ${ selectedTab === 'register' ? 'font-semibold' : ''} ${active ? "text-secondary-200" : "" }` }>Register</Link>
           
        </div>
        </div>
        
      </div>
      

      </div>
    
  )
}

export default Navbar
