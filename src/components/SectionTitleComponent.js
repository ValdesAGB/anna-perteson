import React from 'react'
import styled from 'styled-components'

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.bgColor};
`

const Title = styled.h1`
  color: ${(props) => props.color};
  font-weight: 300;
  padding: 10% 0;
  font-size: 2.5em;
  letter-spacing: -3px;

  @media (min-width: 768px) {
    padding: 40% 0;
    font-size: 3em;
    letter-spacing: -5px;
  }
  @media (min-width: 1200px) {
    font-size: 3.3em;
  }
  @media (min-width: 1400px) {
    font-size: 4em;
    letter-spacing: -8px;
  }
`

function SectionTitleComponent({
  TitleContainerBgColor,
  TitleColor,
  className,
  title,
}) {
  return (
    <React.Fragment>
      <TitleContainer
        bgColor={TitleContainerBgColor}
        className={!className ? 'col-12 col-md-4' : className}
      >
        <Title color={!TitleColor ? 'white' : TitleColor}>{title}</Title>
      </TitleContainer>
    </React.Fragment>
  )
}

export default SectionTitleComponent
