import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { allBlogs } from '.contentlayer/data'
import BlogPostCard from '../components/BlogPostCard'
import Container from '../components/Container'
import ProjectPostCard from '../components/ProjectPostCard'
import SponsorCard from '../components/SponsorCard'

const mostRecentPostsGradients = [
  'from-[lightpink] to-[lightsalmon]',
  'from-[lightgreen] to-[lightseagreen]',
  'from-[lightskyblue] to-[cornflowerblue]'
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
          content="独立开发者、远程工作者、Porsche 车迷、The Weeknd 歌迷。"
          name="description"
        />
        <meta
          property="og:title"
          content="Jay - 程序员、远程工作者、Porsche 车迷、The Weeknd 歌迷"
        />
      </Head>

      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto pb-16 border-gray-700">
        <div className="flex flex-col-reverse sm:flex-row items-start">
          <div className="flex flex-col sm:pr-8">
            <h1 className="mb-1 text-3xl md:text-5xl font-bold tracking-tight text-black dark:text-white">
              Jay
            </h1>
            <h2 className="mb-4 text-gray-700 dark:text-gray-200">
              前端工程师，目前在 <span className="font-semibold">DevHub</span>{' '}
              任职。
            </h2>
            <p className="mb-16 text-gray-600 dark:text-gray-400">
              独立开发者、远程工作者、Porsche 车迷、The Weeknd
              歌迷。希望某天可以开着自己的 Dream Car、放着 The Weeknd
              的歌、载着她去一个舒适宜人的地方写代码。
            </p>
          </div>
          <div className="flex-none w-[80px] sm:w-[122px] relative mb-8 sm:mb-0 mr-auto select-none">
            <Image
              className="relative rounded-full"
              alt="我是 Jay"
              height={122}
              width={122}
              src="/images/Hero.jpeg"
            />
          </div>
        </div>
        <h3 className="mb-6 text-2xl md:text-4xl font-bold tracking-tight text-black dark:text-white">
          最近发布
        </h3>
        <div className="flex gap-6 flex-col md:flex-row w-full">
          {mostRecentPostsData.map(({ slug, title, updatedAt }, idx) => (
            <BlogPostCard
              key={slug}
              title={title}
              slug={slug}
              updatedAt={updatedAt}
              gradient={mostRecentPostsGradients[idx]}
            />
          ))}
        </div>
        <Link href="/blog">
          <a className="flex items-center h-6 mt-8 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition">
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
        <h3 className="mb-6 mt-16 text-2xl md:text-4xl font-bold tracking-tight text-black dark:text-white">
          个人作品
        </h3>
        <p className="mb-8 text-gray-600 dark:text-gray-400">
          从使用别人开发的产品，到自己开发，再到将工具分享给大家，每一个项目都是一段值得探索、回味的经历。即便有些失败了，也要继续努力。
        </p>
        <ProjectPostCard
          href="https://www.raycast.com/ysj151215/raycast-surge"
          index="01"
          height={1200 / 2}
          width={1600 / 2}
          src="/images/projects/Surge_Raycast.png"
          title="Surge for Raycast"
          description="Surge 的第三方 Raycast extension，基于 Surge HTTP API 开发，方便用户直接在 Raycast 上控制 Surge 的各种功能。"
        />
        <Link href="/projects">
          <a className="flex items-center h-6 mt-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition">
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
        <h3 className="mb-6 mt-16 text-2xl md:text-4xl font-bold tracking-tight text-black dark:text-white">
          已赞助
        </h3>
        <p className="mb-12 text-gray-600 dark:text-gray-400">
          一直以来我都认为，优秀的开源软件创作者对行业的贡献是巨大的，其中还包括许多不成规模的独立开发者们，我想做的就是希望给这部分群体一点微小的帮助。
        </p>
        <div className="flex gap-12 flex-col w-full">
          <SponsorCard
            href="https://github.com/antfu"
            title="Anthony Fu"
            description="Creator of Slidev, VueUse, UnoCSS, Vitesse, Type Challenges and a few others. Core team member of Vue, Nuxt and Vite. Team member of Windi CSS, wenyan-lang 文言 and Intlify."
            src="/images/sponsor/Anthony.png"
          />
          <SponsorCard
            href="https://github.com/MonitorControl/MonitorControl"
            title="MonitorControl"
            description="Controls your external display brightness and volume and shows native OSD. Use menulet sliders or the keyboard, including native Apple keys!"
            src="/images/sponsor/MonitorControl.png"
          />
        </div>
      </div>
    </Container>
  )
}
