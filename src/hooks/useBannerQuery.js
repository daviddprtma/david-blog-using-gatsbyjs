import { useStaticQuery, graphql } from "gatsby"

const useBannerQuery = () => {
  const data = useStaticQuery(graphql`
    query bannerQuery {
      markdownRemark(frontmatter: { type: { eq: "banner" } }) {
        frontmatter {
          bannerImage {
            childImageSharp {
              fluid(maxWidth: 2000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          bannerImageBtnLink
          bannerImageBtnText
          bannerImageText
        }
      }
    }
  `)
  return data.markdownRemark.frontmatter
}

export default useBannerQuery
