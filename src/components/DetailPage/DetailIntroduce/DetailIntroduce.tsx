import React from 'react'
import Image from 'next/image'
import styled, { css } from 'styled-components'

import * as mixin from '../../../styles/mixin'
import { Group } from '../../../../interfaces'

import DetailSection from '../../DetailSection/DetailSection'

type Props = {
    groupdata: Group
    introduce: string
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Logo = styled.div`
    margin-bottom: 5rem;
`
const Img = styled(Image)`
    border-radius: 20px;
`
const IntrduceText = styled.p`
    white-space: pre-line;
    font-size: ${({theme}) => theme.fontSize.subTitle};
    line-height: 46px;
    text-align: center;
    ${mixin.mobile(css`
        font-size: 18px;
    `)}
`

const DetailIntorduce = ({ groupdata, introduce }: Props) => {
    return(
    <DetailSection title='Introduce' isBgColor={false} mainColor={groupdata.color}>
        <Container>
            <Logo>
                <Img src={groupdata.logo} alt={groupdata.name} width={160} height={160} />
            </Logo>
            <IntrduceText>
                {introduce}
            </IntrduceText>
        </Container>
    </DetailSection>
)}

export default DetailIntorduce
