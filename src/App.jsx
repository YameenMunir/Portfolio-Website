import './App.css';
import profileImg from './assets/profile.jpg';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  AcademicCapIcon, 
  CodeBracketIcon, 
  ChartBarIcon, 
  UsersIcon, 
  LightBulbIcon,
  BriefcaseIcon,
  StarIcon,
  ArrowUpIcon,
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  MapPinIcon
} from '@heroicons/react/24/solid';

import useSectionFadeIn from './useSectionFadeIn';
import Contact from './components/Contact';
import CinematicBackground from './components/CinematicBackground';
import ModernProjectCard from './components/ModernProjectCard';
import Typewriter from './components/Typewriter';

const sections = [
  { id: 'about', label: 'About', icon: UsersIcon },
  { id: 'experience', label: 'Experience', icon: BriefcaseIcon },
  { id: 'education', label: 'Education', icon: AcademicCapIcon },
  { id: 'skills', label: 'Skills', icon: CodeBracketIcon },
  { id: 'qualifications', label: 'Certifications', icon: StarIcon },
  { id: 'projects', label: 'Projects', icon: ChartBarIcon },
  { id: 'contact', label: 'Contact', icon: EnvelopeIcon },
];

const projectsData = [
  {
    id: 'cricket-analysis',
    title: 'Cricket Match Data Analysis and Prediction',
    description: 'Comprehensive analysis and machine learning-based prediction of cricket match outcomes, player performance, runs, and wickets.',
    image: '/cricket-analysis.png',
    technologies: ['Python', 'Pandas & NumPy', 'Scikit-learn', 'Matplotlib & Seaborn'],
    features: [
      'Match outcome prediction',
      'Player performance analytics',
      'Statistical modeling',
      'Interactive visualizations'
    ],
    github: 'https://github.com/YameenMunir/Cricket-Match-Data-Analysis-and-Prediction-using-Machine-Learning',
    demo: null,
    category: 'Data Science'
  },
  {
    id: 'diabetes-app',
    title: 'Diabetes Prediction and Prevention App',
    description: 'A Streamlit app for predicting diabetes risk and providing prevention tips using machine learning models.',
    image: '/diabetes-app.png',
    technologies: ['Python', 'Streamlit', 'Scikit-learn', 'Pandas & NumPy'],
    features: [
      'Risk prediction using ML models',
      'Personalized prevention tips',
      'Interactive data visualization',
      'User-friendly input form'
    ],
    github: 'https://github.com/YameenMunir/Diabetes-Prediction-and-Prevention-App-with-Streamlit',
    demo: null,
    category: 'Healthcare'
  },
  {
    id: 'tokyo-olympics',
    title: 'Tokyo Olympics Data Analysis',
    description: 'In-depth data analysis of the Tokyo Olympics, exploring medal distributions, athlete metrics, gender representation, and COVID-19 impact.',
    image: '/olympics-analysis.png',
    technologies: ['Python', 'Pandas', 'Matplotlib & Seaborn', 'Jupyter Notebook'],
    features: [
      'Medal distribution analysis',
      'Athlete performance metrics',
      'Gender representation insights',
      'COVID-19 impact assessment'
    ],
    github: 'https://github.com/YameenMunir/Tokyo-Olympics-Data-analysis',
    demo: null,
    category: 'Data Analysis'
  }
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
  const [navOpen, setNavOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(true);

  // Enhanced scroll management
  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActive(sectionId);
        }
      });
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    // Loading simulation
    setTimeout(() => setIsLoading(false), 2000);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActive(id);
      setNavOpen(false);
    }
  };

  if (isLoading) {
    return (
      <div className="loading-screen">
        <motion.div 
          className="loading-content"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="loading-spinner"></div>
          <h2>Welcome to Yameen's Portfolio</h2>
        </motion.div>
      </div>
    );
  }

  return (
    <>
      <CinematicBackground />
      
      {/* Custom cursor */}
      <motion.div 
        className="custom-cursor"
        animate={{ x: mousePosition.x - 10, y: mousePosition.y - 10 }}
        transition={{ type: "spring", stiffness: 500, damping: 50 }}
      />
      
      {/* Enhanced Header */}
      <motion.header 
        className="modern-header"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <div className="header-container">
          <motion.div 
            className="header-content"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="profile-section">
              <motion.div 
                className="profile-image-container"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img src={profileImg} alt="Yameen Munir" className="profile-image-modern" />
                <div className="profile-ring"></div>
                <div className="status-indicator"></div>
              </motion.div>
              
              <div className="profile-info">
                <motion.h1 
                  className="profile-name"
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  Yameen Munir
                </motion.h1>
                
                <motion.div 
                  className="profile-title"
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                >
                  <Typewriter 
                    texts={[
                      'AI Enthusiast',
                      'Python Developer', 
                      'Data Science Learner',
                      'Machine Learning Engineer'
                    ]}
                    delay={100}
                    infinite
                  />
                </motion.div>
                
                <motion.div 
                  className="profile-location"
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.1 }}
                >
                  <MapPinIcon className="location-icon" />
                  <span>London, UK</span>
                </motion.div>
                
                <motion.div 
                  className="social-links-modern"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.3 }}
                >
                  <motion.a 
                    href="https://www.linkedin.com/in/yameen-munir/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-link"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.034 0 3.595 1.997 3.595 4.59v5.606z"/>
                    </svg>
                  </motion.a>
                  
                  <motion.a 
                    href="https://github.com/YameenMunir" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-link"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                    </svg>
                  </motion.a>
                  
                  <motion.a 
                    href="mailto:yameenmunir05@gmail.com" 
                    className="social-link"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <EnvelopeIcon />
                  </motion.a>
                </motion.div>
              </div>
            </div>
            
            <motion.div 
              className="header-stats"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              <div className="stat-item">
                <span className="stat-number">3+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">7+</span>
                <span className="stat-label">Certifications</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">2+</span>
                <span className="stat-label">Years Experience</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.header>
      {/* Modern Navigation */}
      <motion.nav 
        className="modern-navbar"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.7 }}
      >
        <div className="nav-container">
          {/* Mobile menu button */}
          <motion.button
            className="mobile-menu-btn"
            onClick={() => setNavOpen(!navOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={navOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="burger-line"
            />
            <motion.div
              animate={navOpen ? { opacity: 0 } : { opacity: 1 }}
              className="burger-line"
            />
            <motion.div
              animate={navOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="burger-line"
            />
          </motion.button>

          {/* Navigation items */}
          <AnimatePresence>
            <motion.ul 
              className={`nav-menu ${navOpen ? 'nav-menu-open' : ''}`}
              initial={false}
              animate={navOpen ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            >
              {sections.map((section, index) => {
                const IconComponent = section.icon;
                return (
                  <motion.li 
                    key={section.id}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <motion.button
                      className={`nav-item ${active === section.id ? 'nav-item-active' : ''}`}
                      onClick={() => scrollToSection(section.id)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <IconComponent className="nav-icon" />
                      <span>{section.label}</span>
                      {active === section.id && (
                        <motion.div 
                          className="nav-indicator"
                          layoutId="nav-indicator"
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                      )}
                    </motion.button>
                  </motion.li>
                );
              })}
            </motion.ul>
          </AnimatePresence>
        </div>
      </motion.nav>
      <main className="modern-container">
        {/* Floating background elements */}
        <div className="floating-elements">
          <div className="floating-element floating-element-1"></div>
          <div className="floating-element floating-element-2"></div>
          <div className="floating-element floating-element-3"></div>
        </div>

        {/* About Section */}
        <motion.section 
          id="about" 
          className="modern-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="section-header">
            <motion.div 
              className="section-icon-container"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <UsersIcon className="section-icon" />
            </motion.div>
            <div>
              <h3 className="section-title">About Me</h3>
              <p className="section-subtitle">Get to know me better</p>
            </div>
          </div>
          
          <div className="section-content">
            <motion.div 
              className="about-content"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="about-text">
                Hello! I'm <span className="highlight">Yameen Munir</span>, an passionate 
                <span className="highlight"> AI enthusiast</span> and 
                <span className="highlight"> Python developer</span> based in London. 
                As a final-year BSc (Hons) Computer Science student at London South Bank University, 
                I specialize in <span className="highlight">Artificial Intelligence</span>, 
                <span className="highlight"> Machine Learning</span>, 
                <span className="highlight"> Data Science</span>, and 
                <span className="highlight"> Data Analysis</span>.
              </p>
              
              <p className="about-text">
                I'm actively seeking opportunities—remote or onsite—where I can apply my skills 
                and contribute to forward-thinking projects in 
                <span className="highlight"> AI/ML</span>, 
                <span className="highlight"> Data Science</span>, and 
                <span className="highlight"> Data Analysis</span>. 
                Let's build the future together!
              </p>
              
              <div className="about-highlights">
                <div className="highlight-item">
                  <LightBulbIcon className="highlight-icon" />
                  <span>Innovation Driven</span>
                </div>
                <div className="highlight-item">
                  <CodeBracketIcon className="highlight-icon" />
                  <span>Tech Enthusiast</span>
                </div>
                <div className="highlight-item">
                  <ChartBarIcon className="highlight-icon" />
                  <span>Data Focused</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section 
          id="experience" 
          className="modern-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="section-header">
            <motion.div 
              className="section-icon-container"
              whileHover={{ scale: 1.1, rotate: -5 }}
            >
              <BriefcaseIcon className="section-icon" />
            </motion.div>
            <div>
              <h3 className="section-title">Professional Experience</h3>
              <p className="section-subtitle">My journey in the professional world</p>
            </div>
          </div>
          
          <div className="timeline-container">
            <motion.div 
              className="timeline-item"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4>Customer Service Specialist</h4>
                <p className="timeline-company">Youshiko LTD</p>
                <p className="timeline-date">Jan 2020 - Present</p>
                <p className="timeline-description">
                  Achieved high customer satisfaction, streamlined communication, 
                  and demonstrated software proficiency in a dynamic environment.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="timeline-item"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4>CSI Ambassador</h4>
                <p className="timeline-company">London South Bank University</p>
                <p className="timeline-date">Jul 2024 - Present</p>
                <p className="timeline-description">
                  Developed coding workshops and led career fairs to foster computer science 
                  passion among students, reaching 100+ participants.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="timeline-item"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4>Mentee - Microsoft Embrace Program</h4>
                <p className="timeline-company">Microsoft</p>
                <p className="timeline-date">Oct 2024 - Dec 2024</p>
                <p className="timeline-description">
                  Participated in an intensive 8-week mentorship program, gaining insights 
                  from Microsoft professionals and expanding industry knowledge.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section 
          id="education" 
          className="modern-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="section-header">
            <motion.div 
              className="section-icon-container"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <AcademicCapIcon className="section-icon" />
            </motion.div>
            <div>
              <h3 className="section-title">Education</h3>
              <p className="section-subtitle">Academic achievements and learning journey</p>
            </div>
          </div>
          
          <div className="education-grid">
            <motion.div 
              className="education-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="education-header">
                <h4>BSc (Hons) Computer Science</h4>
                <span className="education-period">2023 - Present</span>
              </div>
              <p className="education-institution">London South Bank University</p>
              <div className="education-status">
                <span className="status-badge current">Current</span>
              </div>
            </motion.div>
            
            <motion.div 
              className="education-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="education-header">
                <h4>A Levels & GCSEs</h4>
                <span className="education-period">2020 - 2023</span>
              </div>
              <p className="education-institution">Brentwood Independent School</p>
              <div className="education-status">
                <span className="status-badge completed">Completed</span>
              </div>
            </motion.div>
            
            <motion.div 
              className="education-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="education-header">
                <h4>Quantum Summer School</h4>
                <span className="education-period">Aug 2024</span>
              </div>
              <p className="education-institution">UK Government</p>
              <div className="education-status">
                <span className="status-badge special">Special Program</span>
              </div>
            </motion.div>
          </div>
        </motion.section>
        {/* Skills Section */}
        <motion.section 
          id="skills" 
          className="modern-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="section-header">
            <motion.div 
              className="section-icon-container"
              whileHover={{ scale: 1.1, rotate: -5 }}
            >
              <CodeBracketIcon className="section-icon" />
            </motion.div>
            <div>
              <h3 className="section-title">Technical Skills</h3>
              <p className="section-subtitle">Technologies and tools I work with</p>
            </div>
          </div>
          
          <div className="skills-grid">
            <motion.div 
              className="skill-card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="skill-header">
                <ChartBarIcon className="skill-icon" />
                <h4>AI & Machine Learning</h4>
              </div>
              <p className="skill-description">
                Python (Pandas, NumPy, Scikit-learn, Matplotlib), Jupyter Notebook, data-driven modeling
              </p>
              <div className="skill-progress">
                <div className="skill-progress-bar">
                  <motion.div 
                    className="skill-progress-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: '90%' }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    viewport={{ once: true }}
                  />
                </div>
                <span className="skill-percentage">90%</span>
              </div>
            </motion.div>
            
            <motion.div 
              className="skill-card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="skill-header">
                <CodeBracketIcon className="skill-icon" />
                <h4>Programming Languages</h4>
              </div>
              <p className="skill-description">
                Python (advanced), Java, C#, R, SQL
              </p>
              <div className="skill-progress">
                <div className="skill-progress-bar">
                  <motion.div 
                    className="skill-progress-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: '85%' }}
                    transition={{ duration: 1.5, delay: 0.7 }}
                    viewport={{ once: true }}
                  />
                </div>
                <span className="skill-percentage">85%</span>
              </div>
            </motion.div>
            
            <motion.div 
              className="skill-card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="skill-header">
                <ChartBarIcon className="skill-icon" />
                <h4>Data Analysis & Visualization</h4>
              </div>
              <p className="skill-description">
                Power BI, SQL, statistical modeling for insights
              </p>
              <div className="skill-progress">
                <div className="skill-progress-bar">
                  <motion.div 
                    className="skill-progress-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: '80%' }}
                    transition={{ duration: 1.5, delay: 0.9 }}
                    viewport={{ once: true }}
                  />
                </div>
                <span className="skill-percentage">80%</span>
              </div>
            </motion.div>
            
            <motion.div 
              className="skill-card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="skill-header">
                <UsersIcon className="skill-icon" />
                <h4>Collaboration & Communication</h4>
              </div>
              <p className="skill-description">
                Delivered coding workshops (100+ students), mentored by Microsoft professionals
              </p>
              <div className="skill-progress">
                <div className="skill-progress-bar">
                  <motion.div 
                    className="skill-progress-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: '95%' }}
                    transition={{ duration: 1.5, delay: 1.1 }}
                    viewport={{ once: true }}
                  />
                </div>
                <span className="skill-percentage">95%</span>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Qualifications Section */}
        <motion.section 
          id="qualifications" 
          className="modern-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="section-header">
            <motion.div 
              className="section-icon-container"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <StarIcon className="section-icon" />
            </motion.div>
            <div>
              <h3 className="section-title">Certifications & Qualifications</h3>
              <p className="section-subtitle">Continuous learning and skill development</p>
            </div>
          </div>
          
          <div className="certifications-grid">
            {[
              { title: 'AI and Machine Learning Bootcamp', date: 'January 2024 - July 2024', type: 'Bootcamp' },
              { title: 'Benefits of GitHub Community', date: 'April 2024', type: 'LinkedIn Learning' },
              { title: 'Introduction to SQL', date: 'May 2024', type: 'SoloLearn' },
              { title: 'Learning Power BI Desktop', date: 'May 2024', type: 'Course' },
              { title: 'UK Government Quantum Summer School', date: 'August 2024', type: 'Government Program' },
              { title: 'British Airways - Data Science Job Simulation', date: 'September 2024', type: 'Simulation' },
              { title: 'Introduction to Generative AI', date: 'May 2025', type: 'Course' }
            ].map((cert, index) => (
              <motion.div 
                key={index}
                className="certification-card"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -2 }}
              >
                <div className="cert-header">
                  <StarIcon className="cert-icon" />
                  <span className="cert-type">{cert.type}</span>
                </div>
                <h4 className="cert-title">{cert.title}</h4>
                <p className="cert-date">{cert.date}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section 
          id="projects" 
          className="modern-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="section-header">
            <motion.div 
              className="section-icon-container"
              whileHover={{ scale: 1.1, rotate: -5 }}
            >
              <ChartBarIcon className="section-icon" />
            </motion.div>
            <div>
              <h3 className="section-title">Featured Projects</h3>
              <p className="section-subtitle">Showcasing my best work and innovations</p>
            </div>
          </div>
          
          <div className="projects-grid">
            {projectsData.map((project, index) => (
              <ModernProjectCard 
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </div>
        </motion.section>
        {/* Contact Section */}
        <motion.section 
          id="contact"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Contact />
        </motion.section>

        {/* Scroll to top button */}
        <AnimatePresence>
          {showScroll && (
            <motion.button 
              className="scroll-to-top-modern"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowUpIcon className="scroll-icon" />
            </motion.button>
          )}
        </AnimatePresence>
      </main>

      {/* Modern Footer */}
      <motion.footer 
        className="modern-footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="footer-content">
          <div className="footer-section">
            <h4>Yameen Munir</h4>
            <p>AI Enthusiast & Python Developer</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <div className="footer-links">
              {sections.slice(0, 4).map((section) => (
                <button 
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="footer-link"
                >
                  {section.label}
                </button>
              ))}
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Connect</h4>
            <div className="footer-social">
              <a href="https://www.linkedin.com/in/yameen-munir/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href="https://github.com/YameenMunir" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="mailto:yameenmunir05@gmail.com">
                Email
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Yameen Munir. All rights reserved.</p>
        </div>
      </motion.footer>
    </>
  );
}

export default App;
