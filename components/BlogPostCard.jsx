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
          'p-1 w-full md:w-1/3 bg-gradient-to-r rounded-xl transform transition-all hover:scale-105',
          gradient
        )}
      >
        <div className="flex flex-col justify-between h-full p-4 bg-white dark:bg-black rounded-lg">
          <div className="flex flex-col md:flex-row justify-between">
            <h4 className="text-lg md:text-lg font-medium mb-6 sm:mb-10 w-full text-gray-900 dark:text-gray-100 tracking-tight">
              {title}
            </h4>
          </div>
          <div className="flex items-center text-gray-800 dark:text-gray-200 capsize">
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
            <span className="ml-2 align-baseline capsize">
              {formatDate(updatedAt)}
            </span>
          </div>
        </div>
      </a>
    </Link>
  )
}
