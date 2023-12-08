import React, { useRef } from 'react'
import Card from './Card'

const Foreground = () => {
  const ref = useRef(null)
  const data = [{
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            fileSize: '.8mb',
            cancel: false,
            tag: 'Download Now',
            color: 'blue'
            
          },
          {
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, nesciunt',
            fileSize: '.4mb',
            cancel: true,
          },
          {
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam enim ipsum magnam quisquam, illo ratione?',
            fileSize: '.6mb',
            cancel: false,
          },
          {
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus pariatur et libero!',
            fileSize: '.2mb',
            cancel: true,
            tag: 'Download Now',
            color: 'yellow',
          },
          {
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, temporibus tempora?',
            fileSize: '.7mb',
            cancel: true,
          },
          {
            text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
            fileSize: '.9mb',
            cancel: false,
            tag: 'Download Now',
            color: 'green'
          },
        ]
  return (
    <>
      <div ref={ref} className='overflow-hidden z-[3] absolute h-screen w-full flex gap-5 flex-wrap p-12'> 
      {
        data.map((item, index)=> (
          <Card {...item} reference={ref} />
        ))
      }
      </div>
    </>
  )
}

export default Foreground