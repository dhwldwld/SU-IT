/*
import React from 'react';
import styled from 'styled-components';
import { QnA } from '../../../interfaces'

type Props = {
    data: QnA[]
}

const SlideContainer = styled.div`
    flex-direction: column;
    border-radius: 20px;
    box-shadow: 5px 2px 19px rgba(0,0,0, .08);
    padding: 5rem 7rem;
`
const SlideWrapper = styled.div`
    display: flex;
    flex: 1;
`
const ContentTitle = styled.span`
    font-size: ${({theme}) => theme.fontSize.title};
    font-weight: bold;
    flex: 1;
`
const Content = styled.p`
    font-size: ${({theme}) => theme.fontSize.description};
    flex: 14;
`

const Carousel = ({ data }: Props) => {
    const renderSlides = () => 
        data.map((data, index) => (
            <SlideContainer key={index}>
                <SlideWrapper>
                    <ContentTitle>Q.</ContentTitle>
                    <Content>{data.question}</Content>
                </SlideWrapper>
                <SlideWrapper>
                    <ContentTitle>A.</ContentTitle>
                    <Content>{data.answer}</Content>
                </SlideWrapper>
            </SlideContainer>
        ));

    return (
        <>
            {renderSlides()}
        </>
    );
}

export default Carousel 
*/

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { QnA } from "../../../interfaces";
import styled from 'styled-components';

type Props = {
    data: QnA[]
}

const Container = styled.div`
`
const SlideContainer = styled.div``

const Carousel = ({ data }: Props) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <Container>
        </Container>
    );
}


export default Carousel