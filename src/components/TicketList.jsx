import React from 'react';
import Ticket from './Ticket';

var masterTicketList = [
  {
    symbol: '\u26FA',
    names:  'Thato and Haley',
    location: '3A',
    issue: 'Home page not working.'
  },
  {
    symbol:  '⛽',
    names: 'Sleater and Kinney',
    location: '4B',
    issue: 'Out of gas.'
  },
  {
    symbol:  '⛸',
    names: 'Imani & Jacob',
    location: '9F',
    issue: 'Can\'t skate by.'
  },
  {
    symbol:  '🙀',
    names: 'Test 1 and Test 2',
    location: '9F',
    issue: 'React not working as expected issue.'
  },
  {
    symbol:  '\u267A',
    names: 'Test 3 and Test 4',
    location: '9F',
    issue: 'Stuck inside infinite loop.'
  },

];

function TicketList(){
  return (
    <div>
      <hr/>
      {masterTicketList.map((ticket, index) =>
        <Ticket symbol={ticket.symbol}
          names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          key={index}/>
      )}
    </div>
  );
}

export default TicketList;
