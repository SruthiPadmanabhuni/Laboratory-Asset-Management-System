import React from 'react'
import './Home.css'
import Navbar from './Navbar'
import Footer from './Footer'
import clgentrance from './clgentrance.jpg'
import web from './web.jpg'

function clearAllCookies() {
  var cookies = document.cookie.split(";");

  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    var eqPos = cookie.indexOf("=");
    var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;";
  }
}

const Home = () => {
  clearAllCookies();

  return (
    <div>
      <Navbar />
      <div className='row homebg p-5'>
        <div className='col-8'>
          <h2 className='head'>About BVRIT</h2>
          <p className='content'>B V Raju Institute of Technology (BVRIT) was established by the eminent philanthropist (Late) Padmabhushan Dr. B.V. Raju under the aegis of Sri Vishnu Educational Society (SVES) in the year 1997. BVRIT was granted UGC – Autonomous Status from the year 2014. The Institute is also duly approved by the AICTE and the Government of Telangana State and is affiliated to JNTU, HYDERABAD. CSE, IT, ECE, EEE, Chemical, Mechanical, and Civil Engineering branches in BVRIT are accredited by NBA. BVRIT is accredited by NAAC with an A+ grade.</p>
          <p className='content'>This institution is also looked after by a body of distinguished professionals from IITs, engineering and government sectors, led by Sri K. V. Vishnu Raju garu. He is a graduate in Chemical Engineering from REC, Trichy and a postgraduate from Michigan Technological University, USA.</p>
          <p className='content'>The purpose of establishing BVRIT was to provide quality technical education in a perfect ambiance for the all-round development of a student. Under the hegemony of our Chairman, Sri K. V. Vishnu Raju, BVRIT made a quantum leap in its reputation for its best teaching-learning practices, high-quality intake, excellent infrastructure facilities, the highest number of placements, etc.</p>
        </div>
        <div className='col-4'>
          <img src={clgentrance} alt='bvritlogo' className='bvritimg'/>
        </div>
        <div className='col-4'>
          <img src={web} alt='bvritlogo' className='bvritimg'/>
        </div>
        <div className='col-8'>
          <h2 className='head'>About Website</h2>
          <p className='content'>The laboratories play a significant role in universities since the quality of the facilities and their administration have a direct impact on the institution's teaching and research.The goal of the A Problem Solving Approach For Computer Laboratory Asset Management System project is to create a web-based application with a user login portal and an admin login portal that makes it easier to resolve lab difficulties. This system facilitates communication and issue tracking, allowing for effective problem solving and frequent updates for consumers. By putting this solution into practise, laboratories may streamline their issue management procedures, raise customer satisfaction, and make sure that operations run smoothly. The laboratories of today's academic and research institutions are crucial to education, learning, and scientific research. The way we communicate, obtain information, and conduct business on the Internet has evolved as a result of advancements in web technology. The project's objective is to improve customer satisfaction, communication, and lab issue management effectiveness..</p>
        </div>
      </div>
      <hr style={{border:"1px solid black",margin:'0px'}}/>
      <Footer />
    </div>
  )
}

export default Home
