import React from 'react'
import styled from 'styled-components'
import { width } from '../data'

function Caroussel() {
  const record = 'https://vimeo.com/199192931'

  const CarousselDiv = styled.div`
    @media (min-width: 320px) {
      margin: 20% 0 0 0;
    }

    @media (min-width: 375px) {
      margin: 15% 0 0 0;
    }

    @media (min-width: 425px) {
      margin: 10% 0 0 0;
    }

    @media (min-width: 768px) {
      margin: 5%;
    }

    @media (min-width: 1024px) {
      margin: 10%;
    }
    @media (min-width: ${width}px) {
      margin: 0;
    }
  `

  const ImageDiv = styled.div`
    height: 100%;
    padding: 0% 10% 0 10%;
    @media (min-width: 320px) {
      padding: 0;
    }
  `
  return (
    <React.Fragment>
      <CarousselDiv id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <ImageDiv className="carousel-item active">
            <img
              src="https://www.mademoiselle-loyal.com/wp-content/uploads/2020/07/2-1-1080x675.jpg"
              className="d-block w-100 "
              alt="1"
            />
          </ImageDiv>
          <ImageDiv className="carousel-item">
            <img
              src="https://www.letudiant.fr/uploads/mediatheque/ETU_ETU/1/0/2368010-istock-1124337269-original.jpg
              "
              className="d-block w-100"
              alt="1"
            />
          </ImageDiv>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </CarousselDiv>
    </React.Fragment>
  )
}

export default Caroussel
