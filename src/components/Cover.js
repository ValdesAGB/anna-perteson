import React from 'react'
import styled, { keyframes } from 'styled-components'

function Cover() {
  const CoverSection = styled.section`
    position: relative;
  `
  const Div = styled.div`
    background-color: #fcf7f1;
    padding: 0 0 10% 0;
  `
  const DivContent = styled.div`
    padding: 14% 14% 0 14%;
  `
  const TitleDiv = styled.div`
    width: 34.35%;
    background-color: #fff48f;
  `

  const Title = styled.h1`
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
    top: 80%;
    left: 87%;
    z-index: 0;
  `

  const SquareImg = styled.img`
    animation: ${rotationAnimation} 2s linear infinite;
  `
  return (
    <React.Fragment>
      <CoverSection id="cover-letter">
        <div className="container">
          <div className="row align-items-start">
            <TitleDiv className="col-5 ">
              <Title className="text-center">
                Cover <br /> Letter
              </Title>
            </TitleDiv>
            <Div className="col ">
              <DivContent className="col-11">
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
                <div className="col-12 row justify-content-end">
                  <span className="col-4 ">
                    <img
                      src="https://demo.cocobasic.com/seppo-html/demo-3/images/icon_signature_v2.png"
                      alt="1"
                      className="w-100"
                    />
                  </span>
                </div>
              </DivContent>
            </Div>
          </div>
        </div>
        <ZigZagDiv className="col-2">
          <ZigZagImg
            src="https://demo.cocobasic.com/seppo-html/demo-3/images/zigzag.png"
            alt="1"
            className="w-75"
          />
        </ZigZagDiv>
        <SquareDiv className="col-1">
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
