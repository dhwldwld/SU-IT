import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styled,{ css } from 'styled-components'

import * as mixin from '../../styles/mixin'
import Modal from '../Modal/Modal'
import { Group } from '../../../interfaces'

type Props = {
    openModal: () => void
    groups: Group[]
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
`
const ModalTitle = styled.span`
    align-self: center;
    font-size: ${({theme}) => theme.fontSize.subTitle};
    font-weight: bold;
    margin-bottom: 30px;
`
const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 15px;
    transition: .4s;
    padding: 5px;
    overflow-y: scroll;
    &::-webkit-scrollbar { width: 5px; }
    &::-webkit-scrollbar-track { background-color:transparent; }
    &::-webkit-scrollbar-thumb { border-radius: 2.5px; background-color: rgba(255, 255, 255, 0.4); }
    &::-webkit-scrollbar-thumb:hover { background: rgba(255, 255, 255, 0.7); }
    &::-webkit-scrollbar-thumb:active { background: rgb(255, 255, 255); }
    &::-webkit-scrollbar-button { display: none; }
    ${mixin.tablet(css`
        grid-template-columns: 1fr 1fr;
    `)}
    ${mixin.mobile(css`
        grid-template-columns: 1fr;
        height: 300px;
        width: 200px;
        margin: 0 auto;
    `)}
`
const GroupCard = styled.div`
    width: 200px;
    height: 200px;
    box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.16);
    transition: all 0.3s ease-in-out;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    color: ${({theme}) => theme.colors.black};
    ${mixin.tablet(css`
        width: 170px;
        height: 170px;
    `)}
    &:hover {
        transform: scale(1.05);
    }
`
const GroupLogo = styled(Image)`
    border-radius: 50%;
`
const Title = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const GroupTitle = styled.span`
    font-size: ${({theme}) => theme.fontSize.middleText};
    font-weight: bold;
`
const GroupIsSpeciality = styled.span`
    font-size: ${({theme}) => theme.fontSize.smallText};
`
const GroupDescription = styled.span`
    width: 90%;
    font-size: ${({theme}) => theme.fontSize.smallText};
    word-wrap:break-word;
    text-align: center;
`


const ApplyModal = ({ openModal, groups }: Props) => {
    return (
        <Modal openModal={openModal}>
            <Container>
                <ModalTitle>APPLY</ModalTitle>
                <Wrapper>
                    {groups.map((data) => (
                        <Link href="/groups/[name]" as={`/groups/${data.name}`} key={data.id}>
                        <a>
                            <GroupCard>
                                <GroupLogo src={data.logo} width={50} height={50} />
                                <Title>
                                    <GroupTitle>{data.name}</GroupTitle>
                                    {data.speciality ? <GroupIsSpeciality>(전문)</GroupIsSpeciality> : null }
                                </Title>
                                <GroupDescription>{data.description}</GroupDescription>
                            </GroupCard>
                        </a>
                        </Link>
                    ))}
                </Wrapper>
            </Container>
        </Modal>
    )
}

export default ApplyModal