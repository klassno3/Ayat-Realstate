import React from 'react'

const Register = () => {
  return (
    <div className='bg-tertiary-100'>


      
      <div className='w-10/12 mx-auto py-10 '>
        <div>
          <h1 className='text-2xl text-secondary-100 mx-auto flex justify-center'>Register Now</h1>

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

            <div className='flex flex-col w-full gap-4  text-secondary-100'>
              <label for="how">How did you hear about us:</label>

                <select name="how" id="how" className='rounded border-[1px] focus:border-secondary-300/70  border-secondary-300/30 focus:shadow-2xl focus:outline-none py-2 shadow   px-10'>
                  <option value="social media">Social Media</option>
                  <option value="new paper">News Paper</option>
                  <option value="friend">Friend</option>
                  <option value="ayat customer">Ayat Customer</option>
                  <option value="flyer">Flyer</option>
                  <option value="billboard">Billboard</option>
                  <option value="tv">TV</option>
                  <option value="other">Other</option>
                </select>
            </div>
            <div className='flex flex-col w-full gap-4  text-secondary-100'>
              <label for="house">Looking for a house of:</label>
                <select name="house" id="house" className='rounded border-[1px] focus:border-secondary-300/70  border-secondary-300/30 focus:shadow-2xl focus:outline-none py-2 shadow   px-10'>
                  <option value="4 Rooms + Maid">4 Rooms + Maid</option>
                  <option value="3 Rooms + Maid">3 Rooms + Maid</option>
                  <option value="2 Rooms + Maid">2 Rooms + Maid</option>
                </select>
            </div>
            <div className='flex flex-col w-full gap-4  text-secondary-100'>
              <label for="payment">Down Payment Capacity:</label>
                <select name="payment" id="payment" className='rounded border-[1px] focus:border-secondary-300/70  border-secondary-300/30 focus:shadow-2xl focus:outline-none py-2 shadow   px-10'>
                  <option value="100K-300K">100K-300K</option>
                  <option value="301K-600K">301K-600K</option>
                  <option value="601K-900K">601K-900K</option>
                  <option value="901K-1.2M">901K-1.2M</option>
                  <option value="1.2M-1.5M">1.2M-1.5M</option>
                  <option value="1.5M-2M">1.5M-2M</option>
                  <option value="2M+">2M+</option>
                  <option value="3M+">3M+</option>
                </select>
            </div>

            <div className='flex flex-col w-full gap-4 text-secondary-100'>
              <h1>Are you looking for long term Payment option</h1>
              <div className="flex gap-4">

              <div className='flex  w-full gap-4'>
                  <input type="radio" id="yes" name="long-term-payment" value="yes"/>
                  <label for="yes">Yes</label>
              </div>

              <div className='flex  w-full gap-4'>
                <input type="radio" id="no" name="long-term-payment" value="no"/>
                <label for="no">No</label>
              </div>
              </div>

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

export default Register
