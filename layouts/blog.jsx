import Image from 'next/image'
import dayjs from '../lib/day'
import Container from '../components/Container'

export default function BlogLayout({ blog, children }) {
  const formatDate = date => {
    return dayjs.utc(date).format('YYYY 年 MM 月 DD 日')
  }

  return (
    <Container>
      <article className="mx-auto mb-16 flex w-full max-w-2xl flex-col items-start justify-center">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">{blog.title}</h1>
        <div
          data-nosnippet
          className="mt-2 flex w-full flex-col items-start justify-between md:flex-row md:items-center"
        >
          <div className="flex items-center">
            <Image className="rounded-full" alt="Jay" height={24} width={24} src="/images/Hero.jpeg" />
            <p className="ml-2 text-sm text-gray-700 dark:text-gray-300">{formatDate(blog.updatedAt)}</p>
          </div>
        </div>
        <div data-nosnippet className="prose mt-4 w-full max-w-none dark:prose-dark">
          {children}
        </div>
      </article>
    </Container>
  )
}
