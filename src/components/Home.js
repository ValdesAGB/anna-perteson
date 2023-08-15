import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { colors } from '../untils/colors'
import { annaCover } from '../data'

const HomeSection = styled.section`
  @media (max-width: 1199px) {
    margin-top: 70px;
  }
`

const Container = styled.div`
  position: relative;
  @media (max-width: 767px) {
    padding: 0;
  }

  div {
    background-color: ${colors.mainBgColor};
  }
`

const CoverContainer = styled.div`
  padding: 0;
  img {
    width: 100%;
  }
`

const Content = styled.div`
  margin-top: 20px;

  @media (min-width: 768px) {
    margin-top: 0;
    padding: 0 40px;
  }

  @media (min-width: 1200px) {
    margin-top: 120px;
  }
`

const Title = styled.h1`
  font-weight: 200;
  font-size: 3em;
  letter-spacing: -4px;
  line-height: 1em;

  @media (min-width: 768px) {
    font-size: 4em;
    letter-spacing: -2px;
  }

  @media (min-width: 992px) {
    font-size: 6em;
    letter-spacing: 5px;
  }
`

const Subtitle = styled.p`
  line-height: 2em;
  font-size: 0.9em;
  text-align: justify;
  margin-top: 20px;

  @media (min-width: 768px) {
    font-size: 1em;
  }

  @media (min-width: 992px) {
    font-size: 1.2em;
    font-weight: 400;
  }

  @media (min-width: 1200px) {
    font-size: 1em;
    line-height: 1.8em;
  }
`

function Home() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    // Nettoyer l'écouteur d'événement lorsque le composant est démonté.
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, []) // Le tableau de dépendances est vide pour s'assurer que l'effet est exécuté une seule fois lors du montage.

  const cover = screenWidth >= 768 ? annaCover.md : annaCover.sm

  return (
    <HomeSection>
      <Container className="container">
        <div className="row align-items-center">
          <CoverContainer className="col-12 col-md-4">
            <img src={cover} alt="anna-peterson-cover" />
          </CoverContainer>
          <Content className="col-12 col-md-7 col-lg col-xl-6 offset-xl-1">
            <Title>
              Hello <br />
              I’m Anna <br />
              Peterson
            </Title>

            <Subtitle>
              A full stack allaround designer that tristique est placerat in
              massa consectetur quisque lobortis vitae faucibus diam consequat
              maecenas turpis metus sit diam purus leo in varius ac quam est
              lorem ipsum.
            </Subtitle>
          </Content>
        </div>

        {/*<HomeAnimation />*/}
      </Container>
    </HomeSection>
  )
}

export default Home
