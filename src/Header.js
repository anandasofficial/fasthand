import React from 'react';
import './Header.css'
function Header() {
  return (
    <div className='header'>
     
       <img className = "header_logo"  
       src = "https://www.searchpng.com/wp-content/uploads/2019/01/Amazon-Logo.png"/>
    <div className = "header_search">
    <input className = "header_searchInput" type = "text" />

    </div> 
    <div className = "header_nav">
    <div className = "header_option">
    <span className = 'header_optionLineOn'>Hello World</span>
    </div>
    </div>
    </div>
  );
}

export default Header;
