import React from 'react'
import styled from 'styled-components'
import { headerElements, lateralMenuElements, width } from '../data'

function HeaderResponsive() {
  const HeaderResponsiveSection = styled.section`
    position: fixed;
    z-index: 3;
    width: 100%;
    top: 0;
    @media (min-width: ${width}px) {
      display: none;
    }
  `

  const HeaderResponsiveNav = styled.nav`
    background-color: #faeddf;
    @media (min-width: 320px) {
      padding: 5% 0 5% 0;
    }

    @media (min-width: 375px) {
      padding: 5% 1% 5% 1%;
    }

    @media (min-width: 425px) {
      padding: 5% 1% 5% 2%;
    }

    @media (min-width: 425px) {
      padding: 1%;
    }
    padding: 2%;
  `

  const NameLink = styled.a`
    text-decoration: none;
    color: #7a5932;

    @media (min-width: 320px) {
      letter-spacing: 3px;
      font-size: 1.1em;
      font-weight: 600;
    }

    @media (min-width: 1024px) {
      letter-spacing: 3px;
      font-size: 1.5em;
      font-weight: 600;
    }
  `

  const NavBtn = styled.button`
    font-size: 1.5em;
    color: #7a5932;
    @media (min-width: 375px) {
      font-size: 1.7em;
    }

    @media (min-width: 425px) {
      font-size: 1.4em;
    }
  `

  const HeaderResponsiveOffcanvas = styled.div`
    @media (max-width: 425px) {
      background-color: rgba(250, 237, 223, 0.9);
    }
    background-color: #faeddf;
    color: #7a5932;
  `

  const ListNetworks = styled.ul`
    list-style: none;
    padding: 5% 0 0 0;
    @media (min-width: 1024px) {
      padding: 5% 0 0 0%;
    }
  `

  const ListLinkNetworks = styled.a`
    text-decoration: none;
    letter-spacing: 7px;
    font-size: 0.6em;
    color: #7a5932;
    font-weight: 600;
    @media (min-width: 1024px) {
      font-size: 0.9em;
      font-weight: 300;
    }
  `

  const HeaderResponsiveOffcanvasBtnCloser = styled.button`
    font-size: 1.5em;
    color: rgb(122, 89, 50);
  `

  const List = styled.ul`
    list-style: none;
    padding: 0;
  `

  const ListLink = styled.a`
    text-decoration: none;
    color: '#7a5932';
    transition: color 700ms;
    font-weight: 500;
    margin: 0 0 1% 40%;
    &:hover {
      color: #188497;
    }
    @media (min-width: 1024px) {
      font-size: 1.3em;
      margin: 0 0 5% 40%;
    }
  `

  return (
    <React.Fragment>
      <HeaderResponsiveSection className="row ">
        <HeaderResponsiveNav className="navbar navbar-expand-xl ">
          <div className="container-fluid">
            <NameLink href="#" className="navb">
              ANNA PETERSON
            </NameLink>
            <NavBtn
              className="btn"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              <span className="navbar-toggler-icon"></span>
            </NavBtn>

            <HeaderResponsiveOffcanvas
              className="offcanvas offcanvas-end"
              tabIndex="-1"
              id="offcanvasRight"
              aria-labelledby="offcanvasRightLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasRightLabel">
                  <ListNetworks className="row text-center">
                    {lateralMenuElements.map(({ id, href, title }) => (
                      <ul key={id} className="col">
                        <ListLinkNetworks href={href}>
                          {title}.
                        </ListLinkNetworks>
                      </ul>
                    ))}
                  </ListNetworks>
                </h5>
                <HeaderResponsiveOffcanvasBtnCloser
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></HeaderResponsiveOffcanvasBtnCloser>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <List>
                    {headerElements.map(({ href, title }) => (
                      <li key={href} className=" nav-item">
                        <ListLink href={href} className="nav-link">
                          {title}
                        </ListLink>
                      </li>
                    ))}
                  </List>
                </ul>
              </div>
            </HeaderResponsiveOffcanvas>
          </div>
        </HeaderResponsiveNav>
      </HeaderResponsiveSection>
    </React.Fragment>
  )
}

export default HeaderResponsive
