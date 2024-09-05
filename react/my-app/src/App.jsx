import { memo, useState } from 'react';
import './App.css';

const SonMemo = memo(function Son(props) {
  console.log('render...')
  return <div>Come from father: {props.name}</div>
})

// memo 包裹后，在 props 不变的时候，将不再重新渲染

function App() {
  const name = '`To Son:xxxx`';

  const [number, setNumber] = useState(0)
  return (
    <div className="App">
      This is a react app.
      <br />
      {number}
      <button onClick={() => {setNumber(number+1)}}>plus</button>
      <div>
        <SonMemo name={name} />
      </div>
    </div>
  );
}

export default App;