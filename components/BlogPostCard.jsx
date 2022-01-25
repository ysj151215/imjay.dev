import Link from 'next/link'
import cn from 'classnames'
import dayjs from '../lib/day'

export default function BlogPostCard({ gradient, slug, title, updatedAt }) {
  const formatDate = date => {
    if (dayjs.utc().isSame(dayjs.utc(date), 'year')) {
      return dayjs.utc(date).format('MM-DD')
    } else {
      return dayjs.utc(date).format('YYYY-MM-DD')
    }
  }

  return (
    <Link href={`/blog/${slug}`}>
      <a
        className={cn(
          'w-full transform rounded-xl bg-gradient-to-r p-1 transition-all hover:scale-105 md:w-1/3',
          gradient
        )}
      >
        <div className="flex h-full flex-col justify-between rounded-lg bg-white p-4 dark:bg-black">
          <div className="flex flex-col justify-between md:flex-row">
            <h4 className="mb-6 w-full text-lg font-medium tracking-tight text-gray-900 dark:text-gray-100 sm:mb-10 md:text-lg">
              {title}
            </h4>
          </div>
          <div className="capsize flex items-center text-gray-800 dark:text-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M19 4h-1V2h-2v2H8V2H6v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m0 16H5V10h14v10m0-12H5V6h14v2z"
                fill="currentColor"
              />
            </svg>
            <span className="capsize ml-2 align-baseline">{formatDate(updatedAt)}</span>
          </div>
        </div>
      </a>
    </Link>
  )
}
