import React from "react";
import styled from "styled-components";


const Payment = styled.div`
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }
  margin-top: 1.8rem;
  transition: all 220ms ease-in-out;
  hr {
    background-color: white;
    border: none;
    border-top: 0.5px solid hsl(0, 0%, 80%);
    width: 100%;
    margin-bottom: 1.5rem;
  }
  .hiddenPart {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .pledge,
    textarea {
      background: white;
      color: hsl(0, 0%, 48%);
      font-family: "Commissioner", "sans serif";
      font-size: 0.95rem;
      font-weight: 400;
      width: 120px;
      outline: none;
      border: none;
      cursor: pointer;
      transition: all 220ms ease-in-out;
      &::placeholder {
        color: hsl(0, 0%, 48%);
        font-family: "Commissioner", "sans serif";
        font-size: 0.95rem;
        font-weight: 400;
        background: white;
        outline: none;
        border: none;
      }
      @media (max-width: 768px) {
        font-size: 0.85rem;
        margin-left: 1rem;
        &::placeholder {
          font-size: 0.85rem;
        }
      }
    }
    .buttonBox {
      width: 220px;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      @media (max-width: 768px) {
        margin-top: 1.5rem;
      }
      .minPledgeButton {
        border: none;
        background: white;
        height: 2.8rem;
        width: 6rem;
        border: 1px solid black;
        border-color: hsl(176, 50%, 47%);
        border-radius: 50px;
        color: hsl(0, 0%, 48%);
        font-size: 0.95rem;
        cursor: pointer;
        transition: all 220ms ease-in-out;
        &:hover {
          border: 2px solid hsl(176, 72%, 28%);
        }
        .amount {
          color: black;
          font-weight: 700;
          margin-left: 5px;
          margin-right: 2px;
        }
        .glyph {
          font-weight: 400;
          color: hsl(176, 50%, 47%);
          font-size: 1rem;
        }
      }
      .continueButton {
        width: 6rem;
        height: 2.8rem;
        border-style: none;
        background: hsl(176, 50%, 47%);
        border-radius: 50px;
        color: white;
        font-weight: 500;
        font-size: 0.9rem;
        cursor: pointer;
        transition: all 220ms ease-in-out;
        @media (max-width: 768px) {
          font-size: 0.85rem;
        }
        &:hover {
          background: hsl(176, 72%, 28%);
        }
      }
    }
  }
`;

const Container = styled.div`
  border-radius: 10px;
  padding: 1.8rem;
  position: relative;
  margin-top: 1.5rem;
  transition: all 300ms ease-in-out;
  @media (max-width: 768px) {
    padding: 1.5rem;
    padding-top: 2rem;
  }
  &.unChecked {
    border: 1px solid hsl(0, 0%, 80%);
  }
  &.checked {
    border: 2px solid hsl(176, 50%, 47%);
  }
  .outOfStock {
    opacity: 0.5;
    cursor: default;
    transition: all 220ms ease-in-out;
    .topRow {
      .titleWrapper {
        .titleClick {
          cursor: default;
          &:hover {
            color: black;
          }
        }
      }
    }
  }
  .topRow {
    display: flex;
    flex-direction: row;
    height: 25.56px;
    @media (max-width: 768px) {
      flex-direction: row;
    }
    .checkBox {
      width: 1.6rem;
      height: 1.6rem;
      background: white;
      border: 1px solid;
      border-radius: 100%;
      border-color: hsl(0, 0%, 80%);
      transition: all 220ms ease-in-out;
      .checkedButton {
        width: 60%;
        height: 60%;
        border-radius: 100%;
        background: hsl(176, 50%, 47%);
        margin-left: auto;
        margin-right: auto;
        transition: all 220ms ease-in-out;
      }
    }
    .titleWrapper {
      display: flex;
      flex-direction: row;
      @media (max-width: 768px) {
        flex-direction: column;
        position: relative;
        bottom: 5px;
      }
      h3 {
        margin-left: 1.5rem;
        font-weight: 700;
        font-size: 1rem;
        color: black;
        cursor: pointer;
        transition: all 220ms ease-in-out;
        &:hover {
          color: hsl(176, 50%, 47%);
        }
        @media (max-width: 768px) {
          font-size: 0.95rem;
        }
      }
      .minPledge {
        margin-left: 1.5rem;
        font-weight: 500;
        font-size: 1rem;
        color: hsl(176, 50%, 47%);
        position: relative;
        bottom: 1.3px;
        @media (max-width: 768px) {
          font-size: 0.95rem;
          margin-top: 0.5rem;
        }
      }
    }
    .itemsLeft {
      position: absolute;
      right: 1.8rem;
      top: 24px;
      font-weight: 700;
      color: black;
      font-size: 1.2rem;
      transition: all 220ms ease-in-out;
      @media (max-width: 768px) {
        display: none;
      }
      .normalP {
        color: hsl(0, 0%, 48%);
        font-weight: 400;
        font-size: 0.95rem;
        margin-left: 0.3rem;
      }
    }
  }
  .description {
    margin-left: 3rem;
    margin-top: 0.5rem;
    font-size: 0.87rem;
    margin-bottom: 0;
    color: hsl(0, 0%, 48%);
    line-height: 1.5rem;
    @media (max-width: 768px) {
      font-size: 0.85rem;
      margin-top: 2rem;
      margin-left: 0px;
    }
  }
  .itemsLeftMobile {
    font-weight: 700;
    color: black;
    font-size: 1rem;
    margin-top: 1.5rem;
    transition: all 220ms ease-in-out;
    @media (min-width: 768px) {
      display: none;
    }
    .normalPMobile {
      color: hsl(0, 0%, 48%);
      font-weight: 400;
      font-size: 0.85rem;
      margin-left: 0.3rem;
    }
  }
`;

