import React from 'react'
import { aboutElements } from '../data'
import styled from 'styled-components'
import { colors } from '../untils/colors'

const Container = styled.div`
  @media (max-width: 767px) {
    padding: 0;
  }
`

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.aboutTitleBgColor};
`

const Title = styled.h1`
  color: white;
  font-weight: 300;
  padding: 10% 0;
  font-size: 2.5em;
  letter-spacing: -3px;

  @media (min-width: 768px) {
    padding: 40% 0;
    font-size: 3em;
    letter-spacing: -5px;
  }
  @media (min-width: 1200px) {
    font-size: 3.3em;
  }
  @media (min-width: 1400px) {
    font-size: 4em;
    letter-spacing: -8px;
  }
`

const Content = styled.div`
  background-color: ${colors.aboutContentBgColor};
  padding-top: 30px;
  padding-bottom: 30px;
  @media (min-width: 768px) {
    padding: 40px;
  }

  @media (min-width: 1200px) {
    padding: 100px;
  }

  @media (min-width: 1400px) {
    padding: 140px;
    padding-top: 100px;
  }
`
const ContentTitle = styled.h5`
  font-weight: 600;
  line-height: 1.5em;

  @media (max-width: 425px) {
    text-align: justify;
  }
`
const Paragraph = styled.p`
  line-height: 1.9em;
  font-size: 0.9em;
  margin: 30px 0;
  @media (max-width: 991px) {
    text-align: justify;
  }
`

const ListContainer = styled.div`
  @media (max-width: 767px) {
    display: flex;
    justify-content: center;
  }
`

const List = styled.ul`
  display: grid;
  grid-template-columns: 123px;
  grid-template-rows: repeat(3, 175px);

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 110px);
    grid-template-rows: 175px;
    justify-content: space-between;
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 123px);
    justify-content: space-around;
  }

  li {
    text-align: center;
  }
`

const ListIcone = styled.img`
  width: 100%;
`

const ListTitle = styled.h6`
  font-size: 0.8em;
  font-weight: 700;
`

function About() {
  return (
    <React.Fragment>
      <section id="about">
        <Container className="container">
          <div className="row align-items-start">
            <TitleContainer className="col-12 col-md-4">
              <Title>About</Title>
            </TitleContainer>
            <Content className="col-12 col-md">
              <ContentTitle>
                Dolor sit amet, consectetur adipiscing elit viverra tristique
                placerat in massa consectetur
              </ContentTitle>
              <Paragraph>
                Faucibus sed tristique fames sed aliquet ultricies eget viverra
                arcu vitae faucibus diam consequat maecenas turpis metus sit
                diam purus leo in varius ac quam nunc amet tristique volutpat.
              </Paragraph>
              <ListContainer>
                <List className="list-unstyled">
                  {aboutElements.map(({ id, icone, text }) => (
                    <li key={id}>
                      <ListIcone src={icone} alt={text} />
                      <ListTitle>{text}</ListTitle>
                    </li>
                  ))}
                </List>
              </ListContainer>
            </Content>
          </div>
        </Container>
      </section>
    </React.Fragment>
  )
}

export default About
