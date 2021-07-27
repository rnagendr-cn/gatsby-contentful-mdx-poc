import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"

export const data = graphql`
query($slug: String!) {
  blog: contentfulBlog(slug: {eq: $slug}){
		slug
    post {
			childMdx {
				frontmatter {
					title
          slug
          date
        }
        body
      }
    }
  }
}
`

const BlogPost = ({ data }) => {
  return (
    <Layout>
      <MDXRenderer>{
        data.blog.post.childMdx.body
      }</MDXRenderer>
    </Layout>
  )
}

export default BlogPost