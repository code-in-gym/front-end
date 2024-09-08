# forwardRef

> https://react.dev/reference/react/forwardRef

```jsx
import { forwardRef, useRef } from 'react';
import './App.css';

const Son = forwardRef(function Son(props, ref) {
  console.log('render...')
  return <div>
    <input ></input>
    <br/>
    <input ref={ref}></input>
    <br/>
    <input ></input>
    </div>
})

function App() {
  const sonRef = useRef(0)

  return (
    <div className="App">
      This is a react app.
      <br />
      <button onClick={() => {sonRef.current.focus()}}>focus on two</button>
      <div>
        <Son ref={sonRef} />
      </div>
    </div>
  );
}

export default App;
```
