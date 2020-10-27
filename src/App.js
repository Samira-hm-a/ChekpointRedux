import React from 'react';
import './App.css';
import AddTask from './Components/AddTask';
import ListTask from './Components/ListTask';
import Filters from './Components/Filters';
import  photoTODO from "././Assets/photoTODO.svg"

function App() {
  return (

    <div className="App">
      <img className="backgroundph" src={photoTODO} style={{width:'200px'}}/>
       <h1> TO-DO APP</h1>
       <AddTask />
       <ListTask />
       <Filters />
       
       

    </div>
  );
}

export default App;