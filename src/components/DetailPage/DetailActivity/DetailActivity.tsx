import React from 'react'
import styled, { css } from 'styled-components'

import * as mixin from '../../../styles/mixin'
import { Club } from '../../../../interfaces'

import DetailSection from '../../DetailSection/DetailSection'

type Props = {
    clubdata: Club
    activity: string
}

const ActivityText = styled.p`
    white-space: pre-line;
    font-size: ${({theme}) => theme.fontSize.subTitle};
    line-height: 46px;
    text-align: center;
    ${mixin.mobile(css`
        font-size: 18px;
    `)}
`

const DetailActivity = ({ clubdata, activity }: Props) => (
    <DetailSection title='Activity' isBgColor={false} mainColor={clubdata.color}>
        <ActivityText>
            {activity}
        </ActivityText>
    </DetailSection>
)

export default DetailActivity
