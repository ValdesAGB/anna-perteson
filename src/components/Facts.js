import React from 'react'
import styled from 'styled-components'
import { factsElements } from '../data'

function Facts() {
  const Div = styled.div`
    background-color: #f0deca;
  `
  const DivContent = styled.div`
    padding: 14% 14% 0 14%;
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
  `

  const H5 = styled.h5`
    text-align: justify;
    font-weight: 600;
    line-height: 1.5em;
    margin-bottom: 40px;
  `

  const ListIcone = styled.i`
    font-size: 4em;
    color: #188497;
  `

  const ListValue = styled.h3`
    font-size: 3em;
    font-weight: 700;
  `
  return (
    <React.Fragment>
      <section>
        <div className="container">
          <div className="row align-items-start">
            <Div className="col">
              <DivContent className="col-11">
                <H5>
                  Dolor sit amet, consectetur adipiscing elit viverra tristique
                  placerat in massa consectetur
                </H5>

                <div>
                  <ul className=" row justify-conter list-unstyled">
                    {factsElements.map(({ id, icone, value, text }) => (
                      <li key={id} className="text-center col-6 mb-5">
                        <ListIcone className={` ${icone}`} />
                        <ListValue className="my-2">{value}</ListValue>
                        <h6 className="fs-4 fw-light">{text}</h6>
                      </li>
                    ))}
                  </ul>
                </div>
              </DivContent>
            </Div>
            <TitleDiv className="col-4">
              <Title className="text-center">Facts</Title>
            </TitleDiv>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Facts
