import React from 'react'
import styled from 'styled-components'

type Props = {
    isblack: boolean
    content: string
    click?: () => void
}

const Container = styled.button<{isblack: boolean}>`
    font-size: ${({theme}) => theme.fontSize.description};
    height: 8rem;
    width: 100%;
    min-width: 30rem;
    border: solid 3px ${({isblack}) => isblack ? ({theme})=>theme.colors.white: ({theme})=>theme.colors.black}; 
    border-radius: 10px;
    background-color: ${({isblack}) => isblack ? ({theme})=>theme.colors.black : ({theme})=>theme.colors.white};
    color: ${({isblack}) => isblack ? ({theme})=>theme.colors.white: ({theme})=>theme.colors.black}; 
    cursor: pointer;
    transition: .4s;
    &:hover {
        transform: scale(1.1);
        background-color: ${({isblack}) => isblack ? ({theme})=>theme.colors.white : ({theme})=>theme.colors.black};
        color: ${({isblack}) => isblack ? ({theme})=>theme.colors.black : ({theme})=>theme.colors.white};
    }
`

const Button = ({isblack, content, click}: Props) => {
  return (
    <Container isblack={isblack} onClick={click}>{content}</Container>
  )
}
export default Button