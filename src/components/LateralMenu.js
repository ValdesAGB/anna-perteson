import React from 'react'
import { lateralMenuElements, width } from '../data'
import styled from 'styled-components'

function LateralMenu() {
  const LateralMenuSection = styled.section`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: flex;
    justify-content: center;
    background-color: transparent;
    color: #7a5932;
    writing-mode: vertical-lr;
    text-orientation: mixed;
    @media (max-width: 1024px) {
      display: none;
    }
    @media (min-width: 2560px) {
      left: 22%;
    }
  `

  const LateralDiv = styled.div`
    display: flex;
    flex-direction: column
    align-items: flex;
    margin-top : 15%
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
    color: #7a5932;
  `

  const Name = styled.h6`
    transform: rotate(-180deg);
    font-weight: 700;
    letter-spacing: 5px;
  `

  const NameLink = styled.a`
    text-decoration: none;
    color: #7a5932;
  `

  return (
    <React.Fragment>
      <LateralMenuSection className="">
        <LateralDiv className="row align-items-center">
          <div className="col-2 text-center ">
            <Name>
              <NameLink href="#">ANNA PETERSON</NameLink>
            </Name>
          </div>
          <div className="col   mt-3">
            <List className="row text-center">
              {lateralMenuElements.map(({ id, href, title }) => (
                <ListItems key={id} className="col col-xxl-2 my-2 my-xxl-3">
                  <ListLink href={href} target="_blank">
                    {title}
                  </ListLink>
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
