import { wait } from '@/lib/posts'
import React from 'react'

const Pageviews = async () => {
  await wait(2000)
  return <div>Pageviews</div>
}

export default Pageviews
