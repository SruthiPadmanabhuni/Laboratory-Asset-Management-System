import React, { useState } from 'react';
import axios from 'axios';

const RaiseIssue = () => {
  const user = document.cookie.split('=')[1]
  const [selectedLab, setSelectedLab] = useState('');
  const [selectedPC, setSelectedPC] = useState('');
  const [selectedIssue, setSelectedIssue] = useState('');
  const [desc, setDesc] = useState('');

  const handlePcChange = (event) => {
    setSelectedPC(event.target.value);
  };

  const handleIssueChange = (event) => {
    setSelectedIssue(event.target.value);
  };

  const handleDropdownChange = (event) => {
    setSelectedLab(event.target.value);
  };

  const handleSubmit = (event) =>{
    event.preventDefault();
    APIcall();
  };

  const handleDescChange = (event) => {
    setDesc(event.target.value);
  };

  const APIcall = async () => {
    try {
      const data = {
        student: user,
        lab: selectedLab,
        pc: selectedPC,
        issue: selectedIssue,
        desc: desc
      }

      if(data.lab==='' || data.pc==='' || data.issue==='') {
        alert('Please fill all the fields')
        return
      }
      
      if(data.desc.length>100) {
        alert('Description should be less than 100 characters')
        return
      }

      const response = await axios.post('http://localhost:5000/api/issues/', data)

      alert(response.data)

      window.location.href = '/StudentPageOne'
    }
    catch(err) {
      console.log(err)
    }
  }

  return (
    <div>
      <h1>Raise an Issue</h1>
      <form>
        <div>
            <label htmlFor="Labdropdown" className='m-3'>Lab :</label>
            <select id="Labdropdown" style={{marginLeft:'62px'}} value={selectedLab} onChange={handleDropdownChange}>
                <option value="">-- Select an option --</option>
                <option value="Lab1">Lab 1</option>
                <option value="Lab2">Lab 2</option>
            </select>
        </div>
        <div>
            <label htmlFor="PCNodropdown" className='m-3'>PC No :</label>
            <select id="PCNodropdown" style={{marginLeft:'45px'}} onChange={handlePcChange}>
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
        <div>
            <label htmlFor="IssueTypedropdown" className='m-3'>Issue Type :</label>
            <select id="IssueTypedropdown" onChange={handleIssueChange} style={{marginLeft:'20px'}}>
                <option value="">-- Select an option --</option>
                <option value="Power Issue">Power Issue</option>
                <option value="Software Issue">Software Issue</option>
                <option value="Hardware Issue">Hardware Issue</option>
            </select>
        </div>
        <div>
          <textarea placeholder='Type description of your issue' cols='36' rows='3' style={{marginLeft:'15px'}} onChange={handleDescChange}></textarea>
        </div>
        <div style={{marginLeft:'115px',marginTop:'20px'}}>
          <button type='submit' className='btn btn-primary' onClick={handleSubmit}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default RaiseIssue;