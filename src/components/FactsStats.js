import React, { useEffect, useRef, useState } from 'react'
import { factsElements } from '../data'
import styled from 'styled-components'

const Container = styled.div`
  margin-top: 50px;
`

const DivList = styled.ul`
  position: relative;
  z-index: 1;
  li {
    margin-bottom: 50px;
  }
`
const ListIcone = styled.i`
  font-size: 4em;
  color: #188497;
`

const ListText = styled.h6`
  font-size: 1.2em;
  font-weight: 300;

  @media (min-width: 768px) {
    font-size: 1.2em;
  }

  @media (min-width: 1024px) {
    font-size: 1.4em;
    font-weight: 400;
  }
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
      if (value < 5) return 1500 // 1.5 seconds
      return 1000 // 1  seconds
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

function FactsStats() {
  return (
    <React.Fragment>
      <Container>
        <DivList className="row list-unstyled">
          {factsElements.map(({ id, icone, value, text }) => (
            <li key={id} className="text-center col-12 col-sm-6">
              <ListIcone className={` ${icone}`} />
              <AnimatedValue value={value} />
              <ListText>{text}</ListText>
            </li>
          ))}
        </DivList>
      </Container>
    </React.Fragment>
  )
}

export default FactsStats
