import notify from './events/Alert';
import './App.css';

function App() {

  // initial prop
 const  names = "BIAC";

  return (
       <div>
        <Something nameSomething={names}/>
        <input type="button" onClick={notify} value="Show Me Something"/>
       </div>
  );
}


function Something(props){
   return (
     <p>{props.nameSomething} Bejin</p>
   )
}
export default App;
