# React.memo

> https://react.dev/reference/react/memo#memo

作用：允许组件在Props没有改变的情况下跳过渲染

React组件默认的渲染机制：只要父组件重新渲染子组件就会重新渲染

---

1. 验证默认的渲染机制 子跟着父一起渲染

2. memo进行缓存 只有props发生变化的时候才会重新渲染 （context）

```jsx
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
```
