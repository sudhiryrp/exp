import './style/profile.css'
import { CAvatar, CCard } from '@coreui/react'
import React from 'react'
import Fab from '@mui/material/Fab'

import EditIcon from '@mui/icons-material/Edit'
import avatar1 from '../assets/images/avatars/2.jpg'
import { Button, TextField } from '@mui/material'
import { useState } from 'react'
export default function Profile() {
  const [img, setimg] = useState('')
  return (
    <CCard>
      <div className="container_pr">
        <div className="profile">
          {' '}
          {img != '' ? (
            <CAvatar size="large" style={{ width: '15%' }} src={img} />
          ) : (
            <CAvatar size="large" style={{ width: '15%' }} src={avatar1} />
          )}
          <div className="editicon_pr">
            {' '}
            <Fab
              color="secondary"
              className="fab_pr"
              onClick={() => {
                document.getElementById('profile_pic').click()
              }}
              aria-label="edit"
            >
              <EditIcon className="fab_pr" />
            </Fab>
            <input
              type="file"
              name="pr_img"
              onChange={(e) => setimg(e.target.value)}
              accept="image/*"
              id="profile_pic"
            />
          </div>
          <h4>Sudhir Tawaniya</h4>
        </div>
        <div className="details_pr">
          <div className="left_pr">
            <div className="input_pr">
              <TextField id="filled-basic" className="in_pr" label="User Name" variant="filled" />
            </div>
            <br />
            <div className="input_pr">
              <TextField id="filled-basic" className="in_pr" label="Full Name" variant="filled" />
            </div>
            <br />
            <div className="input_pr">
              <TextField
                id="filled-basic"
                type="email"
                className="in_pr"
                label="Email"
                variant="filled"
              />
            </div>
            <br />
            <div className="input_pr">
              <TextField
                id="filled-basic"
                type="number"
                className="in_pr"
                label="Phone"
                variant="filled"
              />
            </div>
            <br />
            <div className="input_pr">
              <TextField
                id="filled-basic"
                className="in_pr"
                type="password"
                label="Password"
                variant="filled"
              />
            </div>
            <br />
            <div className="input_pr">
              <TextField
                id="filled-basic"
                className="in_pr"
                label="Confirm Password"
                variant="filled"
              />
            </div>
            <br />
            <div className="button_pr input_pr">
              <Button
                variant="contained"
                style={{ backgroundColor: 'rgb(115, 36, 161)' }}
                className="in_pr"
              >
                Submit
              </Button>
            </div>
            <br />
          </div>
        </div>
      </div>
      <br />
    </CCard>
  )
}
