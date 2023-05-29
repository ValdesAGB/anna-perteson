import React from 'react'
import styled from 'styled-components'

function Cover() {
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
    color: #9e7e63;
    padding: 40% 0 40% 0;
    font-weight: 300;
    font-size: 4em;
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

  return (
    <React.Fragment>
      <section>
        <div className="container">
          <div className="row align-items-start">
            <TitleDiv className="col-4">
              <Title className="text-center">
                Cover <br /> Letter
              </Title>
            </TitleDiv>
            <Div className="col">
              <DivContent className="col-11">
                <H5>
                  Dolor sit amet, consectetur adipiscing elit viverra tristique
                  placerat in massa consectetur quisque nunc ac fames lorem
                  ipsum dolormo
                </H5>
                <Paragraph>
                  Faucibus sed tristique fames sed aliquet ultricies eget
                  viverra arcu. Vitae faucibus diam consequat maecenas. Turpis
                  metus sit diam purus leo in varius ac quam. Nunc amet
                  tristique volutpat adipiscing vulputate phasellus. Volutpat
                  faucibus praesent ac lobortis aliquam dolor. Eget enim aliquam
                  euismod mauris in vitae viverra blandit lectus diam feugiat
                  mattis metus, parturient ipsum id nibh tortor tincidunt quam
                  facilisi nunc faucib.
                </Paragraph>

                <Paragraph>
                  Vitae faucibus diam consequat maecenas. Turpis metus sit diam
                  purus leo in varius ac quam. Nunc amet tristique volutpat
                  piscing vulputate phasellus lorem ipsum poterius holutiko
                  lorem ipsum.
                </Paragraph>
                <div className="col-12 row justify-content-end">
                  <span className="col-4 ">
                    <img
                      src="https://demo.cocobasic.com/seppo-html/demo-3/images/icon_signature_v2.png"
                      alt="1"
                      className="w-100"
                    />
                  </span>
                </div>
              </DivContent>
            </Div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Cover
