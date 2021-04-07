<template>
  <div class="container flex items-start justify-center flex-auto w-full py-10 m-auto md:block">
    <article class="w-full prose outline-none dark:prose-dark">
      <p class="text-sm">最后修改日期：{{ $dayjs(page.updatedAt).utc().format('YYYY-MM-DD') }}</p>
      <h1>{{ page.title }}</h1>
      <NuxtContent :document="page" />
      <Footer />
    </article>
    <aside
      v-if="page"
      class="sticky h-full py-2 ml-8 border-l-[0.25rem] border-[#e5e7eb] outline-none select-none top-10 w-52 lg:hidden"
      tabindex="-1"
    >
      <ul class="pl-8">
        <li class="py-1 truncate">
          <NuxtLink :to="`${$route.path}`" class="text-sm media-hover:hover:text-black dark:media-hover:hover:text-white" title="标题">
            文章标题
          </NuxtLink>
        </li>
        <li v-for="(toc, idx) in page.toc" :key="`toc-${idx}`" :class="{ 'pl-3': toc.depth === 3 }" class="py-1 truncate">
          <NuxtLink :to="`${$route.path}#${toc.id}`" :title="toc.text" class="text-sm media-hover:hover:text-black dark:media-hover:hover:text-white">
            {{ toc.text }}
          </NuxtLink>
        </li>
      </ul>
    </aside>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const page = await $content('posts', params.slug).fetch()
    return { page }
  },
  head() {
    return {
      title: this.page.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.page.description
        }
      ]
    }
  }
}
</script>

<style scoped>
aside ul a.nuxt-link-exact-active {
  color: #000;
}

html.dark aside ul a.nuxt-link-exact-active {
  color: #fff;
}

article *[id]::before {
  content: ' ';
  pointer-events: none;
  visibility: hidden;
  display: block;
  height: 2em;
  margin-top: -2em;
}
</style>
