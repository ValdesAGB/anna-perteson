import React from 'react'
import styled, { keyframes } from 'styled-components'
import Formulaire from './Formulaire'

function Contact() {
  const ContactSection = styled.section`
    position: relative;
  `
  const Div = styled.div`
    background-color: #f0deca;
  `
  const DivContent = styled.div`
    padding: 14% 14% 0 14%;
  `
  const TitleDiv = styled.div`
    width: 31.25%;
    background-color: #f8a577;
  `

  const Title = styled.h1`
    color: #fff;
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

  const rotationAnimation = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(180deg);
  }
  `

  const SquareDiv = styled.div`
    position: absolute;
    top: 15%;
    left: 62%;
  `

  const SquareImg = styled.img`
    animation: ${rotationAnimation} 2s linear infinite;
  `

  return (
    <React.Fragment>
      <ContactSection id="contact">
        <div className="container">
          <div className="row align-items-start">
            <Div className="col">
              <DivContent className="col-11">
                <H5>
                  Dolor sit amet, consectetur adipiscing elit viverra tristique
                  placerat in massa Consectetur
                </H5>
                <Paragraph>
                  Faucibus sed tristique fames sed aliquet ultricies eget
                  viverra arcu. Vitae faucibus diam consequat maecenas. Turpis
                  metus sit diam purus leo in varius ac quam. Nunc amet
                  tristique volutpat adipiscing vulputate phasellus. Volutpat
                  faucibus praesent acolo.
                </Paragraph>
                <Formulaire />
              </DivContent>
            </Div>
            <TitleDiv className="col-4">
              <Title className="text-center">Contact</Title>
            </TitleDiv>
          </div>
        </div>
        <SquareDiv className="col-1">
          <SquareImg
            src="https://demo.cocobasic.com/seppo-html/demo-3/images/square.png"
            alt="1"
            className="w-75"
          />
        </SquareDiv>
      </ContactSection>
    </React.Fragment>
  )
}

export default Contact
