import React, { useState } from 'react';
import './BrochureModal.css';
import page1 from '../../assets/page1.png';
import page2 from '../../assets/page2.png';
import downloadIcon from '../../assets/download.png'; // ✅ Make sure this path is correct

const BrochureModal = ({ onClose }) => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>

        <div className={`book ${flipped ? 'flipped' : ''}`} onClick={handleFlip}>
          <div className="page front">
            <img src={page2} alt="Page 2" />
            {/* ✅ Download icon attached to back page and flips with it */}
            <a
              href="/brochure.pdf"
              download
              className="download-icon"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={downloadIcon} alt="Download" />
            </a>
          </div>

          <div className="page back">
            <img src={page1} alt="Page 1" />
            {/* ✅ Download icon attached to back page and flips with it */}
            <a
              href="/brochure.pdf"
              download
              className="download-icon"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={downloadIcon} alt="Download" />
            </a>
            <div className="page front">
  <img src={page1} alt="Page 1" />
  <a
    href="/brochure.pdf"
    download
    className="download-icon"
    onClick={(e) => e.stopPropagation()}
  >
    <img src={downloadIcon} alt="Download" />
  </a>
</div>

<div className="page back">
  <img src={page2} alt="Page 2" />
  <a
    href="/brochure.pdf"
    download
    className="download-icon"
    onClick={(e) => e.stopPropagation()}
  >
    <img src={downloadIcon} alt="Download" />
  </a>
</div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default BrochureModal;
