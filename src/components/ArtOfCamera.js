import React, { useContext } from 'react'
import styled from 'styled-components'
import { artOfCameraElements, backButton } from '../data'
import { StatementContext } from '../untils/context'

const SectionArtOfCamera = styled.section`
  padding: 20px 12px;
  @media (min-width: 768px) {
    padding: 50px 40px;
  }

  .carousel {
    margin-top: 50px;
  }

  img {
    width: 100%;
    display: block;
  }
`

const Content = styled.div`
  margin-top: 40px;
`

const Title = styled.h1`
  font-size: 1.5em;
  font-weight: 600;
  line-height: 100%;
  letter-spacing: 5px;
`

const SubTitle = styled.p`
  font-size: 20px;
  line-height: 33px;
  margin: 25px 0;
  text-align: justify;
  @media (min-width: 992px) {
    max-width: 422px;
  }
`

const Paragraph = styled.p`
  font-size: 15px;
  line-height: 2;
  font-weight: 400;
  text-align: justify;
`

function ArtOfCamera() {
  const { setFirstCover, setSecondeCover, setIsLoading } =
    useContext(StatementContext)

  return (
    <React.Fragment>
      <SectionArtOfCamera>
        {backButton(setFirstCover, setSecondeCover, setIsLoading)}
        <div id="carouselExampleIndicators" className="carousel slide col-12">
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
            {artOfCameraElements.map(({ id, src }) => (
              <div
                className={`carousel-item ${id === 'cover-1' ? 'active' : ''}`}
                key={id}
              >
                <img src={src} alt={id} />
              </div>
            ))}
          </div>
        </div>
        <Content>
          <Title className="col-6 col-sm-8 col-md-9">ART OF CAMERA</Title>
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
        </Content>
      </SectionArtOfCamera>
    </React.Fragment>
  )
}

export default ArtOfCamera
