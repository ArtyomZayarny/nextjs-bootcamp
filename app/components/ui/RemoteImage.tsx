import Image from 'next/image'
import React from 'react'

export const RemoteImage = () => {
  return (
    <div className='relative h-96'>
      <Image
        className='rounded object-cover'
        fill
        alt='remoteImage'
        // width={800}
        // height={400}
        src='https://images.unsplash.com/photo-1538673719418-0367029d6f2e?q=80&w=2768&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      />
    </div>
  )
}
