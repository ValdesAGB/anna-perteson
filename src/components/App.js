import React, { useState } from 'react'
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
import ToTop from './ToTop'
import { police } from '../untils/police'
import { colors } from '../untils/colors'
import ToogleMenu from './ToogleMenu'

const GlobalStyle = createGlobalStyle`
  body{
    font-family : ${police.main};
    color:#7a5932;
    background-color:${colors.mainBgColor};
    @media (min-width: 768px) {
      background-color: ${colors.secondBgColor};
    }
  }
`

function App() {
  const [hover, setHover] = useState(false)

  return (
    <React.Fragment>
      <GlobalStyle />
      <LateralMenu handleHover={setHover} />
      <Header IsHover={hover} handleHover={setHover} />
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
      <ToTop />
      <ToogleMenu IsHover={hover} handleHover={setHover} />
    </React.Fragment>
  )
}

export default App
