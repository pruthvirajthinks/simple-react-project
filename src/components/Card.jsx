import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { MdOutlineCancel } from "react-icons/md";
import { motion } from 'framer-motion';

const Card = ({text, fileSize, cancel, tag, color, reference}) => { 
  
  return (
    <motion.div drag dragElastic={1} whileDrag={{scale: 1.15}} dragTransition={{ bounceStiffness: 50, bounceDamping: 30 }} dragConstraints={reference} className='overflow-hidden rounded-[30px] h-64 w-56 bg-slate-900 flex flex-col justify-between'>
      <div className='pt-6  px-6 flex flex-col justify-between h-[92%] text-slate-200'>
        <div className='flex flex-col gap-2'>
        <FaRegFileAlt />
        <p className='mt-2 text-sm font-[Geist] leading-tight'>{text}</p>
        </div>
        <div className='flex justify-between items-center'>
          <p className='font-[Geist] text-base font-bold text-green-500'>{fileSize}</p>
          <div className='h-6 w-6 flex items-center justify-center text-slate-100 bg-slate-800 p-[3px] rounded-full'>
            { cancel ? <MdOutlineCancel size='1.1em' /> :<LuDownload /> }
            
          </div>
        </div>
      </div>
      {(tag) && <div className={`mt-2 h-[18%] ${(color==='blue') ? 'bg-blue-600' : (color==='green') ? 'bg-green-600' :'bg-yellow-600' } flex justify-center items-center font-[Geist] font-bold`}>{tag}</div> }


    </motion.div>
  )
}

export default Card