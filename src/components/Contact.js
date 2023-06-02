import React from 'react'
import styled, { keyframes } from 'styled-components'
import Formulaire from './Formulaire'
import { width } from '../data'

function Contact() {
  const ContactSection = styled.section`
    position: relative;
  `
  const Div = styled.div`
    background-color: #f0deca;
    @media (min-width: 768px) {
      margin-left: -12px;
    }
    @media (min-width: 1024px) {
      margin-left: -20px;
    }
    @media (min-width: ${width}px) {
      margin-left: 13px;
    }
    @media (min-width: 1440px) {
      margin-left: 5px;
    }
  `
  const DivContent = styled.div`
    @media (min-width: 320px) {
      padding: 10% 0% 0% 0%;
    }
    @media (min-width: 768px) {
      padding: 14% 5% 10% 5%;
      margin-left: 3%;
    }
    @media (min-width: 1024px) {
      padding: 14% 10% 10% 5%;
    }

    @media (min-width: ${width}px) {
      padding: 14% 14% 5% 14%;
    }
    @media (min-width: 1440px) {
      padding: 14% 20% 5% 15%;
    }
    @media (min-width: 2560px) {
      padding: 14% 15% 10% 6%;
    }
  `
  const TitleDiv = styled.div`
    background-color: #f8a577;
    @media (min-width: 320px) {
      width: 100%;
    }
    @media (min-width: 768px) {
      width: 40.5%;
      margin-right: -1.6%;
    }
    @media (min-width: 1024px) {
      width: 39.5%;
      margin-right: -2%;
    }
    @media (min-width: ${width}px) {
      width: 33.55%;
      margin-right: 1.09%;
    }
    @media (min-width: 1440px) {
      width: 33.8%;
      margin-right: 0.9%;
    }
  `

  const Title = styled.h1`
    color: #fff;
    font-weight: 300;
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
    @media (min-width: 320px) {
      top: 1%;
      left: -15%;
    }

    @media (min-width: 768px) {
      top: 10%;
      left: 55%;
    }

    @media (min-width: ${width}px) {
      top: 10%;
      left: 56%;
    }

    @media (min-width: 1440px) {
      top: 20%;
      left: 62%;
    }
    @media (min-width: 2560px) {
      top: 15%;
      left: 55%;
    }
  `

  const SquareImg = styled.img`
    animation: ${rotationAnimation} 2s linear infinite;
  `

  return (
    <React.Fragment>
      <ContactSection id="contact">
        <div className="container p-0">
          <div className="row align-items-start">
            <Div className="col-12 col-md order-2 order-md-1">
              <DivContent className="col-12 col-md-11 col-xxl-12">
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
            <TitleDiv className="col-12 col-md-4 order-1 order-md-2">
              <Title className="text-center">Contact</Title>
            </TitleDiv>
          </div>
        </div>
        <SquareDiv className="col-5 col-md-2 col-xxl-1">
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
