import React from 'react';

import { Container } from './styles';
import CardMucic from '../CardMusic'

function SidBar(props) {

  return (
   <Container className='SideBar'>
      <h2>As mais tocadas do Brasil</h2>
      
      {props.cards.map((item, index) => 
         <CardMucic card = {item} key={index}></CardMucic>
      )}

      <h1>teste</h1>
      

   </Container>
  );
}

export default SidBar;