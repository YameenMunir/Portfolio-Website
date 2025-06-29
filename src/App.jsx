import './App.css';
import profileImg from './assets/profile.jpg';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { AcademicCapIcon, CodeBracketIcon, ChartBarIcon, UsersIcon, LightBulbIcon } from '@heroicons/react/24/solid';

import useSectionFadeIn from './useSectionFadeIn';
import Contact from './components/Contact';
import CinematicBackground from './components/CinematicBackground';

const sections = [
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'qualifications', label: 'Additional Qualifications' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function App() {
  useSectionFadeIn();
  const [active, setActive] = useState('about');
  const [showScroll, setShowScroll] = useState(false);
  const [expandedProjects, setExpandedProjects] = useState({});

  // Scroll-to-top button logic
  window.onscroll = () => {
    setShowScroll(window.scrollY > 300);
  };

  const toggleProjectDetails = (projectId) => {
    setExpandedProjects(prev => ({
      ...prev,
      [projectId]: !prev[projectId]
    }));
  };

  return (
    <>
      <CinematicBackground />
      <header className="header glass-header">
        <div className="container header-content">
          <img src={profileImg} alt="Yameen Munir" className="profile-img" />
          <div>
            <h1>Yameen Munir</h1>
            <h2>AI Enthusiast | Python Developer | Data Science Learner</h2>
            <p>Based in London, UK</p>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/yameen-munir/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.034 0 3.595 1.997 3.595 4.59v5.606z"/></svg>
              </a>
              <a href="https://github.com/YameenMunir" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
              </a>
              <a href="mailto:yameenmunir05@gmail.com" className="email-link" aria-label="Email">
                <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M12 13.065 2.4 6.6A2 2 0 0 1 4 6h16a2 2 0 0 1 1.6.6l-9.6 6.465Zm-9.6 7.335V7.47l9.6 6.465 9.6-6.465v12.93A2 2 0 0 1 20 22H4a2 2 0 0 1-1.6-.6Z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </header>
      <nav className="navbar glass-navbar">
        <ul>
          {sections.map((s) => (
            <li key={s.id}>
              <button
                className={active === s.id ? 'active' : ''}
                onClick={() => {
                  setActive(s.id);
                  scrollToSection(s.id);
                }}
              >
                {s.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <main className="container">
        <motion.section id="about" className="fade-in-section card-section" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
          <h3>About Me</h3>
          <p className="lead">Hello! I'm <span className="highlight">Yameen Munir</span>, an <span className="highlight">AI enthusiast</span> and <span className="highlight">Python developer</span> based in London. As a final-year BSc (Hons) Computer Science student at London South Bank University, I specialize in <span className="highlight">AI</span>, <span className="highlight">Machine Learning</span>, <span className="highlight">Data Science</span>, and <span className="highlight">Data Analysis</span>.</p>
          <p className="lead">I'm actively seeking opportunities—remote or onsite—where I can apply my skills and contribute to forward-thinking projects in <span className="highlight">AI/ML</span>, <span className="highlight">Data Science</span>, and <span className="highlight">Data Analysis</span>.</p>
        </motion.section>
        <motion.section id="experience" className="fade-in-section card-section" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} viewport={{ once: true }}>
          <h3>Professional & Program Experience</h3>
          <ul className="timeline">
            <li><span className="timeline-dot"></span><strong>Customer Service Specialist</strong> at Youshiko LTD (Jan 2020 - Present): Achieved high customer satisfaction, streamlined communication, and demonstrated software proficiency.</li>
            <li><span className="timeline-dot"></span><strong>CSI Ambassador</strong> at London South Bank University (Jul 2024 - Present): Developed coding workshops and led career fairs to foster computer science passion among students.</li>
            <li><span className="timeline-dot"></span><strong>Mentee</strong> in Microsoft Embrace Program (Oct 2024 - Dec 2024): Participated in an 8-week mentorship, gaining insights from a Microsoft professional.</li>
          </ul>
        </motion.section>
        <motion.section id="education" className="fade-in-section card-section" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} viewport={{ once: true }}>
          <h3>Education</h3>
          <ul className="timeline">
            <li><span className="timeline-dot"></span><strong>BSc (Hons) Computer Science</strong>, London South Bank University (Sep 2023 - Present)</li>
            <li><span className="timeline-dot"></span><strong>A Levels & GCSEs</strong>, Brentwood Independent School (Sep 2020 - Jun 2023)</li>
            <li><span className="timeline-dot"></span><strong>Quantum Summer School</strong>, UK Government (Aug 2024)</li>
          </ul>
        </motion.section>
        <motion.section id="skills" className="fade-in-section card-section" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} viewport={{ once: true }}>
          <h3>Key Skills</h3>
          <ul className="timeline">
            <li><span className="timeline-dot"></span><strong>AI & Machine Learning:</strong> Python (Pandas, NumPy, Scikit-learn, Matplotlib), Jupyter Notebook, data-driven modeling. <div className="skill-bar"><div className="skill-bar-fill" style={{width:'90%'}}></div></div></li>
            <li><span className="timeline-dot"></span><strong>Programming:</strong> Python (advanced), Java, C#, R, SQL <div className="skill-bar"><div className="skill-bar-fill" style={{width:'85%'}}></div></div></li>
            <li><span className="timeline-dot"></span><strong>Data Analysis & Visualization:</strong> Power BI, SQL, statistical modeling for insights <div className="skill-bar"><div className="skill-bar-fill" style={{width:'80%'}}></div></div></li>
            <li><span className="timeline-dot"></span><strong>Research & Problem-Solving:</strong> Strong analytical skills, e-commerce data prediction, algorithm design <div className="skill-bar"><div className="skill-bar-fill" style={{width:'75%'}}></div></div></li>
            <li><span className="timeline-dot"></span><strong>Collaboration & Communication:</strong> Delivered coding workshops (100+ students), mentored by Microsoft professionals, led career fairs (500+ attendees) <div className="skill-bar"><div className="skill-bar-fill" style={{width:'95%'}}></div></div></li>
          </ul>
        </motion.section>
        <motion.section id="qualifications" className="fade-in-section card-section" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.35 }} viewport={{ once: true }}>
          <h3>ADDITIONAL QUALIFICATIONS</h3>
          <ul className="timeline">
            <li><span className="timeline-dot"></span>AI and Machine Learning Bootcamp | January 2024 - July 2024</li>
            <li><span className="timeline-dot"></span>Benefits of GitHub Community (LinkedIn Learning) | April 2024</li>
            <li><span className="timeline-dot"></span>Introduction to SQL (SoloLearn) | May 2024</li>
            <li><span className="timeline-dot"></span>Learning Power BI Desktop | May 2024</li>
            <li><span className="timeline-dot"></span>UK Government, Quantum Summer School | August 2024</li>
            <li><span className="timeline-dot"></span>British Airways - Data Science Job Simulation | September 2024</li>
            <li><span className="timeline-dot"></span>Introduction to Generative IA | May 2025</li>
          </ul>
        </motion.section>
        <motion.section id="projects" className="fade-in-section card-section" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }} viewport={{ once: true }}>
          <h3>Highlighted Projects</h3>
          <div className="project-grid">
            <div className="project">
              <h4>AI-Recipe-Generator</h4>
              <p>A Streamlit app leveraging Google's Gemini AI to generate personalized recipes based on user input (ingredients, dietary restrictions, meal types).</p>
              {expandedProjects['recipe-generator'] && (
                <div className="project-details">
                  <h5>Key Features:</h5>
                  <ul>
                    <li>Real-time recipe generation using Gemini AI</li>
                    <li>Customizable dietary preferences</li>
                    <li>Ingredient-based recipe suggestions</li>
                    <li>User-friendly Streamlit interface</li>
                  </ul>
                  <h5>Technologies Used:</h5>
                  <ul>
                    <li>Python</li>
                    <li>Streamlit</li>
                    <li>Google Gemini AI</li>
                    <li>Natural Language Processing</li>
                  </ul>
                </div>
              )}
              <div className="project-actions">
                <a className="project-link" href="https://github.com/YameenMunir/AI-Recipe-Generator" target="_blank" rel="noopener noreferrer">View on GitHub</a>
                <button 
                  className="details-button"
                  onClick={() => toggleProjectDetails('recipe-generator')}
                >
                  {expandedProjects['recipe-generator'] ? 'Show Less' : 'Show More'}
                </button>
              </div>
            </div>
            <div className="project">
              <h4>Cricket Match Data Analysis and Prediction</h4>
              <p>Comprehensive analysis and machine learning-based prediction of cricket match outcomes, player performance, runs, and wickets.</p>
              {expandedProjects['cricket-analysis'] && (
                <div className="project-details">
                  <h5>Key Features:</h5>
                  <ul>
                    <li>Match outcome prediction</li>
                    <li>Player performance analytics</li>
                    <li>Statistical modeling</li>
                    <li>Interactive visualizations</li>
                  </ul>
                  <h5>Technologies Used:</h5>
                  <ul>
                    <li>Python</li>
                    <li>Pandas & NumPy</li>
                    <li>Scikit-learn</li>
                    <li>Matplotlib & Seaborn</li>
                  </ul>
                </div>
              )}
              <div className="project-actions">
                <a className="project-link" href="https://github.com/YameenMunir/Cricket-Match-Data-Analysis-and-Prediction-using-Machine-Learning" target="_blank" rel="noopener noreferrer">View on GitHub</a>
                <button 
                  className="details-button"
                  onClick={() => toggleProjectDetails('cricket-analysis')}
                >
                  {expandedProjects['cricket-analysis'] ? 'Show Less' : 'Show More'}
                </button>
              </div>
            </div>
            <div className="project">
              <h4>Diabetes Prediction and Prevention App</h4>
              <p>A Streamlit app for predicting diabetes risk and providing prevention tips using machine learning models.</p>
              {expandedProjects['diabetes-app'] && (
                <div className="project-details">
                  <h5>Key Features:</h5>
                  <ul>
                    <li>Risk prediction using ML models</li>
                    <li>Personalized prevention tips</li>
                    <li>Interactive data visualization</li>
                    <li>User-friendly input form</li>
                  </ul>
                  <h5>Technologies Used:</h5>
                  <ul>
                    <li>Python</li>
                    <li>Streamlit</li>
                    <li>Scikit-learn</li>
                    <li>Pandas & NumPy</li>
                  </ul>
                </div>
              )}
              <div className="project-actions">
                <a className="project-link" href="https://github.com/YameenMunir/Diabetes-Prediction-and-Prevention-App-with-Streamlit" target="_blank" rel="noopener noreferrer">View on GitHub</a>
                <button 
                  className="details-button"
                  onClick={() => toggleProjectDetails('diabetes-app')}
                >
                  {expandedProjects['diabetes-app'] ? 'Show Less' : 'Show More'}
                </button>
              </div>
            </div>
            <div className="project">
              <h4>Tokyo Olympics Data Analysis</h4>
              <p>In-depth data analysis of the Tokyo Olympics, exploring medal distributions, athlete metrics, gender representation, and COVID-19 impact.</p>
              {expandedProjects['tokyo-olympics'] && (
                <div className="project-details">
                  <h5>Key Features:</h5>
                  <ul>
                    <li>Medal distribution analysis</li>
                    <li>Athlete performance metrics</li>
                    <li>Gender representation insights</li>
                    <li>COVID-19 impact assessment</li>
                  </ul>
                  <h5>Technologies Used:</h5>
                  <ul>
                    <li>Python</li>
                    <li>Pandas</li>
                    <li>Matplotlib & Seaborn</li>
                    <li>Jupyter Notebook</li>
                  </ul>
                </div>
              )}
              <div className="project-actions">
                <a className="project-link" href="https://github.com/YameenMunir/Tokyo-Olympics-Data-analysis" target="_blank" rel="noopener noreferrer">View on GitHub</a>
                <button 
                  className="details-button"
                  onClick={() => toggleProjectDetails('tokyo-olympics')}
                >
                  {expandedProjects['tokyo-olympics'] ? 'Show Less' : 'Show More'}
                </button>
              </div>
            </div>
          </div>
        </motion.section>
        <motion.section id="extracurricular" className="fade-in-section card-section" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5 }} viewport={{ once: true }}>
          <h3>Extracurricular Activities</h3>
          <ul className="timeline">
            <li><span className="timeline-dot"></span><strong>Simventure Competition 2024:</strong> Participated in a business simulation competition, collaborating with a team of 4 on business decision-making.</li>
          </ul>
        </motion.section>
        <motion.section id="contact" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.7 }} viewport={{ once: true }}>
          <Contact />
        </motion.section>
        {showScroll && (
          <button className="scroll-to-top" onClick={() => window.scrollTo({top:0,behavior:'smooth'})} aria-label="Scroll to top">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
          </button>
        )}
      </main>
      <footer className="footer glass-footer">
        <div className="container">
          <p>&copy; 2025 Yameen Munir. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
