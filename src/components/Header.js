import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { headerElements } from '../data'
import HeaderResponsive from './HeaderResponsive'
import { colors } from '../untils/colors'

const HeaderSection = styled.section`
  position: fixed;
  top: 0;
  width: 100%;
  cursor: pointer;
  z-index: 3;
`

const ListLink = styled.a`
  text-decoration: none;
  color: ${colors.LoaderDotsBgColor};
  transition: color 0.5s;
  font-weight: 600;
  &:hover {
    color: ${colors.aboutTitleBgColor};
  }
`
const Container = styled.div`
  transition: background-color 0.5s;

  background-color: ${(props) =>
    props.IsHover === true ? colors.secondBgColor : 'transparent'};

  @media (max-width: 1199px) {
    display: none;
  }
`

const List = styled.ul`
  list-style: none;
  padding: 2% 0;
  margin: 0;
  text-align: center;

  transform: ${(props) =>
    props.IsHover === true ? 'translateY(0px)' : ' translateY(-50px)'};

  transition: transform 0.7s 0.1s cubic-bezier(0.9, -0.3, 0.19, 1.37);
`

function Header({ IsHover, handleHover }) {
  const [headerHeight, setHeaderHeight] = useState(20) // Hauteur par défaut pour les grands écrans
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    // Fonction pour mettre à jour la hauteur de l'en-tête en fonction de la taille de l'écran
    const updateHeaderHeight = () => {
      const screenWidth = window.innerWidth
      setWindowWidth(screenWidth) // Met à jour la largeur de l'écran dans l'état
    }

    // Ajoutez un écouteur d'événement pour détecter les changements de taille d'écran
    window.addEventListener('resize', updateHeaderHeight)

    // Nettoyage : supprimez l'écouteur lors de la suppression du composant
    return () => {
      window.removeEventListener('resize', updateHeaderHeight)
    }
  }, [])

  useEffect(() => {
    // Met à jour la hauteur de l'en-tête en fonction de la largeur de l'écran actuelle
    if (windowWidth < 992) {
      setHeaderHeight(40)
    } else {
      setHeaderHeight(80)
    }
  }, [windowWidth])

  const handleClick = (event, targetId, targetHref) => {
    event.preventDefault()

    if (targetHref === '#') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    } else {
      const targetElement = document.getElementById(targetId)

      if (targetElement) {
        const elementPosition = targetElement.getBoundingClientRect().top
        const offsetPosition = elementPosition - headerHeight

        window.scrollBy({
          top: offsetPosition,
          behavior: 'smooth',
        })
      }
    }
  }

  return (
    <React.Fragment>
      <HeaderSection
        className="row"
        onMouseEnter={() => handleHover(true)}
        onMouseLeave={() => handleHover(false)}
      >
        <Container IsHover={IsHover}>
          <div className="container">
            <List className="row" IsHover={IsHover}>
              {headerElements.map(({ id, href, title }) => (
                <li key={id} className="col">
                  <ListLink
                    href={href}
                    onClick={(e) => handleClick(e, id, href)}
                  >
                    {title}
                  </ListLink>
                </li>
              ))}
            </List>
          </div>
        </Container>
        <HeaderResponsive handleFonction={handleClick} />
      </HeaderSection>
    </React.Fragment>
  )
}

export default Header
