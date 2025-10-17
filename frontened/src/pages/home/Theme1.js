import React, { useState, useEffect } from 'react';
import './Theme1.css';

function Theme1() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setAnimate(window.scrollY > 100);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="theme1-container">
      <div className="hero-content">
        {/* Left side text */}
        <div className="hero-text">
          <h1>
            WE BUILD<br />DIGITAL<br />EXPERIENCES<br />THAT INSPIRE.
          </h1>
        </div>

        {/* Right circular section */}
        <div className={`hero-circle ${animate ? 'active' : ''}`}>
          <div className="circle-img top">
            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80"
              alt="Teamwork"
            />
          </div>
          <div className="circle-img bottom">
            <img
              src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=800&q=80"
              alt="Handshake"
            />
          </div>
          <div className="play-btn">▶</div>
          
        </div>
        <div className="customer-info">
          <div className="avatars">
            <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="user1" />
            <img src="https://randomuser.me/api/portraits/men/2.jpg" alt="user2" />
            <img src="https://randomuser.me/api/portraits/men/3.jpg" alt="user3" />
            <div className="avatar-plus">+</div>
          </div>
          <p>We have <strong>18k+</strong> customers worldwide</p>
        </div>
      </div>

      {/* Sub text section */}
      <div className="sub-info">
        <p>
          We’re a full-service digital agency crafting captivating user experiences through design, strategy, and technology. 
          At <strong>Talencee</strong>, we go beyond visuals — delivering creativity, functionality, and results across every digital platform.
        </p>
        
      </div>
    </section>
  );
}

export default Theme1;
