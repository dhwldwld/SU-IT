import React,{ useState } from 'react'
import Image from 'next/image'
import styled,{ css } from 'styled-components'
import Modal from '../Modal/Modal'
import { IoClose } from 'react-icons/io5'

import * as mixin from '../../styles/mixin'
type Props = {
    openModal: () => void
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
    ${mixin.mobile(css`
        width: 100%;
    `)}
`
const ImgWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 20px;
    &:last-child {
        margin: 0;
    }
`
const ErrorMessageHolder = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #f8d7da;
    border-radius: 6px;
    background-color: #f5c6cb;
    padding: 5px;
`
const ErrorMessage = styled.p`
    text-align: left;
    margin: 0;
    padding: 10px;
    font-size: ${({theme}) => theme.fontSize.middleText};
    color: #721c24;
`
const ErrorCloseButton = styled.button`
    border: none;
    background: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    color: #721c24;
    transition: .3s;
    &:hover {
        color: #dd737d;
    }
`
const Form = styled.form`
    display: flex;
    flex-direction: column;

`
const FormInput = styled.input`
    margin: 10px 0;
    height: 50px;
    display: block;
    border: none;
    border-bottom: solid 1px ${({theme}) => theme.colors.primary};
    transition: all 0.3s cubic-bezier(.64,.09,.08,1);
    background: linear-gradient(to bottom, rgba(255,255,255,0) 98%, ${({theme}) => theme.colors.primary} 2%);
    background-position: -300px 0;
    background-size: 300px 100%;
    background-repeat: no-repeat;
    color: darken(${({theme}) => theme.colors.primary}, 20%);
    font-size:  ${({theme}) => theme.fontSize.middleText};
    &:focus, &:valid {
        box-shadow: none;
        outline: none;
        background-position: 0 0;
        &::-webkit-input-placeholder {
            transition: all 0.3s ease-in-out;
            color: ${({theme}) => theme.colors.primary};
            font-size:  ${({theme}) => theme.fontSize.smallText};
            transform: translateY(-20px);
            visibility: visible !important;
        }
    }
`
const FormButton = styled.button`
    border: none;
    margin-top: 10px;
    background: ${({theme}) => theme.colors.primary};
    height: 50px;
    cursor: pointer;
    border-radius: 3px;
    padding: 6px;
    color: white;
    box-shadow: 0 3px 6px 0 rgba(0,0,0,0.2);
    transition: all 0.3s ease-in-out;
    font-size: ${({theme}) => theme.fontSize.middleText};
    &:hover { 
        transform: translateY(-3px);
        box-shadow: 0 6px 6px 0 rgba(0,0,0,0.2);
    }
`


const LoginModal = ({ openModal }: Props) => {
    const [closeError, setcloseError] = useState(false);
    const toggleError = () => {
        setcloseError(!closeError)
    }
    return (
        <Modal openModal={openModal}>
            <Container>
                <ImgWrapper>
                    <Image src='/images/logo-suit.svg' alt='Logo_SU-IT' width={130} height={140} />
                </ImgWrapper>
                    {closeError &&
                        <ErrorMessageHolder>
                            <ErrorMessage>Incorrect username or password.</ErrorMessage>
                            <ErrorCloseButton onClick={toggleError}>
                                <IoClose />
                            </ErrorCloseButton>
                        </ErrorMessageHolder>
                    }
                    <Form action='' method='post' name='login'>
                        <FormInput type='text' name='ID' id='ID' placeholder='Enter your ID' required />
                        <FormInput type='password' name='password' id='password-field' placeholder='Enter your password' required />
                        <FormButton type='submit' onClick={()=>{setcloseError(true)}}>LOGIN</FormButton>
                    </Form>
            </Container>
        </Modal>
    )
}

export default LoginModal