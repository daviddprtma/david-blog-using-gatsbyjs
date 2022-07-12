import React from 'react'
import { graphql } from "gatsby"
import Layout from 'components/Layout'
import SEO from "components/SEO"
import HomeBanner from "components/HomeBanner"
import BlogPostCard from "components/BlogPostCard"


const IndexPage = ({data}) => {
  const posts = data.allMarkdownRemark.edges

  return (<Layout>
        <SEO title="Home" />
       <HomeBanner /> 
       <main>
        {posts.map(({node},i) => {
          const title = node.frontmatter.title
          return (
            <BlogPostCard
              key={i}
              slug="/"
              title={title}
              date={node.frontmatter.date}
              readingTime={node.fields.readingTime.text}
              excerpt={node.excerpt}
              gambar={node.frontmatter.gambar.childImageSharp.fluid}
             />
          )
        })}
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
          gambar {
            childImageSharp {
              fluid(maxWidth: 200, maxHeight: 200){
								...GatsbyImageSharpFluid
              }
            }
          }
        }
        excerpt
      }
    }
  }
}
`
