
import { useEffect } from 'react';
import axios from 'axios';
import './App.css';


const endpointsVisitors ="http://localhost:4000/visitors/get";

function App() {

  useEffect(()=>{
    // GetWithNativeFetch();
    GetWithAxios();
  },[])
 
}

 //Using the Native React fetch API to fetch data
// const GetWithNativeFetch = ()=> {
//   fetch(endpointsVisitors)
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//     });
// }

 //Using the third Paryty Library API to fetch data
  const GetWithAxios= ()=> {
    return axios.get(endpointsVisitors)
    .then(
      (res)=>{
        console.log(res.data)
      });;
  }

export default App;
