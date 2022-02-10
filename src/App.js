import logo from './logo.svg';
import './App.css';
import PlusButton from "./PlusButton";

function App() {
  const appClick = () => {
    console.log('APP CLICK')
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
