import logo from './logo.svg';
import './App.css';
import PlusButton from "./PlusButton";

function App() {
  const appClick = (n) => {
    console.log('APP CLICK',n)
  };
  return (
<div>
  <PlusButton
  buttonText = 'Plus One'
  buttonOnClick = {appClick}
  />
</div>
  );
}

export default App;
