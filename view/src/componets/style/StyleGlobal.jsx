import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`
   *{
   margin: 0;
    padding: 0;
    box-sizing: border-box;
}
@media (max-width:1080px){
   html{
      font-size: 93.75%;
   }
}

@media (max-width:720px){
   html{
      font-size: 87.5%;
   }
}

html, body, #root{
   height: 100%;
   width: 100%;

   font-family: 'Rubik', sans-serif;
}


button{
   border: none;

}

.App{
   width: 100%;
   height: 100%;

  display: grid;

  grid-template-columns: 30% 70%;
  grid-template-rows: 20% auto 10%;

 grid-template-areas: 
   "asid header"
   "asid main"
   "asid foot";
}

:root{
   --primary : #011627;
   --segundary: #121212;
   --white: #ffffff;
}



`