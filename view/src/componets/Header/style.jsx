import styled from "styled-components";

import { AiOutlineHome } from 'react-icons/ai';
import { BiSearchAlt } from 'react-icons/bi';

export const Container = styled.header`
   grid-area: head;

   background-color: var(--segundary);
   display: flex;
   align-items: center;
   justify-content: space-between;

   padding: 0 3rem;
   color:var(--white);

   >h1{
      font-size: 3rem;


      @media (max-width:600px){
         display: none;


      }
   }

`

export const ShowMobil = styled.div`
   display: flex;
   align-items: center;

   gap: 2rem;

   .formMobil{
      width: 100%;

      input{
         width: 100%;
         height: 3rem;

         padding: 0 5px;
         border: none;
         border-radius: 10px;

         &:focus{
            outline: 0;
         }
      }
   }

   @media (min-width: 600px){
      display: none;
   }
`
export const IconHome = styled(AiOutlineHome)`
   /* color: var(--white); */
   cursor: pointer;
   font-size: 2.5rem;
`

export const IconSearch = styled(BiSearchAlt)`
   font-size: 2.5rem;

   cursor: pointer;
`