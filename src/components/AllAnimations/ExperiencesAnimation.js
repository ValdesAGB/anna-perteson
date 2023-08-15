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

function ExperiencesAnimation() {
  return (
    <div>
      {' '}
      {/*<ZigZagDiv className="col-md-4 col-lg-3 col-xl-2 d-none d-md-block">
    <ZigZagImg
      src="https://demo.cocobasic.com/seppo-html/demo-3/images/zigzag.png"
      alt="1"
      className="w-75"
    />
  </ZigZagDiv>*/}
    </div>
  )
}

export default ExperiencesAnimation
