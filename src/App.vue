<template>
  <div class="sm:flex sm:flex-auto sm:flex-col sm:justify-center">
    <article class="mx-auto max-w-xl py-10 px-6 sm:-mt-12 sm:py-18">
      <h1 class="font-bold mb-6 text-4xl leading-12">您好。</h1>
      <p
        class="text-lg mb-4 text-gray-600 leading-8 dark:text-gray-300"
      >我是 Jay，是一名前端开发者，曾独立开发过多款网页及浏览器小工具，并计划在将来尝试更多有趣的项目。</p>
      <p class="text-lg mb-4 text-gray-600 leading-8 dark:text-gray-300">
        虽然我不太热衷于 Open source，但您依然可以通过我的
        <a
          class="text-link"
          href="https://github.com/ysj151215"
          aria-label="GitHub"
          rel="noreferrer"
          target="_blank"
          title="GitHub"
        >GitHub</a> 找到一些可能感兴趣的 Projects，同时您也可以通过关注
        <a
          class="text-link"
          href="https://github.com/ysj151215"
          aria-label="Twitter"
          rel="noreferrer"
          target="_blank"
          title="Twitter"
        >Twitter</a> 了解我的最新动态。:D
      </p>
      <div class="my-8 grid gap-4 grid-cols-2">
        <a
          class="rounded-md flex flex-col bg-[#1A1919] py-3 icon-external-link select-none relative items-center justify-center"
          href="https://github.com/ysj151215"
          aria-label="GitHub"
          rel="noreferrer"
          target="_blank"
          title="GitHub"
        >
          <i class="icon-github"></i>
          <p class="mt-4 mt-2 text-white text-xs text-cente">@ysj151215</p>
        </a>
        <a
          class="rounded-md flex flex-col bg-[#1D9BF0] py-3 icon-external-link select-none relative items-center justify-center"
          href="https://twitter.com/ysj151215"
          aria-label="Twitter"
          rel="noreferrer"
          target="_blank"
          title="Twitter"
        >
          <i class="icon-twitter"></i>
          <p class="mt-4 mt-2 text-white text-xs text-cente">@ysj151215</p>
        </a>
      </div>
      <h2 class="font-bold mb-4 text-2xl leading-10">作品一览</h2>
      <ul class="list-none m-0 text-gray-600 dark:text-gray-300">
        <li class="m-0 text-lg mb-4 leading-8">
          <a
            class="text-link"
            href="https://b64.imjay.dev/"
            aria-label="作品一：Base64 SVG Encoder"
            rel="noreferrer"
            target="_blank"
            title="作品一：Base64 SVG Encoder"
          >Base64 SVG Encoder</a>：基于 Modern browser API 开发的 SVG to Base64 小工具。转码过程无需网络，几乎瞬间响应出结果。
        </li>
        <li class="m-0 text-lg mb-4 leading-8">（未完待续……）</li>
      </ul>
    </article>
  </div>
</template>

<script setup>
</script>

<style scoped>
.text-link {
  position: relative;
  background-image: linear-gradient(to bottom, #fe8e82, #fe8e82);
  background-position-x: 0;
  background-position-y: 100%;
  background-size: 100% 9px;
  background-repeat: no-repeat;
  transition: all 0.2s cubic-bezier(0, 0.8, 0.13, 1);
}
.text-link:hover {
  background-size: 100% 100%;
}
@media (prefers-color-scheme: dark) {
  .text-link {
    background-image: linear-gradient(to bottom, #2a9d8f, #2a9d8f);
  }
}

.icon-external-link::after {
  position: relative;
  content: "";
  display: block;
  height: 20px;
  width: 20px;
  position: absolute;
  top: -10px;
  right: -10px;
  background: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyMXB4IiB2aWV3Qm94PSIwIDAgMjQgMjEiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+TWRpU2hhcmU8L3RpdGxlPgogICAgPGcgaWQ9Iumhtemdoi0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iTWRpU2hhcmUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCAwLjY2NjY2NykiIGZpbGw9IiMwMDAwMDAiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0yNCw5LjMzMzMzMzMzIEwxNC42NjY2NjY3LDAgTDE0LjY2NjY2NjcsNS4zMzMzMzMzMyBDNS4zMzMzMzMzMyw2LjY2NjY2NjY3IDEuMzMzMzMzMzMsMTMuMzMzMzMzMyAwLDIwIEMzLjMzMzMzMzMzLDE1LjMzMzMzMzMgOCwxMy4yIDE0LjY2NjY2NjcsMTMuMiBMMTQuNjY2NjY2NywxOC42NjY2NjY3IEwyNCw5LjMzMzMzMzMzIFoiIGlkPSLot6/lvoQiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==")
    #fff center/10px no-repeat;
  border-radius: 50%;
}
@media (prefers-color-scheme: dark) {
  .icon-external-link::after {
    background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyMXB4IiB2aWV3Qm94PSIwIDAgMjQgMjEiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+TWRpU2hhcmU8L3RpdGxlPgogICAgPGcgaWQ9Iumhtemdoi0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iTWRpU2hhcmUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCAwLjY2NjY2NykiIGZpbGw9IiNGRkZGRkYiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0yNCw5LjMzMzMzMzMzIEwxNC42NjY2NjY3LDAgTDE0LjY2NjY2NjcsNS4zMzMzMzMzMyBDNS4zMzMzMzMzMyw2LjY2NjY2NjY3IDEuMzMzMzMzMzMsMTMuMzMzMzMzMyAwLDIwIEMzLjMzMzMzMzMzLDE1LjMzMzMzMzMgOCwxMy4yIDE0LjY2NjY2NjcsMTMuMiBMMTQuNjY2NjY2NywxOC42NjY2NjY3IEwyNCw5LjMzMzMzMzMzIFoiIGlkPSLot6/lvoQiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==");
    background-color: #121314;
  }
}

.icon-twitter {
  height: 24px;
  width: 24px;
  background: url("./assets/icon-twitter-white.svg") center/24px no-repeat;
}

.icon-github {
  height: 24px;
  width: 24px;
  background: url("./assets/icon-github-white.svg") center/24px no-repeat;
}
</style>
