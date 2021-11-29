import Image from 'next/image'
import dayjs from '../lib/day'
import Container from '../components/Container'

export default function BlogLayout({ children, blog }) {
  const dateFormatter = date => {
    return dayjs.utc(date).format('YYYY 年 MM 月 DD 日')
  }

  return (
    <Container>
      <article className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          {blog.title}
        </h1>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full mt-2">
          <div className="flex items-center">
            <Image
              className="rounded-full"
              alt="Jay"
              height={24}
              width={24}
              src="/images/hero.jpeg"
            />
            <p className="ml-2 text-sm text-gray-700 dark:text-gray-300">
              {dateFormatter(blog.updatedAt)}
            </p>
          </div>
        </div>
        <div className="w-full mt-4 prose dark:prose-dark max-w-none">
          {children}
        </div>
      </article>
    </Container>
  )
}
