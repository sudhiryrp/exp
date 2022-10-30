import React from 'react'
import { CCard, CCardBody, CCol, CRow } from '@coreui/react'

import './style/transaction.css'

import ReactHtmlTableToExcel from 'react-html-table-to-excel'
export default function Transaction() {
  return (
    <>
      <CCard className="trantable">
        <ReactHtmlTableToExcel
          id="test-table-xls-button"
          className="btn-download"
          table="transaction"
          filename="tablexls"
          sheet="tablexls"
          buttonText="Download as XLS"
        />

        <table id="transaction">
          <tr>
            <th>Date</th>
            <th>Customer Name</th>
            <th>Transaction id</th>
            <th>Total Amount</th>
            <th>Description</th>
            <th>Credit</th>
            <th>Balance</th>
          </tr>
          <tr>
            <td>12/jan/2022</td>
            <td>Sudhir Tawaniya</td>
            <td>12345</td>
            <td>23000</td>
            <td>mumbai to goa</td>

            <td>15000</td>
            <td>38000</td>
          </tr>
        </table>
      </CCard>
    </>
  )
}
