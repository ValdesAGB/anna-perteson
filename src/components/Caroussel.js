import React from 'react'
import styled from 'styled-components'

function Caroussel() {
  const CarousselDiv = styled.div`
    @media (min-width: 768px) {
      padding: 80px;
    }

    @media (min-width: 1200px) {
      padding: 200px;
    }

    @media (min-width: 1440px) {
      padding: 250px;
    }
  `

  return (
    <React.Fragment>
      <CarousselDiv id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://www.mademoiselle-loyal.com/wp-content/uploads/2020/07/2-1-1080x675.jpg"
              className="d-block w-100 "
              alt="1"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://www.letudiant.fr/uploads/mediatheque/ETU_ETU/1/0/2368010-istock-1124337269-original.jpg
              "
              className="d-block w-100"
              alt="1"
            />
          </div>
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
