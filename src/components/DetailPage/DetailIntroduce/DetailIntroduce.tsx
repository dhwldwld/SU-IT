import React from 'react'
import Image from 'next/image'
import styled, { css } from 'styled-components'

import * as mixin from '../../../styles/mixin'
import { Club } from '../../../../interfaces'

import DetailSection from '../../DetailSection/DetailSection'

type Props = {
    clubdata: Club
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

const DetailIntorduce = ({ clubdata, introduce }: Props) => {
    return(
    <DetailSection title='Introduce' isBgColor={false} mainColor={clubdata.color}>
        <Container>
            <Logo>
                <Img src={clubdata.logo} alt={clubdata.name} width={160} height={160} />
            </Logo>
            <IntrduceText>
                {introduce}
            </IntrduceText>
        </Container>
    </DetailSection>
)}

export default DetailIntorduce
