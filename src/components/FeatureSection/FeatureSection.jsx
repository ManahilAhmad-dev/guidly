import React from 'react';
import './FeatureSection.css';

import Asset1 from '../../assets/Asset_1.png';
import Asset2 from '../../assets/Asset_2.png';
import Asset3 from '../../assets/Asset_3.png';
import Asset4 from '../../assets/Asset_4.png';
import Asset5 from '../../assets/Asset_5.png';
import Asset6 from '../../assets/Asset_6.png';

function FeatureSection() {
  return (
    <div className="feature-container">
      <h1 className="feature-heading">Key Features</h1>

      <div className="feature-section">
        <div className="feature-item">
          <img src={Asset1} alt="Secure Data" />
          <p>Secure Data</p>
        </div>

        <div className="feature-item">
          <img src={Asset2} alt="Fast Access" />
          <p>Fast Access</p>
        </div>

        <div className="feature-item">
          <img src={Asset3} alt="Cloud Sync" />
          <p>Cloud Sync</p>
        </div>

        <div className="feature-item">
          <img src={Asset4} alt="Support" />
          <p>Support</p>
        </div>

        <div className="feature-item">
          <img src={Asset5} alt="Customizable" />
          <p>Customizable</p>
        </div>

        <div className="feature-item">
          <img src={Asset6} alt="Analytics" />
          <p>Analytics</p>
        </div>
      </div>
    </div>
  );
}

export default FeatureSection;
