

import {Container, Header, Home, HomeIcon, Search, SearchIcon} from './style';


export const Aside = () => {

   return ( 
      <Container>
         <Header>
            <h1>My APP MUSIC</h1>
         </Header>

         <Home>
            <HomeIcon/> 
            <span>Início</span>
         </Home>

         <Search>
            <SearchIcon/> 
            <span>Buscar</span>
         </Search>

      </Container>
   )
}