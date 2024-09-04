import { createContext, useContext, useEffect, useState } from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState(0)

  useEffect(() => {
    console.log('effect....')
  }, [number])
  return (
    <div className="App">
      This is a react app.
      <br />
      {number}
      <button onClick={() => {
        setNumber(number+1)
      }}>plus</button>
    </div>
  );
}

export default App;
