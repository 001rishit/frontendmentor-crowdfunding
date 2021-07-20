import React from "react";
import styled from "styled-components";
import logo from "../images/logo.svg";
import hamburger from "../images/icon-hamburger.svg";
import MobileNav from "./MobileNav";

const Brand = styled.img`
  text-decoration: none;
  margin-left: 8vw;
  padding: 2.2rem;
  @media (max-width: 768px) {
    margin-left: 0px;
  }
`;

const Nav = styled.nav`
  width: 100vw;
  color: white;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  position: relative;
  z-index: 4;
`;


const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-right: 10vw;
  font-weight: 500;
  width: 260px;
  margin-top: 0px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  li {
    transition: all 220ms ease-in-out;
    &:hover {
      cursor: pointer;
    }
    a {
      text-decoration: none;
      color: white;
    }
  }
`;

const ListWrapper = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Hamburger = styled.img`
  width: 0.9rem;
  height: 0.9rem;
  margin-left: 2rem;
  margin-top: 2.4rem;
  cursor: pointer;
  transition: all 220ms ease-in-out;
  @media (min-width: 768px) {
    display: none;
  }
`;


const HamburgerWrapper = styled.div`
  width: 4rem;
  ${'' /* transition: all 220ms ease-in-out; */}
  &.isClicked {
    display: none;
  }
`;

const A = styled.a`
  transition: all 220ms ease-in-out;
  &.isClicked {
    display: none;
  }
`;


export default class NavigationBar extends React.Component {

  constructor(){
    super();
    this.state={
      isClicked:false
    };
  }
   crossNavbarHandler = (value) => {
    this.setState({
      isClicked:value
    });
  }


  render(){

  return (
    <Nav role="navigation">
      {/* <A href="#">crowdfund</A> */}
      <A href="#titlePage" className={this.state.isClicked ? "isClicked" : null}>
        <Brand src={logo} alt="Crowd Fund" />
      </A>

      <HamburgerWrapper className={this.state.isClicked ? "isClicked" : null}>
        <Hamburger
          src={hamburger}
          alt="hamburger"
          onClick={() => {
           this.setState({
             isClicked: ! this.state.isClicked
           });
          }}
        />
      </HamburgerWrapper>

      <MobileNav
        isClicked={this.state.isClicked}
        crossNavbar={this.crossNavbarHandler}
        cross={() => {
          this.setState({
            isClicked: false
          });
        }}
      />

      <ListWrapper>
        <List>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#discover">Discover</a>
          </li>
          <li>
            <a href="#getStarted">Get Started</a>
          </li>
        </List>
      </ListWrapper>
    </Nav>
  );
}
}
