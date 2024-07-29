import React from 'react'
import {Link} from 'react-router-dom'
import {useState} from 'react'
import Navbar2 from '../Navbar2'

const ChangePassword = () => {

    const user = document.cookie.split('=')[1]

    const [newpassword,setNewPassword] = useState('')
    const [confirmpassword,setConfirmPassword] = useState('')

    const updateHandler = (e) => {
        e.preventDefault()
        updateCall()
    }

    const newpasswordHandler = (e) => {
        setNewPassword(e.target.value)
    }

    const confirmpasswordHandler = (e) => {
        setConfirmPassword(e.target.value)
    }

    const updateCall = async () => {
        try {
            if(newpassword !== confirmpassword) {
                alert('Passwords do not match')
                return
            }

            let url = 'http://localhost:5000/api/student/' + user
            const response = await fetch(url,{
                method:'PUT',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({
                    password : newpassword
                })
            })
            const jsonData = await response.json()
            
            if(jsonData.affectedRows === 1) {
                window.location.href = '/StudentLogin'
            }
            else {
                alert(jsonData.Message)
            }

            console.log(jsonData)
        }
        catch(err) {
            console.log(err)
        }
    }

  return (
    <div>
        <Navbar2 />
        <div className='body p-5'>
            <div className="container" style={{marginTop:'50px'}}>
            <h2>Change Password</h2>
            <hr/>
            <form>
                <div className="form-group">
                    <label htmlFor="newpassword">New Password</label>
                    <input
                        type="text"
                        name="newpassword"
                        placeholder="Enter your new password"
                        onChange={newpasswordHandler}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="confirmpassword">Confirm Password</label>
                    <input
                        type="text"
                        name="confirmpassword"
                        placeholder="Enter your confirm password"
                        onChange={confirmpasswordHandler}
                    />
                </div>
                <div className='d-flex justify-content-center'>
                    <Link to='/StudentLogin'>
                        <button type="submit" className="btn btn-primary" onClick={updateHandler}>
                            update
                        </button>
                    </Link>
                </div>
            </form>
            <Link to='/StudentPageOne'>
                <p className="ml-2" style={{textAlign:'right',marginRight:'20px'}}>
                    Back
                </p>
            </Link>
            </div>
        </div>
    </div>
  )
}

export default ChangePassword;
