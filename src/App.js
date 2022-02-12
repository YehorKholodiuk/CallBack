import logo from './logo.svg';
import './App.css';
import React from "react";
import PlusButton from "./PlusButton";
import {useState} from "react";
import PlusButton1 from "./PlusButton1";
import Child from "./Child";



function App() {

  const [name, setName] = useState('ABC')
  const [word,setWord] = useState('Parent')

  const onChangeName = (newValue) => {
    console.log('New Value', newValue)
    setName(newValue)
  }
  const appClick = (n) => {
    console.log('APP CLICK',n)
  };


  return (
<div>
  <PlusButton
  buttonText = 'Plus One'
  buttonOnClick = {appClick}
  />
  <PlusButton1
      value={name}
      onChange={onChangeName}
  />
<hr/>
  <j1>{word}</j1>
<Child
  changeWord = {word => setWord(word)}/>

</div>
  );
}

export default App;
