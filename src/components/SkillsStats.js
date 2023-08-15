import React, { useEffect, useRef, useState } from 'react'
import { skillsElements } from '../data'
import styled from 'styled-components'

const AnimatedValue = ({ value }) => {
  const [displayValue, setDisplayValue] = useState(0)
  const valueRef = useRef(null)

  const widthNumber = parseInt(value, 10)

  useEffect(() => {
    let animationFrame
    let startTimestamp

    const getAnimationDuration = () => {
      return 2000
    }

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = timestamp - startTimestamp
      const duration = getAnimationDuration()

      let stepValue

      stepValue = Math.round((widthNumber / duration) * progress)

      if (stepValue <= widthNumber) {
        setDisplayValue(stepValue)
        animationFrame = requestAnimationFrame(step)
      } else {
        setDisplayValue(widthNumber)
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
  }, [widthNumber])

  const formattedValue = `${displayValue}%`

  return <span ref={valueRef}>{formattedValue}</span>
}

const Content = styled.div`
  padding: 10px 0;
`

const ProgressBarContainer = styled.div`
  position: relative;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 3.5px;
  font-weight: 500;
  background-color: #fff;
  color: #fcf7f1;
  z-index: 1;
  height: 10px;
  @media (min-width: 2560px) {
    height: 20px;
  }
`

const ProgressBar = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  font-size: 0.55em;
  font-weight: 700;
  padding-left: 10px;
  height: 22px;
  width: ${(props) => (props.show ? props.width : '0%')};
  transform: translateY(-50%);
  background-color: #188497;
  transition: width 2s ease-in-out;
  display: flex;
  align-items: center;
`

const Width = styled.div`
  font-size: 1em;
  display: flex;
  justify-content: end;
  color: rgba(190, 161, 125, 0.8);
`

function SkillsStats() {
  const [showProgress, setShowProgress] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('skills')
      const position = element.getBoundingClientRect()

      if (position.top <= window.innerHeight * 0.75) {
        setShowProgress(true)
        window.removeEventListener('scroll', handleScroll)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  return (
    <React.Fragment>
      <div className="container">
        {skillsElements.map(({ id, title, width }) => (
          <Content className="row align-items-center" key={id}>
            <ProgressBarContainer className="col-10">
              <ProgressBar show={showProgress} width={width}>
                {title}
              </ProgressBar>
            </ProgressBarContainer>
            <Width className="col-2">
              <AnimatedValue value={width} />
            </Width>
          </Content>
        ))}
      </div>
    </React.Fragment>
  )
}

export default SkillsStats
