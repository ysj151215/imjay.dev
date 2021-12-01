import Head from 'next/head'
import Container from '../components/Container'
import ProjectPost from '../components/ProjectPost'

export default function Wallpapers() {
  const metaTitle = '壁纸'
  const metaDesc =
    '作为一个容易审美疲劳的人，我对壁纸的态度总是变幻莫测，时而要求华丽时而追求简约，因此花了不少钱在购买正版壁纸上。虽说确实存在刚入手后不久就后悔的情况，但我仍然为自己的正版付费意识感到自豪。'

  return (
    <>
      <Head>
        <title>{metaTitle} - Jay</title>
        <meta content={metaDesc} name="description" />
      </Head>
      <Container>
        <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
          <h1 className="mb-4 text-3xl md:text-5xl font-bold tracking-tight text-black dark:text-white">
            {metaTitle}
          </h1>
          <p className="mb-12 text-gray-600 dark:text-gray-400">{metaDesc}</p>
          <div className="divide-y divide-gray-200 dark:divide-gray-800">
            <ProjectPost
              className="pb-10"
              href="https://hector.me/"
              height={1349 / 2}
              width={2048 / 2}
              src="/images/wallpapers/Hector.png"
              title="Hector"
              description="这是一位来自英国的 UI 设计师。最早了解到他是通过一款叫 Umbra 的 macOS 应用，它能让用户为 Day Mode 和 Night Mode 分别设置不同的壁纸，实现自动切换。后来才留意到他设计的壁纸，目前有 Wavēy、Hej、Aqueux 等三个系列可供购买，且均提供 .dmg 包直接安装在「系统偏好设置」的「桌面图片」里，价格在 $2 - $3 美元之间，性价比非常高。"
            />
            <ProjectPost
              className="py-10"
              href="https://oliur.com/category/wallpapers/"
              height={1072 / 2}
              width={1800 / 2}
              src="/images/wallpapers/Oliur.jpeg"
              title="Oliur"
              description="同样是一位来自英国的设计师，品味很不错，尤其喜欢他多年前发布的「Gradient Wallpaper Pack」系列，十分养眼。他的壁纸基本收费，而且价格不低（$9 美元左右），和当年相比有明显的提价，不过总的来说还是值得一买的。"
            />
            <ProjectPost
              className="py-10"
              href="https://basicappleguy.com/"
              height={828 / 2}
              width={1514 / 2}
              src="/images/wallpapers/Bag.png"
              title="Basic Apple Guy"
              description="一个果味十足的博客网站，会时不时地推出一些以 Apple 为主题的壁纸，风格各异且质量不错，关键是目前所有的壁纸都可以免费下载。"
            />
          </div>
        </div>
      </Container>
    </>
  )
}
