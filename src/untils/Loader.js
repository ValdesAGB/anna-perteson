import React from 'react'
import styled, { keyframes } from 'styled-components'

const bounce = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
  100% {
    transform: translateY(0);
  }
`

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 320px) {
    height: 50vh;
  }
  @media (min-width: 425px) {
    height: 75vh;
  }

  @media (min-width: 768px) {
    height: 100vh;
  }

  @media (min-width: 2560px) {
    height: 50vh;
  }
`

const DotsContainer = styled.div`
  display: flex;
`

const Dot = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #7a5932;
  margin-right: 8px;
  animation: ${bounce} 1s infinite;
  animation-delay: ${(props) => props.delay};
`

const Loader = () => {
  return (
    <LoaderContainer>
      <DotsContainer>
        <Dot delay="0s" />
        <Dot delay=".2s" />
        <Dot delay=".4s" />
      </DotsContainer>
    </LoaderContainer>
  )
}

export default Loader
