import React, { useState } from 'react'
import styled from 'styled-components'
import { headerElements } from '../data'

function Header() {
  const [state, setStatement] = useState(false)
  const [isCrossed, setIsCrossed] = useState(false)

  const handleContentIconeClick = () => {
    setIsCrossed(isCrossed ? false : true)
    setStatement(state ? false : true)
  }

  const HeaderSection = styled.section`
    position fixed;
    width:100%;
    z-index:${isCrossed ? 3 : 2};
    background-color: ${!isCrossed ? 'transparent' : '#faeddf'};
    padding : 1.5% 0 1% 0;
    top:0;
    `

  const List = styled.ul`
    list-style: none;
    padding: 0;
  `

  const ListLink = styled.a`
    text-decoration: none;
    color: ${(props) => (props.active ? '#188497' : '#7a5932')};
    transition: color 700ms;
    font-weight: 600;
    &:hover {
      color: #188497;
    }
  `

  const ContentIcone = styled.div`
    margin-left: 20px;
    cursor: pointer;
    position: relative;
  `

  const IconeContainer = styled.div`
    position: relative;
    z-index: 5;
  `

  const Line = styled.div`
    background-color: #7a5932;
    opacity: ${!isCrossed ? 1 : 0};
    transition: opacity 2s;
  `
  const IconeList = styled(Line)`
    height: 3px;
    width: ${(props) => props.width};
    margin: 5px 0 7px 0;
    transition: width 500ms, opacity 2s;
    ${ContentIcone}:hover & {
      width: 40%;
    }
  `

  const [activeLink, setActiveLink] = useState(null)

  const handleLinkClick = (href) => {
    setActiveLink(href)
  }
  const CrossContainer = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    position: fixed;
    top: 2.9%;
    left: 2%;
  `

  const CrossLine = styled.div`
    background: #7a5932;
    position: absolute;
    content: '';
    opacity: ${!isCrossed ? 0 : 1};
    transition: opacity 2s;
  `

  const CrossTop = styled(CrossLine)`
    width: 70%;
    height: 6%;
    top: 35%;
    left: 0%;
    transform: rotate(45deg);
    transition: opacity 2s;
  `

  const CrossBottom = styled(CrossLine)`
    width: 6%;
    height: 70%;
    left: 32%;
    top: 5%;
    transform: rotate(45deg);
    transition: opacity 2s;
  `

  return (
    <React.Fragment>
      <HeaderSection className="row align-items-center">
        <ContentIcone
          className="col-1"
          onClick={() => handleContentIconeClick()}
        >
          <IconeContainer>
            <IconeList width="30%"></IconeList>
            <IconeList width="20%"></IconeList>
            <IconeList width="35%"></IconeList>
          </IconeContainer>
          <CrossContainer>
            <CrossTop />
            <CrossBottom />
          </CrossContainer>
        </ContentIcone>
        <List className={` col row ${!state ? 'd-none' : 'd-flex'}`}>
          {headerElements.map(({ href, title }) => (
            <li key={href} className="col text-center ">
              <ListLink
                href={href}
                active={activeLink === href}
                onClick={() => handleLinkClick(href)}
              >
                {title}
              </ListLink>
            </li>
          ))}
        </List>
      </HeaderSection>
    </React.Fragment>
  )
}

export default Header
