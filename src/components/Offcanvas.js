import React from 'react'
import Caroussel from './Caroussel'
import styled from 'styled-components'

function Offcanvas({ DivImage, DivHover, cover, id, hover }) {
  const OffcanvasComponent = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
  `

  const OffcanvasBody = styled.div`
    position: relative;
  `
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
        className="offcanvas offcanvas-bottom h-100"
        tabIndex="-1"
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        <div class="offcanvas-header py-1  row justify-content-end">
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
