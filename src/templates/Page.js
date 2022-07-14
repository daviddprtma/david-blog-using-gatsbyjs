import React from "react";
import { graphql } from "gatsby";

// components
import Layout from "components/Layout";
import Gambar from 'components/Gambar'
import SEO from "components/SEO"

const Page = ({data}) => {
    const page = data.markdownRemark;
    return (
        <Layout>
            <SEO title={page.frontmatter.title}/>
            <Gambar fluid={page.frontmatter.image}/>
            <main>
                <h2>{page.frontmatter.title}</h2>
                <div dangerouslySetInnerHTML={{__html:page.html}}/>
            </main>
        </Layout>
    )
}

export default Page

export const query = graphql`
query($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
        html
        frontmatter {
            title
            date
            image
        }
    }
}
`