# useReducer

> https://react.dev/reference/react/useReducer

```jsx
import { useReducer } from 'react';
import './App.css';

// 此处的 state read-only
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
```

useReducer与useState非常相似，但它允许您将状态更新逻辑从事件处理程序移动到组件外部的单个函数中。阅读有关在useState和useReducer之间进行选择的更多信息。

> https://react.dev/learn/extracting-state-logic-into-a-reducer#comparing-usestate-and-usereducer

