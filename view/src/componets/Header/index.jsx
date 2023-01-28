
import { useState } from "react"
import { Container, ShowMobil, IconHome, IconSearch } from "./style"

export const Header = () => {

   const [title, setTitle] = useState('');

   return (

      <Container>

         <ShowMobil>
            <IconHome />
            <IconSearch onClick={() => console.log('clicouu')} />

            <div>
            <form action="" className="formMobil">
               <input type="text" 
               placeholder="O que você quer ouvir?"
               value={title}
               onChange={(e) => setTitle(e.target.value)}/>
            </form>
               
            </div>
          
         </ShowMobil>

         <h1>Header</h1>
      </Container>


   )



}