import React from 'react'
import { lateralMenuElements } from '../data'
import styled from 'styled-components'
import { colors } from '../untils/colors'

const LateralMenuSection = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  z-index: 4;
  display: flex;
  flex-direction: column;
  align-items: flex;
  justify-content: center;
  background-color: transparent;
  color: ${colors.LoaderDotsBgColor};
  writing-mode: vertical-lr;
  text-orientation: mixed;
  @media (max-width: 1299px) {
    display: none;
  }

  @media (min-width: 1400px) and (max-width: 1459px) {
    display: none;
  }
`

const LateralDiv = styled.div`
  display: flex;
  align-items: flex;

  padding-top: 15px;

  @media (min-width: 1500px) {
    padding-top: 150px;
  }
`

const Name = styled.h6`
  transform: rotate(-180deg);
  font-weight: 700;
  letter-spacing: 5px;
`

const List = styled.ul`
  list-style: none;
  padding: 0;
`

const ListItems = styled.li`
  transform: rotate(-180deg);
`

const ListLink = styled.a`
  text-decoration: none;
  letter-spacing: 7px;
  font-size: 0.7em;
  color: ${colors.LoaderDotsBgColor};
  @media (min-width: 1500px) {
    margin: 49px 0;
  }
`

const NameLink = styled.a`
  text-decoration: none;
  color: ${colors.LoaderDotsBgColor};
`

function LateralMenu({ handleHover }) {
  return (
    <React.Fragment>
      <LateralMenuSection
        onMouseEnter={() => handleHover(true)}
        onMouseLeave={() => handleHover(false)}
      >
        <LateralDiv className="row align-items-center">
          <div className="col-2">
            <Name>
              <NameLink href="#">ANNA PETERSON</NameLink>
            </Name>
          </div>
          <div className="col">
            <List className="row">
              {lateralMenuElements.map(({ id, title }) => (
                <ListItems key={id} className="col">
                  <ListLink href="#">{title}</ListLink>
                </ListItems>
              ))}
            </List>
          </div>
        </LateralDiv>
      </LateralMenuSection>
    </React.Fragment>
  )
}

export default LateralMenu
