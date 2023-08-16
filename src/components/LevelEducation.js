import React from 'react'
import styled from 'styled-components'
import { colors } from '../untils/colors'

function LevelEducation({ year, text, title, lineState }) {
  const VerticalLayout = styled.div`
    cursor: pointer;
  `

  const Year = styled.div`
    text-align: center;
    font-weight: bold;
    color: ${colors.aboutTitleBgColor};
    margin-top: 2%;
    transition: transform 0.5s;
    ${VerticalLayout}:hover & {
      transform: translateX(-10%);
    }
  `

  const VerticalLine = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `

  const Cercle = styled.div`
    position: relative;
    width: 10px;
    height: 10px;
    border: solid 3px ${colors.aboutTitleBgColor};
    border-radius: 50%;
    margin-bottom: 10px;
    padding: 15px;
  `

  const CercleBetween = styled.div`
    position: absolute;
    transform: translate(-50%, -50%);
    width: 70%;
    height: 70%;
    background-color: ${colors.aboutTitleBgColor};
    border-radius: 50%;
    opacity: 0;
    transition: opacity 500ms;
    ${VerticalLayout}:hover & {
      opacity: 1;
    }
  `
  const Line = styled.div`
    width: 3px;
    background-color: ${colors.aboutTitleBgColor};
    height: 100%;
    margin-bottom: 5px;
  `

  const InformationsContainer = styled.div`
    margin-top: 2%;
    margin-left: 10px;
  `

  const Title = styled.h6`
    font-weight: bold;
  `
  const Paragraph = styled.p`
    text-align: justify;
    font-weight: 400;
    line-height: 2em;
    @media (min-width: 768px) {
      font-size: 0.9em;
    }
  `

  return (
    <React.Fragment>
      <VerticalLayout className="row">
        <Year className="col-3">{year}</Year>
        <VerticalLine className="col-1">
          <Cercle>
            <CercleBetween />
          </Cercle>
          {lineState ? <Line id={year} /> : null}
        </VerticalLine>
        <InformationsContainer className="col ">
          <Title>{title}</Title>
          <Paragraph>{text}</Paragraph>
        </InformationsContainer>
      </VerticalLayout>
    </React.Fragment>
  )
}

export default LevelEducation
