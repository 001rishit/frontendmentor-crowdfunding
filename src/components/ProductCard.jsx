import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border: solid 1px hsl(0, 0%, 80%);
  padding: 2rem;
  border-radius: 10px;
  padding-bottom: 1.5rem;
  margin-bottom: 2rem;
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
  &.outOfStock {
    cursor: default;
    opacity: 0.5;
    .rewardsButton {
      background: hsl(0, 0%, 50%);
      cursor: default;
      &:hover {
        background: hsl(0, 00%, 50%);
      }
    }
  }
  .topPart {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media (max-width: 768px) {
      flex-direction: column;
    }
    h3 {
      font-weight: 700;
      font-size: 1.2rem;
      @media (max-width: 768px) {
        margin-bottom: 0.5rem;
        font-size: 1rem;
      }
    }
    p {
      color: hsl(176, 50%, 47%);
      font-weight: 500;
      font-size: 0.95rem;
      margin-bottom: 2rem;
    }
  }
  .description {
    color: hsl(0, 0%, 48%);
    font-weight: 400;
    font-size: 0.95rem;
    margin-bottom: 2rem;
    line-height: 1.5rem;
    @media (max-width: 768px) {
      font-size: 0.8rem;
      margin-bottom: 1rem;
    }
  }
  .bottomPart {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 1rem;
    @media (max-width: 768px) {
      flex-direction: column;
    }
    p {
      color: hsl(0, 0%, 47%);
      font-size: 0.95rem;
      transition: all 220ms ease-in-out;
      @media (max-width: 768px) {
        font-size: 0.85rem;
      }
      span {
        font-weight: 700;
        color: black;
        font-size: 2rem;
        position: relative;
        top: 5px;
        margin-right: 5px;
        @media (max-width: 768px) {
          font-size: 1.8rem;
        }
      }
    }
    button {
      width: 10rem;
      height: 3.2rem;
      border-style: none;
      background: hsl(176, 50%, 47%);
      border-radius: 50px;
      color: white;
      font-weight: 500;
      font-size: 1rem;
      cursor: pointer;
      transition: all 220ms ease-in-out;
      &:hover {
        background: hsl(176, 72%, 28%);
      }
      @media (max-width: 768px) {
        margin-top: 2rem;
        font-size: 0.85rem;
      }
    }
  }
`;

export default class ProductCard extends React.Component {
  constructor(){
    super();
  } 
  render(){
  return (
    <Container className={this.props.itemsLeft < 1 ? "outOfStock" : null}>
      <div className="topPart">
        <h3>{this.props.product}</h3>
        <p>Pledge {this.props.minPledge} or more</p>
      </div>

      <p className="description">{this.props.description}</p>

      <div className="bottomPart">
        <p>
          <span>{this.props.itemsLeft}</span> left
        </p>
        <button
          className="rewardsButton"
          onClick={() => {
            this.props.rewardsButton(this.props.id);
          }}
        >
          Select Reward
        </button>
      </div>
    </Container>
  );
}
}

