import React from 'react';
import vending from "./images/vending.jpg";
import MyNavBar from './Navbar';


function HomePage() {
  return (
    <div>
      <img src={vending} alt="Vending Machine" />
      <MyNavBar />
    </div>
  );
}

export default HomePage;