import Link from 'next/link'

export default function BlogPost({ description, slug, title }) {
  return (
    <Link href={`/blog/${slug}`}>
      <a className="w-full transform transition-all hover:scale-105">
        <div className="mb-8 w-full">
          <div className="flex flex-col justify-between md:flex-row">
            <h3 className="mb-2 w-full text-lg font-medium text-gray-900 dark:text-gray-100 md:text-xl">{title}</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400">{description}</p>
        </div>
      </a>
    </Link>
  )
}
