import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Home from './Home.jsx'
import Nomatch from './Nomatch.jsx'
import User from './User.jsx'
import UserDetail from './UserDetail.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <Routes>
        {/* Mục đích để gom nhóm tất cả các đường dẫn của app lại */}
        {/* path là khai báo đường dẫn
        element: là component được hiển thị khi truy cập  đúng đường dẫn vừa khai báo */}
        <Route path="" element={<Home />}/>
        <Route path="/app" element={<App />}/>
        {/* Dấu * nếu như đường dẫn hiện tại đang truy cập mà k trùng vs đường dẫn bất kỳ đã khai báo ở trên, thì nó sẽ vào dấu * */}
        <Route path="/user/:id" element={<UserDetail />}/>
        <Route path='*' element = {<Nomatch  />}/>
      </Routes>
    </BrowserRouter>
);
