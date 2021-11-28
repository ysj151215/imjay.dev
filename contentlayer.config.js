import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import remarkGfm from 'remark-gfm'
import rehypePrism from 'rehype-prism-plus'
import rehypeSlug from 'rehype-slug'

const computedFields = {
  slug: {
    type: 'string',
    resolve: doc => doc._raw.sourceFileName.replace(/\.mdx$/, ''),
  },
}

const Blogs = defineDocumentType(() => ({
  name: 'Blogs',
  filePathPattern: 'blogs/*.mdx',
  bodyType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    updatedAt: { type: 'string', required: true },
  },
  computedFields,
}))

const Uses = defineDocumentType(() => ({
  name: 'Uses',
  filePathPattern: 'uses/*.mdx',
  bodyType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    updatedAt: { type: 'string', required: true },
  },
  computedFields,
}))

const contentLayerConfig = makeSource({
  contentDirPath: 'posts',
  documentTypes: [Blogs, Uses],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug, rehypePrism],
  },
})

export default contentLayerConfig
