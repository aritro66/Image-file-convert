import './App.css';
import React from "react";
import NavigationBarDisplay from './components/NavigationBarDisplay';
import FileConvert from './components/FileConvert';


function App() {
  const data=[{type:"png", convertTo:"jpeg"}, {type:"png", convertTo:"webp"} ,{type:"jpeg", convertTo:"png"},
  {type:"jpeg", convertTo:"webp"}, {type:"webp", convertTo:"jpeg"}, {type:"webp", convertTo:"png"}];
  
  return (
    <div className="App">
      <NavigationBarDisplay />
      {
        data.map(({type,convertTo})=>{
          return <FileConvert type={type} convertTo={convertTo}/>
        })
      }
      
    </div>
  );
}

export default App;
