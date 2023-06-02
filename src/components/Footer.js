import React from 'react'
import { footerElements } from '../data'
import styled from 'styled-components'

function Footer() {
  const DivFooter = styled.div`
    padding: 10% 0 5% 0;
    background-color: #faeddf;
  `
  const LiensFooter = styled.a`
    color: #7a5932;
    transition: color 400ms;
    &:hover {
      color: #188497;
    }
  `

  const Icone = styled.i`
    font-size: 1.9em;
  `

  const date = new Date()

  return (
    <footer>
      <DivFooter className="row justify-content-center">
        <div className="row col-12 text-center justify-content-center">
          <ul className="list-unstyled col-12 justify-content-center col-md-6 col-xl-4 row ">
            {footerElements.map(({ id, icone }) => (
              <li key={id} className="col  col-xxl-2 ">
                <LiensFooter href="#">
                  <Icone className={icone} />
                </LiensFooter>
              </li>
            ))}
          </ul>
          <div className="mt-2">
            <p>&copy; {date.getFullYear()} Seppo HTML5 Theme by WebGrowth</p>
          </div>
        </div>
      </DivFooter>
    </footer>
  )
}

export default Footer
