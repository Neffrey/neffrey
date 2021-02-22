// Framework
import React from 'react'

// Styles
import { makeStyles, useTheme } from '@material-ui/core/styles'


// Lib Components
import { Grid, Typography } from '@material-ui/core'

// My Components
import Image from './image'
import TextCard from './textCard'





// Component Function
const designRow = () => {

    // Get Theme
    const theme = useTheme()

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
            backgroundColor: "#fff",
        },
      })
    const classes = useStyles()



    // Render Component
    return (
      <Grid id="design" container justify="center" alignItems="center" style={{ padding:40, background:'#444' }}>
        <Grid item sm={10} md={5} lg={5} style={{ marginBottom:40 }}>
          <TextCard color="rgba(0, 0, 0, 0.3)">
            <Typography variant="h2">
              Graphic Artist
            </Typography>
            <br />
            <Typography variant="body1">
              Graphic design has been a hobby of mine for 15 years now. Previously I really enjoyed digital painting though that was put on the back burner in the past as my time in Photoshop and Illustrator was spent making functional art like logos and user interfaces.
            </Typography>
            <br />
            <Typography variant="body1">
              Part of no longer offering design and development services is to be able to spend time working on my own graphic art and development projects. There are many beautiful ideas in my head. I want to see some of them actually get made.
            </Typography>
            <br />
          </TextCard>
        </Grid>

        <Grid item md={1} />
        
        <Grid item sm={10} md={6}>
          <Image url="./forest_wolf.jpg" heightPercent="58%" />
        </Grid>
      </Grid>
    )
}
export default designRow