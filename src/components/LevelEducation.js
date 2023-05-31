import React from 'react'
import styled from 'styled-components'

function LevelEducation({ year, text, title, lineState }) {
  const VerticalLayout = styled.div`
    display: flex;
    align-items: flex-start;
  `

  const VerticalLine = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 20px;
  `

  const Year = styled.div`
    margin-top: 1.2%;
    font-weight: bold;
    color: #188497;
    margin-right: 20px;
    transition: transform 500ms;
    ${VerticalLayout}:hover & {
      transform: translateX(-25%);
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
    top: 50%;
    left: 50%;
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
    height: 100px;
    background-color: #188497;
    margin-bottom: 20px;
  `

  const Title = styled.p`
    font-weight: bold;
  `
  const Paragraph = styled.p`
    font-weight: 400;
    line-height: 1.5em;
  `

  const Text = styled.div`
    margin-top: 2%;
  `

  return (
    <React.Fragment>
      <VerticalLayout className="row ">
        <Year className="col-1">{year}</Year>
        <VerticalLine className="col-1">
          <Cercle>
            <CercleBetween />
          </Cercle>
          {lineState ? <Line></Line> : null}
        </VerticalLine>
        <Text className="col-8">
          <Title>{title}</Title>
          <Paragraph>{text}</Paragraph>
        </Text>
      </VerticalLayout>
    </React.Fragment>
  )
}

export default LevelEducation
