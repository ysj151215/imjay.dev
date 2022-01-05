import Image from 'next/image'

export default function SponsorCard({ description, href, src, title }) {
  return (
    <a className="flex transform transition-all hover:scale-105" href={href} rel="noopener noreferrer" target="_blank">
      <div className="flex items-start flex-col sm:flex-row w-full">
        <div className="flex-none w-[60px] mb-6 sm:w-[80px] sm:mr-10 sm:mb-0">
          <Image
            alt={title}
            src={src}
            className="w-auto h-auto rounded-lg"
            height={80}
            width={80}
            layout="responsive"
          />
        </div>
        <div className="flex flex-col">
          <h4 className="w-full mb-2 font-medium text-lg md:text-xl text-gray-900 dark:text-gray-100">{title}</h4>
          <p className="text-gray-600 dark:text-gray-400">{description}</p>
        </div>
      </div>
    </a>
  )
}
