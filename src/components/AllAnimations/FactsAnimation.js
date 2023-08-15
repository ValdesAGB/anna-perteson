import React from 'react'
import styled, { keyframes } from 'styled-components'

const slideAnimation = keyframes`
0% {
  transform: translateX(0);
}
50% {
  transform: translateX(50%);
}
100% {
  transform: translateX(0);
}
`

const ZigZagDiv = styled.div`
  position: absolute;
  @media (min-width: 320px) {
    top: 90%;
    left: 35%;
  }
  @media (min-width: 768px) {
    left: 50%;
  }

  @media (min-width: 768px) {
    left: 55%;
  }

  @media (min-width: 2560px) {
    top: 80%;
    left: 50%;
  }
  z-index: 0;
`

const ZigZagImg = styled.img`
  animation: ${slideAnimation} 3s ease-in-out infinite;
`

function FactsAnimation() {
  return (
    <div>
      {' '}
      {/*<ZigZagDiv className="col-7 col-md-3 col-xl-2">
    <ZigZagImg
      src="https://demo.cocobasic.com/seppo-html/demo-3/images/zigzag.png"
      alt="1"
      className="w-75"
    />
  </ZigZagDiv>*/}
    </div>
  )
}

export default FactsAnimation
