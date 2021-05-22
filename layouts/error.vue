<template>
  <div class="container m-auto pt-[50px] pb-[50px]">
    <div class="flex flex-col items-center justify-center -mt-24">
      <template v-if="error.statusCode === 404">
        <h1 class="font-bold text-black text-[40px] sm:text-[30px] dark:text-[#fff]">Page not found</h1>
        <NuxtLink class="mt-4 text-black text-base dark:text-[#fff] underline" to="/">Go to home page</NuxtLink>
      </template>
      <template v-else>
        <h1 class="font-bold text-black text-[40px] sm:text-[30px] dark:text-[#fff]">{{ error.messageTitle || 'An error occurred' }}</h1>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'error',
  props: {
    /**
     * error.statusCode: String => HTTP codes
     * error.messageTitle: String
     */
    error: { type: Object, default: null }
  }
}
</script>
