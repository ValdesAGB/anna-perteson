import React from 'react'
import { createGlobalStyle } from 'styled-components'
import Home from './Home'
import About from './About'
import Cover from './Cover'
import Facts from './Facts'
import Experiences from './Experiences'
import Contact from './Contact'
import Footer from './Footer'
import Portfolio from './Portfolio'
import { StatementProvider } from '../untils/context'
import Skills from './Skills'
import Education from './Education'
import LateralMenu from './LateralMenu'
import Header from './Header'

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
      <Header />
      <LateralMenu />
      <main className="row">
        <StatementProvider>
          <Home />
          <About />
          <Portfolio />
          <Cover />
          <Skills />
          <Education />
          <Facts />
          <Experiences />
          <Contact />
        </StatementProvider>
      </main>
      <Footer />
    </React.Fragment>
  )
}

export default App
