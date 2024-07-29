import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='bgfooter'>
      <div>
        <h2 className='textclr ml-1 pt-2' style={{textAlign:'left'}}>Contact Us</h2>
        <p className='textclr ml-4'>Name  : P. Surya</p>
        <p className='textclr ml-4'>Ph.No : 9346355292</p>
        <p className='textclr ml-4'>Email : padmanabhunisurya9346@gmail.com</p>
      </div>
      <div>
        <h2 className='textclr ml-1 pb-2' style={{fontSize:'25px'}}><a href='https://forms.gle/Gj5nMBU738P5opCf6' target='_blank' rel='noreferrer'>Feedback</a></h2>
      </div>
    </div>
  )
}

export default Footer
