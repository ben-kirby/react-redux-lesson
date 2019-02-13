import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <h1>&#x265A; &#x265A; &#x265A; &#x265A; &#x265A; Help Queue &#x265A; &#x265A; &#x265A; &#x265A; &#x265A;</h1>
      <Link to="/">Home</Link> | <Link to="/newticket">Create Ticket</Link>
    </div>
  );
}

export default Header;
