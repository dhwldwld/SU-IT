import React from 'react'
import Link from 'next/link'
import styled,{ css } from 'styled-components'

import { Club } from '../../../interfaces'
import * as mixin from '../../styles/mixin'

import Section from '../Section/Section'

type Props = {
    data: Club[]
}

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 50px;
    transition: .4s;
    ${mixin.DesktopS(css`
        grid-template-columns: 1fr 1fr;
    `)}
    ${mixin.tablet(css`
        grid-template-columns: 1fr;
    `)}
`
const ClubCard = styled.div`
    width: 300px;
    height: 300px;
    box-shadow: 0 3px 20px 0 rgba(0, 0, 0, 0.16);
    transition: all 0.3s ease-in-out;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    color: ${({theme}) => theme.colors.black};
    &:hover {
        transform: scale(1.1);
        filter: opacity(80%);
    }
`
const ClubLogo = styled.img`
    border-radius: 50%;
    width: 100px;
    height: 100px;
`
const Title = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const ClubTitle = styled.span`
    font-size: ${({theme}) => theme.fontSize.subTitle};
    font-weight: bold;
`
const ClubDescription = styled.span`
    font-size: ${({theme}) => theme.fontSize.description};
`
const ClubIsSpeciality = styled.span`
    font-size: ${({theme}) => theme.fontSize.description};
`

const IntroduceSection = ({ data }: Props) => {
    return(
    <Section page="Introduce" isprimary={false} isblack={false}>
        <Container>
            {data.map((data) => (
                <Link href="/clubs/[id]" as={`/clubs/${data.id}`} key={data.id}>
                <a>
                    <ClubCard>
                        <ClubLogo src={data.logo} alt={data.name} />
                        <Title>
                            <ClubTitle>{data.name}</ClubTitle>
                            {data.speciality ? <ClubIsSpeciality>(전문)</ClubIsSpeciality> : null }
                        </Title>
                        <ClubDescription>{data.description}</ClubDescription>
                    </ClubCard>
                </a>
                </Link>
            ))}
        </Container>
    </Section>
)}

export default IntroduceSection
