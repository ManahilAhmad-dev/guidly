import React, { useState } from 'react';
import './Demos.css';
import demo_1 from '../../assets/Demo_1.png';
import demo_2 from '../../assets/Demo_2.png';
import demo_3 from '../../assets/Demo_3.png';
import demo_4 from '../../assets/Demo_4.png';
import play from '../../assets/play.png';
import video1 from '../../assets/demo1.mp4';
import video2 from '../../assets/demo2.mp4';
import video3 from '../../assets/demo3.mp4';
import video4 from '../../assets/demo4.mp4';


// Dummy video URLs or paths (replace with your actual video files or links)
const demoVideos = [
  { img: demo_1, title: "Security Breach", desc: "WWith AI-powered motion detection, night vision, and instant notifications, you're always in control — even when you're away.", video: video1 },
  { img: demo_2, title: "Health Safety Monitoring", desc: "Our intelligent camera system is equipped to monitor not only unauthorized access but also ensure compliance with health and safety protocols.", video: video2 },
  { img: demo_3, title: "Vehicle in/out control", desc: "Managing vehicle movement has never been easier. Our advanced camera system uses automatic number plate recognition (ANPR) and real-time tracking to monitor every vehicle entering and exiting your premises.", video: video3 },
  { img: demo_4, title: "Production Line Monitoring", desc: "Keep your operations running smoothly with intelligent production line monitoring. Our camera system tracks every step of the manufacturing process in real time — helping you identify bottlenecks, reduce downtime, and maintain quality standards.", video: video4 },
];


const Demos = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const openVideo = (videoUrl) => {
    setSelectedVideo(videoUrl);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <div className='demo'>
      <h1>Surveillance in Motion</h1>

      {demoVideos.map((item, index) => (
        <div className='demo_block' key={index}>
          <div className='about-left'>
            <img src={item.img} alt={`Demo ${index + 1}`} className='demo_img' />
            <img src={play} alt="Play" className='play_img' onClick={() => openVideo(item.video)} />
          </div>
          <div className='about-right'>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
          </div>
        </div>
      ))}

      {selectedVideo && (
        <div className="video-modal" onClick={closeVideo}>
          <div className="video-container" onClick={(e) => e.stopPropagation()}>
            <video src={selectedVideo} controls autoPlay />
            <button className="close-btn" onClick={closeVideo}>✖</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Demos;
