import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styled,{ css } from 'styled-components'

import { Group } from '../../../interfaces'
import * as mixin from '../../styles/mixin'

import Section from '../Section/Section'

type Props = {
    data: Group[]
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
const GroupCard = styled.div`
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
const GroupLogo = styled(Image)`
    border-radius: 50%;
`
const Title = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const GroupTitle = styled.span`
    font-size: ${({theme}) => theme.fontSize.subTitle};
    font-weight: bold;
`
const GroupDescription = styled.span`
    font-size: ${({theme}) => theme.fontSize.description};
`
const GroupIsSpeciality = styled.span`
    font-size: ${({theme}) => theme.fontSize.description};
`

const IntroduceSection = ({ data }: Props) => {
    return(
    <Section page="Introduce" isprimary={false} isblack={false}>
        <Container>
            {data.map((data) => (
                <Link href="/groups/[name]" as={`/groups/${data.name}`} key={data.id}>
                <a>
                    <GroupCard>
                        <GroupLogo src={data.logo} width={100} height={100} />
                        <Title>
                            <GroupTitle>{data.name}</GroupTitle>
                            {data.speciality ? <GroupIsSpeciality>(전문)</GroupIsSpeciality> : null }
                        </Title>
                        <GroupDescription>{data.description}</GroupDescription>
                    </GroupCard>
                </a>
                </Link>
            ))}
        </Container>
    </Section>
)}

export default IntroduceSection
