import React from 'react'
import { width } from '../../data'
import styled, { keyframes } from 'styled-components'

const upDownAnimation = keyframes`
0% {
  transform: translateY(0);
}
50% {
  transform: translateY(50%);
}
100% {
  transform: translateX(0);
}
`

const CircleDiv = styled.div`
  position: absolute;
  @media (min-width: 320px) {
    top: 65%;
    left: -25%;
  }

  @media (min-width: 768px) {
    top: 68%;
    left: -10%;
  }

  @media (min-width: 1024px) {
    top: 62%;
    left: -10%;
  }
  @media (min-width: ${width}px) {
    top: 75%;
    left: 2.5%;
  }

  @media (min-width: 1440px) {
    top: 80%;
    left: -2.9%;
  }
  @media (min-width: 2560px) {
    top: 74%;
    left: 18.8%;
  }
`

const CircleImg = styled.img`
  animation: ${upDownAnimation} 2s ease-in-out infinite;
`
function SkillsAnimation() {
  return (
    <div>
      {' '}
      {/*<CircleDiv className="col-5 col-md-2 col-xl-1">
    <CircleImg
      src="https://demo.cocobasic.com/seppo-html/demo-3/images/circle.png"
      alt="1"
      className="w-100"
    />
  </CircleDiv>*/}
    </div>
  )
}

export default SkillsAnimation
