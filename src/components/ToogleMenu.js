import React from 'react'
import styled from 'styled-components'
import { colors } from '../untils/colors'

const Container = styled.a`
  position: fixed;
  left: 20px;
  bottom: 20px;

  transform: ${(props) =>
    props.IsHover === true ? 'translateY(100px)' : ' translateY(0)'};

  background-color: ${colors.LoaderDotsBgColor};

  transition: all 0.7s cubic-bezier(0.9, -0.3, 0.19, 1.37);
  padding: 5px 10px;
  border-radius: 10px;

  @media (max-width: 1199px) {
    display: none;
  }

  display: none;

  @media (min-width: 1200px) and (max-width: 1299px) {
    display: block;
  }

  @media (min-width: 1400px) and (max-width: 1459px) {
    display: block;
  }

  i {
    color: white;
    font-size: 2em;
  }
`

function ToogleMenu({ IsHover, handleHover }) {
  return (
    <React.Fragment>
      <Container onClick={() => handleHover(true)} IsHover={IsHover}>
        <i className="bi bi-three-dots-vertical" />
      </Container>
    </React.Fragment>
  )
}

export default ToogleMenu
