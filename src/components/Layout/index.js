import React, { useContext } from "react"
import { ThemeProvider } from "styled-components"
// Components
import Header from "components/Header"

// Styles
import { GlobalStyles, lightTheme, darkTheme } from "styles/GlobalStyles"

// context
import { ModeContext } from "context/ModeProvider"
// Hooks
import { useMetaDataQuery } from "hooks/useMetaDataQuery"
import { useConfigQuery } from "hooks/useConfigQuery"

const Layout = ({ children }) => {
  const [darkMode] = useContext(ModeContext)
  const data = useMetaDataQuery()
  const data2 = useConfigQuery();
  console.log(data)
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Header siteTitle={data2.title} />
      {children}
    </ThemeProvider>
  )
}

export default Layout
