import React,{ useState } from 'react'
import {Link} from 'react-router-dom'
import IssuesTable from './IssuesTable'
import axios from 'axios'
import Navbar2 from '../Navbar2'

const ResolvedIssueDetails = () => {
  const user = document.cookie.split('=')[1]
  const [show, setShow] = useState(false);
  const [lab, setLab] = useState('');
  const [pc, setPc] = useState('');
  const [data, setData] = useState([]);

  const setLabHandler = (e) => {
    setLab(e.target.value);
  }

  const logoutHandler = () => {
    document.cookie = "admin=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  }

  const setPcHandler = (e) => {
    setPc(e.target.value);
  }

  const ShowTable = (e) => {
    e.preventDefault();
    APIcall();
    setShow(true);
  }
  
  const APIcall = async () => {
    try {
      let result = await axios.get('http://localhost:5000/api/issues/resolved')
      const transformedData = result.data.map(item => ((
         {
            No: result.data.indexOf(item) + 1,
            username: item.student,
            id: item.ID,
            Lab: item.lab,
            PcNo: item.pc,
            IssueType: item.issue,
            Description: item.description,
            IssueRaisedDate: item.IssueRaisedDate,
            IssueResolvedDate: item.IssueResolvedDate,
            IssueStatus: item.status
          }
        )
        ));
      setData(transformedData);
    }
    catch(err) {
      console.log(err)
    }
  }
  

  return (
    <div>
      <Navbar2 />
      <div className='d-flex flex-row'>
        <div className='side-bar'>
          <div className='d-flex flex-row m-2' style={{textAlign:'center',border:'2px solid black',borderRadius:'25px'}}>
            <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} fill="currentColor" className="bi bi-person-circle m-2" viewBox="0 0 16 16">
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
            </svg>
            <p className='mt-2'>{user}</p>
          </div>
          <ul className="nav flex-column">
              <Link to='/LabDetails'>
                <li className="nav-item">
                  <p className="nav-link active" aria-current="page" href="#">Lab Details</p>
                </li>        
              </Link>
              <Link to='/ResolvedIssueDetails'>
                <li className="nav-item">
                  <p className="nav-link active" aria-current="page" href="#">Resolved Issue Details</p>
                </li>    
                    
              </Link>
              <Link to='/InprogressIssueDetails'>
                <li className="nav-item">
                  <p className="nav-link active" aria-current="page" href="#">Inprogress Issue Details</p>
                </li>        
              </Link>

              <Link to='/'>
                <li className="nav-item m-3">
                  <button className='btn btn-primary' onClick={logoutHandler}>Logout</button>
                </li>
              </Link>
            </ul>
        </div>
        <form>
            <div style={{marginLeft:'115px',marginTop:'20px'}}>
              <button className='btn btn-primary' onClick={ShowTable}>Get Details</button>
            </div>
        </form>
               
    
        {(show)  ? <IssuesTable data_table = {data}/>  : null}
          
        </div>
      </div>
  )
}



export default ResolvedIssueDetails;