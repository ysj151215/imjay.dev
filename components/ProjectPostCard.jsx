import Image from 'next/image'

export default function ProjectPostCard({
  index,
  src,
  height,
  width,
  href,
  title,
  description
}) {
  return (
    <a
      className="flex transform hover:scale-101 transition-all"
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      <div className="text-gray-300 dark:text-gray-400 text-left mr-6">
        {index}
      </div>
      <div className="w-full mb-8">
        <Image
          alt="Base64 SVG Encoder"
          className="rounded-lg"
          src={src}
          height={height}
          width={width}
          priority
        />
        <div className="flex flex-col justify-between mt-4 md:flex-row">
          <h4 className="w-full mb-2 text-lg font-medium text-gray-900 md:text-xl dark:text-gray-100">
            {title}
          </h4>
        </div>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
      </div>
    </a>
  )
}
