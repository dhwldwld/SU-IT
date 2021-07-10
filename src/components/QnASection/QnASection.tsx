import React from 'react'
import Image from 'next/image'
import styled,{ css } from 'styled-components'

import * as mixin from '../../styles/mixin'

import Section from '../Section/Section'
import Button from '../Button/Button'
import Slider from '../Slider/Slider'

import { QnA } from '../../../interfaces'

type Props = {
    data: QnA[]
}
const Container = styled.div``

const QnASection = ({ data }: Props) => (
    <Section page="Q&A" isblack={false} isprimary={false}>
        <Container>
            <Slider data={data} />
            <Button isblack={false} content="질문하기" />
        </Container>
    </Section>
)

export default QnASection
