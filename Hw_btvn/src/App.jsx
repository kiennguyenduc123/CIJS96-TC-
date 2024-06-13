import './App.css'
import { useState } from 'react'
function App() {

  const [light ,setLight] = useState("red")
  
  const handleClick = () => {
    switch (light) {
      case 'red':
        setLight('orange');
        break;
      case 'orange':
        setLight('green');
        break;
      default:
        setLight('red');
        break;
    }
  }
  return (
    <>
       <div className="app">
          <div className="lightTree">
            <div className={`item ${light === 'red' ? 'red' : ''}`}></div>
            <div className={`item ${light === 'orange' ? 'orange' : ''}`}></div>
            <div className={`item ${light === 'green' ? 'green' : ''}`}></div>
            <button onClick={handleClick}>Chuyển</button>
          </div>
        </div>
    </>
  )
}

export default App
