import React from "react";
import styled from "styled-components";
import desktopImg from "../images/image-hero-desktop.jpg";
import mobileImg from "../images/image-hero-mobile.jpg";

const Image = styled.img`
  position: absolute;
  top: 0px;
  width: 1400px;
  z-index: -1;
  width: 100vw;
  height: 400px;
`;

export default class ImageOnTop extends React.Component {
  constructor(){
    super();
    this.state={
      bgImage: window.innerWidth>768 ? desktopImg : mobileImg,
    }
  } 
 initialBgImage = () => {
    if (window.innerWidth > 768) {
      return desktopImg;
    } else {
      return mobileImg;
    }
  };

  
   resizeHandler = () => {
    if (window.innerWidth > 768) {
      this.setState({
        bgImage:desktopImg
      });

      
    } else {
      this.setState({
        bgImage:mobileImg
      });
      
    }
  }

  componentDidMount=() => {
    window.addEventListener("resize", this.resizeHandler);
  }
  componentWillUnmount=()=>{
    window.removeEventListener("resize", this.resizeHandler);
  }
render(){
  return <Image role="background-image" src={this.state.bgImage} alt="top" />;
}
}

