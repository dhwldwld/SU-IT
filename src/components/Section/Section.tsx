import React, { ReactNode } from 'react'
import styled from 'styled-components'

import Inner from '../Inner/Inner'

type Props = {
  children?: ReactNode
  page: string
  isblack: boolean
  isprimary: boolean
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0;
`
const Title = styled.span<{isprimary: boolean}>`
  position: relative;
  font-size: ${({theme}) => theme.fontSize.title};
  font-weight: 600;
  color: ${({theme}) => theme.colors.black};
  margin-bottom: 10rem;
  &::after {
    position: absolute;
    content: "";
    display: block;
    height: 40%;
    width: 105%;
    background-color: ${({isprimary}) => isprimary ? ({theme}) => theme.colors.primary : ({theme}) => theme.colors.sub};
    transform: translateY(-80%) translateX(-2%);
    z-index: -1;
  }
`
const Wrapper = styled.div<{isblack : boolean}>`
  width: 100%;
  background-color: ${({isblack}) => isblack ? ({theme}) => theme.colors.black : "none"};
  display: flex;
  justify-content: center;
`

const Section = ({ children, page, isblack, isprimary }:Props) => {
  return (
    <Container id={page}>
      <Title isprimary={isprimary}>{page}</Title>
      <Wrapper isblack={isblack}>
        <Inner>
            {children}
        </Inner>
      </Wrapper>
    </Container>
  )
}
export default Section