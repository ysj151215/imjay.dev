import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { allBlogs } from '.contentlayer/data'
import BlogPostCard from '../components/BlogPostCard'
import Container from '../components/Container'
import ProjectPostCard from '../components/ProjectPostCard'

const diffGradients = [
  'from-[#D8B4FE] to-[#818CF8]',
  'from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]',
  'from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]'
]

export async function getStaticProps() {
  const mostRecentPostsData = allBlogs
    .sort((prevBlog, nextBlog) => {
      return new Date(nextBlog.updatedAt) - new Date(prevBlog.updatedAt)
    })
    .slice(0, 3)

  return {
    props: {
      mostRecentPostsData
    }
  }
}

export default function Home({ mostRecentPostsData }) {
  return (
    <Container>
      <Head>
        <title>Jay - 程序员、远程工作者、Porsche 车迷、The Weeknd 歌迷</title>
        <meta
          content="独立开发者、远程工作者、Porsche 车迷、The Weeknd 歌迷。希望某天可以开着自己的 Dream Car、放着 The Weeknd 的歌、载着她去一个舒适宜人的地方写代码。"
          name="description"
        />
      </Head>

      <div className="flex flex-col justify-center items-start max-w-2xl border-gray-700 mx-auto pb-16">
        <div className="flex flex-col-reverse sm:flex-row items-start">
          <div className="flex flex-col sm:pr-8">
            <h1 className="font-bold text-3xl md:text-5xl mb-1 text-white">
              Jay
            </h1>
            <h2 className="text-gray-200 mb-4">
              前端工程师，目前在 <span className="font-semibold">DevHub</span>{' '}
              任职。
            </h2>
            <p className="text-gray-400 mb-16">
              独立开发者、远程工作者、Porsche 车迷、The Weeknd
              歌迷。希望某天可以开着自己的 Dream Car、放着 The Weeknd
              的歌、载着她去一个舒适宜人的地方写代码。
            </p>
          </div>
          <div className="w-80px sm:w-122px flex-none select-none relative mb-8 sm:mb-0 mr-auto">
            <Image
              className="rounded-full"
              alt="我是 Jay"
              height={122}
              width={122}
              src="/images/hero.jpeg"
            />
          </div>
        </div>
        <h3 className="font-bold text-2xl md:text-4xl mb-6 text-white">
          最近发布
        </h3>
        <div className="flex gap-6 w-full flex-col md:flex-row">
          {mostRecentPostsData.map(({ title, slug, updatedAt }, idx) => (
            <BlogPostCard
              key={slug}
              title={title}
              slug={slug}
              updatedAt={updatedAt}
              gradient={diffGradients[idx]}
            />
          ))}
        </div>
        <Link href="/blog">
          <a className="flex items-center mt-8 text-gray-400 hover:text-gray-200 leading-7 rounded-lg transition-all h-6">
            查看所有
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="h-6 w-6 ml-1"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
              />
            </svg>
          </a>
        </Link>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-16 text-white">
          个人作品
        </h3>
        <p className="text-gray-400 mb-8">
          从使用别人开发的产品，到自己开发，再到将工具分享给大家，每一个项目都是一段值得探索、回味的经历。即便有些失败了，也要继续努力。
        </p>
        <ProjectPostCard
          href="https://b64.imjay.dev/"
          index="01"
          height={1119 / 2}
          width={1879 / 2}
          src="/images/projects/b64.imjay.dev__.jpg"
          title="Base64 SVG Encoder"
          description="在线 SVG to Base64 转码工具，基于 Vue.js、Vite.js、Tailwind CSS 和 Modern Web APIs 开发，支持多文件同时转码，输出多种格式。"
        />
        <Link href="/projects">
          <a className="flex items-center mt-2 text-gray-400 hover:text-gray-200 leading-7 rounded-lg transition-all h-6">
            所有作品
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="h-6 w-6 ml-1"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
              />
            </svg>
          </a>
        </Link>
      </div>
    </Container>
  )
}
