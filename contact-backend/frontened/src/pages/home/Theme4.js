import React from 'react';
import { FaWordpress, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiFlutter, SiRedux } from 'react-icons/si'; // ✅ Flutter & Redux from Simple Icons
import './Theme4.css';

function Theme4() {
  return (
    <section id="theme4" className="theme4-section">
      <h1>Our Talencee Technology Expertise</h1>

      <div className="tech-circles">
        <div className="tech-circle"><FaWordpress /></div>
        <div className="tech-circle"><FaReact /></div>
        <div className="tech-circle"><FaNodeJs /></div>
        <div className="tech-circle"><SiFlutter /></div>
        <div className="tech-circle"><SiRedux /></div>
      </div>
    </section>
  );
}

export default Theme4;
