import React from 'react'
import styled, { keyframes } from 'styled-components'

function Home() {
  const width = 1360

  const Div = styled.div`
    background-color: #f0deca;
    position: relative;
    @media (min-width: 320px) {
      background-color: transparent;
      left: -12.5px;
      right: -12px;
      padding: 5%;
      width: 108.5%;
    }

    @media (min-width: 375px) {
      width: 107%;
    }

    @media (min-width: 425px) {
      width: 106.2%;
    }

    @media (min-width: 768px) {
      background-color: #f0deca;
      left: -3.2%;
      right: 0px;
      padding: 0 1.5% 0 0%;
      width: 200%;
    }
    @media (min-width: 1024px) {
      left: -3.5%;
    }
    @media (min-width: ${width}px) {
      left: 0%;
    }

    @media (min-width: 1440px) {
      left: 0%;
    }

    @media (min-width: 1360px) {
      background-color: #f0deca;
    }
  `

  const DivContent = styled.div`
    @media (min-width: 768px) {
      background-color: #f0deca;
      position: relative;
      left: 12.5%;
    }
    @media (min-width: 1024px) {
      left: 7.2%;
    }
    @media (min-width: ${width}px) {
      margin-left: 0%;
    }
  `

  const H1 = styled.h1`
    @media (min-width: 320px) {
      font-size: 3em;
      letter-spacing: -4px;
      line-height: 0.93em;
      margin: 9% 0 9% -1.2%;
    }
    @media (min-width: 375px) {
      font-size: 3em;
      letter-spacing: -3px;
      line-height: 0.99em;
      margin: 10% 0 05% -1.2%;
    }
    @media (min-width: 425px) {
      font-size: 3.5em;
      letter-spacing: -2px;
      line-height: 0.95em;
      margin: 9% 0 10% -1.2%;
    }
    @media (min-width: 768px) {
      font-size: 4em;
      letter-spacing: -2px;
      line-height: 0.95em;
      margin: 50% 0 15% -35%;
    }
    @media (min-width: 1024px) {
      font-size: 6em;
      letter-spacing: -1px;
      line-height: 1em;
      margin: 45% 0 10% -12%;
    }
    @media (min-width: ${width}px) {
      letter-spacing: -1.5px;
      line-height: 1em;
      margin: 45% 0 10% -2%;
    }

    font-size: 6em;
    font-weight: 200;
    letter-spacing: -6px;
  `
  const DivImage = styled.div`
    @media (min-width: ${width}px) {
      width: 34.1%;
      margin-left: 1.2%;
    }
    @media (min-width: 1440px) {
      width: 34.2%;
      margin-left: 1%;
    }
  `

  const Paragraph = styled.p`
    @media (min-width: 320px) {
      font-size: 0.9em;
      padding: 0px 0px 0px 0px;
      line-height: 1.9em;
      text-align: justify;
    }
    @media (min-width: 375px) {
      padding: 0px 0px 0px 0px;
      line-height: 1.8em;
      text-align: justify;
    }
    @media (min-width: 425px) {
      padding: 0px 0px 0px 0px;
      line-height: 1.8em;
      text-align: justify;
    }
    @media (min-width: 425px) {
      font-size: 1em;
      margin: 0% 0 10% 0%;
      line-height: 2em;
      text-align: justify;
    }
    @media (min-width: 768px) {
      font-size: 1em;
      padding-right: 50px;
      line-height: 2em;
      margin: 0% 0 40% -35%;
      text-align: justify;
    }

    @media (min-width: 1024px) {
      font-size: 1.1em;
      margin: 0% 0 0% -10%;
    }
    @media (min-width: ${width}px) {
      font-size: 0.9em;
      margin: 0% 0 0% 0%;
    }
    @media (min-width: 1440px) {
      font-size: 1.2em;
      padding-right: 50px;
      line-height: 2em;
      margin: 0% 0 0% 0%;
      text-align: justify;
    }
    padding: 50px 0px 00px 10px;
    line-height: 2em;
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
  @media (min-width: 2560px) {
    0% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(50%);
    }
    100% {
      transform: translateX(0);
    }
  }
`

  const ZigZagDiv = styled.div`
    position: absolute;
    @media (max-width: 320px) {
      top: 90%;
      right: 0%;
      z-index: -1;
    }
    @media (min-width: 375px) {
      top: 89%;
      left: 40%;
      z-index: -1;
    }
    @media (min-width: 425px) {
      top: 85%;
      left: 40%;
    }
    @media (min-width: 768px) {
      top: 85%;
      left: 80%;
      z-index: 0;
    }
    @media (min-width: 1024px) {
      top: 89%;
      left: 80%;
    }
    @media (min-width: 1440px) {
      top: 85%;
      left: 80%;
    }
    @media (min-width: ${width}px) {
      top: 90%;
      left: 82%;
    }
    @media (min-width: 1440px) {
      top: 85%;
      left: 76%;
    }
    @media (min-width: 2560px) {
      top: 85%;
      left: 85%;
    }
  `

  const ZigZagImg = styled.img`
    animation: ${slideAnimation} 2s ease-in-out infinite;
  `

  return (
    <section className=" ">
      <Div className="container rder-danger ">
        <div className="row ">
          <DivImage className="col-12 col-md-5 col-lg-5 col-xl-4  me-md-3 p-md-0  danger ">
            <img
              src="https://demo.cocobasic.com/seppo-html/demo-3/images/main_image.jpg"
              alt="1"
              className="w-100 p-0 d-none d-md-block"
            />
            <img
              src="https://demo.cocobasic.com/seppo-html/demo-3/images/phone_image.jpg"
              alt="1"
              className="w-100 p-0 d-md-none"
            />
          </DivImage>
          <DivContent className="col-12 col-md-5 col-lg col-xl-5  offset-md-1  danger ">
            <H1>
              Hello <br />
              I’m Anna <br />
              Peterson
            </H1>

            <Paragraph>
              A full stack allaround designer that tristique est placerat in
              massa consectetur quisque lobortis vitae faucibus diam consequat
              maecenas turpis metus sit diam purus leo in varius ac quam est
              lorem ipsum.
            </Paragraph>
          </DivContent>
        </div>
        <ZigZagDiv className="col-7  col-md-3 col-xxl-3">
          <ZigZagImg
            src="https://demo.cocobasic.com/seppo-html/demo-3/images/zigzag.png"
            alt="1"
            className="w-75"
          />
        </ZigZagDiv>
      </Div>
    </section>
  )
}

export default Home
/** 
 * 
 *  <div className="col-5  offset-1">
            <H1>
              Hello <br />
              I’m Anna <br />
              Peterson
            </H1>

            <Paragraph>
              A full stack allaround designer that tristique est placerat in
              massa consectetur quisque lobortis vitae faucibus diam consequat
              maecenas turpis metus sit diam purus leo in varius ac quam est
              lorem ipsum.
            </Paragraph>
          </div>





            <ZigZagDiv className="col-7  col-md-3 col-xxl-3">
          <ZigZagImg
            src="https://demo.cocobasic.com/seppo-html/demo-3/images/zigzag.png"
            alt="1"
            className="w-75"
          />
        </ZigZagDiv>
 * 
*/
