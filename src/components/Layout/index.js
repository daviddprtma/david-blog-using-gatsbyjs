import React, { useContext } from "react"
import { ThemeProvider } from "styled-components"
// Components
import Header from "components/Header"

// Styles
import { GlobalStyles, lightTheme, darkTheme } from "styles/GlobalStyles"
// Hooks
import { useMetaDataQuery } from "hooks/useMetaDataQuery"
import { useConfigQuery } from "hooks/useConfigQuery"

const Layout = ({ children }) => {
  const data = useMetaDataQuery()
  const data2 = useConfigQuery();
  console.log(data)
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <Header siteTitle={data2.title} />
      {children}
    </ThemeProvider>
  )
}

export default Layout
