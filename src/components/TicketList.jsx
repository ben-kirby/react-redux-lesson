import React from 'react';
import Ticket from './Ticket';

var masterTicketList = [
  {
    symbol: '\u26FA',
    names:  'Thato and Haley',
    location: '3A',
    issue: 'Firebase won\'t save record. Halp.'
  },
  {
    symbol:  '⛽',
    names: 'Sleater and Kinney',
    location: '4B',
    issue: 'Fox image not displaying on page, can only see duck?'
  },
  {
    symbol:  '⛸',
    names: 'Imani & Jacob',
    location: '9F',
    issue: 'Donkey picture not displaying on hover in Zoology app. :('
  },
  {
    symbol:  '🙀',
    names: 'Test 1 and Test 2',
    location: '9F',
    issue: 'React not working as expected issue.'
  },
  {
    symbol:  '\uD83D\uDE40',
    names: 'Test 3 and Test 4',
    location: '9F',
    issue: 'Angular is messy.'
  }
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
