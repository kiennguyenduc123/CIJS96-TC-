import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    // logic dc xử lý khi component render or re-render(componay thay đổi trạng thái);
    document.title = count
  }, [])
  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count+1)}>Submit</button>
    </>
  )
}

export default App
