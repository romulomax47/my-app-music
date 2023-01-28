

import { useState } from 'react';
import { Container, Header, Mobil, ButtonHome, IconHome, FormSearch, IconSearch  } from './style';



export const Aside = () => {

   const [title, setTitle] = useState('');
   console.log(title)

   function handleChange(e){
      setTitle(e.target.value)

   }

   console.log(title)

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
            <input type = 'text'
                   id='tetle'
                   placeholder='Buscar'
                   value={title}
                   onChange={handleChange}></input>
         </FormSearch>
         

      </Container>
   )
}