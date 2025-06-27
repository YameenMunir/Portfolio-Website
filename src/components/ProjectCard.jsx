import { useState } from 'react';

export default function ProjectCard({ title, description, githubUrl, details }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="project">
      <h4>{title}</h4>
      <p>{description}</p>
      <div className="project-buttons">
        <a className="project-link" href={githubUrl} target="_blank" rel="noopener noreferrer">
          View on GitHub
        </a>
        <button 
          className="project-link" 
          onClick={() => setShowDetails(!showDetails)}
          style={{ marginLeft: '0.5rem' }}
        >
          {showDetails ? 'Hide Details' : 'Show Details'}
        </button>
      </div>
      {showDetails && (
        <div className="project-details">
          {details}
        </div>
      )}
    </div>
  );
}
