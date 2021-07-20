import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background: white;
  box-shadow: 1px 1px 100px hsl(0, 0%, 90%);
  margin-top: 2rem;
  margin-bottom: 0;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border-radius: 7%;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
  p {
      color: hsl(0, 0%, 48%);
      font-weight: 700;
      font-size: 1rem;
      @media (max-width: 768px) {
        font-size: 0.85rem;
      }
  }
  a {
      text-decoration: none;
      color: hsl(176, 50%, 47%);
      transition: all 220ms ease-in-out;
      &:hover {
          color: hsl(176, 72%, 28%);
      }
      @media (max-width: 768px) {
        font-size: 0.85rem;
      }
  }
  .frontendMentor {
    @media (max-width: 768px) {
      margin-bottom: 0.5rem;
    }
  }
`;

export default class Footer extends React.Component {
  constructor(){
    super();
  }
  render(){
  return (
    <Container>
      <p className="frontendMentor">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io/">Frontend Mentor</a>
      </p>

      <p>
        Solution by <a href="https://github.com/001Rishit">Rishit</a>
      </p>
    </Container>
  );
 }
}

