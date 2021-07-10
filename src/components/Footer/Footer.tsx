import React from 'react'
import Image from 'next/image'
import styled,{ css } from 'styled-components'

import * as mixin from '../../styles/mixin'

import Inner from '../Inner/Inner'

const Container = styled.div`
    background-color: ${({theme}) => theme.colors.black};
`
const FooterWrapper = styled.div`
    padding: 8rem 0 6rem;
    color: ${({theme}) => theme.colors.white};
    font-size: ${({theme}) => theme.fontSize.smallText};
`
const ContentWrapper = styled.div`
    display: flex;
    margin-bottom: 3rem;
    ${mixin.tablet(css`
        flex-direction: column;
    `)}
`
const Content = styled.div`
    margin-right: 5rem;
    &:last-child {
        margin: 0;
    }
`
const SocialLink = styled.a`
    margin-right: 3rem;
    &:last-child {
        margin: 0;
    }
`
const CopyRight = styled.span``
const ContentInfo = styled.div<{flex: number}>`
    display: flex;
    flex-direction: column;
    flex: ${({flex}) => flex};
`
const CotentInfoItems = styled.div<{flex: number}>`
    display: flex;
    margin-bottom: 2rem;
    flex: ${({flex}) => flex};
`
const InfoTitle = styled.span<{flex: number}>`
    font-weight: bold;
    flex: ${({flex}) => flex};
    ${mixin.tablet(css`
        flex: 1;
    `)}
`
const InfoDetail = styled.span<{flex: number}>`
    flex: ${({flex}) => flex};
    ${mixin.tablet(css`
        flex: 2;
    `)}
`
const InfoMember = styled.div`
    display: flex;
    margin-bottom: 5px;
`
const InfoMemberList = styled.div<{flex: number}>`
    display: flex;
    flex-direction: column;
    flex: ${({flex}) => flex};
    ${mixin.tablet(css`
        flex: 2;
    `)}
`

const Footer = () => {
  return (
    <Container>
      <Inner>
          <FooterWrapper>
              <ContentWrapper>
                <Content>
                    <Image src="/images/logo-sunrin.svg" width={300} height={55}/>
                </Content>
                <Content>
                    <SocialLink href="https://www.facebook.com/profile.php?id=100054473020768" target="_blank" aria-label="Facebook">
                            <Image src="/images/facebook.svg" width={44} height={44}/>
                    </SocialLink>
                    <SocialLink href="http://sunrint.hs.kr/index.do" target="_blank" aria-label="Sunrint">
                        <Image src="/images/sunrin.svg" width={44} height={44}/>
                    </SocialLink>
                </Content>
              </ContentWrapper>
              <ContentWrapper>
                <Content>
                    <CopyRight>선린인터넷고등학교 IT경영과 &copy; {new Date().getFullYear()} All rights reserved.</CopyRight>
                </Content>
              </ContentWrapper>
              <ContentWrapper>
                <ContentInfo flex={1.5}>
                    <CotentInfoItems flex={1}>
                        <InfoTitle flex={1}>Address.</InfoTitle>
                        <InfoDetail flex={3}>서울특별시 용산구 원효로97길 33-4, 선린인터넷고등학교</InfoDetail>
                    </CotentInfoItems>
                    <CotentInfoItems flex={1}>
                        <InfoTitle flex={1}>Tel.</InfoTitle>
                        <InfoDetail flex={3}>02-713-6211</InfoDetail>
                    </CotentInfoItems>
                    <CotentInfoItems flex={1}>
                        <InfoTitle flex={1}>Fax.</InfoTitle>
                        <InfoDetail flex={3}>02-704-0960</InfoDetail>
                    </CotentInfoItems>
                </ContentInfo>
                <ContentInfo flex={1}>
                    <CotentInfoItems flex={1}>
                        <InfoTitle flex={1}>Designed by</InfoTitle>
                        <InfoDetail flex={2}>Jimin Hong</InfoDetail>
                    </CotentInfoItems>
                    <CotentInfoItems flex={1}>
                        <InfoTitle flex={1}>Developed by</InfoTitle>
                        <InfoDetail flex={2}>Seunghyuk Oh</InfoDetail>
                    </CotentInfoItems>
                </ContentInfo>
                <ContentInfo flex={1}>
                    <CotentInfoItems flex={1}>
                        <InfoTitle flex={1}>시연회 제작 도움</InfoTitle>
                        <InfoMemberList flex={1.5}>
                            <InfoMember>
                                <InfoDetail flex={1}>BFD</InfoDetail>
                                <InfoDetail flex={1.5}>Sunbin Song</InfoDetail>
                            </InfoMember>
                            <InfoMember>
                                <InfoDetail flex={1}>ERP</InfoDetail>
                                <InfoDetail flex={1.5}>Minsun Kim</InfoDetail>
                            </InfoMember>
                            <InfoMember>
                                <InfoDetail flex={1}>HMH</InfoDetail>
                                <InfoDetail flex={1.5}>Woosung Yoon</InfoDetail>
                            </InfoMember>
                            <InfoMember>
                                <InfoDetail flex={1}>FRS</InfoDetail>
                                <InfoDetail flex={1.5}>Hyunjoon Choi</InfoDetail>
                            </InfoMember>
                            <InfoMember>
                                <InfoDetail flex={1}>KIWINOMICS</InfoDetail>
                                <InfoDetail flex={1.5}>Sanha Moon</InfoDetail>
                            </InfoMember>
                            <InfoMember>
                                <InfoDetail flex={1}>TAXI</InfoDetail>
                                <InfoDetail flex={1.5}>Seojin Lee</InfoDetail>
                            </InfoMember>
                        </InfoMemberList>
                    </CotentInfoItems>
                </ContentInfo>
              </ContentWrapper>
          </FooterWrapper>
      </Inner>
    </Container>
  )
}

export default Footer