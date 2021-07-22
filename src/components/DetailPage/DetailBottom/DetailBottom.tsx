import React,{ useState } from 'react';
import Image from 'next/image';
import styled,{ css } from 'styled-components';

import { Contact } from '../../../../interfaces'
import * as mixin from '../../../styles/mixin'

import ApplyButton from '../../ApplyButton/ApplyButton'
import ApplyModal from '../../ApplyModal/ApplyModal';

type Props = {
    contact: Contact
}

const Container = styled.div`
    display: flex;
    align-items: center;
    min-height: 750px;
    height: 600px;
    padding: 50px 15px;
    ${mixin.tablet(css`
        flex-direction: column;
    `)}
`
const Wrapper = styled.div`
    display: flex;
    flex: 1;
    margin: 0 10px;
    ${mixin.tablet(css`
        width: 100%;
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
    flex: 1;
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    margin-right: 50px;
`
const Content = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1.5;
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
`
const Description = styled.p`
    font-size: ${({theme}) => theme.fontSize.description};
    margin-bottom: 50px;
`

const DetailBottom = ({ contact }: Props) => {
    const [isApplyModal, setIsApplyModal] = useState(false);
    const toggleApplyModal = () => {
        setIsApplyModal(!isApplyModal)
    }
    return (
        <Container>
            <Wrapper>
                <ImgContent>
                    <Image src='/images/talk.svg' alt='Call' width={150} height={150} />
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
                    <Image src='/images/pencil.svg' alt='Apply_pencil' width={150} height={150} />
                </ImgContent>
                <Content>
                    <Text>
                        <Title>Apply</Title>
                        <Description>
                            지원폼은'신중'하고<br/>
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