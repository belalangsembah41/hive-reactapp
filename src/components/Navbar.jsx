import React, { useState } from 'react'
import { Container, NavbarContainer, Logo, NavList, NavLink, NavItem, NavbarMenu } from './StyledNavbar'
import { TbGridDots } from 'react-icons/tb'
import '../App.css';

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const eventClick = () => {
    setClicked(!clicked);
  }

  return (
    <Container>
      <NavbarContainer>
        <Logo>Hive.</Logo>
        <NavList className={clicked ? 'nav active' : 'nav'} >
          <NavItem>
            <NavLink>Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Shop</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Contact Us</NavLink>
          </NavItem>
        </NavList>
        <NavbarMenu className='mobile-nav' onClick={eventClick} >
          <TbGridDots />
        </NavbarMenu>
      </NavbarContainer>
    </Container>
  )
}


export default Navbar