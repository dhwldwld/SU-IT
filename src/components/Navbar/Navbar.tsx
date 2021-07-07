import React,{ useState,useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styled,{ css } from 'styled-components'
import { FaBars } from 'react-icons/fa'

import * as mixin from '../../styles/mixin'

const Container = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 3;
  box-shadow: 0px 24px 64px rgba(0, 0, 0, 0.04);
  height: 9rem;
  transition: .4s;
  ${mixin.Tablet(css`
        height: 7rem;
  `)}
`
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: ${({theme}) => theme.deviceSizes.DesktopM};
  height: 100%;
  margin: 0 auto;
  padding: 0 15px;
`
const NavLogo = styled.div``
const NavImg = styled.div``
const NavList = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`
const NavItem = styled.a`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 42px;
  font-size: ${({theme}) => theme.fontSize.middleText};
  &:hover {
    border-bottom: 3px solid ${({theme}) => theme.colors.primary};
  }
  &:active {
    border-bottom: 3px solid ${({theme}) => theme.colors.primary};
  }
`

const Navbar = () => {
    const [isMobile, setIsMobile] = useState<boolean>(false);
    return (
        <Container>
        <Wrapper>
          <NavLogo>
            <Link href="/">
              <a><Image src="/images/logo-suit.svg" alt="Logo_SU-IT" width={50} height={55} /></a>
            </Link>
          </NavLogo>
          {isMobile ? (
              <NavImg>
                  <FaBars/>
              </NavImg>
          ):(
                <NavList>
                    <Link href="/#Introduce">
                        <NavItem>Introduce</NavItem>
                    </Link>
                    <Link href="/#Apply">
                        <NavItem>Apply</NavItem>
                    </Link>
                    <Link href="/#Q&A">
                        <NavItem>Q&A</NavItem>
                    </Link>
                    <NavItem onClick={() => openModal()}>Login</NavItem>
                </NavList>
          )}
        </Wrapper>
      </Container>
    )
}

export default Navbar