

import React from 'react';

import { Container } from '../CardMusic/styles';

function CardMusic(props) {
  return (
   <Container>
      <img src={`${props.card.artist.picture_small}`} alt= {`${props.card.artist.picture_small}`} />
      <div>
      <strong>{props.card.title_short}</strong><br></br>
      <span>{props.card.artist.name}</span>
      </div>
     


   </Container>
  );
}

export default CardMusic;

