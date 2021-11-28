import Head from 'next/head'
import Image from 'next/image'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { allUses } from '.contentlayer/data'
import Container from '../components/Container'

export async function getStaticProps() {
  return {
    props: {
      use: allUses[0]
    }
  }
}

export default function Projects({ use }) {
  const metaTitle = '我在用什么'
  const metaDesc =
    '良好的环境、称手的工具是提高工作效率和生活品质必不可少的条件。'

  const Component = useMDXComponent(use.body.code)

  function RoundedImage(props) {
    return <Image alt={props.alt} className="rounded-lg" {...props} />
  }

  return (
    <>
      <Head>
        <title>物品清单 - Jay</title>
        <meta content={metaDesc} name="description" />
      </Head>
      <Container>
        <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
          <h1 className="mb-4 text-3xl font-bold md:text-5xl text-white">
            {metaTitle}
          </h1>
          <p className="mb-12 text-gray-400">{metaDesc}</p>
          <div className="w-full prose prose-dark max-w-2xl">
            <RoundedImage
              alt="物品清单"
              className="rounded-lg"
              src={'/images/uses/my-uses.jpeg'}
              height={1440 / 2}
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
