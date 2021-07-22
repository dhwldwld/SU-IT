import React from 'react'
import styled, { css } from 'styled-components'

import * as mixin from '../../../styles/mixin'
import { Group } from '../../../../interfaces'

import DetailSection from '../../DetailSection/DetailSection'

type Props = {
    groupdata: Group
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

const DetailActivity = ({ groupdata, activity }: Props) => (
    <DetailSection title='Activity' isBgColor={false} mainColor={groupdata.color}>
        <ActivityText>
            {activity}
        </ActivityText>
    </DetailSection>
)

export default DetailActivity
