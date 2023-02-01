import React, { useState, useContext } from "react"
import { Link } from "gatsby"
// Components
import Menu from "components/Menu"
import Hamburger from "components/Hamburger"
import MobileMenu from "components/MobileMenu"
import ModeButton from "components/ModeButton"
// Hooks
import { useConfigQuery } from "hooks/useConfigQuery"
// Context
import { ModeContext } from "context/ModeProvider"
// Styles
import { Wrapper, Logo } from "./Header.styles"

const Header = ({ siteTitle = `` }) => {
  const [darkMode, setDarkMode] = useContext(ModeContext)
  const siteConfig = useConfigQuery()
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <Wrapper>
      <Hamburger menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu menuOpen={menuOpen} items={siteConfig.menu} />
      <Link to="/">
        <Logo src={siteConfig.logo.publicURL} alt={siteTitle} />
      </Link>
      <Menu items={siteConfig.menu} />

      <ModeButton darkMode={darkMode} setDarkMode={setDarkMode} />
    </Wrapper>
  )
}

export default Header
