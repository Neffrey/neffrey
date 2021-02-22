// Framework
import React from 'react'
import Head from 'next/head'

// My Components
import HeroRow from '../components/heroRow'
import AboutRow from '../components/aboutRow'
import DanceRow from '../components/danceRow'
import DesignRow from '../components/designRow'
import DevelopmentRow from '../components/developmentRow'
import ContactRow from '../components/contactRow'


  
// Page Component Function
const home = () => {

  // Render
  return (
    <React.Fragment>

      <Head>
        <title>Neffrey: Dancer, Designer, Developer</title>
      </Head>        

      <main>
        <HeroRow />
        <AboutRow />
        <DanceRow />
        <DesignRow />
        <DevelopmentRow />
        <ContactRow />
      </main>

    </React.Fragment>
  )
}

export default home