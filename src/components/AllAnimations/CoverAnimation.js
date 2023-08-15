import React from 'react'
import styled, { keyframes } from 'styled-components'
import { width } from '../../data'

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

function CoverAnimation() {
  return (
    <div>
      {' '}
      {/*<ZigZagDiv className="col-8 col-md-3 col-xxl-1">
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
  </SquareDiv>*/}
    </div>
  )
}

export default CoverAnimation
