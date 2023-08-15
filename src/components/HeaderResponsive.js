import React from 'react'
import styled from 'styled-components'
import { headerElements, lateralMenuElements } from '../data'
import { colors } from '../untils/colors'

const HeaderResponsiveNav = styled.nav`
  background-color: ${colors.secondBgColor};
  padding: 10px 0;
  @media (min-width: 1200px) {
    display: none;
  }
`

const Name = styled.a`
  text-decoration: none;
  color: ${colors.LoaderDotsBgColor};
  text-transform: uppercase;

  letter-spacing: 3px;
  font-size: 1.1em;
  font-weight: 600;

  @media (min-width: 992px) {
    letter-spacing: 3px;
    font-size: 1.5em;
  }
`

const ToogleOpenBtnContainer = styled.button`
  font-size: 1.5em;
  color: ${colors.LoaderDotsBgColor};
`

const HeaderResponsiveOffcanvas = styled.div`
  background-color: ${colors.headerResponsiveOffcanvasBgColor};
  color: ${colors.LoaderDotsBgColor};
  width: 85% !important;
  @media (min-width: 576px) {
    width: 60% !important;
  }
  @media (min-width: 768px) {
    width: 50% !important;
  }
`

const OffcanvasHeaderListNetworksContainer = styled.h5`
  display: flex;
  justify-content: center;
  width: 100% !important;
  text-align: center;
`

const ListNetworks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

const LinkNetworks = styled.a`
  text-decoration: none;
  letter-spacing: 7px;
  font-size: 0.6em;
  color: ${colors.LoaderDotsBgColor};
  font-weight: 600;
`

const ToogleCloseBtn = styled.button`
  color: ${colors.responsiveHeaderToogleCloseBtnColor};
`

const List = styled.ul`
  list-style: none;
  padding: 0;
`

const ListLink = styled.a`
  text-decoration: none;
  transition: color 700ms;
  font-weight: 500;
  text-align: center;
  color: ${colors.LoaderDotsBgColor};
  transition: color 0.5s;
  &:hover {
    color: ${colors.aboutTitleBgColor};
  }
`

function HeaderResponsive({ handleFonction }) {
  return (
    <React.Fragment>
      <HeaderResponsiveNav className="navbar navbar-expand-xl">
        <div className="container-fluid">
          <Name href="#" className="nav">
            anna peterson
          </Name>
          <ToogleOpenBtnContainer
            className="btn"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
          >
            <span className="navbar-toggler-icon" />
          </ToogleOpenBtnContainer>

          <HeaderResponsiveOffcanvas
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasRight"
            aria-labelledby="offcanvasRightLabel"
          >
            <div className="offcanvas-header">
              <OffcanvasHeaderListNetworksContainer
                className="offcanvas-title"
                id="offcanvasRightLabel"
              >
                <ListNetworks className="row">
                  {lateralMenuElements.map(({ id, title }) => (
                    <li key={id} className="col-3">
                      <LinkNetworks href="#">{title}.</LinkNetworks>
                    </li>
                  ))}
                </ListNetworks>
              </OffcanvasHeaderListNetworksContainer>
              <ToogleCloseBtn
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></ToogleCloseBtn>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav">
                <List>
                  {headerElements.map(({ id, href, title }) => (
                    <li key={id} className=" nav-item">
                      <ListLink
                        href={href}
                        className="nav-link"
                        onClick={(e) => handleFonction(e, id, href)}
                      >
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
    </React.Fragment>
  )
}

export default HeaderResponsive
