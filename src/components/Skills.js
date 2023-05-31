import React, { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { skillsElements } from '../data'

function Skills() {
  const [showProgress, setShowProgress] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('skills')
      const position = element.getBoundingClientRect()

      if (position.top <= window.innerHeight * 0.75) {
        setShowProgress(true)
        window.removeEventListener('scroll', handleScroll)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  const SkillsSection = styled.section`
    position: relative;
  `

  const Div = styled.div`
    background-color: #f0deca;
  `
  const DivContent = styled.div`
    padding: 14% 14% 10% 14%;
  `
  const ListDiv = styled.div`
    margin-left: 3%;
  `
  const TitleDiv = styled.div`
    width: 31.25%;
    background-color: #188497;
  `

  const Title = styled.h1`
    color: white;
    padding: 40% 0 40% 0;
    font-weight: 300;
    font-size: 4em;
    letter-spacing: -6px;
  `

  const H5 = styled.h5`
    text-align: justify;
    font-weight: 600;
    line-height: 1.5em;
    margin-bottom: 40px;
  `
  const Paragraph = styled.p`
    text-align: justify;
    line-height: 1.9em;
    font-size: 0.9em;
    margin-bottom: 40px;
  `

  const ContainerProgressBar = styled.div`
    position: relative;
    font-family: 'Montserrat', sans-serif;
    letter-spacing: 3.5px;
    font-weight: 500;
    background-color: #fff;
    color: #fcf7f1;
    z-index: 1;
    height: 10px;
  `

  const ProgressBar = styled.div`
    position: absolute;
    top: 50%;
    left: 0;
    height: 22px;
    width: ${(props) => (props.show ? props.width : '0%')};
    padding: 0.8% 0 0 2%;
    font-size: 0.7em;
    transform: translateY(-50%);
    background-color: #188497;
    transition: width 2s ease-in-out;
  `

  const Width = styled.div`
    color: rgba(190, 161, 125, 0.8);
    font-size: 1.2em;
  `

  const upDownAnimation = keyframes`
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(50%);
    }
    100% {
      transform: translateX(0);
    }
  `

  const CircleDiv = styled.div`
    position: absolute;
    top: 75%;
    left: 3.5%;
  `

  const CircleImg = styled.img`
    animation: ${upDownAnimation} 2s ease-in-out infinite;
  `

  return (
    <React.Fragment>
      <SkillsSection id="skills">
        <div className="container">
          <div className="row align-items-start">
            <Div className="col ">
              <DivContent className="col-11 ">
                <H5>
                  Consectetur adipiscing elit viverra tristique placerat in
                  massa lorem ipsum volos terutosiu
                </H5>
                <Paragraph className="">
                  Faucibus sed tristique fames sed aliquet ultricies eget
                  viverra arcu. Vitae faucibus diam consequat maecenas turpis
                  metus sit diam purus leo in varius ac quam kolosium peteronos
                  malidivos.
                </Paragraph>
                <ListDiv>
                  {skillsElements.map(({ id, title, width }) => (
                    <div className="row align-items-center my-4" key={id}>
                      <ContainerProgressBar className="col-9">
                        <ProgressBar show={showProgress} width={width}>
                          {title}
                        </ProgressBar>
                      </ContainerProgressBar>
                      <Width className="col-2 offset-1">{width}</Width>
                    </div>
                  ))}
                </ListDiv>
              </DivContent>
            </Div>
            <TitleDiv className="col-4 ">
              <Title className="text-center">Skills</Title>
            </TitleDiv>
          </div>
        </div>

        <CircleDiv className="col-1">
          <CircleImg
            src="https://demo.cocobasic.com/seppo-html/demo-3/images/circle.png"
            alt="1"
            className="w-100"
          />
        </CircleDiv>
      </SkillsSection>
    </React.Fragment>
  )
}

export default Skills
