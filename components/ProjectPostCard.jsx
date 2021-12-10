import Image from 'next/image'

export default function ProjectPostCard({
  index,
  description,
  height,
  href,
  src,
  title,
  width
}) {
  return (
    <a
      className="flex transform transition-all hover:scale-[101%]"
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      <div className="mr-6 text-gray-500 dark:text-gray-400 text-left">
        {index}
      </div>
      <div className="w-full mb-8">
        <Image
          alt="Base64 SVG Encoder"
          className="rounded-lg"
          src={src}
          height={height}
          width={width}
        />
        <div className="flex flex-col md:flex-row justify-between mt-4">
          <h4 className="w-full mb-2 font-medium text-lg md:text-xl text-gray-900 dark:text-gray-100">
            {title}
          </h4>
        </div>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
      </div>
    </a>
  )
}
