import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './footer'
import { useContext } from 'react'
import Store from './Store'
import trans from './Store/dic'
function App() {
  const [count, setCount] = useState(0);
  const store = useContext(Store);
  return (
    <div className={store.theme.value ? 'light' : 'dark' }>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={()=> {
          store.lang.set(store.lang.value === 'VI' ? 'EN' : 'VI');
        }} >
          {trans[store.lang.value]['A2']}
        </button>
        <button onClick={()=> store.theme.set(!store.theme.value)}>Switch theme</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <Footer/>
    </div>
  )
}

export default App
