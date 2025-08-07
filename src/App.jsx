 
import React, { useState, useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { Github, Linkedin, Mail, Download, Briefcase, CheckCircle, GraduationCap } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const typedRef = useRef(null);

  const portfolioData = {
    name: "SHREYAS V",
    typedStrings: ["Data Analyst", "Machine Learning Enthusiast", "Student"],
    aboutMe: "A passionate and innovative student specializing in data analysis and machine learning. My projects focus on creating data-driven solutions to solve real-world problems, from predicting crime rates to analyzing survival patterns. I am driven by a curiosity for technology and a desire to contribute to impactful projects.",
    contactInfo: {
      email: "shreyashreyu405@gmail.com",
      linkedin: "https://www.linkedin.com/in/shreyas-v2709",
      github: "https://github.com/shreyas27092004",
      resume: "#", // Replace "#" with a link to your resume PDF
    },
    skills: {
      data_analysis: [
        { name: "Python", level: "Experienced" },
        { name: "Pandas", level: "Experienced" },
        { name: "scikit-learn", level: "Intermediate" },
        { name: "Numpy", level: "Intermediate" },
      ],
      visualization: [
        { name: "Streamlit", level: "Experienced" },
        { name: "Plotly", level: "Experienced" },
        { name: "Google Maps API", level: "Intermediate" },
      ]
    },
    projects: [
      {
        name: "Titanic Survival Prediction",
        techStack: ["Python", "Pandas", "scikit-learn"],
        githubUrl: "https://github.com/shreyas27092004/titanic-survival-prediction",
        imageUrl: "/images/titanic-survival.png",
      },
      {
        name: "Linear Regression App",
        techStack: ["Python", "Streamlit", "scikit-learn"],
        githubUrl: "https://github.com/shreyas27092004/linear_regression_app",
        imageUrl: "/images/linear-regression.png",
      },
      {
        name: "Crime Rate Prediction",
        techStack: ["Python", "Pandas", "scikit-learn"],
        githubUrl: "https://github.com/shreyas27092004/crime-rate-prediction",
        imageUrl: "/images/crime-prediction.png",
      },
    ]
  };

  useEffect(() => {
    const options = {
      strings: portfolioData.typedStrings,
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      loop: true,
      cursorChar: '|',
    };
    const typed = new Typed(typedRef.current, options);
    return () => {
      typed.destroy();
    };
  }, [portfolioData.typedStrings]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const menuLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const renderSkill = (name, level) => (
    <article className="flex items-center gap-4">
      <CheckCircle className="text-green-500 w-5 h-5 flex-shrink-0" />
      <div>
        <h3 className="text-gray-900 font-medium">{name}</h3>
        <p className="text-gray-600 text-sm">{level}</p>
      </div>
    </article>
  );
  
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans antialiased">
      <nav className="hidden md:flex justify-between items-center py-6 px-8 max-w-7xl mx-auto">
        <div className="text-2xl font-bold text-gray-800">{portfolioData.name}</div>
        <ul className="flex space-x-8">
          {menuLinks.map((link) => (
            <li key={link.name}><a href={link.href} className="text-gray-600 hover:text-gray-900 transition-colors">{link.name}</a></li>
          ))}
        </ul>
      </nav>

      <nav className="md:hidden flex justify-between items-center py-4 px-6 relative z-50 bg-white shadow-md">
        <div className="text-2xl font-bold text-gray-800">{portfolioData.name}</div>
        <div className="relative">
          <button onClick={toggleMenu} className="flex flex-col space-y-1.5 p-2" aria-label="Open menu">
            <span className={`block w-6 h-0.5 bg-gray-800 transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-gray-800 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-gray-800 transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
          {isMenuOpen && (
            <div className="absolute right-0 mt-4 w-48 bg-white rounded-lg shadow-xl py-2 border border-gray-200">
              <ul className="flex flex-col">
                {menuLinks.map((link) => (
                  <li key={link.name}><a href={link.href} onClick={toggleMenu} className="block px-4 py-2 text-gray-600 hover:bg-gray-100">{link.name}</a></li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-16">
        <section id="profile" className="flex flex-col md:flex-row items-center text-center md:text-left gap-12 mb-24">
          <div className="flex-shrink-0 w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden bg-gray-100 border-2 border-gray-300 shadow-lg">
            <img src="/images/profile.png" alt="Shreyas V profile picture" className="object-cover w-full h-full" />
          </div>
          <div>
            <p className="text-gray-600 text-lg mb-1">Hello, I'm</p>
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-2">{portfolioData.name}</h1>
            <p ref={typedRef} className="text-xl md:text-2xl text-indigo-600 font-light mb-6 h-8"></p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href={portfolioData.contactInfo.resume} download className="flex items-center justify-center px-6 py-3 bg-white border border-gray-300 text-gray-800 font-medium rounded-full shadow-md hover:bg-gray-100">
                <Download className="w-5 h-5 mr-2" /> Download CV
              </a>
              <a href="#contact" className="flex items-center justify-center px-6 py-3 bg-gray-800 text-white rounded-full shadow-md hover:bg-gray-700">
                Contact Info
              </a>
            </div>
            <div className="flex justify-center md:justify-start gap-6 mt-8">
              <a href={portfolioData.contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900"><Linkedin size={28} /></a>
              <a href={portfolioData.contactInfo.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900"><Github size={28} /></a>
            </div>
          </div>
        </section>

        <section id="about" className="mb-24 pt-16">
          <h2 className="text-center text-3xl font-bold text-gray-900 mb-8">About Me</h2>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <p className="md:w-2/3 text-lg text-gray-700 leading-relaxed text-center md:text-left">{portfolioData.aboutMe}</p>
            <div className="flex flex-col gap-4 w-full md:w-1/3">
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-200 shadow-sm text-center">
                <Briefcase className="mx-auto mb-2 w-8 h-8 text-indigo-600" />
                <h3 className="text-xl font-semibold text-gray-900">Experience</h3>
                <p className="text-gray-600">Fresher</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-200 shadow-sm text-center">
                <GraduationCap className="mx-auto mb-2 w-8 h-8 text-indigo-600" />
                <h3 className="text-xl font-semibold text-gray-900">Education</h3>
                <p className="text-gray-600">B.Tech (CSE)</p>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="mb-24 pt-16">
          <h2 className="text-center text-3xl font-bold text-gray-900 mb-8">Skills</h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1 bg-gray-50 p-8 rounded-xl border border-gray-200 shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Data Analysis</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
                {portfolioData.skills.data_analysis.map((skill, i) => <div key={i}>{renderSkill(skill.name, skill.level)}</div>)}
              </div>
            </div>
            <div className="flex-1 bg-gray-50 p-8 rounded-xl border border-gray-200 shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Visualization & APIs</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
                {portfolioData.skills.visualization.map((skill, i) => <div key={i}>{renderSkill(skill.name, skill.level)}</div>)}
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="mb-24 pt-16">
          <h2 className="text-center text-3xl font-bold text-gray-900 mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolioData.projects.map((p, i) => (
              <div key={i} className="bg-gray-50 rounded-xl shadow-sm p-6 border border-gray-200 flex flex-col transition-transform duration-300 hover:scale-105">
                <img src={p.imageUrl} alt={p.name} className="rounded-lg mb-4 w-full h-40 object-cover" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">{p.name}</h3>
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {p.techStack.map((t, i) => <span key={i} className="bg-gray-200 text-gray-800 text-xs font-medium px-2.5 py-1 rounded-full">{t}</span>)}
                </div>
                <div className="flex justify-center mt-auto">
                  <a href={p.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 bg-gray-800 text-white font-medium rounded-full hover:bg-gray-700">
                    <Github className="w-4 h-4 mr-2" /> GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="mb-16 pt-16">
          <h2 className="text-center text-3xl font-bold text-gray-900 mb-8">Contact Me</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-center">
            <a href={`mailto:${portfolioData.contactInfo.email}`} className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl border border-gray-200 shadow-sm hover:bg-gray-100">
              <Mail className="w-6 h-6 text-indigo-600" /><p className="text-gray-700">{portfolioData.contactInfo.email}</p>
            </a>
            <a href={portfolioData.contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl border border-gray-200 shadow-sm hover:bg-gray-100">
              <Linkedin className="w-6 h-6 text-indigo-600" /><p className="text-gray-700">LinkedIn</p>
            </a>
          </div>
        </section>
      </main>
      
      <footer className="py-8 text-center text-gray-500 text-sm border-t border-gray-200">
        <ul className="flex justify-center space-x-6 mb-4">
          {menuLinks.map((link) => <li key={link.name}><a href={link.href} className="text-gray-600 hover:text-gray-900">{link.name}</a></li>)}
        </ul>
        <p>Copyright © {new Date().getFullYear()} {portfolioData.name}. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;