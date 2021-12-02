import Link from 'next/link'

const ExternalLink = ({ children, href }) => (
  <a
    className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition"
    href={href}
    rel="noopener noreferrer"
    target="_blank"
  >
    {children}
  </a>
)

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-start w-full max-w-2xl mx-auto mb-8">
      <hr className="w-full mb-8 border border-gray-200 dark:border-gray-800" />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-2xl pb-16">
        <div className="flex flex-col space-y-4">
          <Link href="/">
            <a className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition">
              概览
            </a>
          </Link>
          <Link href="/projects">
            <a className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition">
              个人作品
            </a>
          </Link>
          <Link href="/blog">
            <a className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition">
              博客
            </a>
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <Link href="/uses">
            <a className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition">
              物品清单
            </a>
          </Link>
          <Link href="/wallpapers">
            <a className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition">
              壁纸
            </a>
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://github.com/ysj151215">
            GitHub
          </ExternalLink>
          <ExternalLink href="https://gist.github.com/ysj151215">
            GitHub Gist
          </ExternalLink>
          <ExternalLink href="https://twitter.com/ysj151215">
            Twitter
          </ExternalLink>
          <ExternalLink href="https://unsplash.com/@ysj151215">
            Unsplash
          </ExternalLink>
        </div>
      </div>
    </footer>
  )
}
