import React from 'react'
import { graphql } from "gatsby"
import Layout from 'components/Layout'
import SEO from "components/SEO"
import HomeBanner from "components/HomeBanner"
import BlogPostCard from "components/BlogPostCard"


const IndexPage = ({data}) => {
  console.log("data",data)
  return (<Layout>
        <SEO title="Home" />
       <HomeBanner /> 
       <main>
       <BlogPostCard />
       </main>
      </Layout>
  )
}

export default IndexPage

export const query = graphql`
query blogListQuery {
  allMarkdownRemark(
    filter: {frontmatter: {type: {eq: "post"}}}
    sort: {fields: frontmatter___date, order: DESC}
  ) {
    edges {
      node {
        fields {
          readingTime {
            text
          }
        }
        frontmatter {
          date
          title
        }
        excerpt
      }
    }
  }
}
`
