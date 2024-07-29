import React,{useState} from 'react'
import './StudentLogin.css'
import {Link, json} from 'react-router-dom'
import Navbar1 from '../Navbar1';
import axios from 'axios'

const StudentLogin = () => {
  const [data,setData] = useState({
    susername :'',
    spassword :''
  });
  const {susername,spassword} = data;
  const changeHandler = e => {
    setData({...data,[e.target.name]:e.target.value})
  };
  const submitHandler = e => {
    e.preventDefault()
    console.log(data)
  };

  const loginHandler = (e) => {
    e.preventDefault()
    loginCall()
  }

  const forgotPasswordHandler = (e) => {
    e.preventDefault()
    forgotPasswordCall()
  }

  const forgotPasswordCall = async () => {
    try {
      if(!susername) {
        alert('Please enter your username')
        return
      }

      const res = await axios.get('http://localhost:5000/api/student/forgotPassword/' + susername)

      if(res.status === 200)
      {
        alert("Password sent to your email")
      }
      else
      {
        alert("Invalid Username")
      }
    }
    catch(err) {
      alert("Invalid Username")
    }
  }

  const loginCall = async () => {
    try {
      if(!susername || !spassword) {
        alert('Please enter all the fields')
        return
      }

      let url = 'http://localhost:5000/api/student/' + susername
      const response = await fetch(url,{
        method:'GET',
        headers:{'Content-Type':'application/json'}
      })
      
      console.log(response)

      const jsonData = await response.json()

      if(jsonData.password === spassword) {
        console.log('Login Successful')
        document.cookie = "username=" + susername
        window.location.href = '/StudentPageOne'
      }
      else {
        alert('Invalid Credentials')
      }
    }
    catch(err) {
      alert('invalid credentials')
      console.log(err)
    }
  };

  return (
    <div>
      <Navbar1 />
      <div className='body p-5'>
        <div className="container" style={{marginTop:'50px'}}>
          <h2>Student Login</h2>
          <hr/>
          <form onSubmit={submitHandler}>
              <div className="form-group">
                <label htmlFor="susername">Username</label>
                <input
                    type="text"
                    name="susername"
                    value={susername}
                    onChange={changeHandler}
                    placeholder="Enter your username"
                />
              </div>
              <div className="form-group">
                <label htmlFor="spassword">Password</label>
                <input
                    type="password"
                    name="spassword"
                    value={spassword}
                    onChange={changeHandler}
                    placeholder="Enter your password"
                />
              </div>
              <p onClick={forgotPasswordHandler}><a href=''>Forgot Password?</a></p>
              <div className='d-flex justify-content-center'>
                <Link to='/StudentPageOne'>
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

export default StudentLogin;