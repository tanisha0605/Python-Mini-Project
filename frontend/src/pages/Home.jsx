import React from 'react'
import Lottie from 'lottie-react';
import Animation from '../assets/animation.json';
function Home() {
  return (
    <div className='h-screen w-5/6 ml-20 mt-10 flex'>
      <div className='w-1/2'>
        <Lottie className='h-3/4 w-full' animationData={Animation} />
      </div>
      <div className='w-1/2 text-center flex flex-col items-center ml-auto mt-10'>
        <h1 className='lora-font text-6xl text-blue-600 mt-20'>
          Welcome to <span className='text-slate-700'>Mental</span>Analytics Hub!
        </h1>
        <h3 className='sedan-regular text-2xl'>
            Understanding Mental Health...
        </h3>
        <h5 className='text-xl mt-7 sedan-regular text-slate-700'>
        At Mental Analytics Hub, we're dedicated to shedding light on mental health by leveraging data-driven insights. Our mission is to provide a comprehensive understanding of mental well-being through analysis, research, and accessible resources.
        </h5>
    </div>
    </div>
  )
}

export default Home