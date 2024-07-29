import React from 'react'
import './AdminLogin.css'
import {Link} from 'react-router-dom'
import Navbar1 from '../Navbar1'
import axios from 'axios'

const AdminLogin = () => {

  const [username,setUsername] = React.useState('')
  const [password,setPassword] = React.useState('')

  const setUsernameHandler = (e) => {
    setUsername(e.target.value)
  }

  const setPasswordHandler = (e) => {
    setPassword(e.target.value)
  }

  const loginHandler = (e) => {
    e.preventDefault()
    loginCall()
  }

  const loginCall = async () => {
    try {
      if(!username || !password) {
        alert('Please enter all the fields')
        return
      }

      let res = await axios.get('http://localhost:5000/api/admin/' + username)
      if(res==="") {
        alert('Invalid Credentials')
      }
      if(res.data === password) {
        
        document.cookie = "admin=" + username

        console.log('Login Successful')
        window.location.href = '/AdminPageOne'
      }
      else {
        alert('Invalid Credentials')
      }
    }
    catch(err) {
      console.log(err)
    }
  }

  return (
    <div>
        <Navbar1 />
        <div className='body p-5'>
          <div className="container" style={{marginTop:'50px'}}>
            <h2>Admin Login</h2>
            <hr/>
            <form>
                <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Enter your username"
                    value={username}
                    onChange={setUsernameHandler}
                />
                </div>
                <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={setPasswordHandler}
                />
                </div>
                <div className='d-flex justify-content-center'>
                  <Link to='/AdminPageOne'>
                    <button type="submit" className="btn" onClick={loginHandler}>
                      Login
                    </button>
                  </Link>
                </div>
            </form>
          </div>
        </div>
    </div>
  )
}

export default AdminLogin;
