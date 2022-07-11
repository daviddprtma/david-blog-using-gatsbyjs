import React from 'react'
import Img from "gatsby-image"
import { Link } from 'gatsby'
import DateIcon from "images/calendar.svg"
import TimeIcon from "images/watch.svg"


const BlogPostCard = ({slug,title,date,readingTime,excerpt,image}) => {
  return <>
  <CardWrapper>
    <ImgWrapper>
    <Img fluid={image}/>
    </ImgWrapper>

    <TextWrapper>
      <Link to={slug}>
        <h2>{title}</h2>
      </Link>
    </TextWrapper>

    <StatWrapper>
      <DateWrapper>
        <img src={DateIcon} alt="date"/>
        {date}
      </DateWrapper>
    </StatWrapper>

    <ReadingTimeWrapper>
    <img src={TimeIcon} alt="time"/>
    {readingTime}
    </ReadingTimeWrapper>

    <p>{excerpt}</p>
  </CardWrapper>
  </>
}

export default BlogPostCard