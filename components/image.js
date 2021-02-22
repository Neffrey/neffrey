// Framework
import React from 'react'

// Styles
import { makeStyles } from '@material-ui/core/styles'



// Component Function
const image = ({ url, heightPercent, maxWidth }) => {
    
if(!maxWidth) {
    maxWidth='none'
}

// Make Styles
const useStyles = makeStyles({
    maxWidth: {
        maxWidth: maxWidth,
        marginLeft:'auto',
        marginRight:'auto',
    },
    imgWrapper: {
        position: 'relative',
        paddingTop: heightPercent,
    },
    img: {
        position:'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage:`url("${ url }")`,
        backgroundPosition:'center',
        backgroundSize:'cover',
        borderRadius:'8px',
    },
  })
const classes = useStyles()


    // Render Component
    return (
        <div className={ classes.maxWidth + ' imageComponent'}>
            <div className={ classes.imgWrapper }>
                <div className={ classes.img } />
            </div>
        </div>
    )
}
export default image