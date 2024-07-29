import React from 'react'
import './IssuesTable.css'
import axios from 'axios'

const IssuesTable = (data_table) => {
  const data = data_table.data_table;

  const handleClick = (arg1, arg2) => {
    APIcall(arg1, arg2);
  }

  const handleClick2 = (arg1) => {
    APIcall2(arg1);
  }

  const APIcall2 = async (id) => {
    try {
      const response = await axios.put('http://localhost:5000/api/issues/updateToProgress/' + id)
      alert(response.data)
      console.log(response.data)
      window.location.reload();
    }
    catch (err) {
      alert(err)
    }
  }

  const APIcall = async (id, status) => {
    try {
      const response = await axios.put('http://localhost:5000/api/issues/update/' + id + '/' + status)
      alert(response.data)
      window.location.reload();
    }
    catch (err) {
      alert(err)
    }
  }

  return (
    <div style={{ textAlign: 'center', paddingLeft: '120px', paddingTop: '30px' }}>
      <table style={{ border: "2px solid black" }}>
        <thead>
          <tr>
            <th style={{ border: "2px solid black" }} className='p-2'>No</th>
            <th style={{ border: "2px solid black" }} className='p-2'>username</th>
            <th style={{ border: "2px solid black" }} className='p-2'>Lab</th>
            <th style={{ border: "2px solid black" }} className='p-2'>PC No</th>
            <th style={{ border: "2px solid black" }} className='p-2'>Issue Type</th>
            <th style={{ border: "2px solid black" }} className='p-2'>Description</th>
            <th style={{ border: "2px solid black" }} className='p-2'>Issue Raised Date</th>
            <th style={{ border: "2px solid black" }} className='p-2'>Issue Status</th>
            <th style={{ border: "2px solid black" }} className='p-2'>Update Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((issue) => (
            (issue === null) ? null :
              (<tr key={issue.No}>
                <td style={{ border: "2px solid black" }}>{issue.No}</td>
                <td style={{ border: "2px solid black" }}>{issue.username}</td>
                <td style={{ border: "2px solid black" }}>{issue.Lab}</td>
                <td style={{ border: "2px solid black" }}>{issue.PcNo}</td>
                <td style={{ border: "2px solid black" }}>{issue.IssueType}</td>
                <td style={{ border: "2px solid black" }}>{issue.Description}</td>
                <td style={{ border: "2px solid black" }}>{issue.IssueRaisedDate}</td>
                <td style={{ border: "2px solid black" }}>{issue.IssueStatus}</td>
                {(issue.IssueStatus === "pending") ?
                  (
                    <td style={{ border: "2px solid black" }} ><button className='btn btn-primary' onClick={() => handleClick2(issue.id)}>In progress</button></td>
                  )
                  : <td style={{ border: "2px solid black" }} ><button className='btn btn-primary' onClick={() => handleClick(issue.id, "resolved")}>resolved</button></td>
                }
              </tr>)
          ))}
        </tbody>
      </table>

    </div>
  )
}

export default IssuesTable;