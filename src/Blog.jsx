import React from 'react'

const Blog = () => {
    return (

        <div id="about" className='px-12 md:px-2 mt-0 max-w-5xl md:max-w-4xl lg:max-w-3xl xl:max-w-2xl mb-8 mx-auto flex flex-col align-center justify-start py-10 p-6'>
 <h1 className='pl-4 pt-6 border-b py-4 text-4xl font-bold md:text-3xl lg:text-4xl xl:text-5xl mb-8'>Personal Info</h1>
            <div className='flex mb-4'>
                <img className='w-24 h-24 rounded-full mr-4 bg-gray-50' src='https://www.pinclipart.com/picdir/big/460-4607050_tom-drawing-line-tom-and-jerry-sticker-black.png' alt='Profile Picture' />
                <div className='mb-'>
                    <h2 className='text-2xl font-bold mb-2'>Shivam Sharma</h2>
                    <p className='text-gray-600 text-2xl'>Front End Developer</p>
                </div>
            </div>
         
        
             <div className='flex mb-4 px-2 mt-8'>
                <div className='w-1/2 pr-2'>
                    <p className='text-gray-600 text-2xl mb-2'>Email: <a className='text-blue-500 hover:underline' href='mailto:shivam_2021bite029@nitsri.ac.in'>shivam_2021bite029@nitsri.ac.in</a></p>
                    <p className='text-gray-600 text-2xl'>Phone: <a className='text-blue-500 hover:underline'>--9870730760</a>
                    </p>
                    <p className='text-gray-600 text-2xl mb-2'>Github <a className='text-blue-500 hover:underline' href='https://github.com/cvam12sharma'>https://github.com/cvam12sharma</a></p>
                   
                </div>
            </div>
        </div>
    )
}

export default Blog