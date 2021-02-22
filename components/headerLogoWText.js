// Framework
import React from 'react'
import Link from 'next/link'

// Styles
import { makeStyles, useTheme } from '@material-ui/core/styles'

// Lib Components
import { Grid, Avatar, Typography } from '@material-ui/core/'




// Component Function
const headerLogoWText = () => {
    
    // Styles
    const theme = useTheme()
    const useStyles = makeStyles({
        header: {
          color: theme.palette.text.primary,
        },
        a: {
            textDecoration:'none'
        }
      })
    const classes = useStyles()


    // Render
    return (
        <Link href="/">
            <a className={ classes.a }>
                <Grid container spacing={2} alignItems="center">
                    <Grid item>
                        <Avatar variant="square" src="/rgbcmyfol-wbrdr-750.png" />
                    </Grid>
                    <Grid item>
                        <Typography className={ classes.header } variant="h5">Neffrey</Typography>
                    </Grid>
                </Grid>
            </a>
        </Link>
    )
}
export default headerLogoWText