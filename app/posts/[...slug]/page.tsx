// @ts-nocheck
import Pageviews from '@/app/components/ui/Pageviews'
import { RemoteImage } from '@/app/components/ui/RemoteImage'
import { getAllPosts, getPostBySlug } from '@/lib/posts'
import flowerImg from '@/public/images/flower.jpg'
import Image from 'next/image'
import React, { Suspense } from 'react'
type Props = {
  params: {
    slug: string
  }
}
export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map(post => ({ slug: [post.slug] }))
}

const Page = async ({ params }: Props) => {
  const { slug } = params

  const { content, frontmatter } = await getPostBySlug(slug[0])
  return (
    <section className='py-24'>
      <div className='container'>
        {/* Local image */}
        {/* <Image
          src={flowerImg}
          alt='flower'
          className='h-96 rounded object-cover'
        /> */}

        {/* Remote image */}
        <RemoteImage />

        <header className='rounded bg-gray-100 p-8'>
          <h1 className='font-serif text-3xl'>{frontmatter.title}</h1>
          <p className='text-sm font-light uppercase leading-snug tracking-wide'>
            {frontmatter.author}
          </p>
        </header>
        <Suspense fallback={<div>Page view loading</div>}>
          <Pageviews />
        </Suspense>
        {/* Post content */}
        <main className='prose mt-12'>{content}</main>
      </div>
    </section>
  )
}

export default Page
