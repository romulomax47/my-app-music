
import styled from "styled-components";
import { AiOutlineHome } from 'react-icons/ai';
import { BiSearchAlt } from 'react-icons/bi';

export const Container = styled.aside`

   grid-area: asid;
   height: 100%;
   width: 100%;

   background-color: var(--primary);
   color: var(--white);

   padding: 2rem 1.5rem;

   @media (max-width: 600px){
      background-color: var(--segundary);

      padding: 0;
   }


`

export const Mobil = styled.div`
   display: none;

   @media (max-width: 600px){

      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      
   }
`

export const Header = styled.header`
   width: 100%;
   text-align: center;
   font-size: 2rem;
   margin-bottom: 2rem;

   @media (max-width: 600px){
      display: none;
   }

`

export const ButtonHome = styled.button`
   width: 100%;
   background-color: var(--segundary);

   height: 4rem;
   padding: 1.5rem 2rem;
   border-radius: 1rem;
   display: flex;
   align-items: center;
   gap: 1.5rem;

   margin-bottom: 2rem;
   cursor: pointer;

   >span{
      color: var(--white);
      text-decoration: none;
      font-size: 2.5rem;
      font-weight: bolder;
   }

   @media (max-width: 600px){
      display: none;
   }
 
`

export const IconHome = styled(AiOutlineHome)`
   font-size: 2.5rem;
   color: var(--white);
`

export const FormSearch = styled.form`

   width: 100%;
   background-color: var(--segundary);

   
   height: 4rem;
   padding: 1.5rem 2rem;
   border-radius: 1rem;
   display: flex;
   align-items: center;
   gap: 1.5rem;
   input{
      width: 100%;
      height: 4rem;
      
      background-color: var(--segundary);
      border: none;

      &::placeholder{
         color: var(--white);
         font-size: 2.5rem;
         font-weight: 600;
      }

      &:focus{
         outline: none;
         font-size: 2.5rem;
         color: var(--white)
      }
   }

`
export const IconSearch = styled(BiSearchAlt)`
   font-size: 2.5rem;
   color: var(--white);
`