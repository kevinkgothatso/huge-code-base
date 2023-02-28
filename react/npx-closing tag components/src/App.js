
import './App.css';

function App() {
  return (
    <div>
    <Something>
      Search:
    </Something>
    <Search>Juice</Search> 
 
    </div>
  );
}


const Search = ({children})=>{
   return (<>
    <p>Search says hey {children}</p>
  </>);
}

const Something = ()=>{
  return (<>
    <p>Soemthing is here</p>
  </>);
}



export default App;
