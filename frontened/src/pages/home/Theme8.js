import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import './Theme8.css';

function Theme8() {
  const posts = [
    {
      author: 'ashwinherester@gmail.com',
      title: 'Arolax development tech agency where talent meets opportunity',
      description: 'We lead by the design philosophy that every detail only visually…',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=60',
    },
    {
      author: 'ashwinherester@gmail.com',
      title: 'Arolax selected 32+ best web agency and development tool',
      description: 'We lead by the design philosophy that every detail only visually…',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1000&q=60',
    },
    {
      author: 'ashwinherester@gmail.com',
      title: 'Arolax selected 32+ best web agency and development tool',
      description: 'Welcome to Arolax Agency Theme Sites. This is your first post. Edit or delete it, then start writing!',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1000&q=60',
    },
  ];

  return (
    <section className="theme8-section">
      <div className="theme8-container">
        {posts.map((post, index) => (
          <div
            key={index}
            className="theme8-card"
            style={{ backgroundImage: `url(${post.image})` }}
          >
            <div className="theme8-overlay">
              <div className="theme8-user">
                <FaUserCircle className="theme8-avatar" />
                <div className="theme8-author">
                  <p>Written by</p>
                  <span>{post.author}</span>
                </div>
              </div>
              <h2>{post.title.toUpperCase()}</h2>
              <p className="theme8-desc">{post.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Theme8;
