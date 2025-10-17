import React, { useState } from 'react';
import { FaSmileBeam, FaPencilRuler, FaCode, FaBullhorn, FaReact } from 'react-icons/fa';
import './Themem23.css';

function Themem23() {
  const [activeIndex, setActiveIndex] = useState(null);

  const services = [
  {
    number: '01.',
    title: 'Branding & Identity',
    description:
      'Build a brand that speaks before you do. From logos to complete brand systems, we shape identities that capture attention and inspire trust.',
    icon: <FaPencilRuler />,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80'
  },
  {
    number: '02.',
    title: 'Web Design & Development',
    description:
      'Design that performs. Code that delivers. We craft stunning, responsive websites that blend creativity with functionality built to engage and convert.',
    icon: <FaCode />,
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80'
  },
  {
    number: '03.',
    title: 'Digital Marketing',
    description:
      'Be seen. Be heard. Be unforgettable. Our marketing experts amplify your online presence through smart SEO, social media, and performance-driven campaigns.',
    icon: <FaBullhorn />,
    image: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=600&q=80'
  },
  {
    number: '04.',
    title: 'UI/UX Design',
    description:
      'Creative design team on demand that can design, build, ship, and scale your real-world development needs with clarity and precision.',
    icon: <FaReact />,
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80'
  }
];


  return (
    <section className="theme23-section">
      <div className="theme23-header">
        <FaSmileBeam className="theme23-icon" />
        <h1>We provide premium Talencee service</h1>
        <p>
          Empowering brands through innovation, design, and strategy — our
          services are built to elevate your digital presence and drive
          measurable growth.
        </p>
      </div>

      <div className="theme23-services">
        {services.map((service, index) => (
          <div
            key={index}
            className="theme23-row"
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            {/* IMAGE ABOVE ROW */}
            {activeIndex === index && (
              <div className="theme23-hover-image-container">
                <img src={service.image} alt={service.title} />
              </div>
            )}

            <div className="theme23-number">{service.number}</div>
            <div className="theme23-title">{service.title}</div>
            <div className="theme23-description">{service.description}</div>
            <span className="theme23-icon-right">{service.icon}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Themem23;
