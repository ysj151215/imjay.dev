import Link from 'next/link'

export default function BlogPost({ slug, title, description }) {
  return (
    <Link href={`/blog/${slug}`}>
      <a className="w-full">
        <div className="w-full mb-8">
          <div className="flex flex-col justify-between md:flex-row">
            <h3 className="w-full mb-2 text-lg md:text-xl font-medium text-gray-100">
              {title}
            </h3>
          </div>
          <p className="text-gray-400">{description}</p>
        </div>
      </a>
    </Link>
  )
}
