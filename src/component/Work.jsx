import React from 'react'
import CapStone from '../assets/CapStone.png'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-[#e0c74b] bg-[rgb(33,32,32)]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-[#e0c74b] border-[#a89a64]'>Work</p>
                <p className='py-6'>Check out some of my recent work</p>
            </div>

            <div style={{backgroundImage: `url(${CapStone})`}}
             className='grid sm:grid-cols md:grid-cols-3 gap-4'>
                <div className='shadow-lg shadow-[#f4dc7252] group container rounded-md flex justify-center items-center mx-auto content-div'>

                  {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking wider'>
                      React JS Application
                    </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                              <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray font-bold text-lg'>Demo</button>
                            </a>
                            <a href="/">
                              <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray font-bold text-lg'>Code</button>
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Work