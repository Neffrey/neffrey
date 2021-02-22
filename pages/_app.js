// Default Styles And Fonts
import './styles.css'
import "@fontsource/roboto"
import "@fontsource/big-shoulders-display"

// Framework
import React from 'react'

// My Components
import Themer from '../contexts/themer'
import Header from '../components/header'
import Footer from '../components/footer'


// App Component
function MyApp({ Component, pageProps }) {
  return (
    <Themer>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Themer>
  )
}

export default MyApp
