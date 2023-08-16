import React, { useContext } from 'react'
import styled from 'styled-components'
import { PortfolioHover, portfolioElements } from '../data'
import ArtOfCamera from './ArtOfCamera'
import PhotoSession from './PhotoSession'
import { StatementContext } from '../untils/context'
import Offcanvas from './Offcanvas'
import Loader from '../untils/Loader'
import 'animate.css'
import { colors } from '../untils/colors'
import SectionTitleComponent from './SectionTitleComponent'

const PortfolioSection = styled.section`
  position: relative;
`

const Container = styled.div`
  @media (max-width: 767px) {
    padding: 0;
  }
`

const CoverContainer = styled.div`
  position: relative;
  cursor: pointer;

  @media (min-width: 576px) {
    grid-row: ${(props) =>
      props.id === 'bureau'
        ? '1 / 2'
        : props.id === 'paysage'
        ? '2/4'
        : props.id === 'bureau-2'
        ? '2/3'
        : '3/4'};

    grid-column: ${(props) =>
      props.id === 'bureau'
        ? '1/3'
        : props.id === 'paysage'
        ? '1/2'
        : props.id === 'bureau-2'
        ? '2/3'
        : '2/3'};
  }

  img {
    width: 100%;
  }
`

const Hover = styled.div`
  background-color: ${colors.mainBgColor};
  position: absolute;
  bottom: 0%;
  left: 0;
  padding: 0.5em 1em;
  opacity: 0;
  transform: translateX(-10px);
  transition: opacity 0.5s ease-in-out, transform 0.5s 0.2s ease-in-out;

  ${CoverContainer}:hover & {
    opacity: 1;
    transform: translateX(0);
  }
`

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.portfolioTitleBgColor};
`

const Title = styled.h1`
  color: white;
  font-weight: 300;
  padding: 10% 0;
  font-size: 2.5em;
  letter-spacing: -3px;

  @media (min-width: 768px) {
    padding: 40% 0;
    font-size: 3em;
    letter-spacing: -5px;
  }
  @media (min-width: 1200px) {
    font-size: 3.3em;
  }
  @media (min-width: 1400px) {
    font-size: 4em;
    letter-spacing: -8px;
  }
`

function Portfolio() {
  const {
    firstCover,
    setFirstCover,
    secondeCover,
    setSecondeCover,
    isLoading,
    setIsLoading,
  } = useContext(StatementContext)

  const state = (id) => {
    switch (id) {
      case 'bureau':
        setIsLoading(true)
        setTimeout(() => {
          setFirstCover((prevState) => !prevState)
          setIsLoading(false)
        }, 2000)
        break
      case 'paysage':
        setIsLoading(true)
        setTimeout(() => {
          setSecondeCover((prevState) => !prevState)
          setIsLoading(false)
        }, 2000)
        break

      default:
        break
    }
  }

  const Content = styled.div`
    padding: 0;
    display: ${firstCover || secondeCover || isLoading ? '' : 'grid'};

    grid-template-columns: 100%;
    grid-template-rows: auto;

    @media (min-width: 576px) {
      grid-template-columns: 50% 50%;
      grid-template-rows: 33.33% 33.33% 33.33%;
    }
  `

  return (
    <React.Fragment>
      <PortfolioSection id="porfolio">
        <Container className="container">
          <div className="row align-items-start">
            <Content className="col-12 col-md order-2 order-md-1">
              {isLoading ? (
                <Loader />
              ) : firstCover ? (
                <ArtOfCamera />
              ) : secondeCover ? (
                <PhotoSession />
              ) : (
                portfolioElements.map(({ id, cover, modal }) =>
                  !modal ? (
                    <CoverContainer id={id} key={id} onClick={(e) => state(id)}>
                      <img src={cover} alt={id} />
                      <Hover> {PortfolioHover(id)}</Hover>
                    </CoverContainer>
                  ) : (
                    <span key={id}>
                      {
                        <Offcanvas
                          DivImage={CoverContainer}
                          DivHover={Hover}
                          cover={cover}
                          id={id}
                          hover={PortfolioHover}
                        />
                      }
                    </span>
                  )
                )
              )}
            </Content>
            <SectionTitleComponent
              title={'Portfolio'}
              className={'col-12 col-md-4 order-1 order-md-2'}
              TitleContainerBgColor={colors.portfolioTitleBgColor}
            />
          </div>
        </Container>
        {/*<PortfolioAnimation/>*/}
      </PortfolioSection>
    </React.Fragment>
  )
}

export default Portfolio
