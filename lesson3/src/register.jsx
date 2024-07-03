import React from 'react'
import{ Link } from 'react-router-dom'
import"./register.css"
const Register = () => {
    return (
        <div className='form_register'>
            <form>
                <div>
                    <label>Email</label>
                    <input type="email" />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" />
                </div>
                <div>
                    <label>Confirm password</label>
                    <input type="password" />
                </div>
                <button>Đăng ký</button>
            </form>
            <Link to ="/home">Trở về trang chủ home</Link>
        </div>
    )
}

export default Register;