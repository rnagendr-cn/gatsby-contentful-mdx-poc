/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const results = await graphql(
    `
    {
      allContentfulBlog {
        nodes {
          slug
        }
      }
    }
    `
  )
  if (results.errors) {
    console.log(results.error)
    return
  }
  results.data.allContentfulBlog.nodes.forEach(node => {
    createPage({
      path: `/${node.slug}`,
      component: require.resolve("./src/templates/BlogPost.js"),
      context: {
        slug: node.slug
      }
    })
  })
}