import React from 'react'
import styled from 'styled-components'
import { width } from '../data'

function LevelEducation({ year, text, title, lineState }) {
  const VerticalLayout = styled.div`
    cursor: pointer;
    /*display: flex;
    align-items: flex-start;

    @media (min-width: 425px) {
      margin-left: 1%;
    }

    @media (min-width: 1024px) {
      margin-left: 10%;
    }
    @media (min-width: ${width}px) {
      margin-left: 20%;
    }*/
  `

  const VerticalLine = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 10px;
  `

  const Year = styled.div`
    font-weight: bold;
    color: #188497;

    margin-right: 20px;

    margin-top: 2%;

    transition: transform 500ms;
    ${VerticalLayout}:hover & {
      transform: translateX(-10%);
    }

    @media (min-width: 768px) {
      ${VerticalLayout}:hover & {
        transform: translateX(-50%);
      }
    }
  `

  const Cercle = styled.div`
    position: relative;
    width: 10px;
    height: 10px;
    border: solid 3px #188497;
    border-radius: 50%;
    margin-bottom: 10px;
    padding: 15px;
  `

  const CercleBetween = styled.div`
    position: absolute;
    transform: translate(-50%, -50%);
    width: 70%;
    height: 70%;
    background-color: #188497;
    border-radius: 50%;
    opacity: 0;
    transition: opacity 500ms;
    ${VerticalLayout}:hover & {
      opacity: 1;
    }
  `
  const Line = styled.div`
    width: 3px;
    background-color: #188497;
    height: 100%;
    margin-bottom: 5px;
  `

  const Title = styled.p`
    font-weight: bold;
  `
  const Paragraph = styled.p`
    font-weight: 400;
    line-height: 2em;
    @media (min-width: 768px) {
      font-size: 0.9em;
    }
  `

  const Text = styled.div`
    margin-top: 2%;
  `

  return (
    <React.Fragment>
      <VerticalLayout className="row">
        <Year className="col-2 col-md-1">{year}</Year>
        <VerticalLine className="col-1 col-md-1">
          <Cercle>
            <CercleBetween />
          </Cercle>
          {lineState ? <Line id={year} /> : null}
        </VerticalLine>
        <Text className="col col-md-7 col-lg-8">
          <Title>{title}</Title>
          <Paragraph className="col-">{text}</Paragraph>
        </Text>
      </VerticalLayout>
    </React.Fragment>
  )
}

export default LevelEducation
