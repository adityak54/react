import './App.css';

let cn = "App-header"; 

/* React me functions ko hi as a component use karte hain */
// functional component ko ham html tags ki tarah use karte hain

function App() {
  return (
    <div className={cn}>
      Hello World

      {/* niche Dummy ko as a HTML tag use kiye hain */}
      {/* <Dummy></Dummy> */}
      <Dummy />  
    </div>
  );
}

function Dummy(){ 
  return(
    <div className = {cn}> 
      Dummy
    </div>
  )
}

export default App;
