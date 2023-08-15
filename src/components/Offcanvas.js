import React from 'react'
import Caroussel from './Caroussel'
import styled from 'styled-components'

const OffcanvasComponent = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  height: 60vh !important;
  @media (min-width: 425px) {
    height: 70vh !important;
  }

  @media (min-width: 576px) {
    height: 90vh !important;
  }

  @media (min-width: 1200px) {
    height: 95vh !important;
  }
`

const OffcanvasBody = styled.div`
  position: relative;
`
function Offcanvas({ DivImage, DivHover, cover, id, hover }) {
  return (
    <React.Fragment>
      <div
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasWithBothOptions"
        aria-controls="offcanvasWithBothOptions"
      >
        <DivImage>
          <img src={cover} alt={id} className="w-100" />
          <DivHover> {hover(id)}</DivHover>
        </DivImage>
      </div>

      <OffcanvasComponent
        className="offcanvas offcanvas-bottom"
        tabIndex="-1"
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        <div className="offcanvas-header py-1  row justify-content-end borger">
          <button
            type="button "
            className="btn text-white col-1 borde borde-danger"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <i className="bi bi-x-lg fs-6"></i>
          </button>
        </div>
        <OffcanvasBody className="offcanvas-body">
          {<Caroussel />}
        </OffcanvasBody>
      </OffcanvasComponent>
    </React.Fragment>
  )
}

export default Offcanvas
