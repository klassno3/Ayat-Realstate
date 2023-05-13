import React, { useState } from 'react'
import Slider from 'infinite-react-carousel';

import {
  FaIdCard, FaParking, FaRoad, FaTrashAlt, FaBolt,
  FaStore, FaTrain, FaHotel, FaGasPump, FaMailBulk, FaUtensilSpoon,
} from "react-icons/fa"
import {GrElevator} from "react-icons/gr"
import AyatMallOne from "../../images/ayat-mall 1.jpg"
import AyatMallTwo from "../../images/ayat-mall -2.jpg"
import AyatMallThree from "../../images/ayat-mall 3.jpg"
import AyatMallFour from "../../images/ayat-mall 4.jpg"


const AyatHill = () => {
  const [open,setOpen] =useState(false)
  return (
    <div className=''>
        <div className='bg-tertiary-100'>

      <div className='flex w-10/12 mx-auto items-start relative pb-24 '>

      <div className='pt-24 w-3/4'>
      <h1 className='  text-7xl flex  justify-start tracking-wide font-garmound text-secondary-100'>Ayat Hill Bottom</h1>
          <p className='  text-lg mt-8 flex justify-start   text-secondary-200 '>Located at Ayat settlement, at Ayat county, which, not incidentally, lent its name to a far wider place in the
                area than actually developed by Ayat ® , these six Ayat apartments and business outlets complexes provide
              its residents a potent mix of tranquility and liveability. The fifteen floored 
                Ayat apartment/business/outlet complex offers luxury apartments for sale starting from floor level four and above. 
        
              </p>
            
              
          {  open &&  <div className=" text-secondary-200 text-lg  mt-5   ">
                <p></p>
              <p>       As the community of Ayat settlements has been growing for more than two decades it attracted 
              a multitude of facilities setup by opportune businessmen near by, thus providing services that
              are perfectly aligned to the needs of the luxury lifestyle clients of the hamlets .Of those highly acclaimed/regarded facilities the fitness centers and shopping outfits
                are within walking distance of the apartmentsThe magnificent location of Hill bottom apartment/business
                outlets complex coupled with the above creature comforts enable residents and businessmen to enjoy incomparable access and opportunity to many of the localities natural environ. In another tack, the outlets could be configured to different business ends: supermarkets, restaurants, emporiums, store, boutiques, shops etc, and entertainment facilities.</p>
              <p>The road leading to Megenagna and the city center also happens to cut through the property,
                thus providing accesses to one of the main arteries of the city’s road system. The metro station,
                also know as Ayat, again the wider area of southern Addis taking the name from our well known real
                estate company, starts, right across the street, providing residents that choose to commute a complement
                of convenient transport links. Ayat also has a number of payment plans for its clients to provide them an opportunity to own their dream home. The payment options which include long term payment, are crafted to suit different financial readiness of its potential clients.</p>
              <p>Beneath the luxury residential units of the Hill bottom apartment residences
                is the spacious public territory that could be partitioned to different sizes that are selling
                rapidly for various business ends. The economically well - heeled community, which inhabits the
                above residential units, will bring to any business that owns these outfits a wider custom base with
                a deep pocket. The spacious commercial territories are positioned on four floors (ground/street level
                and 1st , 2nd floors and 3rd floor) while the remaining nine and sixteen floors are reserved for
                residential units. Clients have the pleasure of picking their preferred perfect business space size
                ranging from 20m2 up to ….. Depending on the buyers choice the commercial space available here could
                easily apportioned to</p>
              

            </div> }
             <div className="flex flex-col mt-5 gap-2 justify-start">
              <h1 className=' text-secondary-100 font-semibold '>Property : <span className=' font-normal'>Forsale</span></h1>  
          <h1 className=' text-secondary-100 font-semibold '>Property Type: <span className=' font-normal'> Residential</span></h1>  
          <h1 className=' text-secondary-100 font-semibold '>Location: <span className=' font-normal'> Ayat</span></h1>  
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
              <image width="100%" height="100%" preserveAspectRatio="xMinYMin slice"
                xlinkHref="http://localhost:3000/static/media/ayat-mall%204.534e0b46bd92e351ada8.jpg" clip-path="url(#user-space)" />
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
              <div className="flex flex-col w-[1/8px] bg-tertiary-100 text-secondary-100  px-6 py-3 items-center  rounded">
                <p className='text-xl'>15%</p>
                <p className='text-secondary-200'>Signing Contract</p>
              </div>
              <div className="flex flex-col bg-tertiary-100 text-secondary-100  px-6 py-3 items-center  rounded">
                <p className='text-xl'>20%</p>
                <p className='text-secondary-200'>Ground Floor</p>
              </div>
              <div className="flex flex-col bg-tertiary-100  text-secondary-100  px-6 py-3 items-center  rounded">
                <p className='text-xl'>20%</p>
                <p className='text-secondary-200'>4th Slab</p>
              </div>
              <div className="flex flex-col bg-tertiary-100 text-secondary-100  px-6  py-3 items-center  rounded">
                <p className='text-xl'>20%</p>
                <p className='text-secondary-200'>10th Slab</p>
              </div>
              <div className="flex flex-col bg-tertiary-100 text-secondary-100 px-6 py-3 items-center  rounded">
                <p className='text-xl'>15%</p>
                <p className='text-secondary-200'>Roof is Done</p>
              </div>
              <div className="flex flex-col bg-tertiary-100  text-secondary-100  px-6  py-3 items-center  rounded">
                <p className='text-xl'>5%</p>
                <p className='text-secondary-200'>Block Work </p>
              </div>
              <div className="flex flex-col bg-tertiary-100  text-secondary-100  px-6  py-3 items-center  rounded">
                <p className='text-xl'>5%</p>
                <p className='text-secondary-200'>Hand Over </p>
              </div>
            </div>


            <div className='flex  justify-between mt-10'>
              <div className='bg-tertiary-100 px-8  text-xl text-secondary-100  font-semibold flex flex-col items-center py-3 uppercase  rounded'>
                <h1>credit</h1>
                <p>(40%)</p>
              </div>
              <div className="flex flex-col  bg-tertiary-100 text-secondary-100  px-4 py-3 items-center  rounded">
                <p className='text-xl'>15%</p>
                <p className='text-secondary-200'>Signing Contract</p>
              </div>
              <div className="flex flex-col bg-tertiary-100 text-secondary-100  px-4 py-3 items-center  rounded">
                <p className='text-xl'>20%</p>
                <p className='text-secondary-200'>Ground Floor</p>
              </div>
              <div className="flex flex-col bg-tertiary-100  text-secondary-100  px-4  py-3 items-center  rounded">
                <p className='text-xl'>8%</p>
                <p className='text-secondary-200'>4th Slab</p>
              </div>
              <div className="flex flex-col bg-tertiary-100 text-secondary-100  px-4  py-3 items-center  rounded">
                <p className='text-xl'>7%</p>
                <p className='text-secondary-200'>10th Slab</p>
              </div>
              <div className="flex flex-col bg-tertiary-100 text-secondary-100 px-4 py-3 items-center  rounded">
                <p className='text-xl'>5%</p>
                <p className='text-secondary-200'>Roof is Done</p>
              </div>
              <div className="flex flex-col bg-tertiary-100  text-secondary-100  px-4  py-3 items-center  rounded">
                <p className='text-xl'>2%</p>
                <p className='text-secondary-200'>Block Work </p>
              </div>
              <div className="flex flex-col bg-tertiary-100  text-secondary-100  px-4  py-3 items-center  rounded">
                <p className='text-xl'>5%</p>
                <p className='text-secondary-200'>Hand Over </p>
              </div>
              <div className="flex flex-col bg-tertiary-100  text-secondary-100  px-4  py-3 items-center  rounded">
                <p className='text-xl'>40%</p>
                <p className='text-secondary-200'>10-30 years </p>
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
                <img src={AyatMallOne} alt=""  className='w-full h-96'/>
              </div>
              <div className='col-span-3 w-ful '>
                <img src={AyatMallFour} alt=""  className=' w-full h-96'/>
              </div>
              <div className='col-span-2  row-start-2'>
                <img src={AyatMallThree} alt=""  className='w-full h-96'/>
              </div>
              <div className='col-span-2 row-start-2  '>
                <img src={AyatMallTwo} alt=""  className=' w-full h-96' />
              </div>
            
              
         </div>
         
         
          </div>
        </div>
        

      </div>
              
          <div className='w-10/12 mx-auto mt-14 mb-20 '>
            <h1 className='flex justify-center text-2xl text-secondary-100 mb-10'>Floor Plan</h1>
        
         
            <Slider slidesToShow={3} pauseOnHover dot  autoplay swipe  >

           <div className="slide w-11/12 relative">
                <div className='relative  w-full h-full'>
                  <img src={ "https://ayatrealestate.com/wp-content/uploads/2019/07/107-300x233.jpg" } alt="" className='w-1/2 h-64' />
           
            </div>
              <div>
              <h1 className='text-xl text-secondary-100 uppercase font-semibold'>3 Bed Room + Maid</h1>
             <p className='text-lg text-secondary-200'> Area: 107m<sup>2</sup> / 1151.74 ft<sup>2</sup></p>
              <p className='text-lg text-secondary-200'>Finishing: Regular/Semi-finished</p>
              </div>
              
              </div>
    
              
        
           <div className="slide  w-11/12 relative">
                <div className='relative h-full w-full'>
                  <img src={ "https://ayatrealestate.com/wp-content/uploads/2019/07/138-258x300.jpg" } alt="" className='w-full h-64' />
               
            </div>
                 <div>
              <h1 className='text-xl text-secondary-100 uppercase font-semibold'>3 Bed Room + Maid</h1>
             <p className='text-lg text-secondary-200'> Area: 138m<sup>2</sup> / 1481.42 ft<sup>2</sup></p>
              <p className='text-lg text-secondary-200'>Finishing: Regular/Semi-finished</p>
              </div>
              </div>

                  <div className="slide  w-11/12 relative">
                <div className='relative h-full w-full'>
                  <img src={ "https://ayatrealestate.com/wp-content/uploads/2019/07/115-223x300.jpg" } alt="" className='w-full h-64' />
               
            </div>
            <div>
     
              <h1 className='text-xl text-secondary-100 uppercase font-semibold'>3 Bed Room + Maid</h1>
             <p className='text-lg text-secondary-200'> Area: 115m<sup>2</sup> /1237.85 ft <sup>2</sup></p>
              <p className='text-lg text-secondary-200'>Finishing: Regular/Semi-finished</p>
              </div>
              </div>
     

     
            <div className="slide w-11/12  relative">
                <div className='relative h-full w-full'>
              <img src={ "https://ayatrealestate.com/wp-content/uploads/2019/07/127-261x300.jpg" } alt="" className='w-full h-64 object-contain' />
                 
               
            </div>
                <div>
              <h1 className='text-xl text-secondary-100 uppercase font-semibold'>3  Bed Room + Maid</h1>
             <p className='text-lg text-secondary-200'> Area: 127m<sup>2</sup> / 1367.02 ft<sup>2</sup></p>
              <p className='text-lg text-secondary-200'>Finishing: Regular/Semi-finished</p>
              </div>
              </div>
             
     

  </Slider>


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

export default AyatHill
