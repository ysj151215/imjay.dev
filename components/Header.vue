<template>
  <header class="flex w-full bg-transparent select-none">
    <nav class="container flex items-center justify-between w-full py-8">
      <NuxtLink aria-label="首页" class="bg-[#555555] h-[30px] w-[30px] block rounded-full overflow-hidden dark:bg-[#bbbbbb]" title="首页" to="/">
        <img alt="Site logo" src="~@/static/apple-touch-icon.png" />
      </NuxtLink>

      <div class="flex items-center text-[#555555] dark:text-[#bbbbbb]">
        <NuxtLink class="ml-5 text-base media-hover:hover:text-black dark:media-hover:hover:text-white" to="/posts">博客</NuxtLink>
        <a
          aria-label="我的 GitHub"
          class="cursor-pointer h-[20px] ml-5 w-[20px] media-hover:hover:text-black dark:media-hover:hover:text-white"
          data-splitbee-event="External Link"
          data-splitbee-event-type="GitHub"
          href="https://github.com/ysj151215"
          rel="noreferrer"
          target="_blank"
          title="我的 GitHub"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M10.07 20.503a1 1 0 0 0-1.18-.983c-1.31.24-2.963.276-3.402-.958a5.708 5.708 0 0 0-1.837-2.415a1.2 1.2 0 0 1-.167-.11a1 1 0 0 0-.93-.645h-.005a1 1 0 0 0-1 .995c-.004.815.81 1.338 1.141 1.514a4.44 4.44 0 0 1 .924 1.36c.365 1.023 1.423 2.576 4.466 2.376l.003.098l.004.268a1 1 0 0 0 2 0l-.005-.318c-.005-.19-.012-.464-.012-1.182zM20.737 5.377c.032-.125.063-.264.09-.42a6.278 6.278 0 0 0-.408-3.293a1.002 1.002 0 0 0-.615-.58c-.356-.12-1.67-.357-4.184 1.25a13.87 13.87 0 0 0-6.354 0C6.762.75 5.455.966 5.102 1.079a.997.997 0 0 0-.631.584a6.3 6.3 0 0 0-.404 3.357c.025.127.051.246.079.354a6.27 6.27 0 0 0-1.256 3.83a8.422 8.422 0 0 0 .043.921c.334 4.603 3.334 5.984 5.424 6.459a4.591 4.591 0 0 0-.118.4a1 1 0 0 0 1.942.479a1.678 1.678 0 0 1 .468-.878a1 1 0 0 0-.546-1.745c-3.454-.395-4.954-1.802-5.18-4.899a6.61 6.61 0 0 1-.033-.738a4.258 4.258 0 0 1 .92-2.713a3.022 3.022 0 0 1 .195-.231a1 1 0 0 0 .188-1.025a3.388 3.388 0 0 1-.155-.555a4.094 4.094 0 0 1 .079-1.616a7.543 7.543 0 0 1 2.415 1.18a1.009 1.009 0 0 0 .827.133a11.777 11.777 0 0 1 6.173.001a1.005 1.005 0 0 0 .83-.138a7.572 7.572 0 0 1 2.406-1.19a4.04 4.04 0 0 1 .087 1.578a3.205 3.205 0 0 1-.169.607a1 1 0 0 0 .188 1.025c.078.087.155.18.224.268A4.122 4.122 0 0 1 20 9.203a7.039 7.039 0 0 1-.038.777c-.22 3.056-1.725 4.464-5.195 4.86a1 1 0 0 0-.546 1.746a1.63 1.63 0 0 1 .466.908a3.06 3.06 0 0 1 .093.82v2.333c-.01.648-.01 1.133-.01 1.356a1 1 0 1 0 2 0c0-.217 0-.692.01-1.34v-2.35a4.881 4.881 0 0 0-.155-1.311a4.256 4.256 0 0 0-.116-.416a6.513 6.513 0 0 0 5.445-6.424A8.697 8.697 0 0 0 22 9.203a6.13 6.13 0 0 0-1.263-3.826z"
              fill="currentColor"
            />
          </svg>
        </a>
        <a
          aria-label="我的 Twitter"
          class="cursor-pointer h-[20px] ml-5 w-[20px] media-hover:hover:text-black dark:media-hover:hover:text-white"
          data-splitbee-event="External Link"
          data-splitbee-event-type="Twitter"
          href="https://twitter.com/ysj151215"
          rel="noreferrer"
          target="_blank"
          title="我的 Twitter"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <g stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
              <path
                d="M23 3a10.9 10.9 0 0 1-3.14 1.53a4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
              />
            </g>
          </svg>
        </a>
        <a
          aria-label="切换主题"
          class="cursor-pointer h-[20px] ml-5 w-[20px] media-hover:hover:text-black dark:media-hover:hover:text-white"
          title="切换主题"
          @click.stop="toggleThemeMode"
        >
          <svg class="hidden dark:block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M10 7a7 7 0 0 0 12 4.9v.1c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2h.1A6.979 6.979 0 0 0 10 7zm-6 5a8 8 0 0 0 15.062 3.762A9 9 0 0 1 8.238 4.938A7.999 7.999 0 0 0 4 12z"
              fill="currentColor"
            />
          </svg>
          <svg class="block dark:hidden" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M12 18a6 6 0 1 1 0-12a6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8a4 4 0 0 0 0 8zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636L5.636 7.05L3.515 4.93zM16.95 18.364l1.414-1.414l2.121 2.121l-1.414 1.414l-2.121-2.121zm2.121-14.85l1.414 1.415l-2.121 2.121l-1.414-1.414l2.121-2.121zM5.636 16.95l1.414 1.414l-2.121 2.121l-1.414-1.414l2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z"
              fill="currentColor"
            />
          </svg>
        </a>
      </div>
    </nav>
  </header>
</template>

<script>
import { usePreferredDark } from '@vueuse/core'

export default {
  methods: {
    toggleThemeMode() {
      const isDark = usePreferredDark()

      if (this.$colorMode.value === 'light') {
        this.$colorMode.preference = 'dark'
        if (isDark.value) this.$colorMode.preference = 'system'
      } else {
        this.$colorMode.preference = 'light'
        if (!isDark.value) this.$colorMode.preference = 'system'
      }
    }
  }
}
</script>
