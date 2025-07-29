import React from 'react';
import './Hero.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-scroll';  // ✅ Add this import

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Expert Assignment Solutions</h1>
        <p>
          Get top-quality assignments crafted by professionals with a 
          proven track record of excellence. Your academic success is our priority.
        </p>

        {/* ✅ Scroll to contact section on click */}
        <Link to="contact" smooth={true} offset={-80} duration={500}>
          <button className="bim">Get Started Today</button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;

