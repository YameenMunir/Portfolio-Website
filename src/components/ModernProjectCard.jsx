import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  EyeIcon, 
  CodeBracketIcon, 
  ChevronDownIcon,
  ChevronUpIcon,
  StarIcon,
  ArrowTopRightOnSquareIcon 
} from '@heroicons/react/24/outline';

const ModernProjectCard = ({ project, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.div 
      className="modern-project-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, scale: 1.02 }}
      layout
    >
      {/* Project Image */}
      <div className="project-image-container">
        <motion.img 
          src={project.image} 
          alt={project.title}
          className="project-image"
          initial={{ opacity: 0 }}
          animate={{ opacity: imageLoaded ? 1 : 0 }}
          onLoad={() => setImageLoaded(true)}
          onError={(e) => {
            e.target.style.display = 'none';
            setImageLoaded(true);
          }}
        />
        {!imageLoaded && (
          <div className="project-image-placeholder">
            <CodeBracketIcon className="placeholder-icon" />
          </div>
        )}
        
        <div className="project-overlay">
          <div className="project-category">
            <span>{project.category}</span>
          </div>
          <div className="project-actions-overlay">
            {project.demo && (
              <motion.a 
                href={project.demo} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-action-btn demo-btn"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <EyeIcon className="action-icon" />
                <span>Demo</span>
              </motion.a>
            )}
            <motion.a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-action-btn github-btn"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <CodeBracketIcon className="action-icon" />
              <span>Code</span>
            </motion.a>
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="project-content">
        <div className="project-header">
          <h4 className="project-title">{project.title}</h4>
          <motion.button 
            className="expand-btn"
            onClick={toggleExpanded}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {isExpanded ? (
              <ChevronUpIcon className="expand-icon" />
            ) : (
              <ChevronDownIcon className="expand-icon" />
            )}
          </motion.button>
        </div>

        <p className="project-description">{project.description}</p>

        {/* Technologies */}
        <div className="project-technologies">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="tech-tag more-tech">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>

        {/* Expanded Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div 
              className="project-expanded"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Features */}
              <div className="project-features">
                <h5 className="features-title">
                  <StarIcon className="features-icon" />
                  Key Features
                </h5>
                <ul className="features-list">
                  {project.features.map((feature, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* All Technologies */}
              <div className="project-all-tech">
                <h5 className="tech-title">
                  <CodeBracketIcon className="tech-icon" />
                  Technologies Used
                </h5>
                <div className="all-tech-tags">
                  {project.technologies.map((tech, index) => (
                    <motion.span 
                      key={index} 
                      className="tech-tag-expanded"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2, delay: index * 0.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="project-actions-expanded">
                {project.demo && (
                  <motion.a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-btn demo-btn-expanded"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <EyeIcon className="btn-icon" />
                    View Demo
                    <ArrowTopRightOnSquareIcon className="external-icon" />
                  </motion.a>
                )}
                <motion.a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-btn github-btn-expanded"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <CodeBracketIcon className="btn-icon" />
                  View Code
                  <ArrowTopRightOnSquareIcon className="external-icon" />
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default ModernProjectCard;
