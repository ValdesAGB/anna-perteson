import React from 'react'
import styled from 'styled-components'

import FactsStats from './FactsStats'
import { colors } from '../untils/colors'
import SectionTitleComponent from './SectionTitleComponent'

const FactsSession = styled.section`
  position: relative;
`

const Container = styled.div`
  @media (max-width: 767px) {
    padding: 0;
  }
`

const Content = styled.div`
  background-color: ${colors.mainBgColor};
  padding-top: 30px;
  padding-bottom: 30px;
  @media (min-width: 768px) {
    padding: 40px;
  }

  @media (min-width: 1200px) {
    padding: 100px;
  }

  @media (min-width: 1400px) {
    padding: 140px;
    padding-top: 100px;
  }
`

const ContentTitle = styled.h5`
  font-weight: 600;
  line-height: 1.5em;

  @media (max-width: 425px) {
    text-align: justify;
  }
`

function Facts() {
  return (
    <React.Fragment>
      <FactsSession id="facts">
        <Container className="container">
          <div className="row align-items-start">
            <Content className="col-12 col-md order-2 order-md-1">
              <ContentTitle>
                Dolor sit amet, consectetur adipiscing elit viverra tristique
                placerat in massa consectetur
              </ContentTitle>

              <div className="row  justify-content-center">
                <FactsStats />
              </div>
            </Content>

            <SectionTitleComponent
              title="Facts"
              className="col-12 col-md-4 order-1 order-md-2"
              TitleContainerBgColor={colors.aboutTitleBgColor}
            />
          </div>
        </Container>

        {/*<FactsAnimation/>*/}
      </FactsSession>
    </React.Fragment>
  )
}

export default Facts
