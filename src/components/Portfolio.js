import React, { useContext } from 'react'
import styled, { keyframes } from 'styled-components'
import { portfolioElements, width } from '../data'
import ArtOfCamera from './ArtOfCamera'
import PhotoSession from './PhotoSession'
import { StatementContext } from '../untils/context'
import Offcanvas from './Offcanvas'
import Loader from '../untils/Loader'
import 'animate.css'

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
      case '10000':
        setIsLoading(true)
        setTimeout(() => {
          setFirstCover((prevState) => !prevState)
          setIsLoading(false)
        }, 2000)
        break
      case '20000':
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
  const PortfolioSection = styled.section`
    position: relative;
  `
  const Div = styled.div`
    background-color: #f0deca;
    padding: ${firstCover || secondeCover ? '' : '0'};
    @media (min-width: 768px) {
      margin-left: -20px;
    }
    @media (min-width: ${width}px) {
      margin-left: 14.5px;
    }
  `
  const DivContent = styled.div`
    display: ${firstCover || secondeCover || isLoading ? '' : 'grid'};

    margin: ${firstCover || secondeCover ? 'auto' : isLoading ? 'auto' : ''};
    @media (min-width: 320px) {
      grid-template-columns: 100%;
      grid-template-rows: auto;
    }
    @media (min-width: 768px) {
      grid-template-columns: 50% 50%;
      grid-template-rows: 33.33% 33.33% 33.33%;
    }

    padding: 0;
  `

  const DivImage = styled.div`
    position: relative;
    cursor: pointer;
    @media (min-width: 320px) {
      grid-row: auto;
      grid-column: 1 / 2;
    }
    @media (min-width: 768px) {
      grid-row: ${(props) =>
        props.id === '10000'
          ? '1 / 2'
          : props.id === '20000'
          ? '2/4'
          : props.id === '30000'
          ? '2/3'
          : '3/4'};

      grid-column: ${(props) =>
        props.id === '10000'
          ? '1 / 3'
          : props.id === '20000'
          ? '1/2'
          : props.id === '30000'
          ? '2/3'
          : '2/3'};
    }
    @media (min-width: ${width}px) {
      grid-row: ${(props) =>
        props.id === '10000'
          ? '1 / 2'
          : props.id === '20000'
          ? '2/4'
          : props.id === '30000'
          ? '2/3'
          : '3/4'};

      grid-column: ${(props) =>
        props.id === '10000'
          ? '1 / 3'
          : props.id === '20000'
          ? '1/2'
          : props.id === '30000'
          ? '2/3'
          : '2/3'};
    }
  `

  const TitleDiv = styled.div`
    @media (min-width: 320px) {
      width: 100%;
    }
    @media (min-width: 768px) {
      width: 40.5%;
      margin-right: -1.6%;
    }
    @media (min-width: 1024px) {
      width: 39.5%;
      margin-right: -2%;
    }
    @media (min-width: ${width}px) {
      width: 33.55%;
      margin-right: 1.09%;
    }
    width: 31.25%;
    background-color: #f8a577;
  `

  const Title = styled.h1`
    @media (min-width: 320px) {
      padding: 10% 0 10% 0;
      font-size: 2.5em;
      letter-spacing: -3px;
    }
    @media (min-width: 768px) {
      padding: 40% 0 40% 0;
      font-size: 3em;
      letter-spacing: -5px;
    }
    @media (min-width: ${width}px) {
      padding: 40% 0 40% 0;
      font-size: 3.3em;
      letter-spacing: -4.5px;
    }
    color: white;
    padding: 40% 0 40% 0;
    font-weight: 300;
    font-size: 4em;
    letter-spacing: -6px;
  `
  const DivHover = styled.div`
    background-color: #f0deca;
    position: absolute;
    bottom: 0%;
    left: 0;
    padding: 2% 12% 2% 5%;
    opacity: 0;
    transform: translateX(-10%);
    transition: opacity 300ms ease-in-out, transform 300ms ease-in-out;

    ${DivImage}:hover & {
      opacity: 1;
      transform: translateX(0%);
    }
  `

  const hover = (id) => {
    return (
      <>
        {id === '10000' ? (
          <>
            <h3 className="fw-bold">Home</h3>
            <h6>Text</h6>
          </>
        ) : id === '20000' ? (
          <>
            <h3 className="fw-bold">Stairways</h3>
            <h6>Text</h6>
          </>
        ) : id === '30000' ? (
          <>
            <h3 className="fw-bold">Sneakers</h3>
            <h6>Image</h6>
          </>
        ) : (
          <>
            <h3 className="fw-bold">Design</h3>
            <h6>Video</h6>
          </>
        )}
      </>
    )
  }

  const slideAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(28%);
  }
  100% {
    transform: translateX(0);
  }
`

  const TriangleImage = styled.div`
    position: absolute;
    @media (max-width: 1024px) {
      display: none;
    }
    @media (min-width: ${width}px) {
      top: 2%;
      left: 2%;
    }
    @media (min-width: 1440px) {
      left: -5%;
    }
    @media (min-width: 2560px) {
      left: 15%;
    }
    z-index: -1;
  `

  const TriangleImg = styled.img`
    animation: ${slideAnimation} 2s ease-in-out infinite;
  `

  return (
    <React.Fragment>
      <PortfolioSection id="porfolio">
        <div className="container p-0">
          <div className="row align-items-start">
            <Div className="col-12 col-md order-2 order-md-1">
              <DivContent className="col-12 ">
                {isLoading ? (
                  <Loader />
                ) : firstCover ? (
                  <ArtOfCamera />
                ) : secondeCover ? (
                  <PhotoSession />
                ) : (
                  portfolioElements.map(({ id, cover, modal }) =>
                    !modal ? (
                      <DivImage id={id} key={id} onClick={(e) => state(id)}>
                        <img src={cover} alt={id} className="w-100" />
                        <DivHover> {hover(id)}</DivHover>
                      </DivImage>
                    ) : (
                      <span key={id}>
                        {
                          <Offcanvas
                            DivImage={DivImage}
                            DivHover={DivHover}
                            cover={cover}
                            id={id}
                            hover={hover}
                          />
                        }
                      </span>
                    )
                  )
                )}
              </DivContent>
            </Div>
            <TitleDiv className="col-12 col-md-4 order-1 order-md-2">
              <Title className="text-center">Portfolio</Title>
            </TitleDiv>
          </div>
        </div>
        <TriangleImage className="col-2">
          <TriangleImg
            src="https://demo.cocobasic.com/seppo-html/demo-3/images/triangle.png"
            alt="1"
            className="w-75"
          />
        </TriangleImage>
      </PortfolioSection>
    </React.Fragment>
  )
}

export default Portfolio
