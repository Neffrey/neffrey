// Framework
import React from 'react'

// Styles
import { makeStyles, useTheme } from '@material-ui/core/styles'


const scrollBackground = ({ children }) => {

    // Make Styles
    const useStyles = makeStyles({
        root: {
            
        }
    })
    const classes = useStyles()

    // Render Component
    return(
        <div>{children}</div>
    )
}
export default scrollBackground