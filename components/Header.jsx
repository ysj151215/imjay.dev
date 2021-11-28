import Link from 'next/link'
import { useRouter } from 'next/router'
import cn from 'classnames'

function NavItem({ href, text }) {
  const router = useRouter()
  const isActive = router.asPath === href

  return (
    <Link href={href}>
      <a
        className={cn(
          isActive
            ? 'font-semibold text-gray-200'
            : 'font-normal text-gray-400',
          'hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg transition-all hover:bg-gray-800'
        )}
      >
        <span className="capsize">{text}</span>
      </a>
    </Link>
  )
}

export default function Header() {
  return (
    <div className="flex flex-col justify-center px-8">
      <nav className="flex items-center justify-between w-full relative max-w-2xl border-gray-700 mx-auto pt-8 pb-8 sm:pb-16 bg-gray-900 bg-opacity-60 text-gray-100">
        <div className="-ml-0.60rem">
          <NavItem href="/" text="概览" />
          <NavItem href="/blog" text="博客" />
          <NavItem href="/projects" text="个人作品" />
        </div>
      </nav>
    </div>
  )
}
