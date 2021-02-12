import React from "react";
import Banner from './Banner';
import  './Home.css'
function Home() {
  return (
    <div className="home">
        
      <Banner/>
      <div className = 'home_section'>
        <card/>
        <card/>
        <card/>
        </div>
        <div className = 'home_section'>
          <card/>
          <card/>
          <card/>
        </div>
       
    </div>
  );
}

export default Home;
