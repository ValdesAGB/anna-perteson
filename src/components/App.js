import React from 'react'
import { createGlobalStyle } from 'styled-components'
import Home from './Home'
import About from './About'
import Cover from './Cover'
import Facts from './Facts'
import Experiences from './Experiences'
import Contact from './Contact'
import Footer from './Footer'

function App() {
  const GlobalStyle = createGlobalStyle`
  body{
    font-family : Montserrat;
background-color:#faeddf;
color:#7a5932;
  }
  `
  return (
    <React.Fragment>
      <GlobalStyle />
      <main className="row">
        <Home />
        <About />
        <Cover />
        <Facts />
        <Experiences />
        <Contact />
      </main>
      <Footer />
    </React.Fragment>
  )
}

export default App
