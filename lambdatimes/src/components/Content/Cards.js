import React, { Component } from 'react';+
import PropTypes from 'prop-types';
import Card from './Card';

const Cards = props => {
  return (
    <div className="cards-container">
      {
        props.cards.map((card, idx) => <Card card={card} key={idx}/>)
        /* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
    </div>
  )
}
Cards.PropTypes = {
  cards: PropTypes.arrayOf(PropTypes.object)
}

// Make sure you include prop types for all of your incoming props

export default Cards;