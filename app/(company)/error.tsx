'use client'

import { useEffect } from 'react'

type Props = {
  error: any
}
const Error = ({ error }: Props) => {
  useEffect(() => {
    console.log(error)
  })
  return (
    <div className='text-sm text-red-400'>
      <h2>Something went wrong</h2>
      {/* <button onClick={() => reset()}>Try again</button> */}
    </div>
  )
}

export default Error
