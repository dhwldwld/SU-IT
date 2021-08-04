import React from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


import Image from 'next/image'
import styled from 'styled-components';

type Props = {
    name: string
    imgcount: number
}
const Wrapper = styled.div`
    height: 500px;
`
const Img = styled.img`
    object-fit: contain;
    width: 500px;
    height: 500px;
`

const DetailCarousel = ({ name, imgcount }: Props) => {
    const array = Array.from({length: imgcount}, (v, i) => i);
    return(
        <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true} showStatus={false} showIndicators={false}>
            {array.map((_, index) =>
                <Wrapper key={index}>
                    <Img key={index}  src={`/detailCards/${name}/${index}.png`} />
                </Wrapper>  
            )}
        </Carousel>
    )
}

export default DetailCarousel