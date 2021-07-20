import React from "react";
import check from "../images/icon-check.svg";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  .popUp {
    background: white;
    width: 525px;
    ${"" /* height: 450px; */}
    padding: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    ${"" /* justify-content: center; */}
    border-radius: 7px;
    @media (max-width: 768px) {
      width: 350px;
      padding: 2.5rem;
    }
  }
  img {
    margin-bottom: 3rem;
    @media (max-width: 768px) {
      margin-bottom: 1.5rem;
    }
  }
  .bold {
    font-weight: 700;
    font-size: 1.2rem;
    margin-bottom: 1rem;
    @media (max-width: 768px) {
      margin-bottom: 1.5rem;
      font-size: 1.1rem;
    }
  }
  .light {
    text-align: center;
    color: hsl(0, 0%, 48%);
    font-weight: 400;
    line-height: 1.5rem;
    font-size: 0.95rem;
    @media (max-width: 768px) {
      font-size: 0.85rem;
    }
  }
  button {
    width: 8rem;
    height: 3rem;
    border-style: none;
    background: hsl(176, 50%, 47%);
    border-radius: 50px;
    color: white;
    font-weight: 500;
    font-size: 1rem;
    margin-top: 2rem;
    cursor: pointer;
    transition: all 220ms ease-in-out;
    &:hover {
      background: hsl(176, 72%, 28%);
    }
    @media (max-width: 768px) {
      font-size: 0.85rem;
      width: 7rem;
    }
  }
`;

export default class About extends React.Component {
  constructor(){
    super();
  } 
  render(){
  return this.props.trigger ? (
    <Container >
      <div className="popUp">
        <img src={check} alt="Check" />
        <p className="bold">Thanks for your support!</p>
        <p className="light">
          Your pledge brings us one step closer to sharing Mastercraft Bamboo
          Monitor Riser worldwide. You will get an email once our campaign is
          completed.
        </p>
        <button onClick={this.props.gotItButton}>Got it!</button>
      </div>
    </Container>
  ) : (
    ""
  );
}
}

