import React from 'react'
import styled, { keyframes } from 'styled-components'

const width = 1360

const slideAnimation = keyframes`
0% {
  transform: translateX(0);
}
50% {
  transform: translateX(20%);
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

const Container = styled.div`
  position: absolute;

  @media (max-width: 374px) {
    display: none;
  }

  @media (min-width: 375px) {
    bottom: 5px;
    right: 10px;
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

const Cover = styled.img`
  animation: ${slideAnimation} 2s ease-in-out infinite;
  width: 30%;

  @media (min-width: 768px) {
    width: 40%;
  }
`
function HomeAnimation() {
  return (
    <React.Fragment>
      <Container className="text-end border border-danger">
        <Cover
          src="https://demo.cocobasic.com/seppo-html/demo-3/images/zigzag.png"
          alt="cover"
        />
      </Container>
    </React.Fragment>
  )
}

export default HomeAnimation
