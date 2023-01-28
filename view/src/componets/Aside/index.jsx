

import { useState } from 'react';
import { Container, Header, Mobil, ButtonHome, IconHome, FormSearch, IconSearch } from './style';



export const Aside = () => {

   const [title, setTitle] = useState('');
   const [showMobil, setShowMobil] = useState(false);

   console.log(title)

   function handleChange(e) {
      setTitle(e.target.value)

   }

   console.log(title)

   return (
      <Container>


         <Header>
            <h1>My APP MUSIC</h1>
         
         </Header>

         <ButtonHome text='Início'>
            <IconHome />
            <span>Início</span>
         </ButtonHome>

         <FormSearch text='Buscar'>
            <IconSearch />
            <form action="">
               <input type='text'
                  id='tetle'
                  placeholder='Buscar'
                  value={title}
                  onChange={handleChange}></input>
            </form>

         </FormSearch>


      </Container>
   )
}