import React from 'react'

const Background = () => {
  return (
    <div className='z-[2] h-screen w-full absolute bg-zinc-950'>
      <div className='pt-[10vh] text-center'>
        <h2 className='text-zinc-700 font-bold tracking-wider font-[Geist]'>Documents</h2>
      </div>
      <h1 className='text-zinc-900 tracking-tight absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-9xl font-bold font-[Geist]'>Docs.</h1>   
    </div>
  )
}

export default Background