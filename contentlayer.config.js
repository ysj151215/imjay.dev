import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import rehypePrism from 'rehype-prism-plus'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'

const computedFields = {
  slug: {
    type: 'string',
    resolve: doc => doc._raw.sourceFileName.replace(/\.mdx$/, ''),
  },
}

const Blogs = defineDocumentType(() => ({
  name: 'Blogs',
  filePathPattern: 'blogs/*.mdx',
  contentType: 'mdx',
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
  contentType: 'mdx',
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
    rehypePlugins: [rehypeSlug, rehypePrism],
    remarkPlugins: [remarkGfm],
  },
})

export default contentLayerConfig
