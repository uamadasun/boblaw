import Image from 'next/image'
import React from 'react'

const Highlights = (props) => {
    const {message, imageHref} = props
  return (
    <div className='highlights flex flex-col text-center align-middle justify-center items-center w-full h-fit'>
        <Image src={imageHref} alt={message} width={75} height={75} className='w-16'/>
        <p className='uppercase font-bold text-lg px-0'>{message}</p>
        
    </div>
  )
}

export default Highlights