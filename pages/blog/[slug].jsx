import Head from 'next/head'
import Image from 'next/image'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { allBlogs } from '.contentlayer/data'
import BlogLayout from '../../layouts/blog'

export async function getStaticPaths() {
  return {
    paths: allBlogs.map(p => ({
      params: { slug: p.slug },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const blog = allBlogs.find(blog => blog.slug === params.slug)

  return {
    props: {
      blog,
    },
  }
}

function RoundedImage(props) {
  return <Image alt={props.alt} className="rounded-lg" {...props} />
}

export default function Blog({ blog }) {
  const Component = useMDXComponent(blog.body.code)

  return (
    <BlogLayout blog={blog}>
      <Head>
        <title>{blog.title} - Jay</title>
        <meta content={blog.description} name="description" />
        <meta property="og:title" content={`${blog.title} - Jay`} />
      </Head>
      <article>
        <Component components={{ Image: RoundedImage }} />
      </article>
    </BlogLayout>
  )
}
