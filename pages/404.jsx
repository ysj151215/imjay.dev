import Head from 'next/head'
import Link from 'next/link'
import Container from '../components/Container'

export default function Custom404() {
  return (
    <Container>
      <Head>
        <title>404 - Jay</title>
        <meta content="网页或文件未找到" name="description" />
        <meta property="og:title" content="404 - Jay" />
      </Head>
      <div className="flex flex-col justify-center items-start w-full max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 font-bold text-3xl md:text-5xl tracking-tight text-black dark:text-white">
          404 – 网页或文件未找到
        </h1>
        <p className="mb-8 text-gray-600 dark:text-gray-400">
          正在访问一个不存在的页面或文件。
          <br />
          需检查当前网址是否正确，也有可能当前页面或文件被刻意删除。
        </p>
        <Link href="/">
          <a className="btn">回家</a>
        </Link>
      </div>
    </Container>
  )
}
