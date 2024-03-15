// container.js
import React from 'react';

function Container({ title, subtitle, description, videoId }) {
  return (
    <section className="data-container">
      <h2>{title}</h2>
      <h4>{subtitle}</h4>
      <p>{description}</p>
      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}

export default Container;




