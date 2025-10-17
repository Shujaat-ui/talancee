import React from 'react';
import './Theme3.css';

function Theme3() {
  return (
    <section id="theme3" className="theme3-section">
      <div className="theme3-box">
  {/* Top Big Heading */}
  <div className="theme3-top">
    {/* 👇 Animated emoji or image above heading */}
    <div className="theme3-icon">
      <img
        src="https://em-content.zobj.net/thumbs/120/apple/354/waving-hand_1f44b.png"
        alt="Waving hand"
      />
    </div>

    <h1>
      TAKE CHARGE <br />
      STEER YOUR PRODUCT <br />
      TOWARDS GREATNESS
    </h1>
    <p>
      We thrive on creativity, collaboration, and smart systems thinking blending
      strategy and skill to bring bold ideas to life.
    </p>
  </div>


        {/* Middle Team Info */}
        <div className="theme3-middle">
          <div className="team-card">
            <h2>Dedicated Team</h2>
            <p>
              A handpicked crew of expert engineers, led by seasoned tech leads who turn
              innovation into impact.
            </p>
          </div>

          <div className="team-card">
            <h2>Product Team</h2>
            <p>
              Your dream product deserves dreamers and doers. Our product designers and
              managers craft experiences users love.
            </p>
          </div>

          <div className="team-card">
            <h2>End-to-End Team</h2>
            <p>
              From concept to launch, our all-star team transforms your vision into a
              market-ready success story.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Theme3;
