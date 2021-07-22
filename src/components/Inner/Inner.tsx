import React, { ReactNode } from 'react'
import styled, { css } from 'styled-components'

import * as mixin from '../../styles/mixin'

type Props = {
  children?: ReactNode
}

const Container = styled.div`
    height: 100%;
    max-width: ${({theme}) => theme.deviceSizes.DesktopL};
    margin: 0 auto;
    padding: 0 15px;
    ${(mixin.mobile(css`
        padding: 0;
    `))}
`

const Inner = ({ children }:Props) => {
  return (
    <Container>
      {children}
    </Container>
  )
}
export default Inner