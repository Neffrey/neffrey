// Framework
import React, { createContext, useState } from 'react'

// MUI
import { CssBaseline } from '@material-ui/core/'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'

// Preset Themes
import { presetThemes } from '../themes/presetThemes'

// Export Context
export const ThemeContext = createContext({})




// Component Function
const Themer = ({ children }) => {
  // themeBuilder function
  const themeBuilder = ( darkMode, themeOverwrites ) => {
    if( darkMode === true ) {
      themeOverwrites.palette.type = 'dark'
    }
    else {
      themeOverwrites.palette.type = 'light'
    }
    return createMuiTheme( themeOverwrites )
}
  
  // State Default Theme
  const [ theme, setTheme ] = useState( themeBuilder( presetThemes.defaultTheme.darkMode, presetThemes.defaultTheme.overWrites ))

  
const themeSetter = ( darkMode, themeOverwrites ) => {
  setTheme( themeBuilder ( darkMode, themeOverwrites ))
}


  return (
    <ThemeContext.Provider value={{ theme, themeSetter }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}
export default Themer