import React, { useEffect, useState, useRef } from 'react'
import styled, { keyframes } from 'styled-components'
import { factsElements, width } from '../data'

function Facts() {
  const FactsSession = styled.section`
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
    position: relative;
    z-index: 1;
    @media (min-width: 320px) {
      padding: 10% 0% 10% 0%;
    }
    @media (min-width: 768px) {
      padding: 14% 5% 10% 5%;
      margin-left: 3%;
    }

    @media (min-width: 1024px) {
      padding: 14% 10% 10% 5%;
    }

    @media (min-width: ${width}px) {
      padding: 14% 14% 5% 14%;
    }
    @media (min-width: 1440px) {
      padding: 14% 20% 5% 15%;
    }
    @media (min-width: 2560px) {
      padding: 14% 15% 10% 6%;
    }
  `

  const TitleDiv = styled.div`
    background-color: #188497;
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
    @media (min-width: 320px) {
      text-align: start;
      line-height: 1.35em;
    }

    font-weight: 600;
    margin-bottom: 40px;
  `
  const DivList = styled.ul`
    position: relative;
    z-index: 1;
  `
  const ListIcone = styled.i`
    font-size: 4em;
    color: #188497;
    @media (min-width: 425px) {
      margin-top: 6%;
    }
  `

  const ListValue = styled.h3`
    font-size: 3em;
    font-weight: 700;
  `
  const ListText = styled.h6`
    @media (min-width: 320px) {
      font-size: 1.3em;
      font-weight: 300;
    }
    @media (min-width: 768px) {
      font-size: 1.2em;
    }

    @media (min-width: 1024px) {
      font-size: 1.4em;
      font-weight: 400;
    }
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
    @media (min-width: 320px) {
      top: 90%;
      left: 35%;
    }
    @media (min-width: 768px) {
      left: 50%;
    }

    @media (min-width: 768px) {
      left: 55%;
    }

    @media (min-width: 2560px) {
      top: 80%;
      left: 50%;
    }
    z-index: 0;
  `

  const ZigZagImg = styled.img`
    animation: ${slideAnimation} 3s ease-in-out infinite;
  `

  return (
    <React.Fragment>
      <FactsSession id="facts ">
        <div className="container p-0 ">
          <div className="row align-items-start">
            <Div className="col-12 col-md order-2 order-md-1">
              <DivContent className="col-12 col-md-11 col-xxl-12">
                <H5>
                  Dolor sit amet, consectetur adipiscing elit viverra tristique
                  placerat in massa consectetur
                </H5>

                <div className="row  justify-content-center">
                  <DivList className="row list-unstyled col-xxl-10">
                    {factsElements.map(({ id, icone, value, text }) => (
                      <li
                        key={id}
                        className="text-center col-12 col-md-6 mb-3 mb-md-5"
                      >
                        <ListIcone className={` ${icone}`} />
                        <AnimatedValue value={value} />
                        <ListText>{text}</ListText>
                      </li>
                    ))}
                  </DivList>
                </div>
              </DivContent>
            </Div>
            <TitleDiv className="col-12 col-md-4 order-1 order-md-2">
              <Title className="text-center">Facts</Title>
            </TitleDiv>
          </div>
        </div>

        <ZigZagDiv className="col-7 col-md-3 col-xl-2">
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
