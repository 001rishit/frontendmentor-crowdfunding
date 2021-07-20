import React from "react";
import logo from "../images/logo-mastercraft.svg";
import bookmarkGreen from "../images/icon-bookmark-green.svg";
import bookmarkGray from "../images/icon-bookmark.svg";
import styled from "styled-components";



const P = styled.p`
  color: hsl(0, 0%, 48%);
  margin-top: 1rem;
  font-weight: 400;
  font-size: 1rem;
  @media (max-width: 768px) {
    font-size: 0.85rem;
    line-height: 1.5rem;
  }
`;

const BackerButton = styled.button`
  width: 12rem;
  height: 3.5rem;
  border-style: none;
  background: hsl(176, 50%, 47%);
  border-radius: 50px;
  color: white;
  font-weight: 700;
  font-size: 1rem;
  transition: all 220ms ease-in-out;
  &:hover {
    cursor: pointer;
    background: hsl(176, 72%, 28%);
  }
  @media (max-width: 768px) {
    width: 12rem;
    margin-right: 0.5rem;
    font-size: 0.85rem;
  }
`;

const BookmarkButtonBox = styled.div`
  width: 12rem;
  height: 3.5rem;
  border-style: none;
  background: hsl(0, 0%, 90%);
  border-radius: 50px;
  color: hsl(0, 0%, 48%);
  font-weight: 700;
  font-size: 1rem;
  display: flex;
  flex-direction: row;
  cursor: pointer;
  transition: all 220ms ease-in-out;
  &:hover {
    color: black;
  }
  @media (max-width: 768px) {
    width: 3.5rem;
    height: 3.5rem;
  }
`;

const TitleContainer = styled.div`
  background-color: white;
  position: relative;
  padding: 3rem;
  box-shadow: 1px 1px 100px hsl(0, 0%, 90%);
  border-radius: 7px;
  @media (max-width: 768px) {
    padding: 2.5rem;
  }
`;

const TitleImage = styled.img`
  position: absolute;
  top: -2rem;
  left: 47%;
  @media (max-width: 768px) {
    left: 43%;
  }
`;

const HeadingBox = styled.div`
  text-align: center;
`;

const Heading = styled.h1`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 0;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 3rem;
  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`;



const BookmarkImg = styled.img``;

const BookmarkButton = styled.p`
  margin: 1rem;
  &:hover {
    color: black;
  }
  &.greenText {
    color: hsl(176, 72%, 28%);
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export default class TitleCard extends React.Component {
  constructor(){
    super();
    this.state={
      isBookmarked:false
    };
  } 
 

   buttonHandler = () => {
    alert("Please press ctrl / cmd + D to bookmark this page");
    this.setState({
      isBookmarked:true
    });
  };
render(){
  return (
    <TitleContainer id="titlePage">
      <TitleImage src={logo} alt="mastercraft-logo" />
      <HeadingBox>
        <Heading>Mastercraft Bamboo Monitor Riser</Heading>
        <P>
          A beautiful & handcrafted monitor stand to reduce neck and eye strain.
        </P>
      </HeadingBox>
      <ButtonContainer>
        <BackerButton onClick={this.props.backerButton}>
          Back this project
        </BackerButton>
        <BookmarkButtonBox onClick={this.buttonHandler}>
          <BookmarkImg
            src={this.state.isBookmarked ? bookmarkGreen : bookmarkGray}//bookmarkGreen
            alt="bookmark"
          />
          <BookmarkButton className={this.state.isBookmarked ? "greenText" : "grayed"}>
            {this.state.isBookmarked ? "Bookmarked" : "Bookmark"}
          </BookmarkButton>
        </BookmarkButtonBox>
      </ButtonContainer>
    </TitleContainer>
  );
}
}

