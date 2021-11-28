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
          className="inline-flex mt-6 min-w-32 items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700 focus:outline-none"
          href={href}
          rel="noopener noreferrer"
          target="_blank"
        >
          访问
        </a>
      )
    } else {
      return (
        <button
          className="inline-flex mt-6 min-w-32 items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700 focus:outline-none cursor-not-allowed !text-gray-500"
          disabled
        >
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
        <h3 className="w-full mb-2 text-lg md:text-xl font-medium text-gray-100">
          {title}
        </h3>
      </div>
      <p className="text-gray-400">{description}</p>
      <CustomBtnTag />
    </div>
  )
}
