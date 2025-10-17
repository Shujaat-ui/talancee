import React from 'react';
import './Theme2.css';

// Grey icons (can still use emoji PNGs or any icon PNGs)
const icons = [
  'https://twemoji.maxcdn.com/v/latest/72x72/1f4aa.png', // 💪
  'https://twemoji.maxcdn.com/v/latest/72x72/1f3cb.png', // 🏋️
  'https://twemoji.maxcdn.com/v/latest/72x72/1f3c3.png', // 🏃
  'https://twemoji.maxcdn.com/v/latest/72x72/1f6b4.png', // 🚴
  'https://twemoji.maxcdn.com/v/latest/72x72/1f9d8.png', // 🧘
  'https://twemoji.maxcdn.com/v/latest/72x72/1f3ca.png', // 🏊
  'https://twemoji.maxcdn.com/v/latest/72x72/1f3d5.png', // 🏕
  'https://twemoji.maxcdn.com/v/latest/72x72/1f3de.png', // 🏞
  'https://twemoji.maxcdn.com/v/latest/72x72/1f6a3.png', // 🛶
];

function Theme2() {
  const iconList = [...icons, ...icons, ...icons, ...icons]; // duplicate to avoid empty space

  return (
    <section id="theme2" className="theme2-section">
      <div className="left-design"></div>
      <div className="moving-images">
        {iconList.map((src, index) => (
          <div key={index} className="image">
            <img src={src} alt={`icon-${index}`} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Theme2;
