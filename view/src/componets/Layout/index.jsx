

import React from "react";

import {Header} from '../Header'
import {Aside} from '../Aside';
import { Footer } from "../Footer";
import { Grid } from "./style";
import { Main } from "../Main";

export const Layout = () => {
   return (
      <Grid>
         <Header/>
         <Aside/>
         <Main/>
         <Footer/>
      </Grid>
   )
      
}