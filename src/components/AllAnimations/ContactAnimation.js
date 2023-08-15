import React from 'react'
import styled, { keyframes } from 'styled-components'
import { width } from '../../data'

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

function ContactAnimation() {
  return (
    <div>
      {' '}
      {/* <SquareDiv className="col-5 col-md-2 col-xxl-1">
    <SquareImg
      src="https://demo.cocobasic.com/seppo-html/demo-3/images/square.png"
      alt="1"
      className="w-75"
    />
  </SquareDiv>*/}
    </div>
  )
}

export default ContactAnimation
