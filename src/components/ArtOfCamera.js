import React, { useContext } from 'react'
import styled from 'styled-components'
import { backButton } from '../data'
import { StatementContext } from '../untils/context'

function ArtOfCamera() {
  const { setFirstCover, setSecondeCover, setIsLoading } =
    useContext(StatementContext)

  const SectionArtOfCamera = styled.section`
    @media (min-width: 320px) {
      padding: 10% 0 20% 0;
    }

    @media (min-width: 768px) {
      padding: 10% 5% 20% 5%;
    }
  `

  const DivContent = styled.div`
    margin-top: 10%;
  `
  const H1 = styled.h1`
    @media (min-width: 320px) {
      font-size: 1.5em;
      font-weight: 600;
      line-height: 100%;
      letter-spacing: 5px;
      margin-bottom: 15%;
    }

    @media (min-width: 425px) {
      margin-bottom: 10%;
    }
    font-size: 26px;
    font-weight: 600;
    line-height: 26px;
    letter-spacing: 5px;
    margin-bottom: 25px;
  `

  const SubTitle = styled.p`
    @media (min-width: 320px) {
      width: 100%;
    }
    font-size: 20px;
    line-height: 33px;
    width: 422px;
    max-width: 422px;
    margin-bottom: 40px;
  `

  const Paragraph = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-size: 15px;
    line-height: 2;
    font-weight: 400;
  `

  return (
    <React.Fragment>
      <SectionArtOfCamera>
        {backButton(setFirstCover, setSecondeCover, setIsLoading)}
        <div
          id="carouselExampleIndicators"
          className="carousel slide col-12 mt-5"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://demo.cocobasic.com/seppo-html/demo-3/images/p_item_03.jpg"
                className="d-block w-100"
                alt="1"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://demo.cocobasic.com/seppo-html/demo-3/images/p_item_02.jpg"
                className="d-block w-100"
                alt="2"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://demo.cocobasic.com/seppo-html/demo-3/images/p_item_01.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
        </div>
        <DivContent className="">
          <H1 className="col-6 col-md-9">ART OF CAMERA</H1>
          <SubTitle>
            Two ghostly white figures in coveralls and helmets are softly
            dancing lorem ipsum.
          </SubTitle>
          <Paragraph>
            Cras pretium metus pulvinar ultricies auctor in varius purus blandit
            sem mollis tristique. Curabitur sed lorem vel ligula pulvinar
            porttitor. Proin sit amet mauris eleifend amet, ullamcorper lacus.
            Vangelis rich in heavy atoms descended from astronomers dream of the
            mind’s cras pretium metus pulvinar ultricies auctor in varius purus
            blandit sem mollis.
          </Paragraph>
        </DivContent>
      </SectionArtOfCamera>
    </React.Fragment>
  )
}

export default ArtOfCamera
