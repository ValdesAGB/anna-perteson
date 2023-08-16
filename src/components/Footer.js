import React from 'react'
import { footerElements } from '../data'
import styled from 'styled-components'
import { colors } from '../untils/colors'

const Content = styled.div`
  padding: 50px 0;
  background-color: ${colors.secondBgColor};
`
const LiensFooter = styled.a`
  color: ${colors.LoaderDotsBgColor};
  transition: color 400ms;
  &:hover {
    color: ${colors.aboutTitleBgColor};
  }
`

const Icone = styled.i`
  font-size: 1.9em;
`

const Copyright = styled.div`
  margin-top: 10px;
  p {
    margin: 0;
  }
  a {
    color: ${colors.LoaderDotsBgColor};
    text-decoration: none;
    font-weight: 700;
    display: inline-block;
    transition: transform 0.5s 0.2s, color 0.5s;
    &:hover {
      transform: scale(0.95);
      color: ${colors.aboutTitleBgColor};
    }
  }
`

function Footer() {
  const date = new Date()

  return (
    <footer>
      <Content className="row">
        <div className="text-center">
          <div className="row justify-content-center">
            <ul className="list-unstyled justify-content-center col-md-6 col-xl-4 row">
              {footerElements.map(({ id, icone }) => (
                <li key={id} className="col col-sm-2 col-md">
                  <LiensFooter href="#">
                    <Icone className={icone} />
                  </LiensFooter>
                </li>
              ))}
            </ul>
            <Copyright>
              <p>
                &copy; {date.getFullYear()} - All Rights Reserved -{' '}
                <a href="https://webgrowth.valdesagbokoni.com/" target="_black">
                  WebGrowth
                </a>
              </p>
            </Copyright>
          </div>
        </div>
      </Content>
    </footer>
  )
}

export default Footer
