import React,{ useState } from 'react'
import {Link} from 'react-router-dom'
import IssuesTable from './IssuesTable'
import axios from 'axios'
import Navbar2 from '../Navbar2'

const LabDetails = () => {
  const user = document.cookie.split('=')[1]
  const [show, setShow] = useState(false);
  const [lab, setLab] = useState('');
  const [pc, setPc] = useState('');
  const [data, setData] = useState([]);

  const setLabHandler = (e) => {
    setLab(e.target.value);
  }

  const setPcHandler = (e) => {
    setPc(e.target.value);
  }

  const ShowTable = (e) => {

    if(!lab || !pc) {
      alert('Please select both lab and pc')
      return;
    }

    e.preventDefault();
    APIcall();
    setShow(true);
  }
  
  const APIcall = async () => {
    try {
      let result = await axios.get('http://localhost:5000/api/issues/' + lab + '/' + pc)
      const transformedData = result.data.map(item => (
        item.status === 'resolved' ? null : (
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
            <li className="nav-item">
              <p className="nav-link active" aria-current="page" href="#">Lab Details</p>
            </li>
            <Link to='/'>
              <li className="nav-item m-3">
                <button className='btn btn-primary'>Logout</button>
              </li>
            </Link>
          </ul>
        </div>
        <div className='sidecomp pl-2'>
          <h1>Lab Details</h1>
          <form>
            <div>
                <label htmlFor="Labdropdown" className='m-3'>Lab :</label>
                <select id="Labdropdown" style={{marginLeft:'45px'}} onChange={setLabHandler}>
                    <option value="">-- Select an option --</option>
                    <option value="Lab1">Lab 1</option>
                    <option value="Lab2">Lab 2</option>
                </select>
            </div>
            <div>
                <label htmlFor="PCNodropdown" className='m-3'>PC No :</label>
                <select id="PCNodropdown" style={{marginLeft:'28px'}} onChange={setPcHandler}>
                    <option value="">-- Select an option --</option>
                    <option value='PC - 1'>PC - 1</option>
                    <option value='PC - 2'>PC - 2</option>
                    <option value='PC - 3'>PC - 3</option>
                    <option value='PC - 4'>PC - 4</option>
                    <option value='PC - 5'>PC - 5</option>
                    <option value='PC - 6'>PC - 6</option>
                    <option value='PC - 7'>PC - 7</option>
                    <option value='PC - 8'>PC - 8</option>
                    <option value='PC - 9'>PC - 9</option>
                    <option value='PC - 10'>PC - 10</option>
                    <option value='PC - 11'>PC - 11</option>
                    <option value='PC - 12'>PC - 12</option>
                    <option value='PC - 13'>PC - 13</option>
                    <option value='PC - 14'>PC - 14</option>
                    <option value='PC - 15'>PC - 15</option>
                    <option value='PC - 16'>PC - 16</option>
                    <option value='PC - 17'>PC - 17</option>
                    <option value='PC - 18'>PC - 18</option>
                    <option value='PC - 19'>PC - 19</option>
                    <option value='PC - 20'>PC - 20</option>
                    <option value='PC - 21'>PC - 21</option>
                    <option value='PC - 22'>PC - 22</option>
                    <option value='PC - 23'>PC - 23</option>
                    <option value='PC - 24'>PC - 24</option>
                    <option value='PC - 25'>PC - 25</option>
                    <option value='PC - 26'>PC - 26</option>
                    <option value='PC - 27'>PC - 27</option>
                    <option value='PC - 28'>PC - 28</option>
                    <option value='PC - 29'>PC - 29</option>
                    <option value='PC - 30'>PC - 30</option>
                    <option value='PC - 31'>PC - 31</option>
                    <option value='PC - 32'>PC - 32</option>
                    <option value='PC - 33'>PC - 33</option>
                    <option value='PC - 34'>PC - 34</option>
                    <option value='PC - 35'>PC - 35</option>
                    <option value='PC - 36'>PC - 36</option>
                </select>
            </div>
            <div style={{marginLeft:'115px',marginTop:'20px'}}>
              <button className='btn btn-primary' onClick={ShowTable}>Submit</button>
            </div>
          </form>
          {(show)  ? <IssuesTable data_table = {data}/>  : null}
          
        </div>
      </div>
    </div>
  )
}



export default LabDetails;