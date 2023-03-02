import { useCallback, useState } from 'react'
import { effect, computed } from "@preact/signals-react";
import reactLogo from './assets/react.svg'
import './App.css'

import { count, name } from './store';

const double = computed(() => {
  console.log('updating double...');
  return count.value * 2;
});

function App() {
  // const [count, setCount] = useState(0)

  effect(useCallback(() => {
    console.log('count has changed to:', count.value)
  }))

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <input value={name} onChange={(event) => name.value = event.target.value} />
      <h2>Name: {name}</h2>
      <div className="card">
        <button onClick={() => count.value += 1}>
          count is {count}
        </button>
        <h2>Double: {double}</h2>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
