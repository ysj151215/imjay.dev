import Image from 'next/image'

export default function SponsorCard({ description, href, src, title }) {
  return (
    <a className="flex transform transition-all hover:scale-105" href={href} rel="noopener noreferrer" target="_blank">
      <div className="flex w-full flex-col items-start sm:flex-row">
        <div className="mb-6 w-[60px] flex-none sm:mr-10 sm:mb-0 sm:w-[80px]">
          <Image
            alt={title}
            src={src}
            className="h-auto w-auto rounded-lg"
            height={80}
            width={80}
            layout="responsive"
          />
        </div>
        <div className="flex flex-col">
          <h4 className="mb-2 w-full text-lg font-medium text-gray-900 dark:text-gray-100 md:text-xl">{title}</h4>
          <p className="text-gray-600 dark:text-gray-400">{description}</p>
        </div>
      </div>
    </a>
  )
}
