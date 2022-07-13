// for absolute imports
const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

// first create slug and posts
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `content` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async({graphql,actions}) => {
  const {createPage} = actions
  const content = await graphql(`
    {
      posts: allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "post" } } }
      ) {
        edges {
          node {
            frontmatter {
              published
            }
            fields {
              slug
            }
          }
        }
      }
      pages: allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "page" } } }
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  // Do Nothing if error
  if(content.error) return
  const allPosts = content.data.posts.edges
  const allPages = content.data.pages.edges

  // create the individual posts and pages
  allPosts.forEach(({node}) => {
    if(node.frontmatter.published) {
      createPage({
        path: node.fields.slug,
        component: path.resolve('./src/templates/Post.js'),
        context: {
          // Data pass to context is available in page queries graphql
          slug: node.fields.slug,
        },
      })
    }
  })

  allPages.forEach(({node}) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve('./src/templates/Page.js'),
      context: {
        // Data pass to context is available in page queries graphql
        slug: node.fields.slug,
      },
    })
  })
}

exports.onCreateWebpackConfig = ({actions}) => {
  const { createTypes } = actions
  createTypes(`
    // type MarkdownRemarkFrontmatter {
    //   image: File
    // }

    type MarkdownRemark implements Node {
      frontmatter: MarkdownRemarkFrontmatter
    }
  `),
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname,"src"),"node_modules"],
    }
  })
}

// exports.createPages = async ({ actions }) => {
//   const { createPage } = actions
//   createPage({
//     path: "/using-dsg",
//     component: require.resolve("./src/templates/using-dsg.js"),
//     context: {},
//     defer: true,
//   })
// }
