import React from 'react'
import './style/social.css'
import Utill from '@mui/icons-material/Delete'
import Add from '@mui/icons-material/Add'
import { Button, Alert } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import TextField from '@mui/joy/TextField'
import Modal from '@mui/joy/Modal'
import ModalDialog from '@mui/joy/ModalDialog'
import Stack from '@mui/joy/Stack'
import EditIcon from '@mui/icons-material/Edit'
import Typography from '@mui/joy/Typography'
import { useState } from 'react'

export default function BookCab() {
  const [open, setOpen] = React.useState(false)
  const [pr, setpr] = useState(0)
  const [ch, setch] = useState(0)
  const [Edit, setedit] = useState(false)
  const [nrow, setnrow] = useState(false)
  const [newpax, setnewpax] = useState({
    pax: '',
    cargo: '',
    cost: '',
    car: '',
  })
  const [newdata, setnewdata] = useState({
    displayname: '',
    pickup: '',
    dropup: '',
    content: [
      {
        pax: '',
        cargo: '',
        cost: '',
        car: '',
      },
    ],
  })
  const [data, setdata] = useState([
    {
      displayname: 'Port blair',
      pickup: 'Air port ',
      dropup: 'Lake',
      content: [
        {
          pax: '2-4',
          cargo: '0',
          cost: '330',
          car: '1',
        },
      ],
    },
    {
      displayname: 'Port blair 2',
      pickup: 'Air port ',
      dropup: 'Lake',
      content: [
        {
          pax: '2-4',
          cargo: '0',
          cost: '330',
          car: '1',
        },
      ],
    },
  ])

  //   const [data, setdata] = useState([
  //     {
  //       displayname: 'ghjf',
  //       pickup: 'dsfs',
  //       dropup: 'sdfs',
  //       pax: '2-4',
  //       cargo: 'fdg',
  //       cost: '223',
  //       car: '13',
  //     },
  //   ])

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
              maxWidth: 900,
              width: 600,
              height: 600,
              borderRadius: 'md',
              p: 5,

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
              ADD New Cab
            </Typography>
            <Typography
              id="basic-modal-dialog-description"
              mt={1.5}
              mb={3}
              textColor="text.tertiary"
            >
              Fill the bellow information .
            </Typography>
            <form
              onSubmit={(event) => {
                event.preventDefault()

                console.log(newdata)
                setOpen(false)

                setnewdata({
                  displayname: '',
                  pickup: '',
                  dropup: '',
                  content: [
                    {
                      pax: '',
                      cargo: '',
                      cost: '',
                      car: '',
                    },
                  ],
                })
              }}
            >
              <TextField
                label="Display Name"
                value={newdata.displayname}
                style={{ marginTop: '1.5%', marginBottom: '3%' }}
                onChange={(e) => {
                  newdata.displayname = e.target.value
                  setnewdata({ ...newdata })
                }}
                mt={1.5}
                mb={3}
                autoFocus
                required
              />
              <div className="displaym" style={{ display: 'flex', justifyContent: 'space-around' }}>
                {' '}
                <TextField
                  label="Pick up Point"
                  value={newdata.pickup}
                  style={{ marginTop: '1.5%', marginBottom: '3%' }}
                  onChange={(e) => {
                    newdata.pickup = e.target.value
                    setnewdata({ ...newdata })
                  }}
                  autoFocus
                  required
                />
                <TextField
                  label="Droup up point"
                  value={newdata.dropup}
                  style={{ marginTop: '1.5%', marginBottom: '3%' }}
                  onChange={(e) => {
                    newdata.dropup = e.target.value
                    setnewdata({ ...newdata })
                  }}
                  required
                />
              </div>
              <Stack spacing={2}>
                <div
                  className="displaym"
                  style={{ display: 'flex', justifyContent: 'space-around' }}
                >
                  <TextField
                    label="Pax"
                    value={newdata.content[0].pax}
                    style={{ marginTop: '1.5%', marginBottom: '3%' }}
                    onChange={(e) => {
                      newdata.content[0].pax = e.target.value
                      setnewdata({ ...newdata })
                    }}
                    autoFocus
                    required
                  />
                  <TextField
                    label="Car"
                    value={newdata.content[0].car}
                    style={{ marginTop: '1.5%', marginBottom: '3%' }}
                    onChange={(e) => {
                      newdata.content[0].car = e.target.value
                      setnewdata({ ...newdata })
                    }}
                    autoFocus
                    required
                  />
                </div>
                <div
                  className="displaym"
                  style={{ display: 'flex', justifyContent: 'space-around' }}
                >
                  {' '}
                  <TextField
                    label="Cargo"
                    value={newdata.content[0].cargo}
                    style={{ marginTop: '1.5%', marginBottom: '3%' }}
                    onChange={(e) => {
                      newdata.content[0].cargo = e.target.value
                      setnewdata({ ...newdata })
                    }}
                    autoFocus
                    required
                  />
                  <TextField
                    label="Cost"
                    value={newdata.content[0].cost}
                    style={{ marginTop: '1.5%', marginBottom: '3%' }}
                    onChange={(e) => {
                      newdata.content[0].cost = e.target.value
                      setnewdata({ ...newdata })
                    }}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ backgroundColor: '#2196f3' }}
                  onClick={() => {
                    // if (
                    //   newdata.content.pickup &&
                    //   newdata.content.dropup &&
                    //   newdata.content.pax &&
                    //   newdata.content.cargo &&
                    //   newdata.content.cost != ''
                    // ) {
                    data.push(newdata)
                    setdata([...data])
                    // }
                  }}
                >
                  Submit
                </Button>
              </Stack>
            </form>
          </ModalDialog>
        </Modal>
      </React.Fragment>

      <React.Fragment>
        <Modal open={nrow} onClose={() => setnrow(false)}>
          <ModalDialog
            aria-labelledby="basic-modal-dialog-title"
            aria-describedby="basic-modal-dialog-description"
            sx={{
              maxWidth: 900,
              width: 600,
              height: 600,
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
              Add Row
            </Typography>
            <Typography
              id="basic-modal-dialog-description"
              mt={1.5}
              mb={3}
              textColor="text.tertiary"
            >
              Fill the bellow information .
            </Typography>
            <form
              onSubmit={(event) => {
                event.preventDefault()
                setnrow(false)
                setnewpax({
                  pax: '',
                  cargo: '',
                  cost: '',
                  car: '',
                })
              }}
            >
              <TextField
                label="Display Name"
                value={data[pr].displayname}
                style={{ marginTop: '1.5%', marginBottom: '3%' }}
                autoFocus
                required
              />
              <div className="displaym" style={{ display: 'flex', justifyContent: 'space-around' }}>
                {' '}
                <TextField
                  label="Pick up Point"
                  value={data[pr].pickup}
                  style={{ marginTop: '1.5%', marginBottom: '3%' }}
                  autoFocus
                  required
                />
                <TextField label="Droup up point" value={data[pr].dropup} required />
              </div>
              <Stack spacing={2}>
                <div
                  className="displaym"
                  style={{ display: 'flex', justifyContent: 'space-around' }}
                >
                  <TextField
                    label="Pax"
                    value={newpax.pax}
                    style={{ marginTop: '1.5%', marginBottom: '3%' }}
                    onChange={(e) => {
                      setnewpax({ ...newpax, pax: e.target.value })
                    }}
                    autoFocus
                    required
                  />
                  <TextField
                    label="Car"
                    value={newpax.car}
                    style={{ marginTop: '1.5%', marginBottom: '3%' }}
                    onChange={(e) => {
                      setnewpax({ ...newpax, car: e.target.value })
                    }}
                    autoFocus
                    required
                  />
                </div>
                <div
                  className="displaym"
                  style={{ display: 'flex', justifyContent: 'space-around' }}
                >
                  {' '}
                  <TextField
                    label="Cargo"
                    value={newpax.cargo}
                    style={{ marginTop: '1.5%', marginBottom: '3%' }}
                    onChange={(e) => {
                      setnewpax({ ...newpax, cargo: e.target.value })
                    }}
                    autoFocus
                    required
                  />
                  <TextField
                    label="Cost"
                    value={newpax.cost}
                    style={{ marginTop: '1.5%', marginBottom: '3%' }}
                    onChange={(e) => {
                      setnewpax({ ...newpax, cost: e.target.value })
                    }}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ backgroundColor: '#2196f3' }}
                  onClick={() => {
                    if (newpax.car && newpax.pax && newpax.cargo && newpax.cost != '') {
                      data[pr].content.push({ ...newpax })
                      setdata([...data])
                    }
                  }}
                >
                  Saved
                </Button>
              </Stack>
            </form>
          </ModalDialog>
        </Modal>
      </React.Fragment>

      <div className="social" style={{ display: 'flex' }}>
        <div className="in_hd">
          <h3>Book Cab</h3>
          <div className="setgoal">
            <Button
              variant="contained"
              sx={{ backgroundColor: '#2196f3' }}
              size="small"
              onClick={() => {
                setOpen(true)
              }}
            >
              <Add /> &nbsp;ADD
            </Button>
          </div>
        </div>
        <hr />

        <div className="s_body">
          <div className="in_tb">
            {data.map((ele, i) => {
              return (
                <>
                  <div className="container_b">
                    <div className="cover_bb">
                      <div className="un_bt_l">
                        <div className="heading_b tour_text">
                          <h3>{ele.displayname}</h3>
                        </div>
                        <div className="pickdrop tour_text">
                          <div className="lf">{ele.pickup}</div>
                          <div>{'TO'}</div>
                          <div className="rf">{ele.dropup}</div>
                        </div>
                      </div>
                      <div className="setgoal r_bb">
                        <Button
                          variant="contained"
                          sx={{ backgroundColor: '#2196f3' }}
                          size="small"
                          onClick={() => {
                            setpr(i)

                            setnrow(true)
                          }}
                        >
                          <Add /> &nbsp;ADD
                        </Button>
                      </div>
                    </div>
                    <table
                      cellSpacing={0}
                      key={i}
                      className="tb_bb"
                      style={{ textAlign: 'left', color: 'gray' }}
                    >
                      <tr>
                        <th width="400px">Pax</th>
                        <th width="400px">Car</th>
                        <th width="400px">Cargo</th>
                        <th width="400px">Cost</th>
                        <th width="400px">Action</th>
                      </tr>
                      {ele.content.map((tdata, j) => {
                        return (
                          <tr key={j}>
                            <td>{tdata.pax}</td>
                            <td>{tdata.car}</td>
                            <td>{tdata.cargo}</td>
                            <td>{tdata.cost}</td>
                            <td style={{ display: 'flex', justifyContent: 'space-around' }}>
                              <Button
                                variant="contained"
                                color="error"
                                onClick={() => {
                                  data[i].content.splice(j, 1)
                                  console.log(data[i].content)
                                  setdata([...data])
                                }}
                              >
                                <DeleteIcon />
                              </Button>
                            </td>
                          </tr>
                        )
                      })}
                    </table>
                  </div>
                </>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
