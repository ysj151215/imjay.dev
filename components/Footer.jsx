import Link from 'next/link'

const ExternalLink = ({ children, href }) => (
  <a
    className="text-gray-500 transition hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
    href={href}
    rel="noopener noreferrer"
    target="_blank"
  >
    {children}
  </a>
)

export default function Footer() {
  return (
    <footer data-nosnippet className="mx-auto mb-8 flex w-full max-w-2xl flex-col items-start justify-center">
      <hr className="mb-8 w-full border border-gray-200 dark:border-gray-800" />
      <div className="grid w-full max-w-2xl grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <Link href="/">
            <a className="text-gray-500 transition hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
              概览
            </a>
          </Link>
          <Link href="/projects">
            <a className="text-gray-500 transition hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
              个人作品
            </a>
          </Link>
          <Link href="/blog">
            <a className="text-gray-500 transition hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
              博客
            </a>
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <Link href="/uses">
            <a className="text-gray-500 transition hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
              物品清单
            </a>
          </Link>
          <Link href="/wallpapers">
            <a className="text-gray-500 transition hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
              壁纸
            </a>
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://github.com/ysj151215">GitHub</ExternalLink>
          <ExternalLink href="https://gist.github.com/ysj151215">GitHub Gist</ExternalLink>
          <ExternalLink href="https://twitter.com/ysj151215">Twitter</ExternalLink>
        </div>
      </div>
    </footer>
  )
}
