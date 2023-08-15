import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { colors } from '../untils/colors'

const Container = styled.a`
  position: fixed;
  right: 20px;
  background-color: ${colors.aboutTitleBgColor};
  transition: bottom 0.3s ease;
  bottom: ${({ visible }) => (visible ? '10px' : '-20%')};
  padding: 5px 10px;
  border-radius: 10px;

  @media (max-width: 1199px) {
    display: none;
  }

  i {
    color: white;
    font-size: 2em;
  }
`

function ToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0 && !isVisible) {
        setIsVisible(true)
      } else if (window.scrollY === 0 && isVisible) {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isVisible])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <React.Fragment>
      <Container href="#" onClick={scrollToTop} visible={isVisible}>
        <i className="bi bi-arrow-up" />
      </Container>
    </React.Fragment>
  )
}

export default ToTop
