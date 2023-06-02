import React from 'react'
import styled, { keyframes } from 'styled-components'
import FAQ from './FAQ'
import { width } from '../data'

function Experiences() {
  const ExperienceSection = styled.section`
    position: relative;
  `
  const Div = styled.div`
    background-color: #fcf7f1;
    padding: 0 0 60px 0;
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
      padding: 10% 3% 0 3%;
    }

    @media (min-width: 768px) {
      padding: 14% 1% 0 %;
      margin-left: 10%;
    }
    @media (min-width: ${width}px) {
      padding: 14% 10% 0 4%;
    }
    @media (min-width: 1440px) {
      padding: 14% 10% 0 10%;
    }
  `
  const TitleDiv = styled.div`
    background-color: #fff48f;
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
      margin-left: 0.4%;
    }
  `

  const Title = styled.h1`
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

  const slideAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(28%);
  }
  100% {
    transform: translateX(0);
  }
`

  const ZigZagDiv = styled.div`
    position: absolute;
    top: 80%;
    left: 0%;
    @media (min-width: ${width}px) {
      top: 80%;
      left: 2%;
    }
    @media (min-width: 1440px) {
      top: 80%;
      left: 0%;
    }
    @media (min-width: 2560px) {
      top: 80%;
      left: 15%;
    }
  `

  const ZigZagImg = styled.img`
    animation: ${slideAnimation} 2s ease-in-out infinite;
  `

  return (
    <React.Fragment>
      <ExperienceSection id="experience">
        <div className="container p-0">
          <div className="row align-items-start">
            <TitleDiv className="col-12 col-md-4 ">
              <Title className="text-center">Experience</Title>
            </TitleDiv>
            <Div className="col-12 col-md ">
              <DivContent className="col-12 col-md-10">
                <H5>
                  Dolor sit amet, consectetur adipiscing elit viverra tristique
                  placerat in massa consectetur
                </H5>
                <Paragraph>
                  Faucibus sed tristique fames sed aliquet ultricies eget
                  viverra arcu. Vitae faucibus diam consequat maecenas. Turpis
                  metus sit diam purus leo in varius ac quam. Nunc amet
                  tristique volutpat adipiscing vulputate phasellus. Volutpat
                  faucibus praesent acolo.
                </Paragraph>

                <FAQ />
              </DivContent>
            </Div>
          </div>
        </div>

        <ZigZagDiv className="col-md-4 col-lg-3 col-xl-2 d-none d-md-block">
          <ZigZagImg
            src="https://demo.cocobasic.com/seppo-html/demo-3/images/zigzag.png"
            alt="1"
            className="w-75"
          />
        </ZigZagDiv>
      </ExperienceSection>
    </React.Fragment>
  )
}

export default Experiences
