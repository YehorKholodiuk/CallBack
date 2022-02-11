import logo from './logo.svg';
import './App.css';
import PlusButton from "./PlusButton";
import {useState} from "react";
import PlusButton1 from "./PlusButton1";

function App() {
  const [name,setName] = useState('ABC')
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
</div>
  );
}

export default App;
