import React from 'react'
import styled,{ css } from 'styled-components'
import { Group } from '../../../interfaces'

import * as mixin from '../../styles/mixin'
import DropDown from '../DropDown/DropDown'
import Modal from '../Modal/Modal'
type Props = {
    openModal: () => void
    groups: Group[]
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
    ${mixin.mobile(css`
        width: 100%;
    `)}
`
const Title = styled.span`
    align-self: center;
    font-size: ${({theme}) => theme.fontSize.subTitle};
    font-weight: bold;
    margin-bottom: 30px;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
`
const FormInput = styled.input`
    height: 50px;
    padding: 15px;
    display: block;
    border: none;
    border-bottom: solid 1px ${({theme}) => theme.colors.gray};
    border-radius: 0 0 10px 10px;
    transition: all 0.3s cubic-bezier(.64,.09,.08,1);
    background: linear-gradient(to bottom, rgba(255,255,255,0) 98%, ${({theme}) => theme.colors.primary} 2%);
    background-position: -400px 0;
    background-size: 400px 100%;
    background-repeat: no-repeat;
    color: ${({theme}) => theme.colors.primary};
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
const FormTextArea = styled.textarea`
    resize: none;
    border: solid 1px ${({theme}) => theme.colors.gray};
    border-radius: 5px;
    transition: all 0.3s cubic-bezier(.64,.09,.08,1);
    color: ${({theme}) => theme.colors.primary};
    font-size:  ${({theme}) => theme.fontSize.middleText};
    margin: 10px 0;
    &:focus, &:valid {
        box-shadow: none;
        outline: none;
        &::-webkit-input-placeholder {
            transition: all 0.3s ease-in-out;
            color: ${({theme}) => theme.colors.primary};
            font-size:  ${({theme}) => theme.fontSize.middleText};
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
    font-size: ${({theme}) => theme.fontSize.middleText};
    box-shadow: 0 3px 6px 0 rgba(0,0,0,0.2);
    transition: all 0.3s ease-in-out;
    &:hover { 
        transform: translateY(-2px);
        box-shadow: 0 6px 6px 0 rgba(0,0,0,0.2);
    }
`

const QnAModal = ({ openModal, groups }: Props) => {
    return (
        <Modal openModal={openModal}>
            <Container>
                <Title>Q&A</Title>
                <Form>
                    <DropDown groups={groups} />
                    <FormInput type='email' name='email' id='email' placeholder='E-mail' required />
                    <FormTextArea cols={10} rows={10} placeholder='내용을 입력하세요.' required ></FormTextArea>
                    <FormButton type='submit'>SUBMIT</FormButton>
                </Form>
            </Container>
        </Modal>
    )
}

export default QnAModal