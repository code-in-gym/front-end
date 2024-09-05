import { useMemo, useState } from 'react';
import './App.css';

function x(number) {
  console.log('number 重新计算了');
  return number * number
}

function App() {

  const [number1, setNumber1] = useState(0)
  const [number2, setNumber2] = useState(0)

  // const xResult = x(number1)  // before 

  // useMemo
  const xResult = useMemo(() => {
    return x(number1)
  }, [number1])
  // 只有在 number1 变化时，才重新计算

  console.log('组件重新渲染了');
  return (
    <div className="App">
      This is my react app.
      <br />
      {xResult}
      <br />
      <button onClick={(() => {setNumber1(number1+1)})}>plus1</button>
      <button onClick={(() => {setNumber2(number2+1)})}>plus2</button>
    </div>
  );
}

export default App;
