import React from 'react';
import Header from './Header';
import TicketList from './TicketList';
import NewTicketForm from './NewTicketForm';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';
import MySampleImage from '../assets/images/testimage.png';

function App(){
  const mainImageStyle = {
    width: "25%",
    height: "auto"
  }
  return (
    <div>
      <div>
        <img src={MySampleImage} style={mainImageStyle}/>
      </div>
      <Header/>
      <Switch>
        <Route exact path='/' component={TicketList} />
        <Route path='/newticket' component={NewTicketForm} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
