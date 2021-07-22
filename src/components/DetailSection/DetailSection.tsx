import React, { ReactNode } from 'react'
import styled from 'styled-components'

import Inner from '../Inner/Inner'

type Props = {
  children?: ReactNode
  title: string
  isBgColor: boolean
  mainColor: string
}

const Container = styled.div<{isBgColor: boolean, mainColor: string}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0;
  background-color: ${({isBgColor}) => isBgColor ? ({mainColor}) => mainColor : 'none'};
`
const Title = styled.span<{isBgColor: boolean, mainColor: string}>`
  position: relative;
  font-size: ${({theme}) => theme.fontSize.title};
  font-weight: 600;
  color: ${({theme}) => theme.colors.black};
  margin-bottom: 10rem;
  z-index:1;
  &::after {
    position: absolute;
    content: "";
    display: block;
    height: 40%;
    width: 105%;
    background-color: ${({isBgColor}) => isBgColor ? ({theme}) => theme.colors.white : ({mainColor}) => mainColor};
    transform: translateY(-80%) translateX(-2%);
    z-index: -1;
  }
`

const DetailSection = ({ children, title, isBgColor, mainColor }:Props) => {
  return (
    <Container isBgColor={isBgColor} mainColor={mainColor}>
      <Title isBgColor={isBgColor} mainColor={mainColor}>{title}</Title>
        <Inner>
            {children}
        </Inner>
    </Container>
  )
}
export default DetailSection