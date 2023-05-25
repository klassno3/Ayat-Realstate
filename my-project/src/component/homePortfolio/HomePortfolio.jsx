import { useState } from "react"
import React from 'react'
import { FaSearch } from "react-icons/fa"
import {FaEye} from "react-icons/fa"
import { BsChevronDown } from "react-icons/bs"
import { Link } from "react-router-dom"
import { motion, variants} from "framer-motion"


const HomePortfolio = () => {
  const [ isPressedStatus, setIsPressedStatus ] = useState( false )
  const [ isPressedLocation, setIsPressedLocation ] = useState( false )
  const [ isPressedType, setIsPressedType ] = useState( false )
  const [ isStatus, setIsStatus ] = useState( "status" )
  const [ isLocation, setIsLocation ] = useState( "location" )
  const [ isType, setIsType ] = useState( "type" )
  
  const leftCardAnimate = {
    offScreen: {
      x: -100,
      opacity: 0
    },
    onScreen: {
      x: 0,
      opacity: 1,
     transition :{ 
              type: "spring",
       bounce: .5,
              duration:2,
            } }
  }
  const rightCardAnimate = {
    offScreen: {
      x: 100,
      opacity: 0
    },
    onScreen: {
      x: 0,
      opacity: 1,
     transition :{ 
              type: "spring",
       bounce: .5,
              duration:2,
            } }
  }
   const downCardAnimate = {
    offScreen: {
      y: 100,
      opacity: 0
    },
    onScreen: {
      y: 0,
      opacity: 1,
     transition :{ 
              type: "spring",
       bounce: .5,
              duration:2,
            } }
  }

  return (
    <div id="portfolio" className='bg-tertiary-100  py-14 '>
        <h1 className='text-4xl justify-center mx-auto flex font-cinzel'>Our Portfolio</h1>
      <div className='bg-white mx-4  justify-between items-center  h-24 mt-14  shadow-lg rounded-full px-10 hidden md:flex lg:w-11/12 lg:mx-auto '
       
      >
          {/* ***************************************************status****************************************************** */}
          <div className='bg-secondary-100 relative  text-xl  w-36 h-14 rounded-full flex justify-center items-center text-tertiary-100 gap-4 lg:w-52 lg:gap-10'>
            <p className='z-20'>{ isStatus === "status" ? "Status" : "For Sale"}</p>
            <BsChevronDown size={ 20 } className='z-20 hover:text-primary-100' onClick={()=>{setIsPressedStatus(!isPressedStatus)}}/>
          
            
            { isPressedStatus &&
            (<div className='absolute text-secondary-100 opacity-1/2 bg-white  w-full h-32 rounded-md  top-full px-5 py-10 left-0'>
             { isStatus !== "status" ? <div className="pb-1 text-xl border-b-2 border-gray-300 pointer cursor-pointer hover:text-primary-100 " onClick={ () => { setIsStatus( "status" ) } } >Status</div>:
             <div className="text-xl border-b-2 border-gray-300 pb-1 cursor-pointer hover:text-primary-100" onClick={ () => { setIsStatus( "forsale" ) } }>For Sale</div>}
              </div> ) }
          </div>

          {/* ***************************************************location****************************************************** */}
            <div className='bg-secondary-100 relative  text-xl  w-44 h-14 rounded-full flex justify-center items-center text-tertiary-100 gap-4 lg:w-52 lg:gap-10'>
            <p className='z-20'>{ isLocation === "location" ? "Location" : isLocation=== "ayat" ? "Ayat" : "CCE-CMC"}</p>
            <BsChevronDown size={ 20 } className='z-20 hover:text-primary-100' onClick={()=>{setIsPressedLocation(!isPressedLocation)}}/>
          
            
            { isPressedLocation &&
            (<div className='absolute text-secondary-100 opacity-1/2 bg-white  w-full h-32 rounded-md  top-full px-5 py-10 left-0'>
              { isLocation === "location" ?
<div>
                  
<div className="text-xl border-b-2 border-gray-300 pb-1 cursor-pointer hover:text-primary-100" onClick={ () => { setIsLocation( "cmc" ) } }>CCE-CMC</div>
<div className="text-xl border-b-2 border-gray-300 pb-1 cursor-pointer hover:text-primary-100" onClick={ () => { setIsLocation( "ayat" ) } }>Ayat</div>
</div>
               
               : isLocation ==="ayat" ?
                  <div>
<div className="pb-1 text-xl border-b-2 border-gray-300 pointer cursor-pointer hover:text-primary-100 " onClick={ () => { setIsLocation( "location" ) } } >Location</div>
<div className="text-xl border-b-2 border-gray-300 pb-1 cursor-pointer hover:text-primary-100" onClick={ () => { setIsLocation( "cmc" ) } }>CCE-CMC</div>
                    
                    </div>

             : isLocation ==="cmc" ?
            
                    <div>
                    <div className="pb-1 text-xl border-b-2 border-gray-300 pointer cursor-pointer hover:text-primary-100 " onClick={ () => { setIsLocation( "location" ) } } >Location</div>
                    
                    <div className="text-xl border-b-2 border-gray-300 pb-1 cursor-pointer hover:text-primary-100" onClick={ () => { setIsLocation( "ayat" ) } }>Ayat</div>
                    
                    
                  </div>
                  
              : ""
              


            }
              </div> ) }
            
          </div>
          {/* ***************************************************types****************************************************** */}
          
          <div className='bg-secondary-100 relative  text-xl  w-56 h-14 rounded-full flex justify-center items-center text-tertiary-100 gap-4 lg:w-64 lg:gap-10'>
              <p className='z-20'>{ isType === "type" ? "Property Types" : isType === "resindential" ? "Resindential" : "Commertial"}</p>
            <BsChevronDown size={ 20 } className='z-20 hover:text-primary-100' onClick={()=>{setIsPressedType(!isPressedType)}}/>
            { isPressedType &&
            (<div className='absolute text-secondary-100 opacity-1/2 bg-white  w-full h-32 rounded-md  top-full px-5 py-10 left-0'>
              { isType ==="type" ?
                <div>
                  <div className="text-xl border-b-2 border-gray-300 pb-1 cursor-pointer hover:text-primary-100" onClick={ () => { setIsType( "resindential" ) } }>Resindential</div>
                    <div className="text-xl border-b-2 border-gray-300 pb-1 cursor-pointer hover:text-primary-100" onClick={ () => { setIsType( "commertial" ) } }>commercial</div>
                </div>
                :
                isType === "commertial" ?
                  <div>
                      <div className="text-xl border-b-2 border-gray-300 pb-1 cursor-pointer hover:text-primary-100" onClick={ () => { setIsType( "resindential" ) } }>Resindential</div>
                    <div className="pb-1 text-xl border-b-2 border-gray-300 pointer cursor-pointer hover:text-primary-100 "onClick={ () => { setIsType( "type" ) } } >Property Type</div>
                  </div>
                  :
                  isType === "resindential"  ?

                    <div>
                  <div className="text-xl border-b-2 border-gray-300 pb-1 cursor-pointer hover:text-primary-100" onClick={ () => { setIsType( "resindential" ) } }>Resindential</div>

                      <div className="text-xl border-b-2 border-gray-300 pb-1 cursor-pointer hover:text-primary-100" onClick={ () => { setIsType( "commertial" ) } }>commercial</div>
                    </div> :
             ""     
            }
                
              </div> ) }
            
          </div>
          {/* ***************************************************types****************************************************** */}
          <div><FaSearch size={ 35 }  className='text-secondary-100 hover:text-primary-100'/></div>
        </div>
        <div className=' gap-14   px-3 mx-auto lg:w-11/12'>

        <div className="cards grid mt-5 grid-cols-1 row-cols-4 r justify-center gap-14 lg:gap-24 lg:grid-cols-2 lg:grid-rows-2 "
      
        
        >
          
          <motion.div id="card" className='bg-white px-8 py-5 rounded-md shadow-xl text-secondary-100 w-full md:px-10 lg:px-14 sm:mx-auto sm:w-3/4 lg:w-full mt-20 '
        transition={ { staggerChildren: 0.1 } }
        initial={ "offScreen" }
        whileInView={ "onScreen" }
        viewport={ {
          once: true, amount:.5
        } }
         
     >
            
            <motion.div
            variants={leftCardAnimate}
            >
         
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <clipPath id="user-space" clipPathUnits="userSpaceOnUse">
                    
                    <path fill="#F2F4F8" d="M57.9,-48C71.3,-29.4,75.8,-5.6,69.3,13C62.8,31.5,45.3,44.7,26.6,52.7C7.9,60.7,-12,63.5,-27.6,56.4C-43.2,49.2,-54.4,32.1,-56,15.5C-57.5,-1,-49.5,-17,-38.5,-35C-27.6,-53,-13.8,-73,4.2,-76.4C22.3,-79.8,44.6,-66.6,57.9,-48Z" transform="translate(100 100)" />
                    
                  </clipPath>

                </defs>
                 <image width="100%" height="100%" preserveAspectRatio="xMinYMin slice"
                  xlinkHref="https://ayatrealestate.com/wp-content/uploads/2019/06/ayat-shoping-mall.jpg"
                  clip-path="url(#user-space)" />
              </svg>
              

            </motion.div>
            <div className="flex flex-col gap-5">

              <motion.button className='text-center flex justify-center mx-auto text-secondary-200 text-xl tracking-widest font-semibold hover:text-primary-300'
                variants={ downCardAnimate }
              >SHARE</motion.button>
              <div>
                
                <motion.h1 className='text-center text-lg font-bold flex justify-center md:text-xl '
                variants={downCardAnimate}
                >AYAT HILL BOTTOM APARTMENTS AND BUSINESS OUTLETS</motion.h1>
         <div className='border-b-4 mt-2  border-b-primary-200 rounded mx-auto w-1/4'></div>
         </div>
              <motion.p className='text-center flex justify-center'
                 variants={downCardAnimate}
              >Located at Ayat settlement, at Ayat county, which, not incidentally, lent its name to a far wider place in the area than actually develop...</motion.p>
              <motion.Link to="/portfolio/ayat-hill" className='rounded-md flex justify-center tracking-widest font-semibold bg-primary-200 text-secondary-100  my-6  px-8 py-4  mx-auto  lg:w-3/4  hover:bg-secondary-100 hover:text-primary-100 duration-200 hover:scale-[1.05]'
                variants={ downCardAnimate }
              >LEARN MORE</motion.Link>
            </div>
          </motion.div>
          
          <motion.div id="card" className='bg-white px-8 py-5 rounded-md shadow-xl text-secondary-100 w-full md:px-10 lg:px-14 sm:mx-auto sm:w-3/4 lg:w-full mt-20'
        transition={ { staggerChildren: 0.1 } }
        initial={ "offScreen" }
        whileInView={ "onScreen" }
        viewport={ {
          once: true, amount:.5
        } }
         
          >
            
            <motion.div
              variants={ rightCardAnimate}>
         
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="">
                <defs>
                  <clipPath id="user-space" clipPathUnits="userSpaceOnUse">
                    
                    <path fill="#F2F4F8" d="M57.9,-48C71.3,-29.4,75.8,-5.6,69.3,13C62.8,31.5,45.3,44.7,26.6,52.7C7.9,60.7,-12,63.5,-27.6,56.4C-43.2,49.2,-54.4,32.1,-56,15.5C-57.5,-1,-49.5,-17,-38.5,-35C-27.6,-53,-13.8,-73,4.2,-76.4C22.3,-79.8,44.6,-66.6,57.9,-48Z" transform="translate(100 100)" />
                    
                  </clipPath>
                </defs>
                <image width="100%" height="100%" preserveAspectRatio="xMinYMin slice"
                  xlinkHref="https://i.pinimg.com/564x/bb/92/6d/bb926def24d47ef1ff90be968ebe268f.jpg" clip-path="url(#user-space)" />
              </svg>
              

            </motion.div>
            <div className="flex flex-col gap-4">

              <motion.button className='text-center flex justify-center mx-auto text-secondary-200 text-xl tracking-widest font-semibold  hover:text-primary-300'
                variants={ downCardAnimate }
              >SHARE</motion.button>
              <div>
                
                <motion.h1 className='text-center text-lg font-bold flex justify-center md:text-xl '
                variants={downCardAnimate}
                >CMC BUSINESS OUTLETS</motion.h1>
                <motion.div className='border-b-4 mt-2  border-b-primary-200 rounded mx-auto w-1/4'
                  variants={ downCardAnimate }
                ></motion.div>
         </div>
              <motion.p className='text-center flex justify-center'
               variants={ downCardAnimate }
              >In this apartment-cum-business building, offices’ and other businesses’ conducting space is available at four floors, from ground-street level-up. These space is designed with cutting-edge, </motion.p>
              <motion.Link to="/portfolio/cmc-business" className='rounded-md flex justify-center tracking-widest font-semibold bg-primary-200 text-secondary-100  my-6  px-8 py-4  mx-auto lg:w-3/4  hover:bg-secondary-100 hover:text-primary-100 duration-200 hover:scale-[1.05]'
               variants={ downCardAnimate }
              >LEARN MORE</motion.Link>
            </div>
          </motion.div>
          <motion.div id="card" className="bg-white px-8 py-5 rounded-md shadow-xl text-secondary-100 w-full md:px-10 lg:px-14 sm:mx-auto sm:w-3/4 lg:w-full mt-20"
        transition={ { staggerChildren: 0.1 } }
        initial={ "offScreen" }
        whileInView={ "onScreen" }
        viewport={ {
          once: true, amount:.5
        } }
          >
            
            <motion.div
            variants={leftCardAnimate}>
         
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <clipPath id="user-space" clipPathUnits="userSpaceOnUse">
                    
  <path fill="#F2F4F8" d="M57.9,-48C71.3,-29.4,75.8,-5.6,69.3,13C62.8,31.5,45.3,44.7,26.6,52.7C7.9,60.7,-12,63.5,-27.6,56.4C-43.2,49.2,-54.4,32.1,-56,15.5C-57.5,-1,-49.5,-17,-38.5,-35C-27.6,-53,-13.8,-73,4.2,-76.4C22.3,-79.8,44.6,-66.6,57.9,-48Z" transform="translate(100 100)" />
                  </clipPath>
                </defs>
                <image width="100%" height="100%" preserveAspectRatio="xMinYMin slice"
                  xlinkHref="https://ayatrealestate.com/wp-content/uploads/2019/03/cce-res-1-1.jpg" clip-path="url(#user-space)" />
              </svg>
              

            </motion.div>

            <div className="flex flex-col gap-4">

              <motion.button className='text-center flex justify-center mx-auto text-secondary-200 text-xl tracking-widest font-semibold  '
              variants={downCardAnimate}
              >SHARE</motion.button>
              <div>
                
                
                <motion.h1 className='text-center text-lg font-bold flex justify-center md:text-xl '
                variants={downCardAnimate}
                >CMC APARTMENT</motion.h1>
                <motion.div className='border-b-4 mt-2  border-b-primary-200 rounded mx-auto w-1/4'
                variants={downCardAnimate}
                ></motion.div>
         </div>
              <motion.p className='text-center flex justify-center'
              variants={downCardAnimate}
              >These apartments located in CCE-CMC are spacious residential units that reflects the magical merging of inspiration and architecture. The...</motion.p>
              <motion.Link to="/portfolio/cmc-apartment" className='my-8  rounded-md tracking-widest font-semibold text-secondary-100 bg-primary-200 flex justify-center px-8 py-4 mx-auto  lg:w-3/4  hover:bg-secondary-100 hover:text-primary-100 duration-200 hover:scale-[1.05]'
              variants={downCardAnimate}
              >LEARN MORE</motion.Link>
            </div>
          </motion.div>
          <motion.div id="card" className='bg-white px-8 py-5 rounded-md shadow-xl text-secondary-100 w-full md:px-10 lg:px-14 sm:mx-auto sm:w-3/4 lg:w-full mt-20 '
        transition={ { staggerChildren: 0.1 } }
        initial={ "offScreen" }
        whileInView={ "onScreen" }
        viewport={ {
          once: true, amount:.5
        } }
          >
            
            <motion.div
             variants={ rightCardAnimate }>
         
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <clipPath id="user-space" clipPathUnits="userSpaceOnUse">
                    
  <path fill="#F2F4F8" d="M57.9,-48C71.3,-29.4,75.8,-5.6,69.3,13C62.8,31.5,45.3,44.7,26.6,52.7C7.9,60.7,-12,63.5,-27.6,56.4C-43.2,49.2,-54.4,32.1,-56,15.5C-57.5,-1,-49.5,-17,-38.5,-35C-27.6,-53,-13.8,-73,4.2,-76.4C22.3,-79.8,44.6,-66.6,57.9,-48Z" transform="translate(100 100)" />
                  </clipPath>
                </defs>
                <image width="100%" height="100%" preserveAspectRatio="xMinYMin slice"
                                  xlinkHref="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YXBhcnRtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"

                  clip-path="url(#user-space)" />
</svg>

            </motion.div>
            <div className="flex flex-col gap-4">

          <motion.button className='text-center flex justify-center mx-auto text-secondary-200 text-xl tracking-widest font-semibold  '>SHARE</motion.button>
              <div>
                
                <motion.h1 className='text-center text-lg font-bold flex justify-center md:text-xl '
                variants={downCardAnimate}
                >AYAT APARTMENTS</motion.h1>
                <motion.div className='border-b-4 mt-2  border-b-primary-200 rounded mx-auto w-1/4'
              variants={downCardAnimate}
                ></motion.div>
         </div>
              <motion.p className='text-center flex justify-center'
              variants={downCardAnimate}
              >Welcome to the AYAT Apartments, a development within the Ayat hamlet that offers active and dynamic living experience in a suburbia setti...</motion.p>
              <motion.Link to="/portfolio/ayat-apartment" className='my-8  rounded-md tracking-widest   text-secondary-100 flex justify-center font-semibold bg-primary-200 px-8 py-4 mx-auto  lg:w-3/4 hover:bg-secondary-100 hover:text-primary-100 duration-200 hover:scale-[1.05]'
              variants={downCardAnimate}
              >LEARN MORE</motion.Link>
            </div>
          </motion.div>
              
      
        
          </div>
          <div className='group w-max flex  items-center mx-auto  hover:text-primary-100 duration-200 hover:scale-[1.03]  mt-20 gap-4'>
              

              <FaEye size={20} className='inline' />
            <Link to="/portfolio/ayat-hill" className='tracking-widest font-semibold focus:outline-none text-secondary-100  group-hover:text-primary-100 '>
            VIEW MORE</Link>
          </div>
          


        </div>


          </div>
  )
}

export default HomePortfolio
