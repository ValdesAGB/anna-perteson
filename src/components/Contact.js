import React from 'react'
import styled from 'styled-components'
import Formulaire from './Formulaire'
import { colors } from '../untils/colors'
import SectionTitleComponent from './SectionTitleComponent'

const ContactSection = styled.section`
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

function Contact() {
  return (
    <React.Fragment>
      <ContactSection id="contact">
        <Container className="container">
          <div className="row align-items-start">
            <Content className="col-12 col-md order-2 order-md-1">
              <ContentTitle>
                Dolor sit amet, consectetur adipiscing elit viverra tristique
                placerat in massa Consectetur
              </ContentTitle>
              <Paragraph>
                Faucibus sed tristique fames sed aliquet ultricies eget viverra
                arcu. Vitae faucibus diam consequat maecenas. Turpis metus sit
                diam purus leo in varius ac quam. Nunc amet tristique volutpat
                adipiscing vulputate phasellus. Volutpat faucibus praesent
                acolo.
              </Paragraph>
              <Formulaire />
            </Content>

            <SectionTitleComponent
              title="Contact"
              className="col-12 col-md-4 order-1 order-md-2"
              TitleContainerBgColor={colors.portfolioTitleBgColor}
            />
          </div>
        </Container>
        {/*<ContactAnimation/>*/}
      </ContactSection>
    </React.Fragment>
  )
}

export default Contact
