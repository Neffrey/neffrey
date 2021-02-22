// Framework
import React from 'react'
import { Grid, Typography } from '@material-ui/core'

// Styles
import { makeStyles, useTheme } from '@material-ui/core/styles'


// My Components
import Image from './image'
import TextCard from './textCard'

// Helpers
import screensize from '../helpers/screensize'





// Component Function
const developmentRow = () => {

  // Screensize
  const size = screensize()

  // Theme
  const theme = useTheme()

  // Make Styles
  const useStyles = makeStyles({
    bigBottomMargin: {
      marginBottom:40,
    },
    smallBottomMargin: {
      marginBottom:12,
    },
  })
  const classes = useStyles()

  // Justify Helper
  const justifyHelper = () => {
    if ( size.width >= theme.breakpoints.values.md ) {
      return "space-around"
    }
    else {
      return "center"
    }
  }

  // Render Component
  return (
    <Grid id="design" container justify="center" alignItems="center" style={{ padding:40, background: theme.palette.primary.dark }}>
      <Grid item xs={12} sm={10} md={8} lg={6}>
        <TextCard color="rgba(0, 0, 0, 0.3)">
          <Typography variant="h2">
            ReactJS and WordPress
          </Typography>
          <br />
          <Typography variant="body1">
            Graphic design has been a hobby of mine for 15 years now. Previously I really enjoyed digital painting though that was put on the back burner in the past as my time in Photoshop and Illustrator was spent making functional art like logos and user interfaces.
          </Typography>
          <br />
          <Typography variant="body1" className={ classes.bigBottomMargin }>
            Part of no longer offering design and development services is to be able to spend time working on my own graphic art and development projects. There are many beautiful ideas in my head. I want to see some of them actually get made.
          </Typography>

          <Grid container justify={ justifyHelper() } alignItems="flex-end">
            <Grid item xs={8} md={4} lg={3} className={ classes.bottomMargin }>
              <Image url="wp-logo.svg" heightPercent="102%" maxWidth="150px" />
              <div className={ classes.smallBottomMargin } />
              <Typography variant="h5" style={{ textAlign:'center', textTransform:'none' }}>
                WordPress
              </Typography>
            </Grid>

            <Grid item xs={6} md={4} lg={3} className={ classes.bottomMargin }>
              <Image url="react-logo.svg" heightPercent="89%" maxWidth="150px" />
              <div className={ classes.smallBottomMargin } />
              <Typography variant="h5" style={{ textAlign:'center', textTransform:'none' }}>
                React JS
              </Typography>
            </Grid>

            <Grid item xs={6} md={4} lg={3} className={ classes.bottomMargin } style={{ '& svg': { fill:'#fff' }}}>
              <Image url="graphql-logo.svg" heightPercent="102%" maxWidth="150px" />
              <div className={ classes.smallBottomMargin } />
              <Typography variant="h5" style={{ textAlign:'center', textTransform:'none' }}>
                GraphQL
              </Typography>
            </Grid>
          </Grid>
        </TextCard>
      </Grid>
    </Grid>
  )
}
export default developmentRow