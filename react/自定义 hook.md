# 自定义 hook

## 实现

```jsx
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
```

### 封装自定义hook通用思路

1. 声明一个以use打头的函数
2. 在函数体内封装可复用的逻辑（只要是可复用的逻辑）
3. 把组件中用到的状态或者回调return出去

## React Hooks 使用规则

使用规则

1. 只能在组件中或者其他自定义Hook函数中调用

2. 只能在组件的顶层调用，不能嵌套在 if、for、其他函数中