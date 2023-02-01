import React from "react"
import { Link } from "gatsby"
// Components
import BGImage from "components/BGImage"
// Hooks
import useBannerQuery from "hooks/useBannerQuery"
// Styles
import { BannerWrapper, TextWrapper } from "./HomeBanner.styles"

const HomeBanner = () => {
  const {
    bannerImage,
    bannerImageText,
    bannerImageBtnText,
    bannerImageBtnLink,
  } = useBannerQuery()
  return (
    <BannerWrapper>
      <BGImage title="Banner Image" fluid={bannerImage.childImageSharp.fluid}>
        <TextWrapper>
          <h2>{bannerImageText}</h2>
          <Link to={bannerImageBtnLink}>
            <button>{bannerImageBtnText}</button>
          </Link>
        </TextWrapper>
      </BGImage>
    </BannerWrapper>
  )
}

export default HomeBanner
