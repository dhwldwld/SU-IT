import React from 'react' 
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
const Img = styled.img`
    border-radius: 20px;
    width: 160px;
    height: 160px;
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
                <Img src={clubdata.logo} alt={clubdata.name} />
            </Logo>
            <IntrduceText>
                {introduce}
            </IntrduceText>
        </Container>
    </DetailSection>
)}

export default DetailIntorduce
