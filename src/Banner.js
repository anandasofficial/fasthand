import { Button } from "@material-ui/core";
import React from "react";
import  './Banner.css'

function Banner() {
  return (
    <div className="banner">
        <div className = 'banner_search'>
            <Button className = 'banner_searchButton'
            variant = 'outlined'>Search Datess</Button>
        </div>
        <div className = 'banner_info'>
            <h1>entreprenurshipo</h1>
            <h5>Hey You! no</h5>
            <button variant = 'outlined'>Explore Nearby</button>
        </div>
    </div> 
  );
}

export default Banner;
