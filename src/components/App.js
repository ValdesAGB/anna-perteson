import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
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
    //border : solid 1px red;
    @media (min-width: 320px) {
      background-color:#f0deca;
      width: 100%;
    }
    @media (min-width: 768px) {
      background-color: #faeddf;
    }
    @media (min-width: 1024px) {
      background-color:#faeddf;
      width: 100%;
    }
    @media (min-width: 1360px) {
      background-color: #faeddf;

    }
  }
  `

  const Main = styled.main`
    @media (max-width: 425px) {
      width: 100%;
    }

    @media (min-width: 1300px) {
      margin-top: 5.7%;
    }

    @media (min-width: 1440px) {
      margin: 6% 0 0 3%;
    }
  `
  return (
    <React.Fragment>
      <GlobalStyle />

      <Main className="">
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
      </Main>
      <Footer />
    </React.Fragment>
  )
}

export default App
