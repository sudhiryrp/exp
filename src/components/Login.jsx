import nature from '../Images/login/nature_login.png'
import { Alert, TextField } from '@mui/material/'
import React from 'react'
import './style/login.css'
import { Button } from '@mui/material'
import { useState } from 'react'
import Snackbar from '@mui/material/Snackbar'

import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [username, setusername] = useState('')
  const [password, setpass] = useState('')
  const [message, setmessage] = useState('')

  const navigate = useNavigate()

  const sendData = () => {
    if (username == '') {
      setmessage('Pleace Fill username')
      setOpen('block')
    } else if (password == '') {
      setmessage('Pleace Fill Password')
      setOpen('block')
    } else {
      navigate('/dashboard')
    }
  }

  const [open, setOpen] = React.useState('none')

  const handleClose = () => {
    setOpen('none')
  }
  return (
    <div className="login_container">
      <Snackbar>
        <Alert severity="error">{message}</Alert>
      </Snackbar>

      <div className="login_con_left">
        <img src={nature} alt="nature" />
      </div>
      <div className="login_con_right">
        <div className="status" style={{ display: open }}>
          <Alert severity="error" autoHideDuration={6000} onClose={handleClose}>
            {message}
          </Alert>
        </div>
        <div className="login_heading">
          <h2>Login To Your Account</h2>
        </div>
        <div className="login_det">
          <TextField
            className="login-input"
            value={username}
            onChange={(e) => setusername(e.target.value)}
            id="filled-basic"
            label="User Name"
            sx={{ color: 'red' }}
            variant="filled"
          />
        </div>
        <div className="login_det">
          <TextField
            id="filled-basic"
            type="password"
            value={password}
            className="login-input"
            onChange={(e) => setpass(e.target.value)}
            label="Password"
            variant="filled"
          />
        </div>
        <div className="login_det forgetpass" style={{ margin: 0 }}>
          Forget Password ?
        </div>
        <div className="login_det">
          <Button
            variant="contained"
            onClick={sendData}
            sx={{ backgroundColor: '#330066' }}
            className="login-input log_button"
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  )
}
