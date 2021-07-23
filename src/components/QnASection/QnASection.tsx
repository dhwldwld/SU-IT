import React,{useState} from 'react'
import styled from 'styled-components'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Section from '../Section/Section'
import Button from '../Button/Button'
import Carousel from '../Carousel/Carousel'

import { Group, QnA } from '../../../interfaces'
import QnAModal from '../QnAModal/QnAModal';

type Props = {
    data: QnA[]
    groups: Group[]
}

const QnASection = ({ data, groups }: Props) => {
    groups.push({id: '학과', name:'학과'})
    const [qnAModal, setIsQnAModal] = useState(false);
    const toggleQnAMqdal = () => {
        setIsQnAModal(!qnAModal)
    }
    return (
    <Section page="Q&A" isblack={false} isprimary={false}>
        {qnAModal &&
            <QnAModal openModal={toggleQnAMqdal} groups={groups} />
        }
        <Carousel data={data} />
        <Button click={toggleQnAMqdal} isblack={false} content="질문하기" />
    </Section>
    )
}
export default QnASection
