import React, { useState } from 'react';
import './Testimonial.css';

const testimonials = [
    {
    name: 'Aisha H.',
    field: 'Nursing, University of the West of Scotland',
    stars: 5,
    message: `They handled my reflective journal perfectly and used current healthcare references. Highly recommend for nursing students!`,
    date: '4 days ago',
  },
  {
    name: 'Liam B.',
    field: 'Mechanical Engineering, University of Glasgow',
    stars: 5,
    message: `The support with my CAD and simulation report was top-notch. Everything was accurate and well-formatted.`,
    date: '2 weeks ago',
  },
  {
    name: 'Marcus J.',
    field: 'Computer Science, MIT',
    stars: 4,
    message: `Amazing experience! The team understood my complex algorithm assignment perfectly and delivered it 2 days before the deadline.`,
    date: '1 month ago',
  },
  {
    name: 'Emma L.',
    field: 'Psychology, UWS',
    stars: 4,
    message: `My thesis proposal was crafted with incredible attention to detail and followed all academic guidelines perfectly.`,
    date: '3 weeks ago',
  },
  {
    name: 'Chloe R.',
    field: 'Education Studies, University of the West of Scotland',
    stars: 5,
    message: `They understood academic referencing very well. My literature review got great feedback from my tutor.`,
    date: '6 days ago',
  },
  {
    name: 'James W.',
    field: 'Law, University of Glasgow',
    stars: 5,
    message: `Very reliable and legally accurate! My case study on tort law was well-researched and professionally written.`,
    date: '1 week ago',
  }
];

const Testimonial = () => {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex(index === 0 ? testimonials.length - 1 : index - 1);
  };

  const next = () => {
    setIndex((index + 1) % testimonials.length);
  };

  return (
    <div className="testimonial-container">
      <h2>What Our Students Say</h2>
      <p className="subtitle">
        Real testimonials from students who achieved academic success with Guidly
      </p>
      <div className="slider-controls">
        <button className="nav-btn" onClick={prev}>❮</button>
        <div className="testimonial-card">
          <h3>{testimonials[index].name}</h3>
          <p className="field">{testimonials[index].field}</p>
          <div className="stars">{'★'.repeat(testimonials[index].stars)}</div>
          <p className="message">{testimonials[index].message}</p>
          <p className="date">{testimonials[index].date}</p>
        </div>
        <button className="nav-btn" onClick={next}>❯</button>
      </div>
    </div>
  );
};

export default Testimonial;
