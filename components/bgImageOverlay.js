// Framework
import React from 'react'

// Styles
import { makeStyles, useTheme } from '@material-ui/core/styles'


const bgImageOverlay = ({ color }) => {

    // Get Theme
    const theme = useTheme()


    // Color Prop Switch
    let bgColor
    switch( color ) {
        // Primary
        case 'primary.light':
            bgColor = theme.palette.primary.light
            break

        case ( 'primary' || 'primary.main' ):
            bgColor = theme.palette.primary.main
            break

        case 'primary.dark':
            bgColor = theme.palette.primary.dark
            break

        // Secondary
        case 'secondary.light':
            bgColor = theme.palette.secondary.light
            break

        case ( 'secondary' || 'secondary.main' ):
            bgColor = theme.palette.secondary.dark
            break
        
        case 'secondary.dark':
            bgColor = theme.palette.secondary.dark
            break

        // Tertiary
        case 'tertiary.light':
            bgColor = theme.palette.tertiary.light
            break

        case ( 'tertiary' || 'tertiary.main' ):
            bgColor = theme.palette.tertiary.dark
            break
        
        case 'tertiary.dark':
            bgColor = theme.palette.tertiary.dark
            break

        // Default
        default:
            bgColor = theme.palette.primary.main
            break
    }



    // Make Styles
    const useStyles = makeStyles({
        wrapper: {
            position:'relative',
        },
        overlay: {
            position:'absolute',
            top:0,
            left:0,
            width:'100%',
            height:'100%',
            opacity: 0.66,
            backgroundColor: bgColor,
            mixBlendMode:'multiply',
        },
      })
    const classes = useStyles()



    // Render Component
    return (
       <div className={ classes.overlay }></div>
    )
}
export default bgImageOverlay