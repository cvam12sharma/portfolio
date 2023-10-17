import React from 'react'
import { Chip } from "@material-tailwind/react";

const Navbar = () => {
  return (
    <>
    <div className='flex flex-col justify-center h-auto  max-w-screen-md mx-auto px-4 pt-6 mt-8 mb-8'>
        <h1 className='pl-4 text-6xl font-bold py-3'>Web Development</h1>
        <div>
          <h1 className='pl-4 py-1 text-2xl md:text-3xl lg:text-5xl xl:text-5xl'>I'm student from of IT Department from NIT, Srinagar. I'm currently in 5th Semester and trying to learn Web Development. </h1>

          <h1 className='pl-4 py-1 text-2xl md:text-3xl lg:text-5xl xl:text-5xl'>I'm currently learning machine learning and  nextJS</h1>
        </div>
      </div>


      
{/* Skills  */}
<div className='flex flex-col justify-center h-auto  max-w-screen-md mx-auto px-8 pt-6 mt-8 mb-8'>
  <h1 className='text-6xl font-bold py-3 border-b pb-4'>Skills</h1>
  <div className="flex flex-wrap gap-4 py-10">
    <Chip size={40} color="blue" value="HTML" />
    <Chip color="red" value="CSS" />
    
    <Chip color="amber" value="ReactJS" />
    <Chip color="pink" value="MonGoDB" />
    <Chip color="indigo" value="JavaScript" />
    <Chip color="purple" value="Tailwind Css" />
    <Chip color="pink" value="NextJS" />

  </div>
</div>


      <div className='mt-0 max-w-5xl md:max-w-4xl lg:max-w-3xl xl:max-w-2xl mb-1 mx-auto flex flex-col align-center justify-start py-10 p-6'>
        <h1 className='pl-4 text-6xl font-bold pb-12'>Projects</h1>
        <div>
          <h1 className='pl-4 pt-6 border-b py-4 mb-4 text-4xl md:text-3xl lg:text-4xl xl:text-5xl'>Weather  App</h1>
          <div className='pl-4 py-1 text-3xl md:text-3xl lg:text-4xl xl:text-4xl'>  This Project is based on API. I've used the ombd API.
          I've also used ReactJS im this Project.
   
          </div>
        </div>
        <div className=''>
          <h1 className='pl-4 pt-6 border-b py-4 mb-4 text-4xl md:text-3xl lg:text-4xl xl:text-5xl'>Crypto-app</h1>
 .         <div className='pl-4 py-1 text-3xl md:text-3xl lg:text-4xl xl:text-4xl'>
           Give informatipon about the Crypto currency also show 
            the trending  Crypto currency.Use api and reactjs in it  <div className=""></div>
          </div>
        </div>
      
      </div>




    </>

  )
}

export default Navbar