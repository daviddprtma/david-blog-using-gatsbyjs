import React from "react";
import { Link } from "gatsby";

//components
import Menu from "components/Menu"
//hooks
import { useConfigQuery } from "hooks/useConfigQuery"

//styles
import { Wrapper,Logo} from "./Header.styles";

const Header = ({ siteTitle = `` }) => {
    const siteConfig = useConfigQuery()

    return (
        <Wrapper>
            <Menu items = {siteConfig.menu} />
            <Link to="/">
                <Logo src={siteConfig.logo.publicURL} alt={siteTitle} />
            </Link>
            <div>Theme Button</div>
        </Wrapper>
    )
}

export default Header