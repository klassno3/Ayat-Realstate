import React, {useState} from 'react';
import Button from "../../component/button/Button";
import {FaEye} from "react-icons/fa"
import HomePortfolio from '../../component/homePortfolio/HomePortfolio';
import Credit from "../../images/Credit.jpg"
import Mall from "../../images/mall.jpg"
import Upcomming from "../../images/upcomming.jpg"
import Office from "../../images/office-relocation.jpg"
import New from "../../images/new.jpg"
import Slider from 'infinite-react-carousel';
import Background from "../../images/Background (2).png"
import { Link } from 'react-router-dom';



const Home = () => {
  const [ open, setOpen ] = useState( false )
  
  

  
  return (

    <div>
       
      {/* ***************************************************HERO****************************************************** */ }
      <div className='bg-secondary-100'>

      <div className='flex w-11/12 mx-auto relative pb-24 pt-20 '>
    <div className='  h-[60vh] pt-24 flex' >
      <div>
      <h1 className='  text-7xl flex  justify-start tracking-widest font-garmound text-tertiary-100'>AYAT REALSTATE</h1>
      <p className='  text-xl mt-5 flex justify-start  w-2/5 text-tertiary-200 '>Welcome to Ayat share Company, a fully legislated real estate 
        company based in Addis Ababa.Has handed 7,000+ Homes and Has handed 7,000+ Homes</p>
      <div className="flex mt-14 gap-32 justify-start">
      <Button type={"solid"} />
      </div>
      </div>
          </div>
          <div className=''>
            <img src={Blob} alt="" className='w-2/3 pt-24    absolute -top-14 -right-14'/> 
            <img src={ Background } alt="" className='w-1/2 pt-32    absolute top-2 right-0' />
            
          </div>
          
        </div>
      </div>
     

          {/* ***************************************************ABOUT****************************************************** */}
      
      {/* <img src={ Back } alt="" className='w-full -z-50  bg-red-700' /> */}
      

        
      <div className=' bg-primary-200 py-20 z-50 '>

      <div className="w-[1200px] mx-auto text-secondary-100">
        <h1 className="text-5xl mb-5 flex  mx-auto justify-center ">About Us</h1>
        <p className='  text-center  w-11/12 mx-auto flex justify-center text-secondary-200'>Ayat® enjoys the distinction of being a trailblazer in the real estate industry, especially focusing on the construction of residential houses. With a groundbreaking and highly effective mix of Real Estate Development, Real Estate Construction, and Real Estate Finance, Ayat® is miles ahead of the competition. Given the risks taken during the pioneering years, in the virtually unknown market of realty and the rough and tumble of the followed twenty plus years, no wonder Ayat® is proud not only for being the torchbearer of the real estate industry but also for the solid experience it has in its pack.</p>
       { open && (<div className="text-center w-11/12 mx-auto  text-secondary-200">
        <p className="my-5 ">Ayat®, a fully Ethiopian owned and managed company, has made tens of hundreds of Ethiopians and Ethiopian diasporas, at home and abroad, proud homeowners in their native country. Envisages to put roof over the heads of thousands more in the years ahead. In the previous years, Ayat®has handed over more than 7,000 residential homes, 1,000 commercial outlets and created job opportunities for more than 15,000 Ethiopians</p>
        <p className="my-5 ">The Developer is pleased to offer luxurious new apartments to potential home owners and create communities in some of the most sought after locations in Addis Ababa. With hundreds of villas, residential apartments, malls and tens of business outlets with various designs and styles to choose from located in Addis’s top school districts, business and residential area customers have more choice than they ever imagined. All buildings that have the touch of Ayat are thoughtfully designed, constructed and fitted with the wide range of needs and tastes in mind. Ayat® is not only known for building homes but for also creating, a rare occurrence by any standard, a very fulfilling community for its home buyers.</p>
          </div> ) }

            <button onClick={()=> setOpen(!open)} className=' mb-28 tracking-widest mt-5 font-semibold focus:outline-none flex justify-center mx-auto  items-center text-secondary-100   hover:text-secondary-200 '>
                  <div className='flex justify-center  items-center gap-4 hover:text-secondary-200'>
             
              <FaEye size={ 20 } />
              <span className=''>
              
              READ MORE
              </span>
          </div>
            
            </button>
   
        </div>
      </div>
      <div className='bg-tertiary-100'>

     <div className="flex justify-between gap-10 w-[1200px] mx-auto  text-secondary-100">
          <div  className='w-1/3 p-10 rounded-md shadow-xl -translate-y-1/2 text-center bg-white/80' >
            <h3 className='text-2xl font-semibold tracking-wide'>VISION</h3>
            <p className='w-3/2 tracking-wide  pt-3 mx-auto text-center flex justify-center  text-secondary-200'>To become a well-known, Africa wide Real Estate developer and a leading multi-disciplinary national company</p>
          </div>
          
          <div  className='w-1/3 p-10 rounded-md shadow-xl -translate-y-1/2 text-center bg-white/80'>
            <h3 className='text-2xl  font-semibold tracking-wide'>MISSION</h3>
            <p className='w-3/2 tracking-wide pt-3 mx-auto text-center flex justify-center  text-secondary-200'>
              To create memorable real estate and lasting relationships with the goal of creating new, urbanist, walkable city with high quality of life, high design, beautiful architecture, and sense of place in culture-driven backdrop.</p>
          </div >
          <div className='w-1/3 p-10 rounded-md shadow-xl -translate-y-1/2 text-center bg-white/80'>
            <h3 className='text-2xl  font-semibold tracking-wide'>VALUES</h3>
            <ul className=' pt-3 tracking-wide  text-secondary-200 '>
              <li>Customer satisfaction</li>
              <li>Meeting goal and commitments</li>
              <li>Responsibility and accountability</li>
              <li>Teamwork and cooperation</li>
              <li>Environmental friendliness</li>
            
            </ul>
            </div>
          
        </div>
      </div>
      
          {/* ***************************************************PORTFOLIO****************************************************** */}
      <HomePortfolio/>  
      
      {/* ***************************************************NEWS****************************************************** */ }
      
      

        <div className=" w-full  pb-32 z-10 ">
          
          
          <div className='w-[1200px] mx-auto '>
            <h1 className='flex justify-center text-2xl text-secondary-100 py-8'>News</h1>
        
         
            <Slider slidesToShow={3} pauseOnHover  autoplay swipe  >
        <Link to="/news ">
           <div className="slide w-11/12 relative">
                <div className='relative h-full'>
                  <img src={ Office } alt="" className='w-full h-64' />
                    <div className="absolute bg-secondary-100/50  top-0 left-0 w-full h-full"></div>
                </div>
                <h1 className='text-tertiary-100  text-xl absolute bottom-0 left-0 bg-secondary-100/80 w-full px-5  py-7'>
                  Office Relocation</h1>
              </div>
      
    </Link>
        <Link to="/news ">
           <div className="slide w-11/12 relative">
                <div className='relative h-full'>
                  <img src={ Credit } alt="" className='w-full h-64' />
                    <div className="absolute bg-secondary-100/50  top-0 left-0 w-full h-full"></div>
                </div>
                <h1 className='text-tertiary-100  text-xl absolute bottom-0 left-0 bg-secondary-100/80 w-full px-5  py-7'>
                   New Credit For Those Purchasing In Birr</h1>
              </div>
      
    </Link>
      
            <Link to="/news ">
              
        
           <div className="slide  w-11/12 relative">
                <div className='relative h-full'>
                  <img src={ Upcomming } alt="" className='w-full h-64' />
                    <div className="absolute bg-secondary-100/50  top-0 left-0 w-full h-full"></div>
                </div>
                <h1 className='text-tertiary-100 text-xl absolute bottom-0 left-0 bg-secondary-100/80 w-full px-5  py-7'>
                 Ayat Upcoming New Community </h1>
              </div>
    </Link>
        <Link to="/news ">
            <div className="slide  w-11/12 relative">
                <div className='relative h-full'>
                  <img src={ Mall } alt="" className='w-full h-64' />
                    <div className="absolute bg-black/50 top-0 left-0 w-full h-full"></div>
                </div>
                <h1 className='text-tertiary-100 text-xl absolute  bottom-0 left-0 bg-secondary-100/80 w-full px-5  py-7'>
               Kazanchis Mall Sold Out</h1>
              </div>
     
    </Link>
        <Link to="/news ">
            <div className="slide w-11/12  relative">
                <div className='relative h-full'>
                  <img src={ New } alt="" className='w-full h-64 object-contain' />
                    <div className="absolute bg-secondary-100/50 top-0 left-0 w-full h-full"></div>
                </div>
                <h1 className='text-tertiary-100 text-xl absolute bottom-0 left-0 bg-secondary-100/80 w-full px-5  py-7'>
              Ayat New Website Launch</h1>
              </div>
             
     
    </Link>
  </Slider>

            <div className='group w-max flex  items-center mx-auto  hover:text-primary-200  mt-20 gap-4'>
              

              <FaEye size={20} className='inline' />
            <button className='tracking-widest font-semibold focus:outline-none text-secondary-100  group-hover:text-primary-100 '>
              VIEW MORE</button>
          </div>
          

          </div>
      </div>

      

        </div>
        

  )
}


export default Home;
