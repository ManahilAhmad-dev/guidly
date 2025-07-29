import React, { useState } from 'react';
import './Testimonial.css';

const testimonials = [
  {
    name: 'Sarah M.',
    field: 'Business Administration, NYU',
    stars: 5,
    message: `Guidly saved my semester! I was struggling with my marketing research paper and they delivered an exceptional assignment that exceeded all my expectations.`,
    date: '2 weeks ago',
  },
  {
    name: 'Marcus J.',
    field: 'Computer Science, MIT',
    stars: 5,
    message: `Amazing experience! The team understood my complex algorithm assignment perfectly and delivered it 2 days before the deadline.`,
    date: '1 month ago',
  },
  {
    name: 'Emma L.',
    field: 'Psychology, Stanford',
    stars: 5,
    message: `My thesis proposal was crafted with incredible attention to detail and followed all academic guidelines perfectly.`,
    date: '3 weeks ago',
  },
  {
    name: 'David R.',
    field: 'Engineering, CalTech',
    stars: 5,
    message: `Exceptional service! The analysis was thorough, and the presentation was professional.`,
    date: '5 days ago',
  },
  {
    name: 'Jessica K.',
    field: 'Literature, Harvard',
    stars: 5,
    message: `The literary analysis they provided was brilliant! They captured nuances I hadn't even considered.`,
    date: '1 week ago',
  },
  {
    name: 'Alex T.',
    field: 'Economics, Oxford',
    stars: 5,
    message: `Outstanding work on my econometrics project! The statistical analysis was spot-on.`,
    date: '2 months ago',
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
