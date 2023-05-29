import React from 'react'
import { footerElements } from '../data'
import styled from 'styled-components'

function Footer() {
  const DivFooter = styled.div`
    padding: 5% 0 5% 0;
  `
  const LiensFooter = styled.a`
    color: #7a5932;
    transition: color 400ms;
    &:hover {
      color: rgba(0, 0, 255, 0.55);
    }
  `

  const Icone = styled.i`
    font-size: 1.9em;
  `

  const date = new Date()
  return (
    <footer>
      <DivFooter>
        <div className="row justify-content-center">
          <ul className="list-unstyled col-4 row ms-5">
            {footerElements.map(({ id, icone }) => (
              <li key={id} className="col">
                <LiensFooter href="#">
                  <Icone className={icone} />
                </LiensFooter>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-center mt-2">
          <p>&copy; {date.getFullYear()} Seppo HTML5 Theme by WebGrowth</p>
        </div>
      </DivFooter>
    </footer>
  )
}

export default Footer
