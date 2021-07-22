import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

type Props = {
    link: string
}

const Container = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 50px;
    border-radius: 50px;
    border: solid 3px;
    background-color: ${({theme}) => theme.colors.black};
    font-size: ${({theme}) => theme.fontSize.description};
    color: ${({theme}) => theme.colors.white};
    transition: .4s;
    cursor: pointer;
    &:hover {
        background-color: ${({theme}) => theme.colors.white};
        color: ${({theme}) => theme.colors.black};
        border-color: ${({theme}) => theme.colors.black};
    }
`

const Button = ({ link }: Props) => {
  return (
    <Link href={link}>
      <Container>지원하기</Container>
    </Link>
  )
}
export default Button