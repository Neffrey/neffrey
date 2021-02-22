// Framework
import React from 'react'

// MUI
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Slide from '@material-ui/core/Slide'



// Component Function
const hideOnScroll = ({ children }) => {
    const scrollTrigger = useScrollTrigger()
    return (
        <Slide appear={false} direction="down" in={!scrollTrigger} >
            {children}
        </Slide>
    )
}
export default hideOnScroll