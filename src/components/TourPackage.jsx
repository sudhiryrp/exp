import React, { useState } from 'react'
import { CCard } from '@coreui/react'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import './style/transaction.css'
import { Button } from '@mui/material'
import { Navigate, useNavigate } from 'react-router-dom'

export default function TourPackage() {
  const navigate = useNavigate()

  const [data, setdata] = useState([
    {
      menuname: 'gfh',
      days: '5',
      nights: '4',
      startingpr: '2500',
    },
  ])
  return (
    <>
      <CCard className="trantable">
        <div className="button_tr" style={{ width: '100%' }}>
          <Button
            variant="contained"
            style={{ width: '100px', float: 'right' }}
            onClick={() => navigate('/tourpackage/addtourpackage')}
          >
            ADD
          </Button>
        </div>
        <table id="transaction">
          <thead>
            <tr>
              <th>Menu Name</th>
              <th>Day</th>
              <th>Nights</th>

              <th>Starting Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((val, i) => {
              return (
                <tr key={i}>
                  <td>{val.menuname}</td>
                  <td>{val.days}</td>
                  <td>{val.nights}</td>

                  <td>{val.startingpr}</td>
                  <td style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <Button variant="contained" onClick={() => navigate('/tourpackage/edittour')}>
                      <EditIcon />
                    </Button>

                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => {
                        data.splice(i, 1)
                        setdata([...data])
                      }}
                    >
                      <DeleteIcon />
                    </Button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </CCard>
    </>
  )
}
