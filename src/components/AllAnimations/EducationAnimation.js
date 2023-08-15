import React from 'react'
import styled, { keyframes } from 'styled-components'
import { width } from '../../data'

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

const TriangleImage = styled.div`
  position: absolute;
  z-index: 0;

  @media (min-width: 320px) {
    top: 85%;
    left: -40%;
  }

  @media (min-width: 768px) {
    top: 85%;
    left: 25%;
  }

  @media (min-width: 1024px) {
    top: 80%;
  }

  @media (min-width: ${width}px) {
    left: 30%;
  }
  @media (min-width: 2560px) {
    top: 75%;
    left: 35%;
  }
`

const TriangleImg = styled.img`
  animation: ${slideAnimation} 2s ease-in-out infinite;
`

function EducationAnimation() {
  return (
    <div>
      {' '}
      {/*<TriangleImage className="col-5 col-md-2 col-xl-1">
    <TriangleImg
      src="https://demo.cocobasic.com/seppo-html/demo-3/images/triangle.png"
      alt="1"
      className="w-100"
    />
  </TriangleImage>*/}
    </div>
  )
}

export default EducationAnimation
