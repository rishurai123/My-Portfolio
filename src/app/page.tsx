import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md z-50 border-b border-slate-200/50 dark:border-slate-700/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Portfolio
            </div>
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-10">
              <a href="#about" className="text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 font-medium">About</a>
              <a href="#skills" className="text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 font-medium">Skills</a>
              <a href="#projects" className="text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 font-medium">Projects</a>
              <a href="#contact" className="text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 font-medium">Contact</a>
            </div>
            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          {/* Mobile Navigation */}
          <div className="md:hidden py-4 border-t border-slate-200/50 dark:border-slate-700/50">
            <div className="flex flex-col space-y-4">
              <a href="#about" className="text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 font-medium py-2">About</a>
              <a href="#skills" className="text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 font-medium py-2">Skills</a>
              <a href="#projects" className="text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 font-medium py-2">Projects</a>
              <a href="#contact" className="text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 font-medium py-2">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8 sm:mb-12">
                         <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-6 sm:mb-8 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-1 shadow-2xl">
               <div className="w-full h-full rounded-full overflow-hidden">
                 <img 
                   src="/rishuimg1.jpg" 
                   alt="Shailendra Kumar Rai" 
                   className="w-full h-full object-cover"
                 />
               </div>
             </div>
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6 leading-tight">
              Hi, I am <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Shailendra Kumar Rai</span>
            </h1>
            <p className="text-lg sm:text-2xl lg:text-3xl text-slate-700 dark:text-slate-200 mb-6 sm:mb-10 font-light">
              Python Full-Stack Developer & React.js Specialist
            </p>
            <p className="text-base sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4">
              I build modern web applications using Python backend with React.js frontend. 
              Expert in Next.js, Tailwind CSS, Node.js, and Express.js for creating 
              scalable and user-friendly solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 px-4">
              <a href="#contact" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm sm:text-base">
                Get In Touch
              </a>
              <a href="#projects" className="border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-indigo-400 dark:hover:border-indigo-400 px-8 sm:px-10 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 text-sm sm:text-base">
                View My Work
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-900 dark:text-white mb-16">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
                             <p className="text-xl text-slate-700 dark:text-slate-200 mb-8 leading-relaxed">
                 I am a passionate full-stack developer specializing in Python backend development 
                 and React.js frontend solutions. With extensive experience in Next.js, Tailwind CSS, 
                 Node.js, and Express.js, I create robust and scalable web applications.
               </p>
               <p className="text-xl text-slate-700 dark:text-slate-200 mb-8 leading-relaxed">
                 Currently pursuing B.Tech from NIET (2023-2026) and working as an intern at BlackCoffer. 
                 I completed my Python Full Stack certification from Ducat India in 2023 and hold a 
                 Diploma from Prasad Polytechnic Lucknow (2020-2023). My expertise spans from building 
                 RESTful APIs with Python and Express.js to creating modern, responsive user interfaces 
                 with React.js and Next.js.
               </p>
              <div className="flex space-x-6">
                <a href="https://github.com/rishurai123" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 transform hover:scale-110">
                  <FaGithub size={28} />
                </a>
                <a href="https://www.linkedin.com/in/shailendra-kumar-rai-b26a5124b/" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 transform hover:scale-110">
                  <FaLinkedin size={28} />
                </a>
                <a href="#" className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 transform hover:scale-110">
                  <FaTwitter size={28} />
                </a>
              </div>
            </div>
            <div className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-10 rounded-3xl text-white shadow-2xl">
              <h3 className="text-3xl font-bold mb-6">Quick Facts</h3>
                             <ul className="space-y-4">
                 <li className="flex items-center">
                   <span className="w-3 h-3 bg-white rounded-full mr-4 shadow-sm"></span>
                   <span className="text-lg">B.Tech Student at NIET (2023-2026)</span>
                 </li>
                 <li className="flex items-center">
                   <span className="w-3 h-3 bg-white rounded-full mr-4 shadow-sm"></span>
                   <span className="text-lg">Intern at BlackCoffer</span>
                 </li>
                 <li className="flex items-center">
                   <span className="w-3 h-3 bg-white rounded-full mr-4 shadow-sm"></span>
                   <span className="text-lg">Python Full Stack Certified (Ducat India, 2023)</span>
                 </li>
                 <li className="flex items-center">
                   <span className="w-3 h-3 bg-white rounded-full mr-4 shadow-sm"></span>
                   <span className="text-lg">Diploma from Prasad Polytechnic (2020-2023)</span>
                 </li>
               </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-900 dark:text-white mb-16">
            Skills & Technologies
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-slate-200/50 dark:border-slate-700/50 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">Frontend</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-700 dark:text-slate-200 font-medium">React.js</span>
                    <span className="text-indigo-600 dark:text-indigo-400 font-semibold">95%</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3">
                    <div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-3 rounded-full shadow-sm" style={{width: '95%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-700 dark:text-slate-200 font-medium">Next.js</span>
                    <span className="text-indigo-600 dark:text-indigo-400 font-semibold">90%</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3">
                    <div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-3 rounded-full shadow-sm" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-700 dark:text-slate-200 font-medium">Tailwind CSS</span>
                    <span className="text-indigo-600 dark:text-indigo-400 font-semibold">95%</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3">
                    <div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-3 rounded-full shadow-sm" style={{width: '95%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-700 dark:text-slate-200 font-medium">TypeScript</span>
                    <span className="text-indigo-600 dark:text-indigo-400 font-semibold">85%</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3">
                    <div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-3 rounded-full shadow-sm" style={{width: '85%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-slate-200/50 dark:border-slate-700/50 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">Backend</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-700 dark:text-slate-200 font-medium">Python</span>
                    <span className="text-indigo-600 dark:text-indigo-400 font-semibold">90%</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3">
                    <div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-3 rounded-full shadow-sm" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-700 dark:text-slate-200 font-medium">Node.js</span>
                    <span className="text-indigo-600 dark:text-indigo-400 font-semibold">85%</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3">
                    <div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-3 rounded-full shadow-sm" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-700 dark:text-slate-200 font-medium">Django</span>
                    <span className="text-indigo-600 dark:text-indigo-400 font-semibold">90%</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3">
                    <div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-3 rounded-full shadow-sm" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-700 dark:text-slate-200 font-medium">Express.js</span>
                    <span className="text-indigo-600 dark:text-indigo-400 font-semibold">85%</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3">
                    <div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-3 rounded-full shadow-sm" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-700 dark:text-slate-200 font-medium">PostgreSQL</span>
                    <span className="text-indigo-600 dark:text-indigo-400 font-semibold">80%</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3">
                    <div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-3 rounded-full shadow-sm" style={{width: '80%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-slate-200/50 dark:border-slate-700/50 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">Tools</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-700 dark:text-slate-200 font-medium">Git</span>
                    <span className="text-indigo-600 dark:text-indigo-400 font-semibold">90%</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3">
                    <div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-3 rounded-full shadow-sm" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-700 dark:text-slate-200 font-medium">Docker</span>
                    <span className="text-indigo-600 dark:text-indigo-400 font-semibold">65%</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3">
                    <div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-3 rounded-full shadow-sm" style={{width: '65%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-700 dark:text-slate-200 font-medium">AWS</span>
                    <span className="text-indigo-600 dark:text-indigo-400 font-semibold">60%</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3">
                    <div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-3 rounded-full shadow-sm" style={{width: '60%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-900 dark:text-white mb-16">
            Featured Projects
          </h2>
                     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
             {/* Project 1 - E-commerce Website */}
             <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-200/50 dark:border-slate-700/50 group">
               <div className="h-56 bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                 <span className="text-5xl">🛒</span>
               </div>
               <div className="p-8">
                 <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3">
                   E-Commerce Website
                 </h3>
                 <p className="text-slate-700 dark:text-slate-200 mb-6 leading-relaxed">
                   A comprehensive e-commerce platform built with Python Django, featuring 
                   product management, user authentication, shopping cart, and admin dashboard.
                 </p>
                 <div className="flex flex-wrap gap-3 mb-6">
                   <span className="px-4 py-2 bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200 text-sm rounded-full font-medium">Python</span>
                   <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 text-sm rounded-full font-medium">Django</span>
                   <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200 text-sm rounded-full font-medium">Bootstrap</span>
                   <span className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-200 text-sm rounded-full font-medium">SQL</span>
                 </div>
                 <div className="flex space-x-6">
                   <a href="#" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium transition-colors">Live Demo</a>
                   <a href="https://github.com/rishurai123/django" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-100 font-medium transition-colors">GitHub</a>
                 </div>
               </div>
             </div>

             {/* Project 2 - Admin Dashboard */}
             <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-200/50 dark:border-slate-700/50 group">
               <div className="h-56 bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                 <span className="text-5xl">📊</span>
               </div>
               <div className="p-8">
                                   <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3">
                    Admin Dashboard
                  </h3>
                  <p className="text-slate-700 dark:text-slate-200 mb-6 leading-relaxed">
                    A powerful admin dashboard with interactive graphs and data visualization, 
                    built using Next.js, Tailwind CSS, and Neo4j graph database for complex data relationships.
                  </p>
                  <div className="flex flex-wrap gap-3 mb-6">
                    <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 text-sm rounded-full font-medium">Next.js</span>
                    <span className="px-4 py-2 bg-cyan-100 dark:bg-cyan-900/50 text-cyan-800 dark:text-cyan-200 text-sm rounded-full font-medium">Tailwind CSS</span>
                    <span className="px-4 py-2 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-200 text-sm rounded-full font-medium">Neo4j</span>
                    <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200 text-sm rounded-full font-medium">TypeScript</span>
                  </div>
                  <div className="flex space-x-6">
                    <a href="#" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium transition-colors">Live Demo</a>
                    <a href="https://github.com/rishurai123/neo4jGraph" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-100 font-medium transition-colors">GitHub</a>
                  </div>
               </div>
             </div>

             {/* Project 3 - React.js Portfolio */}
             <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-200/50 dark:border-slate-700/50 group">
               <div className="h-56 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                 <span className="text-5xl">💼</span>
               </div>
               <div className="p-8">
                 <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3">
                   Portfolio Website
                 </h3>
                 <p className="text-slate-700 dark:text-slate-200 mb-6 leading-relaxed">
                   A modern, responsive portfolio website built with React.js and Next.js, 
                   showcasing projects and skills with elegant animations and design.
                 </p>
                 <div className="flex flex-wrap gap-3 mb-6">
                   <span className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-200 text-sm rounded-full font-medium">React.js</span>
                   <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200 text-sm rounded-full font-medium">Next.js</span>
                   <span className="px-4 py-2 bg-cyan-100 dark:bg-cyan-900/50 text-cyan-800 dark:text-cyan-200 text-sm rounded-full font-medium">Tailwind CSS</span>
                 </div>
                 <div className="flex space-x-6">
                   <a href="#" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium transition-colors">Live Demo</a>
                   <a href="#" className="text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-100 font-medium transition-colors">GitHub</a>
                 </div>
               </div>
             </div>

             {/* Project 4 - Task Management App */}
             <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-200/50 dark:border-slate-700/50 group">
               <div className="h-56 bg-gradient-to-br from-rose-500 via-pink-500 to-purple-500 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                 <span className="text-5xl">📋</span>
               </div>
               <div className="p-8">
                 <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3">
                   Task Management App
                 </h3>
                 <p className="text-slate-700 dark:text-slate-200 mb-6 leading-relaxed">
                   A collaborative task management application with real-time updates, 
                   built using Node.js, Express.js, and modern frontend technologies.
                 </p>
                 <div className="flex flex-wrap gap-3 mb-6">
                   <span className="px-4 py-2 bg-rose-100 dark:bg-rose-900/50 text-rose-800 dark:text-rose-200 text-sm rounded-full font-medium">Node.js</span>
                   <span className="px-4 py-2 bg-pink-100 dark:bg-pink-900/50 text-pink-800 dark:text-pink-200 text-sm rounded-full font-medium">Express.js</span>
                   <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200 text-sm rounded-full font-medium">React.js</span>
                 </div>
                 <div className="flex space-x-6">
                   <a href="#" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium transition-colors">Live Demo</a>
                   <a href="#" className="text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-100 font-medium transition-colors">GitHub</a>
                 </div>
               </div>
             </div>

             {/* Project 5 - Credit Card Fraud Detection */}
             <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-200/50 dark:border-slate-700/50 group">
               <div className="h-56 bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                 <span className="text-5xl">💳</span>
               </div>
               <div className="p-8">
                 <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3">
                   Credit Card Fraud Detection
                 </h3>
                 <p className="text-slate-700 dark:text-slate-200 mb-6 leading-relaxed">
                   Advanced machine learning system for detecting fraudulent credit card transactions 
                   using ensemble methods, feature engineering, and real-time anomaly detection.
                 </p>
                 <div className="flex flex-wrap gap-3 mb-6">
                   <span className="px-4 py-2 bg-orange-100 dark:bg-orange-900/50 text-orange-800 dark:text-orange-200 text-sm rounded-full font-medium">Python</span>
                   <span className="px-4 py-2 bg-red-100 dark:bg-red-900/50 text-red-800 dark:text-red-200 text-sm rounded-full font-medium">scikit-learn</span>
                   <span className="px-4 py-2 bg-pink-100 dark:bg-pink-900/50 text-pink-800 dark:text-pink-200 text-sm rounded-full font-medium">Pandas</span>
                   <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200 text-sm rounded-full font-medium">NumPy</span>
                 </div>
                 <div className="flex space-x-6">
                   <a href="#" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium transition-colors">Live Demo</a>
                   <a href="https://github.com/rishurai123/AI-Project-IBM-edunet" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-100 font-medium transition-colors">GitHub</a>
                 </div>
               </div>
             </div>
           </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-16">
            Get In Touch
          </h2>
          <p className="text-xl text-slate-700 dark:text-slate-200 mb-12 max-w-3xl mx-auto leading-relaxed">
            I am always interested in hearing about new opportunities and exciting projects. 
            Lets work together to bring your ideas to life!
          </p>
          <div className="grid md:grid-cols-2 gap-10">
                         <a href="mailto:raishailendra96@gmail.com" className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm p-10 rounded-2xl shadow-xl border border-slate-200/50 dark:border-slate-700/50 hover:shadow-2xl transition-all duration-300 block group">
               <div className="flex items-center justify-center mb-6">
                 <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                   <FaEnvelope className="text-2xl text-white" />
                 </div>
               </div>
               <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3">Email</h3>
               <p className="text-slate-700 dark:text-slate-200 text-lg group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">raishailendra96@gmail.com</p>
             </a>
            <a href="https://www.linkedin.com/in/shailendra-kumar-rai-b26a5124b/" target="_blank" rel="noopener noreferrer" className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm p-10 rounded-2xl shadow-xl border border-slate-200/50 dark:border-slate-700/50 hover:shadow-2xl transition-all duration-300 block group">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <FaLinkedin className="text-2xl text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-3">LinkedIn</h3>
              <p className="text-slate-700 dark:text-slate-200 text-lg group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">linkedin.com/in/shailendra-kumar-rai-b26a5124b</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-slate-300 text-lg">
            © 2025 Shailendra Kumar Rai. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
} 