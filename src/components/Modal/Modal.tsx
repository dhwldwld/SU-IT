import React,{ useEffect, ReactNode } from 'react'
import styled,{ css } from 'styled-components'
import { IoClose } from 'react-icons/io5'

import * as mixin from '../../styles/mixin'

type Props = {
    children?: ReactNode
    openModal: () => void
}

export const Container = styled.div`
    height: 100%;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;   
    top: 0;
    z-index: 100;
    overflow: hidden;
    background: rgba(0,0,0,.6);
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Close = styled.button`
    position: absolute;
    top: 20px;
    right: 20px;
    color: ${({theme}) => theme.colors.primary};
    font-size: 32px;
    background: none;
    border: none;
    cursor: pointer;
    transition: .4s;
    &:hover {
        color: ${({theme}) => theme.colors.gray};
    }
`
const Wrapper = styled.div`
    position: relative;
    background-color: white;
    border-radius: 25px;
    padding: 65px 25px;
    max-width: 95%;
    max-height: 95%;
    ${mixin.mobile(css`
        min-width: 95%;
    `)}
`

const Modal = ({children, openModal}: Props) => {

    useEffect(() => {
        document.body.style.cssText = `
          position: fixed; 
          top: -${window.scrollY}px;
          overflow-y: scroll;
          width: 100%;`;
        return () => {
          const scrollY = document.body.style.top;
          document.body.style.cssText = '';
          window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
        };
      }, [window.scrollY]);

    return (
        <Container>
            <Wrapper>
                <Close onClick={openModal}>
                    <IoClose />
                </Close>
                {children}
            </Wrapper>
        </Container>
    )
}

export default Modal;