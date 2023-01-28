

import { Container, Header, Mobil, ButtonHome, IconHome, FormSearch, IconSearch  } from './style';



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

         <FormSearch text='Buscar'>
            <IconSearch/>
            <input type = 'text' placeholder='Buscar'></input>
         </FormSearch>
         

      </Container>
   )
}