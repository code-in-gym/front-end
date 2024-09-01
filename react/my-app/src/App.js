import { createContext, useContext, useState } from 'react';
import './App.css';

const context = createContext('')

function Son() {
  const name = 'name from A'
  return <div>
          {name}
          <div><SonB></SonB></div>
         </div>
}

function SonB() {
  const c = useContext(context)
  return <div>This is B. I got `{c}`</div>
}

function App() {
  return (
    <div className="App">
      This is a react app.
      <br />

      <context.Provider value='message from App by context'>
        <Son >
          <span>This is a span</span>
        </Son>
      </context.Provider>
    </div>
  );
}

export default App;
