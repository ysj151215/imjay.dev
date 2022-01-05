import Head from 'next/head'
import Container from '../components/Container'
import ProjectPost from '../components/ProjectPost'

export default function Projects() {
  const metaTitle = '个人作品'
  const metaDesc =
    '从使用别人开发的产品，到自己开发，再到将工具分享给大家，每一个项目都是一段值得探索、回味的经历。即便有些失败了，也要继续努力。'

  return (
    <>
      <Head>
        <title>{metaTitle} - Jay</title>
        <meta content={metaDesc} name="description" />
        <meta property="og:title" content={`${metaTitle} - Jay`} />
      </Head>
      <Container>
        <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
          <h1 className="mb-4 text-3xl md:text-5xl font-bold tracking-tight text-black dark:text-white">{metaTitle}</h1>
          <p className="mb-12 text-gray-600 dark:text-gray-400">{metaDesc}</p>
          <div data-nosnippet className="divide-y divide-gray-200 dark:divide-gray-800">
            <ProjectPost
              className="pb-10"
              href="https://www.raycast.com/ysj151215/raycast-surge"
              height={1200 / 2}
              width={1600 / 2}
              src="/images/projects/Surge_Raycast.png"
              gitSrc="https://github.com/ysj151215/extensions"
              title="Surge for Raycast"
              description="Surge 的第三方 Raycast extension，基于 Surge HTTP API 开发，方便用户直接在 Raycast 上控制 Surge 的各种功能。"
            />
            <ProjectPost
              className="py-10"
              href="https://b64.imjay.dev/"
              height={1119 / 2}
              width={1879 / 2}
              src="/images/projects/B64_Encoder.jpg"
              gitSrc="https://github.com/ysj151215/b64.imjay.dev"
              title="Base64 SVG Encoder"
              description="在线 SVG to Base64 转码工具，基于 Vue.js、Vite.js、Tailwind CSS 和 Modern Web APIs 开发，支持多文件同时转码，输出多种格式。"
            />
            <ProjectPost
              className="py-10"
              height={1600 / 2}
              width={2560 / 2}
              src="/images/projects/Jike_Meow.jpeg"
              title="即刻喵"
              description="「即刻」App 的第三方 Chrome extension，基于 Socket.IO 和 Element UI 开发，帮助浏览器用户在不打开移动端 App 的前提下查看消息通知。"
            />
          </div>
        </div>
      </Container>
    </>
  )
}
