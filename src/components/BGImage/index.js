import React from "react"
// Styles
import { Wrapper, WrapperBGImage, Content } from "./BGImage.styles"

const BGImage = ({ fluid, title, className, children }) => {
  return (
    <Wrapper>
      <WrapperBGImage title={title} fluid={fluid} />
      <Content className={className}>{children}</Content>
    </Wrapper>
  )
}

export default BGImage
