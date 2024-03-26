import React from 'react'

async function getData() {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      const random = Math.random()
      if (random > 0.5) {
        reject('Failed to get data')
      }
      resolve(true)
    }, 2000)
  )
}

async function About() {
  await getData()
  return <div>About</div>
}

export default About
