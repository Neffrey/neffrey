// Framework
import React from 'react'

// Styles
import { makeStyles, useTheme } from '@material-ui/core/styles'


// Lib Components
import { Grid, Typography } from '@material-ui/core'





// Component Function
const contactRow = () => {

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
        <Grid id="contact" container spacing={2} style={{ padding:0 }}>
          <Grid item xs={12}>
            <div style={{ minHeight:500, padding:50 }}>
              <Typography variant="h2">
                Contact Me
              </Typography> 
            </div>
          </Grid>
        </Grid>
    )
}
export default contactRow