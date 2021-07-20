
import React from "react";
import styled from "styled-components"
import Navbar from './components/Navbar.jsx';
import ImageOnTop from './components/ImageOnTop';
import ProductCard from './components/ProductCard';
//import ProductPopUp from './components/ProductPopUp';
import ProductCardPopUp from './components/ProductCardPopUp';
import Status from './components/Status';
import ThankYou from './components/ThankYou';
import TitleCard from './components/TitleCard';
import Products from './components/Products';
import About from './components/About';
import Footer from './components/Footer';


const Container = styled.div`
  margin-top: 13rem;
  width: 700px;
  @media (max-width: 768px) {
    width: 330px;
  }
`;


const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding-bottom: 0;
`;


const Component = styled.div`
  padding: 3rem;
  box-shadow: 1px 1px 100px hsl(0, 0%, 90%);
  margin-top: 1.5rem;
  border-radius: 7px;
  padding-bottom: 1rem;
  @media (max-width: 768px) {
    padding: 2.5rem;
  }
`;

export default class App extends React.Component {
  constructor(){
    super();
    this.state={
      totalAmount:89914,
      totalBakers:5007,
      Data:Products,
      cardTrigger:false,
      thankYouTrigger:false,
      freeValue:0
    };
  } 

 formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  });

 

  //* TO open the {ProductCardPopUp} page (modal) onClick {Rewards} button
 openRewardsPage = (index) => {
    if (this.state.Data[index].itemsLeft > 0) {
      this.setState({
        cardTrigger:true
      });
    } else {
      this.setState({
        cardTrigger:false
      });
    }
  };

  //* To close {ProductCardPopUp} page (modal)
 crossRewardsPage = () => {
  this.setState({
    cardTrigger:false
  });
  };

  //* To close {ThankYouPopup} (modal)
   gotItHandler = () => {
    this.setState({
      thankYouTrigger:false,
      cardTrigger:false
    });
  };

  //* Updates the value of "pay" inside {Data} onChange in number input in {ProductPopUp}
 payChangeHandler = (event, index) => {
  let newValue = event.target.value;
   function setData(prevData)  {
      prevData[index].pay = newValue;
      return prevData;
    }
  this.setState({
    Data:setData(this.state.Data),
  });
    
  };

  //* To pay the "minimum pledge" onClick white button in {ProductPopUp}
   minPayment = (index) => {
  
    function setData(prevData)  {
      prevData[index].itemsLeft--;
      return prevData;
    }
   

    this.setState({
      totalAmount:this.state.totalAmount + this.state.Data[index].minPledge,
      totalBakers:this.state.totalBakers+1,
      Data:setData(this.state.Data),
      thankYouTrigger:true
    });
  };

 
 freeChangeHandler = (event) => {
    let newValue = event.target.value;
   
    this.setState({
      freeValue:newValue
    });
  };

  //* Payment handler for "Free Card" in {ProductCardPopUp}
   freePayHandler = () => {
   
    this.setState({
      thankYouTrigger:true,
      totalAmount: this.state.totalAmount+ parseFloat(this.state.freeValue),
      totalBakers:this.state.totalBakers+1,
      freeValue:0
    });
  };

  //* Pay the value of "pay" in {Data} and then set it to 0 for another use
 payHandler = (index) => {
    if (this.state.Data[index].pay < this.state.Data[index].minPledge) {
      alert("Minimum pledge for this product is $" + this.state.Data[index].minPledge);
    } else {
      
     function setData(prevData)  {
        prevData[index].pay = 0;
        prevData[index].itemsLeft--;
        return prevData;
      }
      this.setState({
        thankYouTrigger:true,
        totalAmount:this.state.totalAmount+ parseFloat(this.state.Data[index].pay),
        totalBakers:this.state.totalBakers+1,
        Data:setData(this.state.Data)
      });
    }
  };

  //* Open {ProductCardPopUp} onClick {Backer} button in {TitleCard}
   handleBacker = () => {
    this.setState({
      cardTrigger:true
    });
  
  };

render(){
  return (
    <Body>
      <ImageOnTop/>
      <Navbar/>
      <Container>
        <TitleCard backerButton={this.handleBacker} />
        <Status
          amount={this.formatter.format(this.state.totalAmount)}
          backers={this.formatter.format(this.state.totalBakers).substring(1)}
          daysLeft={56}
          amountWOFormat={this.state.totalAmount}
        />

        <Component>
          <About />
          <div id="getStarted">
            {this.state.Data.map((item, index) => {
              return (
                <ProductCard
                  key={index}
                  id={index}
                  product={item.product}
                  minPledge={this.formatter.format(item.minPledge)}
                  description={item.description}
                  itemsLeft={item.itemsLeft}
                  rewardsButton={this.openRewardsPage}
                />
              );
            })}
          </div>
        </Component>

        <ProductCardPopUp
          source={this.state.Data}
          trigger={this.state.cardTrigger}
          crossPopup={this.crossRewardsPage}
          change={this.payChangeHandler}
          payMin={this.minPayment}
          payButton={this.payHandler}
          freeChange={this.freeChangeHandler}
          freePay={this.freePayHandler}
        />

        <ThankYou trigger={this.state.thankYouTrigger} gotItButton={this.gotItHandler} />
        <Footer />
      </Container>
    </Body>
    
  
  );
 }
}


