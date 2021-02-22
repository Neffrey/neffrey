// Framework
import React from 'react'

// Styles
import { makeStyles } from '@material-ui/core/styles'


// Lib Components
import { Grid, Typography } from '@material-ui/core'

// My Components
import Image from './image'
import TextCard from './textCard'




// Component Function
const aboutRow = () => {

    // Make Styles
    const useStyles = makeStyles({
      
    })
    const classes = useStyles()


    // Render Component
    return (
        <Grid id="about" container justify="center" alignItems="center" style={{ padding:40, background:'#575757' }}>
          <Grid item sm={10} md={6} lg={5} style={{ marginBottom:32, textAlign:'right' }}>
            <TextCard color="rgba(0, 0, 0, 0.3)">
              <Typography variant="h2">
                About Me
              </Typography>
              <br />
              <Typography variant="body1">
                At the start of 2020, I moved across the country to the Minneapolis MN area for a complete career change. With that change, I am no longer offering web development services.
              </Typography>
              <br />
              <Typography variant="body1">
                Nowadays you can find me at my job as a casino blackjack dealer, dancing around with my flow props, sometimes making graphic art, honing my web dev skills, and spending time with friends when possible!
              </Typography>
            </TextCard>
          </Grid>
          <Grid item md={1} />
          <Grid item md={6} >
            <Image url="./selfie.jpg" heightPercent="140%" maxWidth="350px" />
          </Grid>
        </Grid>
    )
}
export default aboutRow