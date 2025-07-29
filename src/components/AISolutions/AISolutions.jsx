import React from 'react'
import './AISolution.css';
import Success from "..//../assets/Success.png"
import Flash from '..//../assets/flash.png'
import Cap from '..//../assets/cap.png'
import Lock from '..//../assets/lock.png'
import Money from '..//../assets/money.png'
import Tart from '..//../assets/tart.png'
const AISolutions = () => {
  return (
    <div className='solution' >
      <h1>Why Choose Us?</h1>
      <p1>We deliver exceptional assignments that meet the highest academic standards</p1>
       <div className='blog'>
        <img className='img' src={Success} alt="" />
        <div><h3>99% Success Rate</h3>
        <p>Our exceptional track record speaks volumes. Nearly all our clients achieve their desired academic outcomes with our expertly crafted assignments.</p>
      </div>
         </div >
       <div className='blog'>
        <img className='img'  src={Flash} alt="" />
        <div>
        <h3>Lightning Fast Delivery</h3>
        <p>Time is precious in academics. We deliver high-quality, thoroughly researched assignments within your specified deadlines, guaranteed.</p>
        </div>
          </div>
       <div className='blog'>
        <img className='img'  src={Cap} alt=""/>
        <div>
        <h3>Expert Academic Writers</h3>
        <p> Our team consists of qualified professionals with advanced degrees and extensive experience across various academic disciplines and fields.</p>
        </div>
        </div>

        <div className='blog'>
        <img className='img'  src={Lock} alt="" />
        <div>
        <h3>100% Original Content</h3>
        <p>Every assignment is written from scratch, thoroughly researched, and rigorously checked for plagiarism to ensure complete originality and authenticity.</p>
        </div>
        </div>
        <div className='blog'>
        <img className='img'  src={Money} alt="" />
        <div>
        <h3>Student-Friendly Pricing</h3>
        <p> Quality education support shouldn't strain your budget. We offer competitive, transparent pricing without ever compromising on quality or service.</p>
        </div>
        </div>
        <div className='blog'>
        <img className='img'  src={Tart} alt="" />
        <div>
        <h3>Tailored Solutions</h3>
        <p> Each assignment is carefully customized to your specific requirements, academic guidelines, and educational level for maximum relevance and impact.</p>
        </div>
        </div>
    </div>
  )
}

export default AISolutions
