import React,{useState} from 'react'
import styled from 'styled-components'

import ApplyModal from '../ApplyModal/ApplyModal'
import Section from '../Section/Section'
import Timer from '../Timer/Timer'
import Button from '../Button/Button'
import { Group } from '../../../interfaces'

type Props = {
    groups: Group[]
}

const Container = styled.div`
    background-color: ${({theme}) => theme.colors.black};
    padding: 10rem 0;
`

const ApplySection = ({ groups }: Props) => {
    const [isapplyModal, setIsApplyModal] = useState(false);
    const toggleApplyModal = () => {
        setIsApplyModal(!isapplyModal)
    }
    return(
    <Section page="Apply" isprimary={false} isblack={true}>
        {isapplyModal &&
            <ApplyModal openModal={toggleApplyModal} groups={groups} />
        }
        <Container>
            <Timer />
            <Button click={toggleApplyModal} isblack={true} content="지원하기" />
        </Container>
    </Section>
    )
}

export default ApplySection
