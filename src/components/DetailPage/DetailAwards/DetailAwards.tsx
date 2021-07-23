import React from 'react'
import styled, { css } from 'styled-components'

import * as mixin from '../../../styles/mixin'
import { Awards, Club } from '../../../../interfaces'

import DetailSection from '../../DetailSection/DetailSection'

type Props = {
    clubdata: Club
    awards: Awards[]
}

const ScrollBox = styled.div`
    height: 480px;
    overflow-y: auto;
    &::-webkit-scrollbar { width: 5px; }
    &::-webkit-scrollbar-track { background-color:transparent; }
    &::-webkit-scrollbar-thumb { border-radius: 2.5px; background-color: rgba(255, 255, 255, 0.4); }
    &::-webkit-scrollbar-thumb:hover { background: rgba(255, 255, 255, 0.7); }
    &::-webkit-scrollbar-thumb:active { background: rgb(255, 255, 255); }
    &::-webkit-scrollbar-button { display: none; }
`
const Container = styled.ul`
    display: flex;
    flex-direction: column;
`
const Wrapper = styled.li`
    display: flex;
    margin: 0 auto;
    margin-bottom: 24px;
    width: 600px;
    ${mixin.tablet(css`
        width: calc(100vw - 50px);
    `)}
`
const AwardsTitle = styled.span`
    font-size: ${({theme}) => theme.fontSize.subTitle};
    ${mixin.mobile(css`
        font-size: 18px;
    `)}
`
const AwardsList = styled.ul`
    flex-grow: 1;
    text-align: right;
`
const AwardsItem = styled.li`
    display: flex;
    flex-direction: column;
`
const AwardsRate = styled.span`
    display: flex;
    justify-content: flex-end;
    font-size: ${({theme}) => theme.fontSize.subTitle};
    margin-bottom: 8px;
    ${mixin.mobile(css`
        font-size: 18px;
    `)}
    &:first-child {
        &::before {
        content: "";
        flex-grow: 1;
        display: block;
        align-self: center;
        height: 1px;
        margin: 10px 8px;
        background-image: linear-gradient(to right, #ffffff 30%, #ffffff00 0%);
        background-position: bottom;
        background-size: 12px 1px;
        background-repeat: repeat-x;
        }
    }
`

const DetailAwards = ({ clubdata, awards }: Props) => (
    <DetailSection title='Awards' isBgColor={true} mainColor={clubdata.color}>
        <ScrollBox>
            <Container>
                {awards.map((data) => 
                    <Wrapper>
                        <AwardsTitle>{data.title}</AwardsTitle>
                        <AwardsList>
                            <AwardsItem>
                                {data.rate.map((rate, index) => 
                                    <AwardsRate key={index}>{rate}</AwardsRate>
                                )}
                            </AwardsItem>
                        </AwardsList>
                    </Wrapper>
                )}
            </Container>
        </ScrollBox>
    </DetailSection>
)

export default DetailAwards
