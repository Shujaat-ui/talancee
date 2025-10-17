import React, { useEffect, useState } from 'react';
import './Theme5.css';

function Theme5() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Limit the maximum movement to 30px
  const getTransform = (factor) => {
    const move = Math.min(scrollY * factor, 30); // maximum 30px
    return `translateY(${move}px)`;
  };

  return (
    <section className="theme5-section">
      <h1>Introducing <br /> Talencee Skilled Team!</h1>
      <p>Our ability to combine expertise and systems thinking is what fuels us as a team.</p>

      <div className="team-images">
        <div className="team-image" style={{ transform: getTransform(0.05) }}>
          <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Ceyhan Özçivit" />
          <h3>Ceyhan Özçivit</h3>
          <p>Mid-Level Developer</p>
        </div>
        <div className="team-image" style={{ transform: getTransform(-0.05) }}>
          <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Özge Törer" />
          <h3>Özge Törer</h3>
          <p>Mid-Level Web Designer</p>
        </div>
        <div className="team-image" style={{ transform: getTransform(0.05) }}>
          <img src="https://randomuser.me/api/portraits/men/76.jpg" alt="Tuya Terekh" />
          <h3>Tuya Terekh</h3>
          <p>Senior Developer</p>
        </div>
        <div className="team-image" style={{ transform: getTransform(-0.05) }}>
          <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Aşenur Özkan" />
          <h3>Aşenur Özkan</h3>
          <p>Lead Developer</p>
        </div>
      </div>
    </section>
  );
}

export default Theme5;
