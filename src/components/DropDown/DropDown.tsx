import React,{ useState, useEffect } from 'react'
import styled from 'styled-components';
import { FaChevronRight } from 'react-icons/fa'
import { Group } from '../../../interfaces';

type Props ={
    groups: Group[]
}

const Container = styled.div<{open: boolean}>`
    position: relative;
    width: 100%;
    margin: 10px 0;
    border: 1px solid ${({theme}) => theme.colors.gray};
    border-radius: ${({open}) => open ? '10px 10px 0 0' : '10px'};
    background-color: white;
    transition: all .2s ease-in-out;
`
const Header = styled.div`
    font-size: 16px;
    padding: 15px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Wrapper =styled.div<{open: boolean}>`
    position: absolute;
    width: calc(100% + 2px);
    transform: translateX(-1px);
    background-color: #fff;
    display: ${({open}) => open ? 'block' : 'none' };
    padding: 5px 0;
    border-radius: 0 0 10px 10px;
    border: 1px solid ${({theme}) => theme.colors.gray};
    border-top: none;
`
const Item = styled.div`
    font-size: 16px;
    padding: 10px;
    border-top: solid 1px #ccc;
    cursor: pointer;
    &:hover {
        background: #E5E8EC;
    }
`
const Arrow = styled.div<{open: boolean}>`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    color: #91A5BE;
    transform: rotate(${({open}) => open ? '90deg' : '0deg'});
    transition: all .2s ease-in-out;

`

const DropDown = ({ groups }: Props) => {
  const [isOpen, setOpen] = useState(false);
  const [items, setItem] = useState(groups);
  const [selectedItem, setSelectedItem] = useState(null);
  
  const toggleDropdown = () => setOpen(!isOpen);
  
  const handleItemClick = (id) => {
    selectedItem == id ? setSelectedItem(null) : setSelectedItem(id);
  }

  return (
    <Container open={isOpen}>
      <Header onClick={toggleDropdown}>
        {selectedItem ? items.find(item => item.id == selectedItem).name : "동아리 선택"}
        <Arrow open={isOpen}>
            <FaChevronRight />
        </Arrow>
      </Header>
      <Wrapper open={isOpen}>
        {items.map(item => (
          <Item id={`${item.id}`} onClick={(e) => {handleItemClick(item.id); toggleDropdown()}} key={item.id}>
            {item.name}
          </Item>
        ))}
      </Wrapper>
    </Container>
  )
}

export default DropDown