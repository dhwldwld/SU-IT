import React,{ useState,useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styled,{ css } from 'styled-components'


import * as mixin from '../../styles/mixin'
import LoginModal from '../LoginModal/LoginModal'
import Burger from '../Burger/Burger'
import Sidebar from '../SideBar/SideBar'

const Container = styled.div<{scrollNav: boolean}>`
  position: sticky;
  background: ${({theme}) => theme.colors.white};
  top: 0;
  width: 100%;
  padding: 0 15px;
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
const NavImg = styled.button`
  display: none;
  font-size: 3.5rem;
  border: none;
  background: none;
  ${mixin.tablet(css`
    display: fixed;
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

const Navbar = () => {
  const [scrollNav, setScrollNav] = useState(false)
  const [isOpenBurger, setIsOpenBurger] = useState(false);
  const toggleBurger = () => {
    setIsOpenBurger(!isOpenBurger)
  }
  const [isLoginModal, setIsLoginModal] = useState(false);
    const toggleLoginModal = () => {
        setIsLoginModal(!isLoginModal)
  }

  const changeNav = () => {
    if(window.scrollY >= 80) {
      setScrollNav(true)
    }
    else {
      setScrollNav(false)
    }
  }

  const toggleTop = () => {
    window.scrollTo({top: 0});
  }

  useEffect(() => {
    window.addEventListener('scroll',changeNav)
  },[])

  return (
    <Container scrollNav={scrollNav}>
      {isLoginModal && <LoginModal openModal={toggleLoginModal} />}
      <Wrapper>
        <NavLogo>
          <Link href="/">
            <a onClick={toggleTop}><Image src="/images/logo-suit.svg" alt="Logo_SU-IT" width={50} height={55} /></a>
          </Link>
        </NavLogo>
        <NavImg onClick={toggleBurger}>
          <Burger click={isOpenBurger}/>
        </NavImg>
        {isOpenBurger ? <Sidebar isOpen={isOpenBurger} toggle={toggleBurger} logintoggle={toggleLoginModal} /> : null}
        <NavList>
          <Link href="/#Introduce">
            <NavItem>INTRODUCE</NavItem>
          </Link>
          <Link href="/#Apply">
            <NavItem>APPLY</NavItem>
          </Link>
          <Link href="/#Q&A">
            <NavItem>Q&A</NavItem>
          </Link>
            <NavItem onClick={toggleLoginModal}>LOGIN</NavItem>
        </NavList>
      </Wrapper>
    </Container>
  )
}

export default Navbar