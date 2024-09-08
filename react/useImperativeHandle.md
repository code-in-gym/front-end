
# useImperativeHandle

> https://react.dev/reference/react/useImperativeHandle

```jsx
import { useImperativeHandle, forwardRef, useRef } from 'react';
import './App.css';

const Son = forwardRef(function (props, ref) {
  const inputRef = useRef(0)
  const handleFocus = function () {
    inputRef.current.focus()
  }

  useImperativeHandle(ref, () => {
    return {
      handleFocus
    }
  })

return <div>
    <input ></input>
    <br/>
    <input ref={inputRef}></input>
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
      <button onClick={() => {sonRef.current.handleFocus()}}>focus on two</button>
      <div>
        <Son ref={sonRef} />
      </div>
    </div>
  );
}

export default App;
```