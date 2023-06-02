import React, { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { skillsElements, width } from '../data'

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
    @media (min-width: 768px) {
      margin-left: -12px;
    }
    @media (min-width: 1024px) {
      margin-left: -20px;
    }
    @media (min-width: ${width}px) {
      margin-left: 13px;
    }
    @media (min-width: 1440px) {
      margin-left: 5px;
    }
  `
  const DivContent = styled.div`
    @media (min-width: 320px) {
      padding: 10% 0% 10% 0%;
    }
    @media (min-width: 768px) {
      padding: 14% 5% 10% 5%;
      margin-left: 3%;
    }
    @media (min-width: ${width}px) {
      padding: 14% 14% 10% 14%;
    }
    @media (min-width: 1440px) {
      padding: 14% 10% 15% 12%;
    }
    @media (min-width: 2560px) {
      padding: 14% 15% 15% 6%;
    }
  `
  const ListDiv = styled.div`
    margin-left: 3%;
  `
  const TitleDiv = styled.div`
    @media (min-width: 320px) {
      width: 100%;
    }
    @media (min-width: 768px) {
      width: 40.5%;
      margin-right: -1.6%;
    }
    @media (min-width: 1024px) {
      width: 39.5%;
      margin-right: -2%;
    }
    @media (min-width: ${width}px) {
      width: 33.55%;
      margin-right: 1.09%;
    }
    @media (min-width: 1440px) {
      width: 33.8%;
      margin-right: 0.9%;
    }
    background-color: #188497;
  `

  const Title = styled.h1`
    color: white;
    font-weight: 300;
    @media (min-width: 320px) {
      padding: 10% 0 10% 0;
      font-size: 2.5em;
      letter-spacing: -3px;
    }
    @media (min-width: 768px) {
      padding: 40% 0 40% 0;
      font-size: 3em;
      letter-spacing: -5px;
    }
    @media (min-width: ${width}px) {
      padding: 40% 0 40% 0;
      font-size: 3.3em;
      letter-spacing: -4.5px;
    }
    @media (min-width: 1440px) {
      padding: 40% 0 40% 0;
      font-size: 5.2em;
      letter-spacing: -8px;
    }
  `

  const H5 = styled.h5`
    text-align: justify;
    font-weight: 600;
    line-height: 1.5em;
    margin-bottom: 40px;
    @media (min-width: 1440px) {
      font-size: 2em;
      margin-bottom: 60px;
    }
    @media (min-width: 2560px) {
      font-size: 2em;
      margin-bottom: 60px;
    }
  `
  const Paragraph = styled.p`
    text-align: justify;
    line-height: 1.9em;
    font-size: 0.9em;
    margin-bottom: 40px;
    @media (min-width: 1440px) {
      line-height: 1.6em;
      font-size: 1.5em;
      margin-bottom: 60px;
      text-align: start;
    }
    @media (min-width: 2560px) {
      line-height: 1.6em;
      font-size: 1.9em;
      margin-bottom: 60px;
      text-align: start;
    }
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
    @media (min-width: 2560px) {
      height: 20px;
    }
  `

  const ProgressBar = styled.div`
    position: absolute;
    top: 50%;
    left: 0;
    @media (min-width: 320px) {
      font-size: 0.55em;
      font-weight: 700;
      padding: 1% 0 0 2%;
      height: 22px;
    }

    @media (min-width: 768px) {
      font-size: 0.7em;
      font-weight: 600;
    }

    @media (min-width: 768px) {
      font-size: 0.8em;
      font-weight: 500;
      padding: 0.5% 0 0 2%;
    }
    @media (min-width: ${width}px) {
      padding: 0.6% 0 0 2%;
      font-size: 0.65em;
      height: 20px;
    }

    @media (min-width: 1440px) {
      padding: 0.6% 0 0 2%;
      font-size: 0.9em;
      font-weight: 500;
      height: 25px;
    }
    @media (min-width: 2560px) {
      padding: 0.6% 0 0 2%;
      font-size: 1.5em;
      font-weight: 500;
      height: 40px;
    }
    width: ${(props) => (props.show ? props.width : '0%')};

    transform: translateY(-50%);
    background-color: #188497;
    transition: width 2s ease-in-out;
  `

  const Width = styled.div`
    @media (min-width: 320px) {
      font-size: 1.2em;
      font-size: 1.3em;
      margin-left: 2%;
    }

    @media (min-width: 768px) {
      margin-left: 5%;
    }
    @media (min-width: 1440px) {
      font-size: 1.6em;
    }
    @media (min-width: 2560px) {
      font-size: 2em;
    }
    color: rgba(190, 161, 125, 0.8);
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
    @media (min-width: 320px) {
      top: 65%;
      left: -25%;
    }

    @media (min-width: 768px) {
      top: 68%;
      left: -10%;
    }

    @media (min-width: 1024px) {
      top: 62%;
      left: -10%;
    }
    @media (min-width: ${width}px) {
      top: 75%;
      left: 2.5%;
    }

    @media (min-width: 1440px) {
      top: 80%;
      left: -2.9%;
    }
    @media (min-width: 2560px) {
      top: 74%;
      left: 18.8%;
    }
  `

  const CircleImg = styled.img`
    animation: ${upDownAnimation} 2s ease-in-out infinite;
  `

  return (
    <React.Fragment>
      <SkillsSection id="skills">
        <div className="container p-0">
          <div className="row align-items-start">
            <Div className="col-12 col-md order-2 order-md-1">
              <DivContent className="col-12 col-md-11 col-xxl-12">
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
                    <div
                      className="row align-items-center  my-3 my-md-4 my-xxl-4"
                      key={id}
                    >
                      <ContainerProgressBar className="col-9 col-xxl-10">
                        <ProgressBar show={showProgress} width={width}>
                          {title}
                        </ProgressBar>
                      </ContainerProgressBar>
                      <Width className="col-2 col-xxl-1 offset-md-1 ">
                        {width}
                      </Width>
                    </div>
                  ))}
                </ListDiv>
              </DivContent>
            </Div>
            <TitleDiv className="col-12 col-md-4 order-1 order-md-2">
              <Title className="text-center">Skills</Title>
            </TitleDiv>
          </div>
        </div>

        <CircleDiv className="col-5 col-md-2 col-xl-1">
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
