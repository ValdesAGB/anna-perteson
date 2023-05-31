import React from 'react'
import { aboutElements } from '../data'
import styled from 'styled-components'

function About() {
  const Div = styled.div`
    background-color: #fcf7f1;
    padding-bottom: 5%;
  `
  const DivContent = styled.div`
    padding: 14% 14% 0 14%;
  `
  const TitleDiv = styled.div`
    width: 31.25%;
    background-color: #188497;
  `

  const Title = styled.h1`
    color: white;
    padding: 40% 0 40% 0;
    font-weight: 300;
    font-size: 4em;
    letter-spacing: -6px;
  `

  const H5 = styled.h5`
    text-align: justify;
    font-weight: 600;
    line-height: 1.5em;
    margin-bottom: 40px;
  `

  const Paragraph = styled.p`
    text-align: justify;
    line-height: 1.9em;
    font-size: 0.9em;
    margin-bottom: 40px;
  `

  const List = styled.ul`
    display: grid;
    grid-template-columns: 123px 123px 123px;
    justify-content: space-between;
  `

  return (
    <React.Fragment>
      <section id="about">
        <div className="container">
          <div className="row align-items-start">
            <TitleDiv className="col-4 ">
              <Title className="text-center">About</Title>
            </TitleDiv>
            <Div className="col ">
              <DivContent className="col-11">
                <H5>
                  Dolor sit amet, consectetur adipiscing elit viverra tristique
                  placerat in massa consectetur
                </H5>
                <Paragraph>
                  Faucibus sed tristique fames sed aliquet ultricies eget
                  viverra arcu vitae faucibus diam consequat maecenas turpis
                  metus sit diam purus leo in varius ac quam nunc amet tristique
                  volutpat.
                </Paragraph>
                <List className=" justify-conter list-unstyled">
                  {aboutElements.map(({ id, icone, text }) => (
                    <li key={id} className="text-center">
                      <img src={icone} alt={id} className="w-100" />
                      <h6>{text}</h6>
                    </li>
                  ))}
                </List>
              </DivContent>
            </Div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default About
