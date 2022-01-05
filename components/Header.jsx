import { useState, useEffect } from 'react'
import { useMedia } from 'react-use'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTheme } from 'next-themes'
import cn from 'classnames'
import { timeline } from 'motion'

function NavItem({ href, text }) {
  const router = useRouter()
  const isActive = router.asPath === href

  return (
    <Link href={href}>
      <a
        className={cn(
          isActive ? 'font-semibold text-gray-800 dark:text-gray-200' : 'font-normal text-gray-600 dark:text-gray-400',
          'hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all'
        )}
      >
        <span className="capsize">{text}</span>
      </a>
    </Link>
  )
}

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  // After mounting, we have access to the theme.
  useEffect(() => setMounted(true), [])

  // Current system prefers color scheme.
  const prefersColorScheme = useMedia('(prefers-color-scheme: dark)') ? 'dark' : 'light'

  // Switch theme between light and dark.
  const setSystemTheme = async () => {
    if (document.getElementById('theme-switcher')) {
      return
    }

    // Lock body scrolling while changing theme.
    document.body.classList.add('lock-on-theme-switching')

    // Create an animated theming element, and append it to the switcher button.
    const themeButton = document.getElementById('theme-button')
    const themeSwitcher = document.createElement('div')

    themeSwitcher.id = 'theme-switcher'
    themeSwitcher.classList.add(
      'cursor-wait',
      'height-0',
      'fixed',
      'top-0',
      'right-0',
      'left-0',
      resolvedTheme === 'dark' ? 'bg-gray-50' : 'bg-gray-900'
    )

    await themeButton.appendChild(themeSwitcher)

    // Animation timeline.
    const startingAnimation = [['#theme-switcher', { height: '100vh', width: '100vw' }, { duration: 0.5 }]]
    const actingAnimation = [['#theme-switcher', { opacity: 0 }, { duration: 0.5 }]]

    timeline(startingAnimation).finished.then(() => {
      if (mounted) {
        if (prefersColorScheme === 'dark') {
          resolvedTheme === prefersColorScheme ? setTheme('light') : setTheme('system')
        } else {
          resolvedTheme === prefersColorScheme ? setTheme('dark') : setTheme('system')
        }

        timeline(actingAnimation).finished.then(() => {
          // After animation ends, remove the animated theming element from the switcher button.
          themeButton.removeChild(themeSwitcher)

          // Unlock body scrolling while changing theme.
          document.body.classList.remove('lock-on-theme-switching')
        })
      }
    })
  }

  return (
    <div className="flex flex-col justify-center px-8">
      <nav className="flex items-center justify-between relative w-full max-w-2xl mx-auto pt-8 pb-8 sm:pb-16 border-gray-200 dark:border-gray-700  text-gray-900 dark:text-gray-100">
        <div className="-ml-0.60rem">
          <NavItem href="/" text="概览" />
          <NavItem href="/blog" text="博客" />
          <NavItem href="/projects" text="个人作品" />
        </div>
        <button
          aria-label="切换主题模式"
          id="theme-button"
          type="button"
          className="flex items-center justify-center relative w-9 h-9 bg-gray-200 dark:bg-gray-600 rounded-lg hover:ring-2 focus:ring-2 ring-gray-300 focus:outline-none appearance-none border-none transition-all z-50"
          onClick={() => setSystemTheme()}
        >
          {mounted && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="w-5 h-5 text-gray-800 dark:text-gray-200"
            >
              {resolvedTheme === 'dark' ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              )}
            </svg>
          )}
        </button>
      </nav>
    </div>
  )
}
