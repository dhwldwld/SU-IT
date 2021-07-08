import React from 'react'
import Image from 'next/image'
import styled,{ css } from 'styled-components'

import * as mixin from '../../styles/mixin'

import Inner from '../Inner'

const Container = styled.div`
    display: flex;
    flex-direction: column;
`
const BannerWrapper = styled.div`
    height: calc(100vh - 19rem);
    background: ${({theme}) => theme.colors.black};
    ${mixin.tablet(css`
        height: calc(100vh - 17rem);
    `)}
`
const DownArrowWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 7rem;
`
const Wrapper = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
`
const BannerContent = styled.div`
    position: absolute;
    z-index: 2;
    color: ${({theme}) => theme.colors.white};
    left: 1rem;
    bottom: 10rem;
    ${mixin.laptop(css`
        bottom: 22rem;
    `)}
    ${mixin.tablet(css`
        bottom: 16rem;
    `)}
    ${mixin.mobile(css`
        bottom: 10rem;
    `)}
`
const BannerTitle = styled.span`
    position: relative;
    font-size:${({theme}) => theme.fontSize.largeTitle};
    font-weight: bold;
    transition: .4s;
    ${mixin.tablet(css`
        font-size: 36px;
    `)}
    ${mixin.mobile(css`
        font-size: 24px;
    `)}
    &::after {
        position: absolute;
        content: "";
        display: block;
        height: 33%;
        width: 100%;
        background-color: ${({theme}) => theme.colors.primary};
        transform: translateY(-80%);
        z-index: -1;
    }
`
const BannerDescription = styled.p`
    font-size:${({theme})  => theme.fontSize.subTitle};
    line-height: 3rem;
    ${mixin.tablet(css`
        font-size: 18px;
    `)}
    ${mixin.mobile(css`
        font-size: 12px;
    `)}
`
const BgDesign = styled.div`
    position: absolute;
    height: 90%;
    width: 60%;
    right: 0;
    top: 5%;
    transition: .4s;
    ${mixin.laptop(css`
        width: 100%;
    `)}
    ${mixin.tablet(css`
        width: 100%;
    `)}
`
const Fill = styled.div`
    position: absolute;
    z-index: 1;
    width: 80%;
    height: 80%;
    left: 0;
    top: 10%;
    transition: .4s;
    background-color: ${({theme}) => theme.colors.primary};
    ${mixin.laptop(css`
        width: 100%;
    `)}
    ${mixin.tablet(css`
        width: 100%;
    `)}
`
const Stroke = styled.div`
    position: absolute;
    width: 80%;
    height: 100%;
    right: 0;
    border: solid 3rem white;
    transition: .4s;
    ${mixin.laptop(css`
        width: 100%;
    `)}
    ${mixin.tablet(css`
        width: 100%;
    `)}
`

const BannerSection = () => (
    <Container>
        <BannerWrapper>
            <Inner>
                <Wrapper>
                <BannerContent>
                    <BannerTitle>
                        나에게 딱 맞는 동아리
                    </BannerTitle>
                    <BannerDescription>
                        선린인터넷고등학교 IT경영과 동아리 신청 사이트 'SU-IT' 입니다.<br/>
                        신입생 여러분들은 많은 동아리 중에서 본인에게 맞는 동아리를<br/>
                        잘 선택하여 즐거운 학교생활을 할 수 있길 응원합니다.
                    </BannerDescription>
                </BannerContent>
                <BgDesign>
                    <Fill />
                    <Stroke />
                </BgDesign>
                </Wrapper>
            </Inner>
        </BannerWrapper>
        <DownArrowWrapper>
            <Image src="/images/downArrow.svg" alt="down_arrow" width={100} height={30}/>
        </DownArrowWrapper>
    </Container>
)

export default BannerSection
