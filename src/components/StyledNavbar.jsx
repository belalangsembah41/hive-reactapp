import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 1400px;
`;

const NavbarContainer = styled.section`
  padding: 1rem;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    padding-right: 1rem;
  }
`;

const Logo = styled.h1`
  margin-left: 20px;
  font-size: 30px;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    position: absolute;
    right: -100%;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100vh;
    background-color: beige;
    transition: all 0.3s ease-in-out;
  }
`;

const NavItem = styled.li`
  margin: 0 1rem;

  @media screen and (max-width: 768px) {
    display: block;
    margin: 1rem;
    padding: 0.5rem;
    width: 90%;
    border-radius: 10px;
    text-align: center;
    background-color: blue;
    cursor: pointer;

    &:first-child {
      margin-top: 4.5rem;
    }

    &:hover {
      background-color: antiquewhite;
    }
  }
`;

const NavLink = styled.a`
  font-weight: 600;
  font-size: 18px;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    font-size: 23px;
  }
`;

const NavbarMenu = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    z-index: 10;
    font-size: 2rem;
    margin: 0;
    padding: 0;
  }
`;

export {
  Container,
  NavbarContainer,
  Logo,
  NavList,
  NavItem,
  NavLink,
  NavbarMenu,
};
