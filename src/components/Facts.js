import React, { useEffect, useState, useRef } from 'react'
import styled, { keyframes } from 'styled-components'
import { factsElements } from '../data'

function Facts() {
  const FactsSession = styled.section`
    position: relative;
  `
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
    letter-spacing: -6px;
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

  const AnimatedValue = ({ value }) => {
    const [displayValue, setDisplayValue] = useState(0)
    const valueRef = useRef(null)

    useEffect(() => {
      let animationFrame
      let startTimestamp

      const getAnimationDuration = () => {
        if (value < 5) return 1500 // 5 seconds
        return 1000 // 30 seconds
      }

      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp
        const progress = timestamp - startTimestamp
        const duration = getAnimationDuration()

        let stepValue
        if (value < 5) {
          stepValue = parseFloat((value * (progress / duration)).toFixed(1))
        } else {
          stepValue = Math.round((value / duration) * progress)
        }

        if (stepValue <= value) {
          setDisplayValue(stepValue)
          animationFrame = requestAnimationFrame(step)
        } else {
          setDisplayValue(value)
        }
      }

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animationFrame = requestAnimationFrame(step)
          }
        })
      })

      observer.observe(valueRef.current)

      return () => {
        cancelAnimationFrame(animationFrame)
        observer.disconnect()
      }
    }, [value])

    const formattedValue =
      value >= 1000 ? `${(value / 1000).toFixed(1)}K` : displayValue

    return (
      <ListValue className="my-2" ref={valueRef}>
        {displayValue < 5 ? `${formattedValue}K` : formattedValue}
      </ListValue>
    )
  }

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

  const ZigZagDiv = styled.div`
    position: absolute;
    top: 90%;
    left: 59%;
  `

  const ZigZagImg = styled.img`
    animation: ${slideAnimation} 3s ease-in-out infinite;
  `

  return (
    <React.Fragment>
      <FactsSession id="facts">
        <div className="container">
          <div className="row align-items-start">
            <Div className="col">
              <DivContent className="col-11">
                <H5>
                  Dolor sit amet, consectetur adipiscing elit viverra tristique
                  placerat in massa consectetur
                </H5>

                <div>
                  <ul className="row justify-conter list-unstyled">
                    {factsElements.map(({ id, icone, value, text }) => (
                      <li key={id} className="text-center col-6 mb-5">
                        <ListIcone className={` ${icone}`} />
                        <AnimatedValue value={value} />
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

        <ZigZagDiv className="col-2">
          <ZigZagImg
            src="https://demo.cocobasic.com/seppo-html/demo-3/images/zigzag.png"
            alt="1"
            className="w-75"
          />
        </ZigZagDiv>
      </FactsSession>
    </React.Fragment>
  )
}

export default Facts
