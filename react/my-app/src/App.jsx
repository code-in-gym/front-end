import { createContext, useContext, useEffect, useState } from 'react';
import './App.css';

function usePlusOnClick() {
  const [number, setNumber] = useState(0)

  useEffect(() => {
    console.log('effect....')
  }, [number])

  const plusOne = () => setNumber(number+1)

  return {
    number,
    plusOne
  }
}

function App() {
  const {number, plusOne} = usePlusOnClick();
  return (
    <div className="App">
      This is a react app.
      <br />
      {number}
      <button onClick={plusOne}>plus</button>
    </div>
  );
}

export default App;
