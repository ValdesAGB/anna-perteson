import React, { useState } from 'react'
import styled from 'styled-components'
import { faqElements } from '../data'

function FAQ() {
  const [answersVisibility, setAnswersVisibility] = useState({})

  const toggleAnswer = (questionId) => {
    setAnswersVisibility((prevState) => ({
      ...prevState,
      [questionId]: !prevState[questionId],
    }))
  }

  const FAQContainer = styled.div`
    width: 100%;
  `

  const QuestionContainer = styled.div`
    margin: 20px 0;
  `

  const Question = styled.div`
    display: flex;
    padding: 10px;
    cursor: pointer;
    align-items: center;
    background-color: #188497;
  `

  const QuestionTitle = styled.h6`
    flex-grow: 1;
    margin: 0;
    color: white;
    font-weight: bold;
  `

  const ToggleButton = styled.button`
    border: none;
    background-color: transparent;
    font-weight: bold;
    font-size: 16px;
    color: white;
    font-weight: bold;
  `

  const Answer = styled.div`
    display: ${({ show }) => (show ? 'block' : 'none')};
    padding: 20px;
    margin-bottom: 10px;
    background-color: #faeddf;
  `
  return (
    <FAQContainer>
      {faqElements.map(({ id, title, subTitle, text }) => (
        <QuestionContainer key={id}>
          <Question className={`${id}`} onClick={() => toggleAnswer(id)}>
            <QuestionTitle>{title}</QuestionTitle>
            <ToggleButton>{answersVisibility[id] ? '-' : '+'}</ToggleButton>
          </Question>
          <Answer show={answersVisibility[id]}>
            <h6 className="fw-bold mb-3">{subTitle}</h6>
            <p>{text}</p>
          </Answer>
        </QuestionContainer>
      ))}
    </FAQContainer>
  )
}

export default FAQ
