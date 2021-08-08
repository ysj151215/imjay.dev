<template>
  <div class="container flex flex-col flex-auto w-full m-auto md:block">
    <article data-nosnippet class="w-full py-10 mx-auto prose outline-none dark:prose-dark">
      <h1>文章</h1>
      <ul>
        <li v-for="article in sortedArticles" :key="article.slug">
          <NuxtLink :to="article.path">{{ article.title }}</NuxtLink>
        </li>
      </ul>
    </article>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const articles = await $content('posts').fetch()

    const sortedArticles = articles.sort((prev, curr) => {
      const prevTime = new Date(prev.createdAt).getTime()
      const currTime = new Date(curr.createdAt).getTime()
      return prevTime - currTime
    })

    return {
      sortedArticles
    }
  },
  head() {
    return {
      title: '博客 - Jay Yan',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: '我的文章内容包含但不限于 Modern CSS、ECMAScript、npm、React、Serverless、Vue 等等。希望能帮助到您，也欢迎前辈们指点迷津。'
        }
      ]
    }
  }
}
</script>
