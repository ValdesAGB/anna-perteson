import React from 'react'
import { aboutElements, width } from '../data'
import styled from 'styled-components'

function About() {
  const Div = styled.div`
    background-color: #fcf7f1;
    padding-bottom: 5%;
    @media (min-width: 768px) {
      margin-right: -12px;
    }
    @media (min-width: 1024px) {
      margin-right: -20px;
    }
    @media (min-width: ${width}px) {
      margin-right: 11.5px;
    }
    @media (min-width: 1440px) {
      margin-right: 10.9px;
    }
  `
  const DivContent = styled.div`
    @media (min-width: 320px) {
      padding: 10% 0% 0 0%;
    }
    @media (min-width: 768px) {
      padding: 14% 1% 0 0%;
      margin-left: 10%;
    }
    @media (min-width: ${width}px) {
      padding: 14% 10% 0 4%;
    }
    @media (min-width: 1440px) {
      padding: 14% 10% 0 10%;
    }

    @media (min-width: 2560px) {
      padding: 14% 10% 10% 4%;
    }

    padding: 14% 14% 0 14%;
  `
  const TitleDiv = styled.div`
    @media (min-width: 320px) {
      width: 100%;
    }
    @media (min-width: 768px) {
      width: 40.5%;
      margin-left: -1.6%;
    }
    @media (min-width: 1024px) {
      width: 39.5%;
      margin-left: -2%;
    }
    @media (min-width: ${width}px) {
      width: 33.55%;
      margin-left: 1.12%;
    }
    @media (min-width: 1440px) {
      width: 33.8%;
      margin-left: 0.9%;
    }
    width: 31.25%;
    background-color: #188497;
  `

  const Title = styled.h1`
    @media (min-width: 320px) {
      padding: 10% 0 10% 0;
      font-size: 2.5em;
      letter-spacing: -3px;
    }
    @media (min-width: 768px) {
      padding: 40% 0 40% 0;
      font-size: 3em;
      letter-spacing: -5px;
    }
    @media (min-width: ${width}px) {
      padding: 40% 0 40% 0;
      font-size: 3.3em;
      letter-spacing: -4.5px;
    }
    @media (min-width: 1440px) {
      padding: 40% 0 40% 0;
      font-size: 5.2em;
      letter-spacing: -8px;
    }
    color: white;
    padding: 40% 0 40% 0;
    font-weight: 300;
    font-size: 4em;
    letter-spacing: -6px;
  `

  const H5 = styled.h5`
    font-weight: 600;
    line-height: 1.5em;
    margin-bottom: 40px;
  `

  const Paragraph = styled.p`
    line-height: 1.9em;
    font-size: 0.9em;
    margin-bottom: 40px;
  `

  const List = styled.ul`
    display: grid;
    @media (min-width: 320px) {
      grid-template-columns: 123px;
      grid-template-rows: 175px 175px 175px;
      padding: 0% 0 0 30%;
      justify-content: space-between;
    }

    @media (min-width: 375px) {
      grid-template-rows: 160px 160px 160px;
      padding: 0% 0 0 32%;
    }

    @media (min-width: 425px) {
      padding: 0% 0 0 35%;
    }
    @media (min-width: 768px) {
      grid-template-columns: 110px 110px 110px;
      grid-template-rows: 175px;
      padding: 0% 0 0 0%;
      justify-content: space-between;
    }
    @media (min-width: 1024px) {
      grid-template-columns: 123px 123px 123px;
      grid-template-rows: 175px;
      padding: 0% 0 0 0%;
      justify-content: space-around;
    }
    grid-template-columns: 123px 123px 123px;
    justify-content: space-between;
  `
  const ListH6 = styled.h6`
    @media (min-width: 320px) {
      font-size: 0.8em;
      font-weight: 700;
    }
  `
  return (
    <React.Fragment>
      <section id="about">
        <div className="container p-0">
          <div className="row align-items-start">
            <TitleDiv className="col-12 col-md-4 ">
              <Title className="text-center">About</Title>
            </TitleDiv>
            <Div className="col-12 col-md  ">
              <DivContent className="col-12 col-md-10  ">
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
                <List className="list-unstyled ">
                  {aboutElements.map(({ id, icone, text }) => (
                    <li key={id} className="text-center ">
                      <img src={icone} alt={id} className="w-100" />
                      <ListH6>{text}</ListH6>
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
