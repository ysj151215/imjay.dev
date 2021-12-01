import Link from 'next/link'

export default function BlogPost({ description, slug, title }) {
  return (
    <Link href={`/blog/${slug}`}>
      <a className="w-full transform transition-all hover:scale-101">
        <div className="w-full mb-8">
          <div className="flex flex-col justify-between md:flex-row">
            <h3 className="w-full mb-2 text-lg font-medium text-gray-900 md:text-xl dark:text-gray-100">
              {title}
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400">{description}</p>
        </div>
      </a>
    </Link>
  )
}
