import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import LogoGreen from "../../images/Logo-green.svg"
import LogoWhite from "../../images/Logo-white.svg"
import {FaBars} from "react-icons/fa"
import {FaRegWindowClose} from "react-icons/fa"


const Navbar = () => {
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

  const [ open, setOpen ] = useState(false)
  
  const handleOpen = () => {
    setOpen( !open)
    console.log("true")
  }
 
  return (
    <div className={ active ? "bg-tertiary-100 text-secondary-100 z-50 shadow-xl  fixed top-0 left-0 w-screen py-4" :
      "bg-secondary-100 text-tertiary-100 z-50   fixed top-0 left-0 w-screen py-4" }> 
      <div className="px-3 mx-auto font-lato text-lg tracking-widest md:w-11/12" >
        
      
        <div className=" flex justify-between items-start z-50 ">


          <div className="logo">
            
            <img src={ LogoGreen } alt="logop" className={ active ? "w-12 h-12" : "hidden" } />

            <img src={ LogoWhite } alt="logop" className={ active ? "hidden" : "w-12 h-12"} />
        </div>
        <div className="links flex gap-14 items-center mt-2">
 
            <div className= "z-30 md:hidden block" >

              <FaBars onClick={ handleOpen } size={ 30 } className={open ? "hidden":"block z-50"} />
           

                <FaRegWindowClose onClick={handleOpen} size={ 30 } className={open ? "block z-50 text-tertiary-100" :"hidden "} />
              
            </div>
            <div className="">
              
            <div className={open ? "absolute right-0 top-0 z-20 h-[450px] px-28 py-32 bg-secondary-100/95 flex gap-5 flex-col text-tertiary-100" :"hidden"}>


              <Link to="/" onClick={() => setSelectedTab('Home')} className={`group ${
              selectedTab === 'home' ? 'font-semibold' : ''
              }` }>
              Home
              <div className={`border-b-4 border-solid opacity-0 border-primary-200 rounded-lg w-1/4 group-hover:opacity-100 ${selectedTab === 'home' ? "opacity-100" : ''}` }></div>
              </Link>
              <Link to="/news" onClick={() => setSelectedTab('aboutUs')} className={`group ${
              selectedTab === 'aboutUs' ? 'font-semibold' : ''
              }` }>
              News
              <div className={ `border-b-4 border-solid opacity-0 border-primary-200 rounded-lg w-1/4 
              group-hover:opacity-100 ${ selectedTab === 'news' ? "opacity-100" : '' }` }></div>

              </Link>
              <Link to="/contactUs" onClick={() => setSelectedTab('contactUs')} className={`group ${
                selectedTab === 'contactUs' ? 'font-semibold' : ''
              }` }>
              Contact Us
              <div className={ `border-b-4 border-solid opacity-0 border-primary-200 rounded-lg w-1/4 
              group-hover:opacity-100 ${ selectedTab === 'contactUs' ? "opacity-100" : '' }` }></div>

            </Link>
               <Link to="/portfolio/ayat-hill"  onClick={() => setSelectedTab('portfolio')}className={`group ${
              selectedTab === 'portfolio' ? 'font-semibold' : ''
              }` }>
              Portfolio
              <div className={ `border-b-4 border-solid opacity-0 border-primary-200 rounded-lg w-1/4 
              group-hover:opacity-100 ${ selectedTab === 'portfolio' ? "opacity-100" : '' }` }></div>

            </Link> 
            {/* <a  className="hover:text-red-400" href="#portfolio">Portfolio</a> */}
            
            <Link to="/register" className={ ` bg-primary-200 shadow-lg px-10 h-10 py-5 uppercase text-secondary-100  flex items-center tracking-wider  rounded-md 
            ${ selectedTab === 'register' ? 'font-semibold' : '' } ${ active ? "text-secondary-200" : "" }` }>Register
            
            </Link>
           
              </div>
            <div className="hidden md:flex xl:gap-14 lg:gap-10 md:gap-5">


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
            
            <Link to="/register" className={ ` bg-primary-200 shadow-lg px-10 h-10 py-5 uppercase text-secondary-100  flex items-center tracking-wider  rounded-md   duration-200 hover:scale-[1.03]
            ${ selectedTab === 'register' ? 'font-semibold' : '' } ${ active ? "text-secondary-200" : "" }` }>Register
            
            </Link>
           
              </div>
              
             
            </div>
          </div>
          
        </div>

        
      </div>
      

      </div>
    
  )
}

export default Navbar