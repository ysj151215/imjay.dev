import Head from 'next/head'
import { allBlogs } from '../.contentlayer/generated'
import BlogPost from '../components/BlogPost'
import Container from '../components/Container'

export default function Blog({ allBlogs }) {
  const metaTitle = '博客'
  const metaDesc = '写博客最大的乐趣在于用代码「写」而不是用文字，这就是我输出少的原因。嗯。'

  const sortedPostsData = allBlogs
    .sort((prevBlog, nextBlog) => {
      return new Date(nextBlog.updatedAt) - new Date(prevBlog.updatedAt)
    })
    .slice(0, 3)

  return (
    <>
      <Head>
        <title>{metaTitle} - Jay</title>
        <meta content={metaDesc} name="description" />
        <meta property="og:title" content={`${metaTitle} - Jay`} />
      </Head>
      <Container>
        <div className="mx-auto mb-16 flex max-w-2xl flex-col items-start justify-center">
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">{metaTitle}</h1>
          <p className="mb-12 text-gray-600 dark:text-gray-400">{metaDesc}</p>
          <div data-nosnippet className="flex flex-col">
            {sortedPostsData.map(blog => (
              <BlogPost key={blog.title} {...blog} />
            ))}
          </div>
        </div>
      </Container>
    </>
  )
}

export function getStaticProps() {
  return {
    props: {
      allBlogs,
    },
  }
}
