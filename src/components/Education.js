import React from 'react'
import styled from 'styled-components'
import LevelEducation from './LevelEducation'
import { educationElements } from '../data'

function Education() {
  const Div = styled.div`
    background-color: #fcf7f1;
  `
  const DivContent = styled.div`
    padding: 10% 0% 14% 18%;
  `

  const TitleDiv = styled.div`
    width: 31.25%;
    background-color: #f8a577;
  `

  const Title = styled.h1`
    color: white;
    padding: 40% 0 40% 0;
    font-weight: 300;
    font-size: 3em;
    letter-spacing: -6px;
  `

  return (
    <React.Fragment>
      <section id="education">
        <div className="container">
          <div className="row align-items-start">
            <TitleDiv className="col-4 ">
              <Title className="text-center">Education</Title>
            </TitleDiv>
            <Div className="col  justify-content-center">
              <DivContent className="col-11">
                {educationElements.map(({ id, title, text, year }) => (
                  <LevelEducation
                    year={year}
                    text={text}
                    title={title}
                    lineState={id === '2018' ? false : true}
                  />
                ))}
              </DivContent>
            </Div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Education
