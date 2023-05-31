import React from 'react'
import styled, { keyframes } from 'styled-components'

function Home() {
  const Div = styled.div`
    background-color: #f0deca;
    position: relative;
  `

  const H1 = styled.h1`
    font-size: 6em;
    font-weight: 200;
    letter-spacing: -6px;
  `

  const Paragraph = styled.p`
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
`

  const ZigZagDiv = styled.div`
    position: absolute;
    top: 90%;
    left: 90%;
  `

  const ZigZagImg = styled.img`
    animation: ${slideAnimation} 2s ease-in-out infinite;
  `

  return (
    <section>
      <Div className="container">
        <div className="row align-items-center ">
          <div className="col-4 row me-3">
            <img
              src="https://demo.cocobasic.com/seppo-html/demo-3/images/main_image.jpg"
              alt="1"
              className="w-100 p-0"
            />
          </div>
          <div className="col-5  offset-1">
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
        </div>
        <ZigZagDiv className="col-2">
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
