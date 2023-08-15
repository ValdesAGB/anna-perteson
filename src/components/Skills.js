import React from 'react'
import styled from 'styled-components'
import SkillsStats from './SkillsStats'

import { colors } from '../untils/colors'

const SkillsSection = styled.section`
  position: relative;
`

const Container = styled.div`
  @media (max-width: 767px) {
    padding: 0;
  }
`

const Content = styled.div`
  background-color: ${colors.mainBgColor};
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
    padding-top: 100px;
  }
`

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.aboutTitleBgColor};
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

const ContentTitle = styled.h5`
  font-weight: 600;
  line-height: 1.5em;

  @media (max-width: 425px) {
    text-align: justify;
  }
`

const Paragraph = styled.p`
  line-height: 1.9em;
  font-size: 0.9em;
  margin: 30px 0;
  @media (max-width: 991px) {
    text-align: justify;
  }
`

function Skills() {
  return (
    <React.Fragment>
      <SkillsSection id="skills">
        <Container className="container">
          <div className="row align-items-start">
            <Content className="col-12 col-md order-2 order-md-1">
              <ContentTitle>
                Consectetur adipiscing elit viverra tristique placerat in massa
                lorem ipsum volos terutosiu
              </ContentTitle>
              <Paragraph>
                Faucibus sed tristique fames sed aliquet ultricies eget viverra
                arcu. Vitae faucibus diam consequat maecenas turpis metus sit
                diam purus leo in varius ac quam kolosium peteronos malidivos.
              </Paragraph>
              <SkillsStats />
            </Content>
            <TitleContainer className="col-12 col-md-4 order-1 order-md-2">
              <Title className="text-center">Skills</Title>
            </TitleContainer>
          </div>
        </Container>

        {/* <SkillsAnimation/>*/}
      </SkillsSection>
    </React.Fragment>
  )
}

export default Skills
