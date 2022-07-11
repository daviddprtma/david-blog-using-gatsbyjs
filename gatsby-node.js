// for absolute imports
const path = require("path")
exports.onCreateWebpackConfig = ({actions}) => {
  const { createTypes } = actions
  createTypes(`
    type MarkdownRemarkFrontmatter {
      image: File
    }

    type MarkdownRemark implements Node {
      frontmatter: MarkdownRemarkFrontmatter
    }
  `)
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
