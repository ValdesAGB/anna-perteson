import React from 'react'
import styled from 'styled-components'

function Formulaire() {
  const Formulaires = styled.form`
    margin-bottom: 20%;
  `
  const Input = styled.input`
    background-color: transparent;
    border: none;
    border-bottom: solid 2px #7a5932;
    border-radius: 0px;
    &:focus {
      background-color: transparent;
      border-bottom: solid 2px #7a5932;
      box-shadow: none;
    }
  `

  const TextArea = styled.textarea`
    background-color: transparent;
    border: none;
    border-bottom: solid 2px #7a5932;
    border-radius: 0px;
    &:focus {
      box-shadow: none;
      background-color: transparent;
      border-bottom: solid 2px #7a5932;
    }
  `

  const Label = styled.label`
    font-size: 15px;
    line-height: 24px;
    font-weight: 700;
    &:focus {
      background-color: red;
    }
  `

  const Button = styled.button`
    background-color: transparent;
    border: solid 2px #7a5932;
    padding: 20px 0 20px 0;
    color: #7a5932;
    font-size: 1.2em;
    font-weight: 700;
    transition: background-color 500ms, color 900ms;
    &:hover {
      background-color: #7a5932;
      color: #fff;
    }
  `
  return (
    <React.Fragment>
      <div>
        <Formulaires className="row">
          <div className="form-floating mb-3">
            <Input
              type="text"
              className="form-control"
              id="name"
              placeholder="name"
            />
            <Label htmlFor="name">Name</Label>
          </div>

          <div className="form-floating mb-3">
            <Input
              type="email"
              className="form-control"
              id="email"
              placeholder="name@example.com"
            />
            <Label htmlFor="email">Email</Label>
          </div>

          <div className="form-floating mb-3">
            <Input
              type="text"
              className="form-control"
              id="subject"
              placeholder="subject"
            />
            <Label htmlFor="subject">Subject</Label>
          </div>

          <div className="form-floating mb-3">
            <TextArea
              className="form-control"
              placeholder="Leave a comment here"
              id="Message"
              style={{ height: '100px' }}
            ></TextArea>
            <Label htmlFor="Message">Message</Label>
          </div>

          <Button type="submit" className="  mt-3">
            Send message
          </Button>
        </Formulaires>
      </div>
    </React.Fragment>
  )
}

export default Formulaire