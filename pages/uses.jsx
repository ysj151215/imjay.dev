import Head from 'next/head'
import Image from 'next/image'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { allUses } from '.contentlayer/data'
import Container from '../components/Container'

export async function getStaticProps() {
  return {
    props: {
      use: allUses[0],
    },
  }
}

export default function Projects({ use }) {
  const metaTitle = '我在用什么'
  const metaDesc = '良好的环境、称手的工具是提高工作效率和生活品质必不可少的条件。'

  const Component = useMDXComponent(use.body.code)

  function RoundedImage(props) {
    return <Image alt={props.alt} className="rounded-lg" {...props} />
  }

  return (
    <>
      <Head>
        <title>物品清单 - Jay</title>
        <meta content={metaDesc} name="description" />
        <meta property="og:title" content={`${metaTitle} - Jay`} />
      </Head>
      <Container>
        <div className="mx-auto mb-16 flex max-w-2xl flex-col items-start justify-center">
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">{metaTitle}</h1>
          <p className="mb-12 text-gray-600 dark:text-gray-400">{metaDesc}</p>
          <div data-nosnippet className="prose w-full max-w-2xl dark:prose-dark">
            <RoundedImage
              alt="物品清单"
              className="rounded-lg"
              src={'/images/uses/my-uses.jpeg'}
              height={1536 / 2}
              width={1920 / 2}
              priority
            />
            <Component components={{ Image: RoundedImage }} />
          </div>
        </div>
      </Container>
    </>
  )
}
