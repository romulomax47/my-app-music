

import styled from 'styled-components';

export const Grid = styled.div`
  max-width: 1800px;
  display: grid;

  grid-template-columns: 30% 70%;
  grid-template-rows: 15% 70% 15%;

  overflow: hidden;
  
  grid-template-areas: 
   'asid head head'
   'asid main main'
   'asid foot foot'
  ;

  height: 100vh;

  @media (max-width:600px ){

    grid-template-columns: 20% 80%;
    grid-template-rows: 15% 70% 15%;

    grid-template-areas: 
   'asid head'
   'main main'
   'foot foot'
  ;
  }

`;
