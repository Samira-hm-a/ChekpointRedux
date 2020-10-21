import React from 'react';
import './App.css';
import AddTask from './Components/AddTask';
import ListTask from './Components/ListTask';
import Filters from './Components/Filters';

function App() {
  return (

    <div className="App">

       <h1> TO-DO APP</h1>
       <AddTask />
       <ListTask />
       <Filters />
       

    </div>
  );
}

export default App;