import axios from 'axios'

 const getChart = async () => {

   const url = 'http://localhost:8080/chart/tracks/10/0';

   try {
      const response = await axios.get(url);
      const allDatos = response.data;
      const {data} = allDatos;
      return data;
      
      
   }catch(error){
      console.log('erro')

      return error
   }
  
}

export default getChart;
