function CompanyLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <section className='py-24'>
      <div className='container rounded border py-4'>
        <h1 className='font-serif text-lg'>About Layout</h1>
        <div className='mt-6'>{children}</div>
      </div>
    </section>
  )
}

export default CompanyLayout
