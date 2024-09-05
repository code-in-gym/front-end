# useEffect

> https://react.dev/reference/react/useEffect

```jsx
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
```

## useEffect依赖项参数说明

useEffect副作用函数的执行时机存在多种情况，根据传入依赖项的不同，会有不同的执行表现

依赖项       副作用函数执行时机

- 没有依赖项 组件初始渲染＋组件更新时执行

- 空数组依赖 只在初始渲染时执行一次

- 添加特定依赖项 组件初始渲染＋特性依赖项变化时执行
