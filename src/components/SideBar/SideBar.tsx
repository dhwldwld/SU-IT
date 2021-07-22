import React,{ useEffect } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

type Props = {
    isOpen: boolean
    toggle: () => void
    logintoggle: () => void
}

export const Container = styled.div<{isOpen: boolean}>`
    position:fixed;
    width: 100%;
    height: 100%;
    background: #eee;
    display: ${({ isOpen }) => (isOpen ? 'flex':'none')};
    align-items: center;
    justify-content: center;
    top: ${({ isOpen }) => (isOpen ? '0':'-100%')};
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%': '0')};
`

export const Menu = styled.ul`
    display:grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4,);
    text-align: center;
    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(4,);
    }
`

export const SideBarItem = styled.a`
    display:flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 1em 1.5em;
    border: none;
    background-color: transparent;
    cursor: pointer;
    outline: none;
    font-size: 1.5rem;
    margin: 1em 0.8em;
    color: #0d0d0d;
    text-decoration: none;
    // Effect one
    &:after,
    &:before {
      content: '';
      display: block;
      position: absolute;
      width: 20%;
      height: 20%;
      border: 2px solid;
      transition: all 0.6s ease;
      border-radius: 2px;
    }
    &:after {
      bottom: 0;
      right: 0;
      border-top-color: transparent;
      border-left-color: transparent;
      border-bottom-color: #0d0d0d;
      border-right-color: #0d0d0d;
    }
    &:before {
      top: 0;
      left: 0;
      border-bottom-color: transparent;
      border-right-color: transparent;
      border-top-color: #0d0d0d;
      border-left-color: #0d0d0d;
    }
    &:hover:after,
    &:hover:before {
      width: 100%;
      height: 100%;
    }
   
`

export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`


const Sidebar = ({ isOpen, toggle, logintoggle }: Props) => {
    return (
        <Container isOpen={isOpen}>
                <Menu>
                    <Link href="/#Introduce">
                        <SideBarItem onClick={toggle}>INTRODUCE</SideBarItem>
                    </Link>
                    <Link href="/#Apply">
                        <SideBarItem onClick={toggle}>APPLY</SideBarItem>
                    </Link>
                    <Link href="/#QnA">
                        <SideBarItem onClick={toggle}>QnA</SideBarItem>
                    </Link>
                    <SideBarItem onClick={logintoggle}>LOGIN</SideBarItem>
                </Menu>
        </Container>
    )
}

export default Sidebar;