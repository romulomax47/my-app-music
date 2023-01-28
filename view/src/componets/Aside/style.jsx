
import styled from "styled-components";
import {BiHomeAlt, BiSearchAlt} from 'react-icons/bi';

export const Container = styled.div`

   grid-area: asid;
   height: 100%;
   width: 100%;

   background-color: var(--primary);
   color: var(--white);

   padding: 2rem 1.5rem;

`

export const Header = styled.header`
   width: 100%;
   text-align: center;
   font-size: 2rem;
   margin-bottom: 2rem;

`

export const Home = styled.button`
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
 
`

export const HomeIcon = styled(BiHomeAlt)`
   font-size: 2.5rem;
   color: var(--white);
`

export const Search = styled(Home)`

`
export const SearchIcon = styled(BiSearchAlt)`
     font-size: 2.5rem;
   color: var(--white);
`