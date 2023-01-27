
import styled from "styled-components";
import {BiHomeAlt, BiSearchAlt} from 'react-icons/bi';

export const Container = styled.div`

   grid-area: asid;
   height: 100%;
   width: 100%;

   background-color: var(--primary);
   color: var(--white);

   padding: 20px 15px;

`

export const Header = styled.div`
   width: 100%;
   text-align: center;
   
   margin-bottom: 20px;

`

export const Home = styled.div`
   width: 100%;
   background-color: var(--segundary);

   height: 40px;
   padding: 15px 20px;
   border-radius: 10px;
   display: flex;
   align-items: center;
   gap: 15px;

   margin-bottom: 20px;
   cursor: pointer;

   >span{
      color: var(--white);
      text-decoration: none;
      font-size: 25px;
      font-weight: bolder;
   }
 
`

export const HomeIcon = styled(BiHomeAlt)`
   font-size: 25px;
`

export const Search = styled.div`

    width: 100%;
   background-color: var(--segundary);

   height: 40px;
   padding: 15px 20px;
   border-radius: 10px;
   display: flex;
   align-items: center;
   gap: 15px;
   cursor: pointer;

   >span{
      color: var(--white);
      text-decoration: none;
      font-size: 25px;
      font-weight: bolder;
   }


`
export const SearchIcon = styled(BiSearchAlt)`
     font-size: 25px;
`