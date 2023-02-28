import './App.css';

const name = "Kevin Matseke X";
const array = ["tan", "tun", "Kun", "pun"];

function App() {
  console.log(name);

  return (
    <div className='parent'>
      <p className='child'>Hello World by {name}</p>
      <p className='child'>Hello World by {cheese()}</p>

      <ul>
        {array.map((item,index)=>{
             return (<li>{item}</li>);
        })}
      </ul>

      <AnotherComponent/>
      <AnotherComponent/>
    
    </div>
    
  );

}


function cheese(){
  return (name+" Juiced Up");
}

function AnotherComponent(){
    return (
      <p>Another component Says Hi</p>
    )
}



export default App;
