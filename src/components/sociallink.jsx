import React from 'react'
import './style/social.css'
import Utill from '@mui/icons-material/Delete'
import Add from '@mui/icons-material/Add'
import { Button, Alert } from '@mui/material'
import Select from '@mui/joy/Select'
import Option from '@mui/joy/Option'
import TextField from '@mui/joy/TextField'
import Modal from '@mui/joy/Modal'
import ModalDialog from '@mui/joy/ModalDialog'
import Stack from '@mui/joy/Stack'

import Typography from '@mui/joy/Typography'
import { useState } from 'react'

export default function SocialLink() {
  const [open, setOpen] = React.useState(false)
  const [erropen, seterropen] = React.useState('none')
  const [newdata, setnewdata] = useState({
    new_ac: '',
    new_lnk: '',
  })

  const [data, setdata] = useState([
    {
      Account: 'FACEBOOK',
      link: 'https://www.facebook.com/AndamanMangrovesHolidays/',
    },
    {
      Account: 'Google',
      link: 'https://www.google.co.in/search?q=Andaman+Mangroves+Holidays+-+A+Destination+Management+Company,+No:02,Next+to+Income+Tax+Office+Building,+Shadipur,+Port+Blair+,+South+Andaman,+Shadipur,+Port+Blair,+Andaman+and+Nicobar+Islands+744106&ludocid=3566598711928912065&gws_rd=ssl#gws_rd=ssl',
    },
    {
      Account: 'LINKEDIN',
      link: 'https://www.linkedin.com/company/andaman-mangroves-holidays/',
    },
    {
      Account: 'Instagram',
      link: 'https://www.instagram.com/andamanmangrovesholidays/',
    },
  ])
  const [cur, setcur] = useState({
    Account: data.length > 0 ? data[0].Account : '',
    link: data.length > 0 ? data[0].link : '',
    id: 0,
  })
  const handleClose = () => {
    setOpen('none')
  }
  return (
    <>
      <React.Fragment>
        <Modal open={open} onClose={() => setOpen(false)}>
          <ModalDialog
            aria-labelledby="basic-modal-dialog-title"
            aria-describedby="basic-modal-dialog-description"
            sx={{
              maxWidth: 500,
              borderRadius: 'md',
              p: 3,
              boxShadow: 'lg',
            }}
          >
            <Typography
              id="basic-modal-dialog-title"
              component="h2"
              level="inherit"
              fontSize="1.25em"
              mb="0.25em"
            >
              ADD New Social List
            </Typography>
            <Typography
              id="basic-modal-dialog-description"
              mt={0.5}
              mb={2}
              textColor="text.tertiary"
            >
              Fill in the information of the Social Site.
            </Typography>
            <form
              onSubmit={(event) => {
                event.preventDefault()
                setOpen(false)
                setnewdata({ new_lnk: '', new_ac: '' })
              }}
            >
              <Stack spacing={2}>
                <TextField
                  label="Account"
                  value={newdata.new_ac}
                  onChange={(e) => setnewdata({ ...newdata, new_ac: e.target.value })}
                  autoFocus
                  required
                />
                <TextField
                  label="Link"
                  value={newdata.new_lnk}
                  onChange={(e) => setnewdata({ ...newdata, new_lnk: e.target.value })}
                  required
                />
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ backgroundColor: '#2196f3' }}
                  onClick={() => {
                    setdata([...data, { Account: newdata.new_ac, link: newdata.new_lnk }])
                  }}
                >
                  Submit
                </Button>
              </Stack>
            </form>
          </ModalDialog>
        </Modal>
      </React.Fragment>

      <div className="social" style={{ display: 'flex' }}>
        <div className="in_hd">
          <h3>Social Media Links</h3>
          <div className="setgoal">
            <Button
              variant="contained"
              sx={{ backgroundColor: '#2196f3' }}
              size="small"
              onClick={() => {
                if (data.length < 4) {
                  setOpen(true)
                } else {
                  seterropen('block')
                }
              }}
            >
              <Add /> &nbsp;ADD
            </Button>
          </div>
        </div>
        <hr />
        <div className="status" style={{ display: erropen, marginBottom: '20px' }}>
          <Alert severity="error" autoHideDuration={60} onClose={handleClose}>
            Only 4 social Links Allowed
          </Alert>
        </div>
        <div className="s_body">
          <div className="in_tb">
            <table style={{ textAlign: 'left', color: 'gray' }}>
              <tr>
                <td className="tour_text" width="400px">
                  #
                </td>

                <td className="tour_text" width="400px">
                  Account
                </td>
                <td className="tour_text" width="400px">
                  Link
                </td>
                <td className="tour_text" width="400px">
                  Action
                </td>
              </tr>
              <tr>
                <td style={{ color: 'rgb(115, 36, 161)' }}>{cur.id ? cur.id + 1 : 1}</td>
                <td>
                  <Select
                    color="warning"
                    placeholder={cur.Account}
                    style={{ marginRight: '120px', color: 'rgb(115, 36, 161)' }}
                    value={cur.Account}
                    variant="outlined"
                  >
                    {data.map((ele, i) => {
                      return (
                        cur.id != i && (
                          <Option
                            style={{ color: 'rgb(115, 36, 161)' }}
                            key={i}
                            value={ele.Account}
                            onClick={() => {
                              setcur({ Account: ele.Account, link: ele.link, id: i })
                            }}
                          >
                            {ele.Account}
                          </Option>
                        )
                      )
                    })}
                  </Select>
                </td>
                <td>
                  <input
                    disabled
                    type="text"
                    value={cur.link}
                    style={{
                      backgroundColor: 'inherit',
                      border: 'none',
                      outline: 'none',
                      color: 'rgb(115, 36, 161)',
                    }}
                  />
                </td>
                <td>
                  {' '}
                  <td>
                    {' '}
                    <Button
                      variant="contained"
                      color="error"
                      size="small"
                      onClick={() => {
                        data.splice(cur.id, 1)

                        setdata([...data])
                        setcur({
                          Account: data.length > 0 ? data[0].Account : '',
                          link: data.length > 0 ? data[0].link : '',
                          id: data.length > 0 ? data[0].id : '',
                        })
                      }}
                    >
                      <Utill /> &nbsp;Delete
                    </Button>
                  </td>
                </td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <Button
                    sx={{ marginTop: '15px', float: 'right' }}
                    variant="contained"
                    color="success"
                    size="small"
                  >
                    &nbsp;Save
                  </Button>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}
