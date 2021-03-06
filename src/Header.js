import React from 'react';
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar } from "@material-ui/core";
function Header() {
  return (
    <div className='header'>
     
       <img className = "header_icon"  
       src = "http://assets.stickpng.com/images/580b57fcd9996e24bc43c513.png" alt = ""/>
      <div className = 'header_center'>
        <input type = "text"/>
        <SearchIcon/>
        
        
      </div>
      <div className = 'header_right'>
        <p>Become a host</p>
        <LanguageIcon/>
        <ExpandMoreIcon/>
        <Avatar/>
      </div>
    </div>
  );
}

export default Header;
