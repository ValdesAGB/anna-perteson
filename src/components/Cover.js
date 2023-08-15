import React from 'react'
import styled from 'styled-components'
import { colors } from '../untils/colors'

const CoverSection = styled.section`
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
  background-color: ${colors.coverLetterTitleBgColor};
`

const Title = styled.h1`
  color: ${colors.coverLetterTitleColor};
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
const Br = styled.br`
  @media (max-width: 767px) {
    display: none;
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
    padding-top: 100px;
  }
`

const ContentMainParagraph = styled.h5`
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

const SignatureContainer = styled.div`
  text-align: end;
  position: relative;
  z-index: 2;
  img {
    width: 30%;
    @media (min-width: 576px) {
      width: 20%;
    }
  }
`

function Cover() {
  return (
    <React.Fragment>
      <CoverSection id="cover-letter">
        <Container className="container">
          <div className="row align-items-start">
            <TitleContainer className="col-12 col-md-4 ">
              <Title className="text-center">
                Cover <Br /> Letter
              </Title>
            </TitleContainer>
            <Content className="col-12 col-md ">
              <ContentMainParagraph>
                Dolor sit amet, consectetur adipiscing elit viverra tristique
                placerat in massa consectetur quisque nunc ac fames lorem ipsum
                dolormo
              </ContentMainParagraph>
              <Paragraph>
                Faucibus sed tristique fames sed aliquet ultricies eget viverra
                arcu. Vitae faucibus diam consequat maecenas. Turpis metus sit
                diam purus leo in varius ac quam. Nunc amet tristique volutpat
                adipiscing vulputate phasellus. Volutpat faucibus praesent ac
                lobortis aliquam dolor. Eget enim aliquam euismod mauris in
                vitae viverra blandit lectus diam feugiat mattis metus,
                parturient ipsum id nibh tortor tincidunt quam facilisi nunc
                faucib.
              </Paragraph>

              <Paragraph>
                Vitae faucibus diam consequat maecenas. Turpis metus sit diam
                purus leo in varius ac quam. Nunc amet tristique volutpat
                piscing vulputate phasellus lorem ipsum poterius holutiko lorem
                ipsum.
              </Paragraph>
              <SignatureContainer>
                <img
                  src="https://demo.cocobasic.com/seppo-html/demo-3/images/icon_signature_v2.png"
                  alt="signature"
                />
              </SignatureContainer>
            </Content>
          </div>
        </Container>
        {/* <CoverAnimation/>*/}
      </CoverSection>
    </React.Fragment>
  )
}

export default Cover
