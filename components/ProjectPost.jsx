import Image from 'next/image'

export default function ProjectPost({
  className,
  href,
  src,
  height,
  width,
  title,
  description
}) {
  const CustomBtnTag = () => {
    if (href) {
      return (
        <a
          className="btn mt-6"
          href={href}
          rel="noopener noreferrer"
          target="_blank"
        >
          访问
        </a>
      )
    } else {
      return (
        <button className="btn mt-6" disabled>
          已下架
        </button>
      )
    }
  }

  return (
    <div className={`w-full ${className}`}>
      <Image
        alt="Base64 SVG Encoder"
        className="rounded-lg"
        src={src}
        height={height}
        width={width}
        priority
      />
      <div className="flex flex-col justify-between mt-5 md:flex-row">
        <h3 className="w-full mb-2 text-lg font-medium text-gray-900 md:text-xl dark:text-gray-100">
          {title}
        </h3>
      </div>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
      <CustomBtnTag />
    </div>
  )
}
