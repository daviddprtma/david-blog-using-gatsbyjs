import React from "react";
import { graphql } from "gatsby";

// components
import Layout from "components/Layout";
import Gambar from 'components/Gambar'
import SEO from "components/SEO"

const Post = ({data}) => {
    const post = data.markdownRemark;
    return (
        <Layout>
            <SEO title={post.frontmatter.title}/>
            <Gambar fluid={post.frontmatter.gambar.childImageSharp.fluid}/>
            <main>
                <h2>{post.frontmatter.title}</h2>
                <div dangerouslySetInnerHTML={{__html:post.html}}/>
            </main>
        </Layout>
    )
}

export default Post

export const query = graphql`
query($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
        html
        frontmatter {
            title
            date
            gambar {
                childImageSharp {
                    fluid(maxWidth: 200){
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    }
}
`