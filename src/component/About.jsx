import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[rgb(33,32,32)] ]'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
          <p className='text-4xl font-bold inline border-b-4 text-[#ffd200] border-[#a89a64]'>About</p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-text-right text-4xl font-bold  text-[#e0c74b]'>
              <p className='text-[#e8d87f]' >Hi. I'm Ronnie, nice to meet you. Please take a look around.</p>
            </div>
            <div>
            <p className='text-[#e8d87f]'>ENTER I AM PASSIONATE YADA YADA</p>  
            </div>
          </div>
      </div>
    </div>
  )
}

export default About