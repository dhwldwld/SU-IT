import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';

import { QnA } from '../../../interfaces'

type Props = {
    data: QnA[]
}
const Container = styled.div`
  width: 60%;
  overflow: hidden; // 선을 넘어간 이미지들은 보이지 않도록 처리합니다.
`;
const Button = styled.button`
  all: unset;
  border: 1px solid coral;
  padding: 0.5em 2em;
  color: coral;
  border-radius: 10px;
  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: coral;
    color: #fff;
  }
`;
const SliderContainer = styled.div`
  width: 100%;
  display: flex; //이미지들을 가로로 나열합니다.
`;

const SlideContainer = styled.div``
const SlideWrapper = styled.div``
const ContentTitle = styled.span`
    font-size: ${({theme}) => theme.fontSize.title};
    font-weight: bold;
`
const Content = styled.p`
    font-size: ${({theme}) => theme.fontSize.description};
`

const Slider = ({ data }: Props) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const TOTAL_SLIDES = data.length-1;
    const slideRef = useRef(null);
    const nextSlide = () => {
        if (currentSlide >= TOTAL_SLIDES) { // 더 이상 넘어갈 슬라이드가 없으면 슬라이드를 초기화합니다.
            setCurrentSlide(0);
        } else {
            setCurrentSlide(currentSlide + 1);
        }
        };
        const prevSlide = () => {
        if (currentSlide === 0) {
            setCurrentSlide(TOTAL_SLIDES);
        } else {
            setCurrentSlide(currentSlide - 1);
        }
    };
    useEffect(() => {
        slideRef.current.style.transition = "all 0.5s ease-in-out";
        slideRef.current.style.transform = `translateX(-${currentSlide}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 애니메이션을 만듭니다.
      }, [currentSlide]);
    return (
        <Container>
          {currentSlide}
          <SliderContainer ref={slideRef}>
            {data.map((data, index) => (
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
            ))}
          </SliderContainer>
          <Button onClick={prevSlide}>Previous Slide</Button>
          <Button onClick={nextSlide}>Next Slide</Button>
        </Container>
    );
}

export default Slider