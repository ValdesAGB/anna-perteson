import React, { useContext } from 'react'
import styled from 'styled-components'
import { backButton } from '../data'
import { StatementContext } from '../untils/context'

function PhotoSession() {
  const { setFirstCover, setSecondeCover, setIsLoading } =
    useContext(StatementContext)

  const SectionPhotoSession = styled.section`
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
    font-size: 26px;
    font-weight: 600;
    line-height: 26px;
    letter-spacing: 5px;
    margin-bottom: 25px;
  `

  const SubTitle = styled.p`
    font-size: 20px;
    line-height: 33px;
    max-width: 422px;
    margin-bottom: 40px;
    @media (max-width: 325px) {
      width: 100%;
    }
  `

  const Paragraph = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-size: 15px;
    line-height: 2;
    font-weight: 400;

    @media (min-width: 768px) {
      margin-bottom: 10%;
    }
  `

  const DivImageParagraph = styled.div`
    @media (min-width: 320px) {
      width: 100%;
      line-height: 1.8;
      margin: ${(props) => (props.id === 1 ? '10% 0 10% 0' : '10% 0 0 0')};
    }
  `

  return (
    <React.Fragment>
      <SectionPhotoSession>
        {backButton(setFirstCover, setSecondeCover, setIsLoading)}

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
            <DivImageParagraph id={1}>
              Cras pretium metus pulvinar ultricies auctor. In varius purus
              blandit sem mollis tristique. Curabitur sed lorem vel ligula
              pulvinar porttitor proin.
            </DivImageParagraph>
          </div>
          <div>
            <img
              src="https://demo.cocobasic.com/seppo-html/demo-3/images/p_item_06.jpg"
              alt="1"
              className="w-100"
            />
            <DivImageParagraph margin="10% 0 0 0">
              Veleifend amet, ullamcorper lacus vangelis rich in heavy atoms
              descended from astronomers dream of the mind’s cras pretium metus
              pulvinar.
            </DivImageParagraph>
          </div>
        </DivContent>
      </SectionPhotoSession>
    </React.Fragment>
  )
}

export default PhotoSession
