// Framework
import React from 'react'

// Styles
import { makeStyles } from '@material-ui/core/styles'

// Component Function
const textCard = ({ color, children }) => {
    
// Make Styles
const useStyles = makeStyles({
    textCard: {
        position:'relative',
        background:`${ color }`,
        borderRadius:8,
        padding:32,
    },
  })
const classes = useStyles()


    // Render Component
    return (
        <div className={ classes.textCard }>
            {children}
        </div>
    )
}
export default textCard