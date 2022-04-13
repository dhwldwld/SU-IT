import React from 'react';
import styled,{ css } from 'styled-components';

import { Contact } from '../../../../interfaces'
import * as mixin from '../../../styles/mixin'

import ApplyButton from '../../ApplyButton/ApplyButton'

type Props = {
    contact: Contact
}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 600px;
    margin: 0 auto;
    padding: 50px 15px;
    ${mixin.tablet(css`
        flex-direction: column;
    `)}
`
const Wrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    &:last-child {
        justify-content: flex-start;
    }
    flex: 1;
    margin: 0 10px;
    ${mixin.tablet(css`
        width: 100%;
        flex: none;
        justify-content: flex-start;
        &:last-child {
            justify-content: flex-start;
        }
    `)}
`
const Bar = styled.div`
    height: calc(100% - 100px);
    width: 3px;
    border-radius: 1.5px;
    background-color: ${({theme}) => theme.colors.black};
    ${mixin.tablet(css`
        display: none;
    `)}
`
const ImgContent = styled.div`
    display: flex;
    margin-right: 50px;
    ${mixin.tablet(css`
        display: none;
    `)}
`
const Content = styled.div`
    display: flex;
    flex-direction: column;
    ${mixin.tablet(css`
        width: 100%;
    `)}
`
const Text = styled.div``
const Button = styled.div`
    display: flex;
    justify-content: flex-end;
`
const Title = styled.span`
    display: block;
    font-size: ${({theme}) => theme.fontSize.title};
    font-weight: bold;
    margin-bottom: 50px;
    ${mixin.tablet(css`
        font-size: 24px;
    `)}
`
const Description = styled.p`
    font-size: ${({theme}) => theme.fontSize.description};
    margin-bottom: 50px;
`
const Img = styled.img`
    width: 150px;
    height: 150px;
`

const DetailBottom = ({ contact }: Props) => {
    return (
        <Container>
            <Wrapper>
                <ImgContent>
                    <Img src='/images/talk.svg' alt='Call' />
                </ImgContent>
                <Content>
                    <Text>
                        <Title>Contact Us</Title>
                        <Description>
                            문의사항은 아래 번호 또는 페이스북 페이지를 이용해 주세요!
                        </Description>
                        <Description>
                            {contact.director.name}: {contact.director.call}<br/><br/>
                            {contact.viceDirector.name}: {contact.viceDirector.call}
                        </Description>
                    </Text>
                </Content>
            </Wrapper>
            <Bar />
            <Wrapper>
                <ImgContent>
                    <Img src='/images/pencil.svg' alt='Apply_pencil' />
                </ImgContent>
                <Content>
                    <Text>
                        <Title>Apply</Title>
                        <Description>
                            지원폼은'신중'하고
                            '성의'있게 작성해주시기 바랍니다.
                        </Description>
                    </Text>
                    <Button>
                        <ApplyButton link='/' />
                    </Button>
                </Content>
            </Wrapper>
        </Container>
    );
}

export default DetailBottom