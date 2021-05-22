<template>
  <div class="container flex flex-col flex-auto w-full m-auto md:block">
    <article data-nosnippet class="w-full py-10 mx-auto prose outline-none dark:prose-dark">
      <h1>Jay Yan</h1>
      <NuxtContent :document="page" />
      <Footer />
    </article>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const page = await $content(params.slug || 'index').fetch()
    return { page }
  },
  head() {
    return {
      title: 'Jay Yan',
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