export default class ProductPopUp extends React.Component {
  constructor(){
    super();
    this.state={
      clicked:null,
      Style : { opacity: 0.5 }
    };
  } 
  

 toggle = (index) => {
    if (this.state.clicked === index) {
      this.setState(
        {
          clicked:null
        });
    }
    else this.setState(
      {
        clicked:index
      } );
  };

 
render(){
  return (
    <Container
      className={
        this.state.clicked === this.props.index && this.props.itemsLeft > 0 ? "checked" : "unChecked"
      }
      style={this.props.itemsLeft < 1 ? this.state.Style : null}
    >
      <div className={this.props.itemsLeft < 1 ? "outOfStock" : null}>
        <div className="topRow">
          <button className="checkBox">
            <div
              className={
                this.state.clicked === this.props.index && this.props.itemsLeft > 0
                  ? "checkedButton"
                  : null
              }
            ></div>
          </button>
          <div className="titleWrapper">
            <h3 className="titleClick" onClick={() => this.toggle(this.props.index)}>
              {this.props.product}
            </h3>
            <p className="minPledge">Pledge {this.props.minPledge} or more</p>
          </div>
          <p className="itemsLeft">
            {this.props.itemsLeft} <span className="normalP">left</span>
          </p>
        </div>
        <p className="description">{this.props.description}</p>
        <p className="itemsLeftMobile">
          {this.props.itemsLeft} <span className="normalPMobile">left</span>
        </p>

        {this.state.clicked === this.props.index && this.props.itemsLeft > 0 ? (
          <Payment>
            <hr />
            <div className="hiddenPart">
              <input
                type="number"
                name="numberInput"
                placeholder="Enter your pledge"
                className="pledge"
                onChange={(event) => {
                  this.props.payChange(event, this.props.index);
                }}
              />
              <div className="buttonBox">
                <button
                  className="minPledgeButton"
                  onClick={() => {
                    this.props.payMin(this.props.index);
                  }}
                >
                  ${" "}
                  <span className="amount">
                    {this.props.minPledge.substring(1)}{" "}
                  </span>{" "}
                  <span className="glyph">|</span>
                </button>

                <button
                  className="continueButton"
                  onClick={() => {
                    this.props.pay(this.props.index);
                  }}
                >
                  Continue
                </button>
              </div>
            </div>
          </Payment>
        ) : null}
      </div>
    </Container>
  );
}
}
