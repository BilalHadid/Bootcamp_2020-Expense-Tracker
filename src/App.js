import React,{useReducer} from 'react';
import './App.css';

const State = 'Bilal'

const reducer = (state ,action) =>{
    switch(action){
      case "ChangeName":
        return "Hadid"
      default:
        return state
    }
}

function App() {
  const [name,dispatch] = useReducer(reducer,State)
  return (
    <div className="App">
      <h1>{`My name is ${name}`}</h1>
    </div>
  );
}

export default App;
