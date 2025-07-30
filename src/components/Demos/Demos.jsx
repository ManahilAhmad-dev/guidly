import React, { useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import './Demos.css';

const stats = [
  { value: 1000, label: 'Assignments Completed', suffix: '+' },
  { value: 99, label: 'Success Rate', suffix: '%' },
  { value: 900, label: 'Happy Students', suffix: '+' },
  { value: 4.5, label: 'Average Rating', suffix: '/5' }
];

const Demos = () => {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: false });
  const [start, setStart] = useState(false);

  // Control start on scroll
  React.useEffect(() => {
    if (inView) {
      setStart(false); // reset
      setTimeout(() => setStart(true), 100); // restart after delay
    }
  }, [inView]);

  return (
    <div className="demos" id="impact" ref={ref}>
      <h2>Our Impact in Numbers</h2>
      <div className="demos-grid">
        {stats.map((stat, index) => (
          <div key={index} className="demos-card">
            <h1>
              {start ? (
                <CountUp
                  end={stat.value}
                  duration={1}
                  suffix={stat.suffix}
                  start={0}
                  useEasing
                />
              ) : (
                `0${stat.suffix}`
              )}
            </h1>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Demos;
