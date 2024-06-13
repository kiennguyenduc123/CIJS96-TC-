import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Input from './Input'

function App() {
//từ dữ liệu đưa ra giao diện
  const [text, setText] = useState("MindX School")

  const handleSubmit = (e) => {
      e.preventDefault();
      // console.log(e.target);
      // console.log(e.target.text.value);
      console.log(text);
  }
  return (
    <>
      <div className='app'> 
        <form onSubmit={handleSubmit}>
			    <Input
              value = {text}
              onChange = {(e) => {
                setText(e.target.value);
              }}
          />
			    <button type="submit">Submit</button>
		    </form>
      </div>
    </>
  )
}

export default App
