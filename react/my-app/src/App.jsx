import { useReducer } from 'react';
import './App.css';

function reducer(state, action) {
  if (action.type = 'inc') {
    return {
      age: state.age + 1
    }
  }
}

function App() {
  const [state, dispatch]= useReducer(reducer, {age: 18})

  return (
    <div className="App">
      This is my react app.
      <br />
      {state.age}
      <button onClick={(() => {dispatch({type: 'inc'})})}>plus</button>
    </div>
  );
}

export default App;
