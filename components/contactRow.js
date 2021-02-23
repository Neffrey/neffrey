// Framework
import React, { useState } from 'react'

// Styles
import { makeStyles, useTheme } from '@material-ui/core/styles'


// Lib Components
import { Button, Grid, TextField, Typography } from '@material-ui/core'


// My Components
import TextCard from './textCard'



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

  // Form States
  const [ email, setEmail ] = useState("")
  const [ message, setMessage ] = useState("")

  // Handle Submit
  const handleSubmit = event => {
    event.preventDefault()
    console.log("event", event)

  }
  
  // Render Component
  return (
      <Grid id="contact" container justify="center" alignItems="center" spacing={4} style={{ padding:40, background:'#333' }}>
        <Grid item xs={12} sm={10} md={6}>
          <TextCard color="rgba(0,0,0,0.3)">
            <Typography variant="h2">
              Get in Touch
            </Typography>
            <Typography variant="body1">
              Send me a quick message and I’ll get back to you as soon as I can.
            </Typography>
            <Typography variant="body1">
              Again, I’m not trying to take on any design or development jobs unless you REALLY want me to do it and you’re ready to pay REALLY big bucks. My attention is elsewhere :/
            </Typography>
            <TextField 
              id="email"
              label="Email"
              type="email"
              value={email}
              onChange={ e => setEmail(e.target.value)}
              required
              fullWidth
            />
            <TextField 
              id="message"
              label="Message"
              value={message}
              onChange={ e => setMessage(e.target.value)}
              multiline
              rows={4}
              required
              fullWidth
            />
            <Button  
                color="primary" 
                variant="contained"
                onClick={ handleSubmit }
                size="large"
            >
                Login
            </Button>
          </TextCard>
        </Grid>
        <Grid item xs={12} md={6} style={{ textAlign:'right' }}>
          <TextCard color="rgba(0,0,0,0.3)">
            <Typography variant="h2">
              Stay Up To Date
            </Typography> 
            <Typography variant="body1">
              Want to stay up to date on what I’m doing? Follow me on social media.
            </Typography>
            <p>Social Icons here</p>
          </TextCard>
        </Grid>
      </Grid>
  )
}
export default contactRow