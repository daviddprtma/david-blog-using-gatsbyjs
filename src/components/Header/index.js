import React, {useState} from "react"
import { Link } from "gatsby"

//components
import Menu from "components/Menu"
import Hamburger from "components/Hamburger"
import MobileMenu from "components/MobileMenu"
//hooks
import { useConfigQuery } from "hooks/useConfigQuery"

//styles
import { Wrapper,Logo} from "./Header.styles"

const Header = ({ siteTitle = `` }) => {
    const siteConfig = useConfigQuery()
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <Wrapper>
            <Hamburger menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <MobileMenu menuOpen={menuOpen} items={siteConfig.menu}></MobileMenu>
            <Link to="/">
                <Logo src={siteConfig.logo.publicURL} alt={siteTitle} />
            </Link>
            <Menu items = {siteConfig.menu} />
            <div>Theme Button</div>
        </Wrapper>
    )
}

export default Header