import React from 'react'
import styled, { keyframes } from 'styled-components'
import { width } from '../data'

function Cover() {
  const CoverSection = styled.section`
    position: relative;
  `
  const Div = styled.div`
    background-color: #fcf7f1;
    padding: 0 0 10% 0;
    @media (min-width: 768px) {
      margin-right: -12px;
    }
    @media (min-width: 1024px) {
      margin-right: -20px;
    }
    @media (min-width: ${width}px) {
      margin-right: 11.5px;
    }
  `
  const DivContent = styled.div`
    @media (min-width: 320px) {
      padding: 10% 4% 0 4%;
    }
    @media (min-width: 768px) {
      margin-left: 10%;
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
    width: 34.35%;
    background-color: #fff48f;
  `

  const Title = styled.h1`
    @media (min-width: 320px) {
      padding: 12% 0 12% 0;
      font-size: 2.5em;
      letter-spacing: -3px;
      line-height: 1em;
    }
    @media (min-width: 768px) {
      padding: 40% 0 40% 0;
      font-size: 3em;
      letter-spacing: -5px;
      line-height: 1.2em;
    }
    @media (min-width: ${width}px) {
      padding: 40% 0 40% 0;
      font-size: 3.3em;
      letter-spacing: -4.5px;
    }
    color: #9e7e63;
    padding: 30% 0 30% 0;
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
    position: relative;
    z-index: 1;
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
    @media (min-width: 320px) {
      top: 7%;
      left: -30%;
    }
    @media (min-width: 425px) {
      top: 10%;
      left: -20%;
    }

    @media (min-width: 768px) {
      top: 10%;
      left: -10%;
    }
    @media (min-width: ${width}px) {
      left: -5%;
    }
    @media (min-width: 1440px) {
      top: 20%;
      left: -5%;
    }
    @media (min-width: 2560px) {
      left: 20%;
    }

    top: 8%;
    left: 3%;
    z-index: 0;
  `

  const ZigZagImg = styled.img`
    animation: ${slideAnimation} 2s ease-in-out infinite;
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
      top: 91%;
      left: 60%;
    }
    @media (min-width: 375px) {
      top: 89%;
      left: 69%;
    }
    @media (min-width: 425px) {
      top: 87%;
      left: 72%;
    }

    @media (min-width: 768px) {
      top: 82%;
      left: 80%;
    }
    @media (min-width: 1024px) {
      top: 70%;
      left: 80%;
    }
    @media (min-width: ${width}px) {
      top: 75%;
      left: 89%;
    }
    @media (min-width: 2560px) {
      top: 62%;
      left: 72%;
    }

    z-index: 0;
  `

  const SquareImg = styled.img`
    animation: ${rotationAnimation} 2s linear infinite;
  `

  const DivSignature = styled.div`
    position: relative;
    z-index: 2;
    @media (min-width: 425px) {
      padding: 0 5% 0 30%;
    }
    @media (min-width: 768px) {
      padding: 0 0% 0 0%;
    }
  `
  return (
    <React.Fragment>
      <CoverSection id="cover-letter">
        <div className="container p-0">
          <div className="row align-items-start">
            <TitleDiv className="col-12 col-md-4 ">
              <Title className="text-center">
                Cover <br /> Letter
              </Title>
            </TitleDiv>
            <Div className="col-12 col-md ">
              <DivContent className="col-12 col-md-10">
                <H5>
                  Dolor sit amet, consectetur adipiscing elit viverra tristique
                  placerat in massa consectetur quisque nunc ac fames lorem
                  ipsum dolormo
                </H5>
                <Paragraph>
                  Faucibus sed tristique fames sed aliquet ultricies eget
                  viverra arcu. Vitae faucibus diam consequat maecenas. Turpis
                  metus sit diam purus leo in varius ac quam. Nunc amet
                  tristique volutpat adipiscing vulputate phasellus. Volutpat
                  faucibus praesent ac lobortis aliquam dolor. Eget enim aliquam
                  euismod mauris in vitae viverra blandit lectus diam feugiat
                  mattis metus, parturient ipsum id nibh tortor tincidunt quam
                  facilisi nunc faucib.
                </Paragraph>

                <Paragraph>
                  Vitae faucibus diam consequat maecenas. Turpis metus sit diam
                  purus leo in varius ac quam. Nunc amet tristique volutpat
                  piscing vulputate phasellus lorem ipsum poterius holutiko
                  lorem ipsum.
                </Paragraph>
                <DivSignature className="col-12 row justify-content-end">
                  <span className="col-7 col-md-5 col-lg-4 col-xl-3">
                    <img
                      src="https://demo.cocobasic.com/seppo-html/demo-3/images/icon_signature_v2.png"
                      alt="1"
                      className="w-100"
                    />
                  </span>
                </DivSignature>
              </DivContent>
            </Div>
          </div>
        </div>
        <ZigZagDiv className="col-8 col-md-3 col-xxl-1">
          <ZigZagImg
            src="https://demo.cocobasic.com/seppo-html/demo-3/images/zigzag.png"
            alt="1"
            className="w-75"
          />
        </ZigZagDiv>
        <SquareDiv className="col-3 col-md-2 col-xl-1">
          <SquareImg
            src="https://demo.cocobasic.com/seppo-html/demo-3/images/square.png"
            alt="1"
            className="w-100"
          />
        </SquareDiv>
      </CoverSection>
    </React.Fragment>
  )
}

export default Cover
