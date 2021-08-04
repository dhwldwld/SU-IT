import React,{ useState } from 'react'
import Link from 'next/link'
import styled,{ css } from 'styled-components'


import * as mixin from '../../styles/mixin'
import LoginModal from '../LoginModal/LoginModal'
import Burger from '../Burger/Burger'
import Sidebar from '../SideBar/SideBar'

const Container = styled.div`
  position: sticky;
  background: ${({theme}) => theme.colors.white};
  top: 0;
  width: 100%;
  height: 9rem;
  padding: 0 15px;
  z-index: 3;
  box-shadow: 0 1px 1px rgba(0,0,0,.04), 0 10px 30px rgba(0,0,0,.15);
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
const Img = styled.img`
  width: 50px;
  height: 55px;
`
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
  const [isOpenBurger, setIsOpenBurger] = useState(false);
  const toggleBurger = () => {
    setIsOpenBurger(!isOpenBurger)
  }
  const [isLoginModal, setIsLoginModal] = useState(false);
    const toggleLoginModal = () => {
        setIsLoginModal(!isLoginModal)
  }

  return (
    <Container>
      {isLoginModal && <LoginModal openModal={toggleLoginModal} />}
      <Wrapper>
        <NavLogo>
          <Link href="/">
            <a><Img src="/images/logo-suit.svg" alt="Logo_SU-IT" /></a>
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