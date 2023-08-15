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

const TriangleImage = styled.div`
  position: absolute;
  @media (max-width: 1024px) {
    display: none;
  }
  @media (min-width: ${width}px) {
    top: 2%;
    left: 2%;
  }
  @media (min-width: 1440px) {
    left: -5%;
  }
  @media (min-width: 2560px) {
    left: 15%;
  }
  z-index: -1;
`

const TriangleImg = styled.img`
  animation: ${slideAnimation} 2s ease-in-out infinite;
`

function PortfolioAnimation() {
  return (
    <div>
      {' '}
      {/*<TriangleImage className="col-2">
    <TriangleImg
      src="https://demo.cocobasic.com/seppo-html/demo-3/images/triangle.png"
      alt="1"
      className="w-75"
    />
  </TriangleImage>*/}
    </div>
  )
}

export default PortfolioAnimation
