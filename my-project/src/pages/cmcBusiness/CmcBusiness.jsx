import React from 'react'

import {useState} from 'react'

import {
  FaIdCard, FaParking, FaRoad, FaTrashAlt, FaBolt,
  FaStore, FaTrain, FaHotel, FaGasPump, FaMailBulk, FaUtensilSpoon,
} from "react-icons/fa"
import {GrElevator} from "react-icons/gr"


const CmcBusiness = () => {
   const [open,setOpen] =useState(false)
  return (
    <div>
      <div className='bg-tertiary-100'>

      <div className='flex w-10/12 mx-auto items-start relative pb-24 '>

      <div className='pt-24 w-3/4'>
      <h1 className='  text-7xl flex  justify-start tracking-wide font-garmound capitalize text-secondary-100'> Cmc Business Outlets</h1>
          <p className='  text-lg mt-8 flex justify-start   text-secondary-200 '> 
        In this apartment-cum-business building, offices’ and other businesses’ conducting space is available at four floors, from ground-street level-up. These space is designed with cutting-edge, inspirational and supportive format in order to maximize buyers convenience. With shared restrooms, and vehicle access and ample parking, no potential owners'/lessees' wants to pass the opportunity of owning it. As the building situated in an affluent area of the city and in a multi tenanted floors, business and other endeavors are easily facilitated among and between residents and businessmen who decides to purchase their desired lot before sales runs out.
          </p>
            
              
          {  open &&  <div className=" text-secondary-200 text-lg  mt-5   ">
              <p>If you are looking for commercial space, comfort and even a touch of luxury, then you needn’t have to
                look further. Ayat is there for you to provide all. The area where this commercial space for rent is
                available is a business locality where banks, other financial institutions and businesses has made home for some time. Thus, by owning this commercial business available
                for sale, you will not, exactly, be a ground breaker let it alones a loner! </p>
         
              
              

            </div> }
             <div className="flex flex-col mt-5 gap-2 justify-start">
              <h1 className=' text-secondary-100 font-semibold '>Property : <span className=' font-normal'>Forsale</span></h1>  
          <h1 className=' text-secondary-100 font-semibold '>Property Type: <span className=' font-normal'> Commercial</span></h1>  
          <h1 className=' text-secondary-100 font-semibold '>Location: <span className=' font-normal'> CCE-CMC</span></h1>  
            </div>
            
                 <button onClick={()=> setOpen(!open)} className='bg-primary-100 text-secondary-100 px-10 py-2 tracking-widest my-10 font-semibold focus:outline-none rounded '>
                    READ<span>{ open ? " LESS ": " MORE"}</span> 
            </button>
           
      </div>
      
         
          
            <div className='w-1/2 pt-24'>
         
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <clipPath id="user-space" clipPathUnits="userSpaceOnUse">
                    
  <path fill="#F2F4F8" d="M57.9,-48C71.3,-29.4,75.8,-5.6,69.3,13C62.8,31.5,45.3,44.7,26.6,52.7C7.9,60.7,-12,63.5,-27.6,56.4C-43.2,49.2,-54.4,32.1,-56,15.5C-57.5,-1,-49.5,-17,-38.5,-35C-27.6,-53,-13.8,-73,4.2,-76.4C22.3,-79.8,44.6,-66.6,57.9,-48Z" transform="translate(100 100)" />
                  </clipPath>
                </defs>
                 <image width="100%" height="100%" preserveAspectRatio="xMinYMin slice" xlinkHref="https://i.pinimg.com/564x/bb/92/6d/bb926def24d47ef1ff90be968ebe268f.jpg" clip-path="url(#user-space)"/>
              </svg>
              

            </div>

        </div>
        <div className=" bg-primary-100">

          <div className="text-secondary-100 py-10  w-10/12 mx-auto ">
            <h1 className='text-3xl text-secondary-100 mx-auto flex justify-center '>Amenities</h1>
            <div className='flex justify-between my-10 flex-wrap '>
            <div className='flex flex-col items-center gap-3'>
              <FaBolt size={25}/>
              <p className='uppercase '>backup generated</p>
            </div>
           
            <div  className='flex flex-col items-center gap-3'>
              <FaTrain size={25}/>
              <p className='uppercase '>train station</p>
            </div>
            <div  className='flex flex-col items-center gap-3'>
              <FaTrashAlt size={25}/>
              <p className='uppercase '>garbage chunk</p>
            </div>
            <div  className='flex flex-col items-center gap-3'>
              <FaParking size={25}/>
              <p className='uppercase '>reserved parking space</p>
            </div>
            <div  className='flex flex-col items-center gap-3'>
              <FaRoad size={25}/>
              <p className='uppercase '>mainroad access</p>
              </div>
               <div  className='flex flex-col items-center gap-3'>
              <GrElevator size={25}/>
              <p className='uppercase '>elevator </p>
              </div>
              
            
            </div >  
          
          </div>
          
        </div>
        <div className="bg-secondary-100 py-10">
          <div className='w-10/12 mx-auto '>
              <h1 className='text-3xl text-tertiary-100 mx-auto flex justify-center '>Package</h1>
            <div className='flex  justify-between mt-10'>
              <div className='bg-tertiary-100 px-8  text-xl text-secondary-100  font-semibold flex items-center py-3 uppercase  rounded'>
                cash
              </div>
              <div className="flex flex-col w-[1/8px] bg-tertiary-100 text-secondary-100  px-14 py-3 items-center  rounded">
                <p className='text-xl'>35%</p>
                <p className='text-secondary-200'>Signing Contract</p>
              </div>
              <div className="flex flex-col bg-tertiary-100 text-secondary-100  px-14 py-3 items-center  rounded">
                <p className='text-xl'>25%</p>
                <p className='text-secondary-200'>5 month</p>
              </div>
              <div className="flex flex-col bg-tertiary-100  text-secondary-100  px-14 py-3 items-center  rounded">
                <p className='text-xl'>20%</p>
                <p className='text-secondary-200'>10 month</p>
              </div>
              <div className="flex flex-col bg-tertiary-100 text-secondary-100  px-14  py-3 items-center  rounded">
                <p className='text-xl'>15%</p>
                <p className='text-secondary-200'>15 month</p>
              </div>
              <div className="flex flex-col bg-tertiary-100 text-secondary-100 px-14 py-3 items-center  rounded">
                <p className='text-xl'>5%</p>
                <p className='text-secondary-200'>18 month</p>
              </div>
             
            </div>


         
          </div>
          <button className='bg-primary-100 px-8 py-4 mx-auto flex justify-center text-secondary-100 tracking-widest uppercase rounded font font-semibold mt-14'> Download Price Information</button>
        </div>
        <div className='bg-tertiary-100 py-10'>
          <div className="w-10/12 mx-auto">
              <h1 className='text-3xl text-secondary-100 mx-auto flex justify-center '>Gallary</h1>
            <div className="grid grid-cols-4 grid-rows-2 gap-4 items-center justify-center my-10">

              <div className='col-span-1'>
                <img src={"https://ayatrealestate.com/wp-content/uploads/2019/03/hyper-grand-mall-1.jpg"} alt=""  className='w-full h-96'/>
              </div>
              <div className='col-span-3 w-ful '>
                <img src={"https://ayatrealestate.com/wp-content/uploads/2019/03/hyper-grand-mall-intrior-5.jpg"} alt=""  className=' w-full h-96'/>
              </div>
              <div className='col-span-2  row-start-2'>
                <img src={"https://ayatrealestate.com/wp-content/uploads/2019/03/hyper-grand-mall-intrior-5.jpg"} alt=""  className='w-full h-96'/>
              </div>
              <div className='col-span-2 row-start-2  '>
                <img src={"https://ayatrealestate.com/wp-content/uploads/2019/03/hyper-grand-mall.jpg"} alt=""  className=' w-full h-96' />
              </div>
            
              
         </div>
         
         
          </div>
        </div>
        

      </div>
              
    
       <div className=" bg-secondary-100 my-8">

          <div className="text-tertiary-100 py-10  w-10/12 mx-auto ">
            <h1 className='text-3xl text-tertiary-100 mx-auto flex justify-center '>What is Near you</h1>
            <div className='flex justify-between my-14 flex-wrap '>
            <div className='flex flex-col items-center gap-3'>
              <FaMailBulk size={25}/>
              <p className='uppercase '>post office</p>
            </div>
           
            <div  className='flex flex-col items-center gap-3'>
              <FaStore size={25}/>
              <p className='uppercase '>store</p>
            </div>
            <div  className='flex flex-col items-center gap-3'>
              <FaHotel size={25}/>
              <p className='uppercase '>hotel</p>
            </div>
            <div  className='flex flex-col items-center gap-3'>
              <FaUtensilSpoon size={25}/>
              <p className='uppercase '>restaurant</p>
            </div>
            <div  className='flex flex-col items-center gap-3'>
              <FaGasPump size={25}/>
              <p className='uppercase '>pertol station</p>
              </div>
               <div  className='flex flex-col items-center gap-3'>
              <FaIdCard size={25}/>
              <p className='uppercase '>atm </p>
              </div>
              
            
            </div >  
          
          </div>
          
        </div>
       
      <div className='w-10/12 mx-auto py-10 '>
        <div>
          <h1 className='text-2xl text-secondary-100 mx-auto flex justify-center'>Contact Agent</h1>

          <div className="grid grid-cols-2  gap-x-14 gap-y-10 w-3/4 mx-auto mt-10 bg-white text-secondary-100 border-[1px] border-secondary-300/10 shadow rounded px-10 py-10">
            <div className="flex flex-col w-full gap-4">

            <label htmlFor="FirstName">First Name :</label>
            <input id='FirstName' placeholder='First Name' type="text"  className='rounded border-[1px] focus:border-secondary-300/70  border-secondary-300/30 focus:shadow-2xl focus:outline-none py-2 shadow   px-10 ' />
            </div>

 
              <div className="flex flex-col w-full gap-4  text-secondary-100">
              <label htmlFor="LastName">Last Name :</label>
              <input id='LastName' placeholder='Last Name' type="text" className='rounded border-[1px] focus:border-secondary-300/70  border-secondary-300/30 focus:shadow-2xl focus:outline-none py-2 shadow   px-10  ' />
              </div>

            <div className="flex flex-col w-full gap-4  text-secondary-100">
            <label htmlFor="PhoneNumber">Phone Number:</label>
            <input id='PhoneNumber' placeholder='Phone Number' type="text" className='rounded border-[1px] focus:border-secondary-300/70  border-secondary-300/30 focus:shadow-2xl focus:outline-none py-2 shadow   px-10 ' />
            </div>

            <div className="flex flex-col w-full gap-4">
            <label htmlFor="Email">Email:</label>
            <input id='Email' placeholder='Email' type="email" className='rounded border-[1px] focus:border-secondary-300/70  border-secondary-300/30 focus:shadow-2xl focus:outline-none py-2 shadow   px-10 ' />
            </div>

            

            <div className="flex flex-col w-full gap-4 col-span-2">
              <label htmlFor="inquires">If you have any inquires:</label>
            <input id='inquires' type="textarea" placeholder="Please write here if you have any inquires" className='rounded border-[1px] focus:border-secondary-300/70  border-secondary-300/30 focus:shadow-2xl h-20 focus:outline-none py-2 shadow   px-10 ' />

            </div>
          <button className="bg-primary-200 self-center col-span-2 shadow-lg w-max mx-auto font-semibold text-secondary-100 px-10 h-10 py-5 text-tertiary flex items-center  rounded-md  tracking-widest ">REGISTER</button>
          </div>
      </div>
      
      
      </div> 
    </div>
  )
}

export default CmcBusiness
