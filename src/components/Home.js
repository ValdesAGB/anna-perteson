import React from 'react'
import styled from 'styled-components'

function Home() {
  const Div = styled.div`
    background-color: #f0deca;
    margin-top: 5.7%;
  `

  const H1 = styled.h1`
    font-size: 6em;
    font-weight: 200;
    letter-spacing: -6px;
  `

  const Paragraph = styled.p`
    padding: 50px 0px 00px 10px;
    line-height: 2em;
  `
  return (
    <section>
      <Div className="container">
        <div className="row align-items-center ">
          <div className="col-4 row me-3">
            <img
              src="https://demo.cocobasic.com/seppo-html/demo-3/images/main_image.jpg"
              alt="1"
              className="w-100 p-0"
            />
          </div>
          <div className="col-5  offset-1">
            <H1>
              Hello <br />
              I’m Anna <br />
              Peterson
            </H1>

            <Paragraph>
              A full stack allaround designer that tristique est placerat in
              massa consectetur quisque lobortis vitae faucibus diam consequat
              maecenas turpis metus sit diam purus leo in varius ac quam est
              lorem ipsum.
            </Paragraph>
          </div>
        </div>
      </Div>
    </section>
  )
}

export default Home
