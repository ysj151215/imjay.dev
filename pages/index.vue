<template>
  <div class="container flex flex-col justify-center flex-auto w-full m-auto">
    <div data-nosnippet class="flex items-center justify-center w-full max-w-xl gap-12 py-10 mx-auto outline-none select-none sm:flex-col">
      <a
        class="hover:text-black dark:hover:text-white"
        aria-label="Twitter"
        href="https://twitter.com/ysj151215"
        rel="noreferrer"
        target="_blank"
        title="Twitter"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          class="block mx-auto mb-2 duration-200"
          width="60"
          height="60"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
        >
          <path
            d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23z"
            fill="currentColor"
          />
        </svg>
        <span class="block font-mono text-center duration-200">Twitter</span>
      </a>
      <a
        class="hover:text-black dark:hover:text-white"
        aria-label="GitHub"
        href="https://github.com/ysj151215"
        rel="noreferrer"
        target="_blank"
        title="GitHub"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          class="block mb-2 duration-200"
          width="60"
          height="60"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"
            fill="currentColor"
          />
        </svg>
        <span class="block font-mono text-center duration-200">GitHub</span>
      </a>
      <a class="hover:text-black dark:hover:text-white" aria-label="Email" href="mailto:hi@imjay.dev" rel="noreferrer" target="_blank" title="Email">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          class="block mb-2 duration-200"
          width="60"
          height="60"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
        >
          <path d="M20 8l-8 5l-8-5V6l8 5l8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" fill="currentColor" />
        </svg>
        <span class="block font-mono text-center duration-200">Email</span>
      </a>
      <NuxtLink to="/posts" class="hover:text-black dark:hover:text-white" aria-label="文章" title="文章">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          class="block mb-2 duration-200"
          width="60"
          height="60"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
        >
          <path d="M3 3h18v4H3V3m1 5h16v13H4V8m5.5 3a.5.5 0 0 0-.5.5V13h6v-1.5a.5.5 0 0 0-.5-.5h-5z" fill="currentColor" />
        </svg>
        <span class="block font-sans text-center duration-200">文章</span>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Jay Yan',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Hi 我是 Jay，是一名前端工程师。'
        }
      ]
    }
  }
}
</script>
