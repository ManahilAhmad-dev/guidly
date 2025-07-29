import React, { useEffect, useState } from "react";
import "./Exhibition.css";

import ex1 from "../../assets/ex1.jpeg";
import ex2 from "../../assets/ex2.jpeg";
import ex3 from "../../assets/ex3.jpeg";
import ex4 from "../../assets/ex4.jpeg";
import ex5 from "../../assets/ex5.jpeg";

const images = [ex1, ex2, ex3, ex4, ex5];

export default function Exhibition() {
  const [index, setIndex] = useState(0);

  // Automatically slide every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const getImageIndex = (offset) =>
    (index + offset + images.length) % images.length;

  return (
    <div className="exhibition-wrapper">
      <h2 className="exhibition-heading">Exhibition Gallery</h2>

      <div className="carousel-container">
        <div className="carousel-3d">
          {[-1, 0, 1].map((offset) => {
            const imgIndex = getImageIndex(offset);
            return (
              <img
                key={imgIndex}
                src={images[imgIndex]}
                alt={`Exhibition ${imgIndex}`}
                className={`carousel-img ${offset === 0 ? "center" : "side"}`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}