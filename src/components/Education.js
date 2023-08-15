import React from 'react'
import styled from 'styled-components'
import LevelEducation from './LevelEducation'
import { educationElements } from '../data'
import { colors } from '../untils/colors'

const EducationSection = styled.section`
  position: relative;
`

const Container = styled.div`
  @media (max-width: 767px) {
    padding: 0;
  }
`
const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.portfolioTitleBgColor};
`

const Title = styled.h1`
  color: white;
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

const Content = styled.div`
  background-color: ${colors.aboutContentBgColor};
  padding-top: 30px;
  padding-bottom: 30px;
  @media (min-width: 768px) {
    padding: 40px;
  }

  @media (min-width: 1200px) {
    padding: 100px;
  }

  @media (min-width: 1400px) {
    padding: 140px;
  }
`

function Education() {
  return (
    <React.Fragment>
      <EducationSection id="education">
        <Container className="container">
          <div className="row align-items-start">
            <TitleContainer className=" col-12 col-md-4 ">
              <Title className="text-center">Education</Title>
            </TitleContainer>
            <Content className="col-12 col-md  justify-content-center ">
              {educationElements.map(({ id, title, text, year }) => (
                <LevelEducation
                  year={year}
                  text={text}
                  title={title}
                  lineState={id === '2018' ? false : true}
                  key={id}
                />
              ))}
            </Content>
          </div>
        </Container>

        {/* <EducationAnimation/>*/}
      </EducationSection>
    </React.Fragment>
  )
}

export default Education
