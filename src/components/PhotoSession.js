import React, { useContext } from 'react'
import styled from 'styled-components'
import { backButton } from '../data'
import { StatementContext } from '../untils/context'

function PhotoSession() {
  const { setFirstCover, setSecondeCover, setThirdCover, setFourCover } =
    useContext(StatementContext)

  const SectionPhotoSession = styled.section`
    padding: 8%;
  `

  const DivContent = styled.div`
    margin-top: 10%;
  `
  const H1 = styled.h1`
    font-size: 26px;
    font-weight: 600;
    line-height: 26px;
    letter-spacing: 5px;
    margin-bottom: 25px;
  `

  const SubTitle = styled.p`
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
      <SectionPhotoSession>
        {backButton(
          setFirstCover,
          setSecondeCover,
          setThirdCover,
          setFourCover
        )}

        <DivContent>
          <H1>PHOTO SESSION</H1>
          <SubTitle>
            Two ghostly white figures in coveralls and helmets are softly
            dancing lorem ipsum.
          </SubTitle>
          <Paragraph>
            Cras pretium metus pulvinar ultricies auctor. In varius purus
            blandit sem mollis tristique. Curabitur sed lorem vel ligula
            pulvinar porttitor. Proin sit amet mauris eleifend amet, ullamcorper
            lacus vangelis rich in heavy atoms.
          </Paragraph>
          <div>
            <img
              src="https://demo.cocobasic.com/seppo-html/demo-3/images/p_item_04.jpg"
              alt="1"
              className="w-100"
            />
            <p className="my-5">
              Cras pretium metus pulvinar ultricies auctor. In varius purus
              blandit sem mollis tristique. Curabitur sed lorem vel ligula
              pulvinar porttitor proin.
            </p>
          </div>
          <div>
            <img
              src="https://demo.cocobasic.com/seppo-html/demo-3/images/p_item_06.jpg"
              alt="1"
              className="w-100"
            />
            <p className="mt-4">
              Veleifend amet, ullamcorper lacus vangelis rich in heavy atoms
              descended from astronomers dream of the mind’s cras pretium metus
              pulvinar.
            </p>
          </div>
        </DivContent>
      </SectionPhotoSession>
    </React.Fragment>
  )
}

export default PhotoSession
