<template>
  <div class="container flex flex-col flex-auto w-full m-auto md:block">
    <div class="w-full py-10 mx-auto prose dark:prose-dark max-w-[65ch]">
      <h1>文章</h1>
      <ul>
        <li v-for="article in articles" :key="article.slug">
          <NuxtLink :to="article.path">{{ article.title }}</NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const articles = await $content('posts').fetch()
    return { articles }
  },
  head() {
    return {
      title: '博客 - Jay',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Jay's Portfolio"
        }
      ]
    }
  }
}
</script>
