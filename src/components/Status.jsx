import React from "react";
import styled from "styled-components";


const Bold = styled.p`
  font-weight: 700;
  font-size: 2rem;
  transition: all 220ms ease-in-out;
  @media (max-width: 768px) {
    font-size: 1.9rem;
  }
`;

const Light = styled.p`
  font-weight: 400;
  color: hsl(0, 0%, 48%);
  font-size: 0.9rem;
  margin-top: 0.5rem;
  transition: all 220ms ease-in-out;
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const Container = styled.div`
  background-color: white;
  padding: 3rem;
  box-shadow: 1px 1px 100px hsl(0, 0%, 90%);
  border-radius: 7px;
  margin-top: 1.5rem;
  @media (max-width: 768px) {
    padding: 2.5rem;
  }
  .statusBox {
    display: flex;
    flex-direction: row;
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
  .card-1 {
    border: solid hsl(0, 0%, 80%);
    border-width: 0 1px 0 0;
    width: 180px;
    @media (max-width: 768px) {
      border: none;
      padding: 0;
      text-align: center;
    }
  }
  .card-2 {
    padding-left: 3rem;
    padding-right: 4.5rem;
    @media (max-width: 768px) {
      padding: 0;
      border: solid hsl(0, 0%, 80%);
      border-width: 1px 0 1px 0;
      text-align: center;
      margin-top: 1.5rem;
      margin-bottom: 1.5rem;
      padding-top: 1.5rem;
      padding-bottom: 1.5rem;
    }
  }
  .card-3 {
    border: solid hsl(0, 0%, 80%);
    border-width: 0 0 0 1px;
    padding-left: 3rem;
    @media (max-width: 768px) {
      border: none;
      padding: 0;
      text-align: center;
    }
  }
  progress[value] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: none;
    width: 600px;
    margin-top: 2.5rem;
    height: 0.8rem;
    transition: all 220ms ease-in-out;
    background-color: hsl(0, 0%, 95%);
    color: hsl(176, 50%, 47%);
    border-radius: 10px;
    @media (max-width: 768px) {
      width: 250px;
    }
  }
  progress[value]:: -webkit-progress-bar {
    background-color: hsl(0, 0%, 95%);
    ${"" /* background-color: #e6f8fa; */}
    border-radius: 10px;
  }
  progress[value]:: -moz-progress-bar {
    border-radius: 10px;
    background-color: hsl(176, 50%, 47%);
  }
  progress[value]:: -webkit-progress-value {
    background-color: hsl(176, 50%, 47%);
    border-radius: 10px;
  }
`;



export default class Status extends React.Component {
  constructor(){
    super();
  } 
  render(){
  return (
    <Container  id="discover">
      <div className="statusBox">
        <div className="card-1">
          <Bold>{this.props.amount}</Bold>
          <Light>of $100,000 backed</Light>
        </div>

        <div className="card-2">
          <Bold>{this.props.backers}</Bold>
          <Light>total backers</Light>
        </div>

        <div className="card-3">
          <Bold>{this.props.daysLeft}</Bold>
          <Light>days left</Light>
        </div>
      </div>

      <progress value={this.props.amountWOFormat} max={100000} />
    </Container>
  );
}
}

