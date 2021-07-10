import React from 'react'
import styled,{ css } from 'styled-components'

import * as mixin from '../../styles/mixin'

import Section from '../Section/Section'
import Timer from '../Timer/Timer'
import Button from '../Button/Button'

const Container = styled.div`
    background-color: ${({theme}) => theme.colors.black};
    height: 100%;
    padding: 10rem 0;
`

const ApplySection = () => (
    <Section page="Apply" isprimary={false} isblack={true}>
        <Container>
            <Timer />
            <Button isblack={true} content="지원하기" />
        </Container>
    </Section>
)

export default ApplySection
