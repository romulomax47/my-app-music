
import React, { useEffect, useState } from 'react';

import StyleGlobal from './componets/style/StyleGlobal';

///CONPONETS
import Header from './componets/Header';
import Footer from './componets/Footer';
import SidBar from './componets/Sidebar';

import getChart from '../controller/api/getAll';

function App() {

  useEffect(() => {
    async function fetchData() {
        let dados = await  getChart();

        setTop10(dados)
    }
    fetchData();

  }, [])



  const [top10, setTop10] = useState([])


  console.log(top10)
  return (

    <div className="App">
      <Header></Header>
      <SidBar cards={top10}></SidBar>
      <Footer></Footer>
      <StyleGlobal></StyleGlobal>
    </div>


  )
}

export default App
