// Framework
import React from 'react'

// MUI
import { Avatar, AppBar, Grid, Toolbar, Typography } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'





// Component Function
const Header = ( props ) => {
    
    // Styles
    const theme = useTheme()
    const useStyles = makeStyles({
        header: {
            color: "#fff",
        },
        logoBtn: {
            textDecoration:'none'
        },
        menuContainer: {
            '& a': {
                color:'#fff',
                textDecoration:'none',
            }
        }
      })
    const classes = useStyles()
    console.log(theme)

    
    // Component Render
    return (
        <React.Fragment>
            <AppBar>
                <Toolbar>
                    <Grid container spacing={2} alignItems="center" justify="space-between">
                        <Grid item>
                            <a href="#top" className={ classes.logoBtn }>
                                <Grid container spacing={2} alignItems="center">
                                    <Grid item>
                                        <Avatar variant="square" src="/rgbcmyfol-wbrdr-750.png" />
                                    </Grid>
                                    <Grid item>
                                        <Typography className={ classes.header } variant="h3">Neffrey</Typography>
                                    </Grid>
                                </Grid>
                            </a>
                        </Grid>
                        <Grid item>
                            <Grid container spacing={2} alignItems="center" justify="flex-end" className={ classes.menuContainer }>
                                {/*
                                    <Grid item>
                                        <a href="#about"><Typography variant="h6">About</Typography></a>
                                    </Grid>
                                    <Grid item>
                                        <a href="#dance"><Typography variant="h6">Dance</Typography></a>
                                    </Grid>
                                    <Grid item>
                                        <a href="#design"><Typography variant="h6">Design</Typography></a>
                                    </Grid>
                                    <Grid item>
                                        <a href="#development"><Typography variant="h6">Development</Typography></a>
                                    </Grid>
                                    <Grid item>
                                        <a href="#contact"><Typography variant="h6">Contact</Typography></a>
                                    </Grid>
                                */}
                            </Grid>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <Toolbar />
        </React.Fragment>
    )
}
export default Header