import React, { useContext } from 'react'
import styled from 'styled-components'
import { portfolioElements } from '../data'
import ArtOfCamera from './ArtOfCamera'
import PhotoSession from './PhotoSession'
import { StatementContext } from '../untils/context'
import Offcanvas from './Offcanvas'

function Portfolio() {
  const { firstCover, setFirstCover, secondeCover, setSecondeCover } =
    useContext(StatementContext)

  const state = (id) => {
    switch (id) {
      case '10000':
        setFirstCover((prevState) => !prevState)
        break
      case '20000':
        setSecondeCover((prevState) => !prevState)
        break

      default:
        break
    }
  }

  const Div = styled.div`
    background-color: #f0deca;
    padding: ${firstCover || secondeCover ? '' : '0'};
  `
  const DivContent = styled.div`
    display: ${firstCover || secondeCover ? '' : 'grid'};

    margin: ${firstCover || secondeCover ? 'auto' : ''};
    grid-template-columns: 50% 50%;
    grid-template-rows: 33.33% 33.33% 33.33%;
    padding: 0;
  `

  const DivImage = styled.div`
    position: relative;
    cursor: pointer;
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
  `
  const TitleDiv = styled.div`
    width: 31.25%;
    background-color: #f8a577;
  `

  const Title = styled.h1`
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
    transform: translateX(-30%);
    transition: opacity 500ms ease-in-out, transform 500ms ease-in-out;

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
  return (
    <React.Fragment>
      <section id="porfolio">
        <div className="container">
          <div className="row align-items-start">
            <Div className="col ">
              <DivContent className="col-12 ">
                {firstCover ? (
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
            <TitleDiv className="col-4 ">
              <Title className="text-center">Portfolio</Title>
            </TitleDiv>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Portfolio
