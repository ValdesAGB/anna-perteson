import React, { useContext } from 'react'
import styled from 'styled-components'
import { backButton } from '../data'
import { StatementContext } from '../untils/context'
import { police } from '../untils/police'

const SectionPhotoSession = styled.section`
  padding: 20px 12px;
  @media (min-width: 768px) {
    padding: 50px 40px;
  }
`

const Content = styled.div`
  margin-top: 40px;
`

const Title = styled.h1`
  font-size: 26px;
  font-weight: 600;
  line-height: 26px;
  letter-spacing: 5px;
`

const SubTitle = styled.p`
  font-size: 20px;
  line-height: 33px;
  max-width: 422px;
  margin-top: 25px;
  margin-bottom: 30px;
`

const Paragraph = styled.p`
  font-family: ${police.main};
  font-size: 15px;
  line-height: 2;
  font-weight: 400;
`

const ImageParagraph = styled.div`
  width: 100%;
  line-height: 1.8;
  margin: ${(props) => (props.id === 1 ? '20px 0  ' : '20px 0 0 0')};
`

function PhotoSession() {
  const { setFirstCover, setSecondeCover, setIsLoading } =
    useContext(StatementContext)

  return (
    <React.Fragment>
      <SectionPhotoSession>
        {backButton(setFirstCover, setSecondeCover, setIsLoading)}

        <Content>
          <Title>PHOTO SESSION</Title>
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
            <ImageParagraph id={1}>
              Cras pretium metus pulvinar ultricies auctor. In varius purus
              blandit sem mollis tristique. Curabitur sed lorem vel ligula
              pulvinar porttitor proin.
            </ImageParagraph>
          </div>
          <div>
            <img
              src="https://demo.cocobasic.com/seppo-html/demo-3/images/p_item_06.jpg"
              alt="1"
              className="w-100"
            />
            <ImageParagraph>
              Veleifend amet, ullamcorper lacus vangelis rich in heavy atoms
              descended from astronomers dream of the mind’s cras pretium metus
              pulvinar.
            </ImageParagraph>
          </div>
        </Content>
      </SectionPhotoSession>
    </React.Fragment>
  )
}

export default PhotoSession
