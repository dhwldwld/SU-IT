import React,{ useState,useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styled,{ css } from 'styled-components'
import { FaBars } from 'react-icons/fa'

import * as mixin from '../../styles/mixin'

import Inner from '../Inner'

type Props = {
  openModal?: () => void
}

const Container = styled.div<{scrollNav: boolean}>`
  position: sticky;
  background: ${({theme}) => theme.colors.white};
  top: 0;
  width: 100%;
  z-index: 3;
  box-shadow: ${({scrollNav}) => (scrollNav ? '0 1px 1px rgba(0,0,0,.04), 0 10px 30px rgba(0,0,0,.15)': 'none')};
  height: 9rem;
  transition: .4s;
  ${mixin.tablet(css`
        height: 7rem;
  `)}
`
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`
const NavLogo = styled.div``
const NavImg = styled.a`
  display: none;
  font-size: 3.5rem;
  ${mixin.tablet(css`
    display: block;
  `)}
`
const NavList = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  ${mixin.tablet(css`
    display: none;
  `)}
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

const Navbar = ({openModal}:Props) => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if(window.scrollY >= 80) {
      setScrollNav(true)
    }
    else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll',changeNav)
  },[])

  return (
    <Container scrollNav={scrollNav}>
      <Inner>
      <Wrapper>
        <NavLogo>
          <Link href="/">
            <Image src="/images/logo-suit.svg" alt="Logo_SU-IT" width={50} height={55} />
          </Link>
        </NavLogo>
        <NavImg>
          <FaBars/>
        </NavImg>
        <NavList>
          <Link href="/#Introduce">
            <NavItem>Introduce</NavItem>
          </Link>
          <Link href="/#Apply">
            <NavItem>Apply</NavItem>
          </Link>
          <Link href="/#QnA">
            <NavItem>Q&A</NavItem>
          </Link>
          <NavItem onClick={openModal}>Login</NavItem>
        </NavList>
      </Wrapper>
      </Inner>
    </Container>
  )
}

export default Navbar