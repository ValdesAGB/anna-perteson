import React from 'react'
import styled from 'styled-components'
import FAQ from './FAQ'

function Experiences() {
  const Div = styled.div`
    background-color: #fcf7f1;
    padding: 0 0 60px 0;
  `
  const DivContent = styled.div`
    padding: 14% 14% 0 14%;
  `
  const TitleDiv = styled.div`
    width: 31.25%;
    background-color: #fff48f;
  `

  const Title = styled.h1`
    padding: 40% 10% 40% 10%;
    font-weight: 300;
    font-size: 3em;
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

  const List = styled.ul`
    display: grid;
    grid-template-columns: 123px 123px 123px;
    justify-content: space-between;
  `
  return (
    <React.Fragment>
      <section>
        <div className="container">
          <div className="row align-items-start">
            <TitleDiv className="col-4">
              <Title className="text-center">Experience</Title>
            </TitleDiv>
            <Div className="col">
              <DivContent className="col-11">
                <H5>
                  Dolor sit amet, consectetur adipiscing elit viverra tristique
                  placerat in massa consectetur
                </H5>
                <Paragraph>
                  Faucibus sed tristique fames sed aliquet ultricies eget
                  viverra arcu. Vitae faucibus diam consequat maecenas. Turpis
                  metus sit diam purus leo in varius ac quam. Nunc amet
                  tristique volutpat adipiscing vulputate phasellus. Volutpat
                  faucibus praesent acolo.
                </Paragraph>

                <FAQ />
              </DivContent>
            </Div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Experiences
