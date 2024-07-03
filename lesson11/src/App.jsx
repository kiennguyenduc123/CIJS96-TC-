import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {useRef} from 'react'
import './App.css'

// ustRef 
//   - Tham chiếu tới 1 phần tử HTML,giúp thay thế cho cú pháp dom
//   - Lưu trữ được giá trị, giá trị này sẽ k thay đổi khi component re -render, khi giá trị thay đổi, component sẽ k re-render 

function App() {
  const elementRef = useRef();
  const handleClick = () => {
    const pTag = elementRef.current;
    pTag.style.color = 'red';
  }
  return (
    <>
    <button onClick={handleClick}>Click</button>
      <p ref={elementRef} className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
