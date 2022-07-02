import React from "react";
import { ThemeProvider } from "styled-components";

//Styles
import {GlobalStyles, lightTheme, darkTheme} from 'styles/GlobalStyles'

//hooks
import {useMetaDataQuery} from "hooks/useMetaDataQuery";

const Layout = ({children}) =>{
   
  const data = useMetaDataQuery()
  console.log(data)
    return(
        <ThemeProvider theme={darkTheme}>
            <GlobalStyles>
                Layout component
                {children}
            </GlobalStyles>
        </ThemeProvider>
    )
}

export default Layout