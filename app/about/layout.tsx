import { Children } from 'react'

function AboutLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <section>
      <h1>About Layout</h1>
      <div className='mt-6'>{children}</div>
    </section>
  )
}

export default AboutLayout
