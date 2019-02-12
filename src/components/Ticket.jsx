import React from 'react';
import PropTypes from 'prop-types';

function Ticket(props){
  return (
    <div>
        <style jsx>{`
          h1 {
            font-size: 40pt;
          }
          h3 {
            background-color: lightcyan;
            }
          div {
            background-color: rgba(0, 0, 0, 0.25) !important;
          }
        `}</style>
      <h1>{props.symbol}</h1>
      <h3>{props.location} - {props.names}</h3>
      <p><em>{props.issue}</em></p>
      <p>test x = \u0077</p>
    <hr/>
    </div>
  );
}

Ticket.propTypes = {
  symbol: PropTypes.string,
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string
};

export default Ticket;
