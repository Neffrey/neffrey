// Framework
import React, { useRef, useState } from 'react'
import { motion, useViewportScroll, useTransform } from 'framer-motion'

// Styles
import { makeStyles, useTheme } from '@material-ui/core/styles'


// Lib Components
import { Container, Grid, Typography } from '@material-ui/core'

// My Components
import BgImageOverlay from '../components/bgImageOverlay'
import Image from '../components/image'
import TextCard from '../components/textCard'
import ScrollBackground from '../components/scrollBackground'



// Component Function
const heroRow = () => {

    // Get Theme
    const theme = useTheme()

    // Make Styles
    const useStyles = makeStyles({
        root: {
            position:'relative',
            overflow:'hidden',
            '& > img': {
                position:'absolute',
                height:'100%',
                width:'100%',
                top:0,
                left:0,
                objectFit:'cover',
            },
        },
        heroSubTitle: {
            '& h2': {
                margin:0,
                fontFamily:'roboto',
                letterSpacing:2,
                lineHeight:1.4,
            },
        },
        d1: {
            '&:hover': {
                color: theme.palette.primary.main,
            }
        },
        d2: {
            '&:hover': {
                color: theme.palette.secondary.light,
            }
        },
        d3: {
            '&:hover': {
                color: theme.palette.tertiary.main,
            }
        },
        expandMoreIcon: {
            position:'relative',
            '& svg': {
                fill:'#fff',
            },
            '& svg:hover': {
                fill: theme.palette.tertiary.main,
            }
        },
      })
    const classes = useStyles()

    // Scroll
    const { scrollYProgress } = useViewportScroll()
    const objectPosition = useTransform( scrollYProgress, [0, 0.25], [50, 100])
    console.log(objectPosition)
    // const translateUp = useTransform( scrollYProgress, [0, 0.25], [0, -100])
    // const scaleUp = useTransform( scrollYProgress, [0, 0.25], [1,1.25])
  

    const [ scrollY, setScrollY ] = useState()
    // Render Component
    return (
        <div className={ classes.root }>
            <motion.img 
                srcSet="
                    ./lake-flow-bw-600.jpg 600w,
                    ./lake-flow-bw-960.jpg 960w,
                    ./lake-flow-bw-1280.jpg 1280w,
                    ./lake-flow-bw-1920.jpg 1920w
                "
                src="./lake-flow-bw-600.jpg 600w,"
                alt="Spinning poi by a lake"
                style={{
                    objectPositionY: objectPosition,
                    //scale: scaleUp
                }}
            />
            <BgImageOverlay color="primary.dark" />
            <Container maxWidth="lg">
                <Grid container justify="flex-end" alignItems="flex-start" style={{ padding:40 }}>
                    <Grid item xs={12} style={{ position:'relative' }}>
                        <Typography variant="h1" style={{ textAlign:'center', margin:'40px auto'}}>
                            Meet Neffrey
                        </Typography>
                    </Grid>
                    <Grid item className={ classes.heroSubTitle } style={{ textAlign:'right', marginBottom:60 }} >
                        <TextCard color="rgba(0,0,0,0.3)">
                            <motion.div whileHover={{ y:-8 }}>
                                <Typography variant="h2" className={ classes.d1 }>
                                    Dancer
                                </Typography>
                            </motion.div>
                            <motion.div whileHover={{ y:-8 }}>
                                <Typography variant="h2" className={ classes.d2 }>
                                    Designer
                                </Typography>
                            </motion.div>
                            <motion.div whileHover={{ y:-8 }}>
                                <Typography variant="h2" className={ classes.d3 }>
                                    Developer
                                </Typography>
                            </motion.div>
                        </TextCard>
                    </Grid>
                    <Grid item xs={12} className={ classes.expandMoreIcon } style={{ textAlign:'center' }}> 
                        <a href="#about">
                            <motion.svg
                                whileHover={{ y:-8 }}
                                version="1.1"
                                id="expand-more-icon" 
                                x="0px" y="0px" viewBox="0 0 261 165"
                                style={{ maxWidth:48 }}
                            >
                                <g transform="matrix(1,0,0,-1,68.338983,1133.5593)">
                                    <path id="path3005" d="M192.5,1099.6c0-5.9-2.1-10.9-6.2-15.1l-109-109
                                        c-4.2-4.2-9.3-6.4-15.2-6.4c-6,0-11,2.1-15.1,6.4l-109,109c-4.2,4-6.4,9-6.4,15.1c0,5.9,2.1,11,6.4,15.2l12.4,12.6
                                        c4.4,4.1,9.4,6.2,15.2,6.2c5.9,0,10.9-2.1,15.1-6.2l81.4-81.4l81.4,81.4c4.1,4.1,9.2,6.2,15.1,6.2c5.8,0,10.9-2.1,15.2-6.2
                                        l12.6-12.6C190.4,1110.5,192.5,1105.4,192.5,1099.6z"
                                    />
                                </g>
                            </motion.svg>
                        </a>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
export default heroRow