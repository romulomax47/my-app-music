

import { Container, Header, Mobil, ButtonHome, IconHome, ButtonSearch, IconSearch  } from './style';



export const Aside = () => {

   return (
      <Container>

         <Mobil>
            <IconHome mobil = {true}/>
            <IconSearch mobil={true} />
         </Mobil>


         <Header>
            <h1>My APP MUSIC</h1>
         </Header>

         <ButtonHome text='Início'>
            <IconHome/>
            <span>Início</span>
         </ButtonHome>

         <ButtonSearch text='Buscar'>
            <IconSearch/>
            <span>Buscar</span>
         </ButtonSearch>
         

      </Container>
   )
}