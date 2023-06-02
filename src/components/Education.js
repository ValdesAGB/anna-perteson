import React from 'react'
import styled, { keyframes } from 'styled-components'
import LevelEducation from './LevelEducation'
import { educationElements, width } from '../data'

function Education() {
  const EducationSection = styled.section`
    position: relative;
  `
  const Div = styled.div`
    background-color: #fcf7f1;
    @media (min-width: 768px) {
      margin-right: -12px;
    }
    @media (min-width: 1024px) {
      margin-right: -20px;
    }
    @media (min-width: ${width}px) {
      margin-right: 11.5px;
    }
    @media (min-width: 1440px) {
      margin-right: 10.9px;
    }
  `
  const DivContent = styled.div`
    position: relative;
    z-index: 1;
    padding: 10% 0% 14% 18%;
    @media (min-width: 768px) {
      padding: 10% 0% 20% 18%;
    }

    @media (min-width: ${width}px) {
      padding: 15% 0% 5% 0%;
    }

    @media (min-width: 1440px) {
      padding: 10% 0% 15% 18%;
    }
  `

  const TitleDiv = styled.div`
    @media (min-width: 320px) {
      width: 100%;
    }
    @media (min-width: 768px) {
      width: 40.5%;
      margin-left: -1.6%;
    }
    @media (min-width: 1024px) {
      width: 39.5%;
      margin-left: -2%;
    }
    @media (min-width: ${width}px) {
      width: 33.55%;
      margin-left: 1.12%;
    }
    @media (min-width: 1440px) {
      width: 33.8%;
      margin-left: 0.4%;
    }
    width: 31.25%;
    background-color: #f8a577;
  `

  const Title = styled.h1`
    @media (min-width: 320px) {
      padding: 12% 0 12% 0;
      font-size: 2.5em;
      letter-spacing: -3px;
      line-height: 1em;
    }
    @media (min-width: 768px) {
      padding: 40% 0 40% 0;
      font-size: 3em;
      letter-spacing: -5px;
      line-height: 1.2em;
    }
    @media (min-width: ${width}px) {
      padding: 40% 0 40% 0;
      font-size: 3.3em;
      letter-spacing: -4.5px;
    }

    color: white;
    padding: 40% 0 40% 0;
    font-weight: 300;
    font-size: 3em;
    letter-spacing: -6px;
  `

  const slideAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(50%);
  }
  100% {
    transform: translateX(0);
  }
`

  const TriangleImage = styled.div`
    position: absolute;
    z-index: 0;

    @media (min-width: 320px) {
      top: 85%;
      left: -40%;
    }

    @media (min-width: 768px) {
      top: 85%;
      left: 25%;
    }

    @media (min-width: 1024px) {
      top: 80%;
    }

    @media (min-width: ${width}px) {
      left: 30%;
    }
    @media (min-width: 2560px) {
      top: 75%;
      left: 35%;
    }
  `

  const TriangleImg = styled.img`
    animation: ${slideAnimation} 2s ease-in-out infinite;
  `

  return (
    <React.Fragment>
      <EducationSection id="education">
        <div className="container p-0">
          <div className="row align-items-start">
            <TitleDiv className=" col-12 col-md-4 ">
              <Title className="text-center">Education</Title>
            </TitleDiv>
            <Div className="col-12 col-md  justify-content-center ">
              <DivContent className="col-12 col-xl-10  px-0">
                {educationElements.map(({ id, title, text, year }) => (
                  <LevelEducation
                    year={year}
                    text={text}
                    title={title}
                    lineState={id === '2018' ? false : true}
                    key={id}
                  />
                ))}
              </DivContent>
            </Div>
          </div>
        </div>

        <TriangleImage className="col-5 col-md-2 col-xl-1">
          <TriangleImg
            src="https://demo.cocobasic.com/seppo-html/demo-3/images/triangle.png"
            alt="1"
            className="w-100"
          />
        </TriangleImage>
      </EducationSection>
    </React.Fragment>
  )
}

export default Education
