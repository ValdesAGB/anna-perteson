import React from 'react'
import styled from 'styled-components'
import { width } from '../data'

function LevelEducation({ year, text, title, lineState }) {
  const VerticalLayout = styled.div`
    display: flex;
    align-items: flex-start;
    @media (min-width: 375px) {
      margin-left: 2%;
    }
    @media (min-width: 425px) {
      margin-left: 1%;
    }

    @media (min-width: 1024px) {
      margin-left: 10%;
    }
    @media (min-width: ${width}px) {
      margin-left: 20%;
    }
  `

  const VerticalLine = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 20px;
  `

  const Year = styled.div`
    font-weight: bold;
    color: #188497;
    margin-right: 20px;
    transition: transform 500ms;

    @media (min-width: 320px) {
      margin-top: 2%;
      ${VerticalLayout}:hover & {
        transform: translateX(-10%);
      }
    }

    @media (min-width: 375px) {
      margin-right: 40px;
      margin-top: 2%;
      ${VerticalLayout}:hover & {
        transform: translateX(-15%);
      }
    }

    @media (min-width: 768px) {
      ${VerticalLayout}:hover & {
        transform: translateX(-50%);
      }
    }

    @media (min-width: ${width}px) {
      ${VerticalLayout}:hover & {
        transform: translateX(-25%);
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

    background-color: #188497;

    @media (min-width: 320px) {
      height: ${(props) =>
        props.id === '2015'
          ? '250px'
          : props.id === '2016'
          ? '326px'
          : props.id === '2017'
          ? '160px'
          : ''};
      margin-bottom: 5px;
    }

    @media (min-width: 375px) {
      height: ${(props) =>
        props.id === '2015'
          ? '199px'
          : props.id === '2016'
          ? '295px'
          : props.id === '2017'
          ? '160px'
          : ''};
      margin-bottom: 5px;
    }

    @media (min-width: 425px) {
      height: ${(props) =>
        props.id === '2015'
          ? '200px'
          : props.id === '2016'
          ? '220px'
          : props.id === '2017'
          ? '120px'
          : ''};
    }

    @media (min-width: 768px) {
      height: ${(props) =>
        props.id === '2015'
          ? '160px'
          : props.id === '2016'
          ? '220px'
          : props.id === '2017'
          ? '135px'
          : ''};
      margin-bottom: 5px;
    }
    @media (min-width: 1024px) {
      height: ${(props) =>
        props.id === '2015'
          ? '120px'
          : props.id === '2016'
          ? '150px'
          : props.id === '2017'
          ? '90px'
          : ''};
      margin-bottom: 5px;
    }
  `

  const Title = styled.p`
    font-weight: bold;
  `
  const Paragraph = styled.p`
    font-weight: 400;
    @media (min-width: 320px) {
      line-height: 2em;
    }
    @media (min-width: 768px) {
      font-size: 0.9em;
      line-height: 2em;
    }
  `

  const Text = styled.div`
    margin-top: 2%;
  `

  return (
    <React.Fragment>
      <VerticalLayout className="row  ">
        <Year className="col-2 col-md-1">{year}</Year>
        <VerticalLine className="col-1 col-md-1">
          <Cercle>
            <CercleBetween />
          </Cercle>
          {lineState ? <Line id={year}></Line> : null}
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
