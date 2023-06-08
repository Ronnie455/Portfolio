import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[rgb(33,32,32)]'>

    {/* container */}
    <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#e8d87f]' >Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ffd200]'>Ronnie Maynard</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#e0c74b]'>I'm a Full Stack Developer</h2>
        <p className='text-[#e0c74b] py-4 max-w-[700px]'>I'm a full-stack developer that ......</p>
        <div>
        <button className='text-[#ffd200] group border-2 px-6 py-3 my-2 flex items-center hover:bg-black hover:border-[#ffd200]'>
        Projects
        <span className='group-hover:rotate-90 duration-300'>
    <HiArrowNarrowRight className='ml-4' />
  </span>
</button>
        </div>
    </div>
</div>
  )
}

export default Home