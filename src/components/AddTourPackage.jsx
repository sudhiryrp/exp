import { CCard } from '@coreui/react'
import { Button, TextField } from '@mui/material'
import Select from '@mui/joy/Select'
import Option from '@mui/joy/Option'
import React from 'react'
import './style/tourpackage.css'
import { useState } from 'react'
import Editor from './Editor'

export default function AddTourPackage() {
  const [price, setprice] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0])
  const [daynight, setdayanight] = useState({
    day: '0',
    night: '0',
  })

  return (
    <CCard>
      <div className="container_tour">
        <div className="des_tour">
          <p className="tour_text">ADD Tour Package</p>
          <hr />
        </div>
        <div className="menu_tour">
          <div className="input_url">
            <TextField id="filled-basic" className="in_tr" label="Menu Name" variant="filled" />
          </div>
          <div className="input_tour_sel">
            <Select
              color="warning"
              placeholder="Day"
              className="tour_sel"
              value={daynight.day}
              variant="outlined"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((ele, i) => {
                return (
                  <Option
                    className="op_tr"
                    key={i}
                    value={ele}
                    sx={{ backgroundColor: 'white' }}
                    onClick={() => setdayanight({ ...daynight, day: ele })}
                  >
                    {ele + ' day'}
                  </Option>
                )
              })}
            </Select>
          </div>
          <div className="input_tour_sel">
            <Select
              color="info"
              placeholder="Night"
              className="tour_sel"
              value={daynight.night}
              variant="outlined"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((ele, i) => {
                return (
                  <Option
                    className="op_tr"
                    key={i}
                    value={ele}
                    sx={{ backgroundColor: 'white' }}
                    onClick={() => setdayanight({ ...daynight, night: ele })}
                  >
                    {ele + ' night'}
                  </Option>
                )
              })}
            </Select>
          </div>
          <div className="input_url">
            <TextField id="filled-basic" label="URL" className="in_tr" variant="filled" />
          </div>
        </div>
        <div className="editor">
          {daynight.day > 0 &&
            [...Array(daynight.day)].map((val, i) => {
              return <Editor key={i} data={'Day ' + (i + 1)} />
            })}
          {daynight.day > 0 && <Editor data="Inclusions" />}
          {daynight.day > 0 && <Editor data="Exclusions" />}
        </div>
        {daynight.day > 0 && (
          <div className="input_url editor" style={{ width: '100%' }}>
            <TextField
              id="filled-basic"
              className="in_tr"
              type="number"
              label="Trips Starts From"
              variant="filled"
            />
          </div>
        )}
        <div className="editor">
          {daynight.day > 0 && (
            <div className="tb_body_tr">
              <table style={{ textAlign: 'center', color: 'gray', display: 'block' }}>
                <tbody>
                  <tr>
                    <td width="100px" className="tour_text">
                      Persons
                    </td>

                    <td width="500px" className="tour_text">
                      Tour Cost
                    </td>
                  </tr>

                  {price.map((ele, i) => {
                    return (
                      <>
                        <tr>
                          <td>{i + 1}</td>
                          <td key={i}>
                            <input
                              style={{ border: 'none', outline: 'none', textAlign: 'center' }}
                              className="tb_in_tr"
                              type="number"
                              value={ele}
                              onChange={(e) => {
                                price[i] = e.target.value
                                const up = price
                                setprice([...up])
                              }}
                            />
                          </td>
                        </tr>
                      </>
                    )
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
        {daynight.day > 0 && (
          <div
            className="act_btn"
            style={{ display: 'flex', justifyContent: 'space-around', width: '200px' }}
          >
            <Button variant="contained" color="info">
              Submit
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={() => {
                setprice([0, 0, 0, 0, 0, 0, 0, 0, 0])
                setdayanight({
                  day: '0',
                  night: '0',
                })
              }}
            >
              Cancel
            </Button>
          </div>
        )}
      </div>
    </CCard>
  )
}
