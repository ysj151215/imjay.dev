<template>
  <div class="container flex flex-col flex-auto w-full m-auto md:block">
    <article class="w-full py-10 mx-auto prose outline-none dark:prose-dark">
      <p class="text-sm">最后修改日期：{{ $dayjs(page.updatedAt).utc().format('YYYY-MM-DD') }}</p>
      <h1>{{ page.title }}</h1>
      <NuxtContent :document="page" />
      <Footer />
    </article>
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
      title: this.page.title + ' - Jay',
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
