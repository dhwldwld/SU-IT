import React, { ReactNode } from 'react'
import styled from 'styled-components'

type Props = {
  children?: ReactNode
}

const Container = styled.div`
    height: 100%;
    max-width: ${({theme}) => theme.deviceSizes.DesktopM};
    margin: 0 auto;
    padding: 0 15px;
`

const Inner = ({ children }:Props) => {
  return (
    <Container>
      {children}
    </Container>
  )
}
export default Inner