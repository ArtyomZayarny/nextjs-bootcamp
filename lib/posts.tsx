import path from 'path'
import fs from 'fs'
import { compileMDX } from 'next-mdx-remote/rsc'
import Newsletter from '@/app/components/Newsletter'

//Create pointer to the root di
const rootDirectory = path.join(process.cwd(), 'content')

//Create custom components
const components = {
  h1: props => (
    <h1 {...props} className='text-emerald-400'>
      {props.children}
    </h1>
  ),
  Newsletter: Newsletter
}

export const getPostBySlug = async (slug: string) => {
  const realSlug = slug.replace(/\.mdx$/, '')

  const filePath = path.join(rootDirectory, `${realSlug}.mdx`)
  const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' })

  const { content, frontmatter } = await compileMDX({
    source: fileContent,
    components,
    options: {
      parseFrontmatter: true
    }
  })

  await wait(2000)

  return { content, frontmatter, slug: realSlug }
}

export const getAllPosts = async () => {
  const files = fs.readdirSync(path.join(rootDirectory))

  let posts = []

  for (const file of files) {
    const post = await getPostBySlug(file)
    posts.push(post)
  }

  await wait(2000)

  return posts
}

export const wait = async ms =>
  new Promise((resolve, reject) => setTimeout(resolve, ms))
