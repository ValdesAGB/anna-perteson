import React from 'react'
import styled from 'styled-components'

function Caroussel() {
  const record = 'https://vimeo.com/199192931'

  const ImageDiv = styled.div`
    height: 95vh;
    padding: 0% 10% 0 10%;
  `
  return (
    <React.Fragment>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <ImageDiv className="carousel-item active">
            <img
              src="https://www.mademoiselle-loyal.com/wp-content/uploads/2020/07/2-1-1080x675.jpg"
              className="d-block w-100"
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
      </div>
    </React.Fragment>
  )
}

export default Caroussel
