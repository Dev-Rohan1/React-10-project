import styled from "styled-components";
import { CiSearch } from "react-icons/ci";

import logo from "../assets/image/logo.png";

const Navbar = () => {
  return (
    <Header>
      <NavContainer>
        <Nav>
          <Logo>
            <Image src={logo} alt="image" />
            <H1>Food</H1>
          </Logo>
          <Menu>
            <MenuList>
              <ListItem>All</ListItem>
              <ListItem>BreakFast</ListItem>
              <ListItem>Lunch</ListItem>
              <ListItem>Dinner</ListItem>
            </MenuList>
          </Menu>
          <SearchFood>
            <Span>
              <CiSearch />
            </Span>
            <SearchInput type="text" placeholder="Search Food..." />
          </SearchFood>
        </Nav>
      </NavContainer>
    </Header>
  );
};

export default Navbar;

const Header = styled.header`
  background: #00ffff66;
  padding: 10px 0px;
`;

const NavContainer = styled.div`
  max-width: 1140px;
  margin: auto;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Image = styled.img`
  width: 80px;
`;

const H1 = styled.h1`
  font-size: 30px;
`;

const Menu = styled.div``;

const MenuList = styled.ul`
  display: flex;
  gap: 20px;
`;

const ListItem = styled.li`
  list-style: none;
  padding: 8px 20px;
  font-size: 17px;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s ease;
  &:hover {
    background-color: blueviolet;
    color: white;
  }
`;

const SearchFood = styled.div`
  border: 1.5px solid blueviolet;
  border-radius: 8px;
  display: flex;
  align-items: center;
  width: 250px;
  height: 42px;
  overflow: hidden;
  padding: 5px;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  border: 0;
  outline: 0;
  font-size: 16px;
  background-color: transparent;
`;

const Span = styled.span`
  font-size: 25px;
  margin-right: 5px;
  padding-top: 10px;
`;
