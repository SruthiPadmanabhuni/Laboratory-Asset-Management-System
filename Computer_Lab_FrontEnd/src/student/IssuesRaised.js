import axios from 'axios';
import React,{useState,useEffect} from 'react'

const IssuesRaised = () => {
  const user = document.cookie.split('=')[1]

  const [res, setData] = useState([]);

  const[data,setDataForTable] = useState([])

  const APIcall = async () => {
    try {
      let result = await axios.get('http://localhost:5000/api/issues/' + user)
      setData(result.data)

      console.log(result.data)

      const transformedData = result.data.map(item => ({
        No: result.data.indexOf(item) + 1,
        Lab: item.lab,
        PcNo: item.pc,
        IssueType: item.issue,
        Description: item.description,
        IssueRaisedDate: item.IssueRaisedDate,
        IssueResolvedDate: item.IssueResolvedDate,
        IssueSatus: item.status
      }));
      setDataForTable(transformedData);
    }
    catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
    APIcall();
  }, []);

  return (
    <div style={{ textAlign: 'center', paddingLeft: '120px', paddingTop: '30px' }}>
      <table style={{border:"2px solid black"}}>
        <thead>
            <tr>
              <th style={{border:"2px solid black"}} className='p-2'>No</th>
              <th style={{border:"2px solid black"}} className='p-2'>Lab</th>
              <th style={{border:"2px solid black"}} className='p-2'>PC No</th>
              <th style={{border:"2px solid black"}} className='p-2'>Issue Type</th>
              <th style={{border:"2px solid black"}} className='p-2'>Description</th>
              <th style={{border:"2px solid black"}} className='p-2'>Issue Raised Date</th>
              <th style={{border:"2px solid black"}} className='p-2'>Issue Resolved Date</th>
              <th style={{border:"2px solid black"}} className='p-2'>Issue Status</th>
            </tr>
        </thead>
        <tbody>
            {data.map((issue) => (
            <tr key={issue.No}>
                <td style={{border:"2px solid black"}}>{issue.No}</td>
                <td style={{border:"2px solid black"}}>{issue.Lab}</td>
                <td style={{border:"2px solid black"}}>{issue.PcNo}</td>
                <td style={{border:"2px solid black"}}>{issue.IssueType}</td>
                <td style={{border:"2px solid black"}}>{issue.Description}</td>
                <td style={{border:"2px solid black"}}>{issue.IssueRaisedDate}</td>
                <td style={{border:"2px solid black"}}>{(issue.IssueResolvedDate===null?'':issue.IssueRaisedDate.slice(0,10))}</td>
                <td style={{border:"2px solid black"}}>{issue.IssueSatus}</td>
            </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default IssuesRaised;