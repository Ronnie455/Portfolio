import React from 'react'
import CssPic from '../assets/CssPic.png'
import Html from '../assets/Html.png'
import GitHub from '../assets/GitHub.png'
import Js from '../assets/Js.png'
import ReactJs from '../assets/ReactJs.png'
import RubyOnRails from '../assets/RubyOnRails.png'
import Tailwind from '../assets/Tailwind.png'
import Ruby from '../assets/Ruby.png'

const Skills = () => {
    return (
        <div name='Skills' className='w-full h-screen bg-[rgb(33,32,32)]'>
            {/* container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-[#a89a64] text-[#ffd200]'>Skills</p>
                    <p className='py-4 text-[#e0c74b]'>These are the technologies I've worked with</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 text-[#e0c74b]'>
                  <div className='shadow-md shadow-[#f4dc7252] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Html} alt="HTML icon" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#f4dc7252] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CssPic} alt="CSS icon" />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#f4dc7252] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Tailwind} alt="Tailwind icon" />
                    <p className='my-4'>Tailwind CSS</p>
                </div>
                <div className='shadow-md shadow-[#f4dc7252] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Js} alt="Javascript icon" />
                    <p className='my-4'>JavaScript</p>
                </div>
                <div className='shadow-md shadow-[#f4dc7252] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={RubyOnRails} alt="Ruby icon" />
                    <p className='my-4'>Ruby On Rails</p>
                </div>
                <div className='shadow-md shadow-[#f4dc7252] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={ReactJs} alt="React icon" />
                    <p className='my-4'>React.js</p>
                </div>
                <div className='shadow-md shadow-[#f4dc7252] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={GitHub} alt="Github icon" />
                    <p className='my-4'>GitHub</p>
                </div>
                <div className='shadow-md shadow-[#f4dc7252] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Ruby} alt="Ruby icon" />
                    <p className='my-4'>Ruby</p>
                </div>

            </div>
        </div>
        </div>

    )
}

export default Skills