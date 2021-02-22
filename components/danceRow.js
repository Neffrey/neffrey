// Framework
import React from 'react'

// Styles
import { makeStyles, useTheme } from '@material-ui/core/styles'


// Lib Components
import { Grid, Typography } from '@material-ui/core'

// My Components
import TextCard from './textCard'
import Image from './image'



// Component Function
const danceRow = () => {

  // Get Theme
  const theme = useTheme()

  // Make Styles
  const useStyles = makeStyles({
    container: {
      padding:'40px 40px',
      background:theme.palette.primary.light,
    },
    textCards: {
      '& > div': {
        marginBottom:40
      }
    },
  })
  const classes = useStyles()



  // Render Component
  return (
    <Grid id="dance" container justify="center" className={ classes.container }>
      <Grid item style={{ marginBottom: 40, width:400 }}>
        <Image url="./konnexion.jpg" heightPercent="150%" />
      </Grid>
      <Grid item md={1} />
      <Grid item  sm={10} md={6} lg={5} style={{ marginBottom: 40 }} className={ classes.textCards }>
        <TextCard color="rgba(0, 0, 0, 0.5)">
          <Typography variant="h2">
            Flowarts is my dance
          </Typography>
          <br />
          <Typography variant="body1">
            Prop-based dance, aka flowarts, is what I love. My favorite prop by far is Poi, balls on strings, that I spin around while dancing. Usually with LED poi, sometimes with fire.
          </Typography>
          <br />
          <Typography variant="body1">
          Other props I use are S staves, gloving, contact ball, hoop, and 3 ball juggling.
          </Typography>
        </TextCard>
        <TextCard color="rgba(0, 0, 0, 0.5)">
          <Typography variant="h2">
            Flowarts Changed My Life
          </Typography>
          <br />
          <Typography variant="body1">
            Flowarts is my daily meditation and my favorite thing to do for fun. After being around it for just a few months, I made it a part of my daily life. It has been such a blessing in my life both physically AND mentally.
          </Typography>
          <br />
          <Typography variant="body1">
            I've already been lucky enough to perform in front of hundreds as a festival dancer. My goal is to one day travel around performing at festivals and teaching workshops. 
          </Typography>
        </TextCard>
      </Grid>
    </Grid>
  )
}
export default danceRow