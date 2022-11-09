import React from 'react'
import { Link } from 'gatsby'

// Icons
import LeftIcon from 'images/arrow-left.svg'
import RightIcon from 'images/arrow-right.svg'

// Styles
import { PageNavigationWrapper,ImgWrapper,Current } from './PageNavigation.styles'

const PageNavigation = ({currentPages, numbPages}) => {
  return (
    <PageNavigationWrapper>
        <ImgWrapper>
            {currentPages > 1 && (
                <Link to={`/${currentPages === 2 ? '' : currentPages -1}`}>
                    <input type="image" alt="left-nav" src={LeftIcon} />
                </Link>
            )}
            &nbsp;
        </ImgWrapper>

        <Current>
            <p>{currentPages} &nbsp;</p>
        </Current>

        
        <ImgWrapper>
            {currentPages !== numbPages && (
                <Link to={`/${currentPages + 1}`}>
                    <input type="image" alt="right-nav" src={RightIcon}/>
                </Link>
            )}
        </ImgWrapper>

    </PageNavigationWrapper>
  )
}

export default PageNavigation