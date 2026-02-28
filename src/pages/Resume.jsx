  import React from "react";
  import { motion } from "framer-motion";
  import "../CSS/Resume.css";
  import { File } from "lucide-react";

  export default function Resume() {
    return (
      <section className="resume-container">
        <motion.div
          className="resume-card"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="resume-title"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <File size={32} className="resume-icon" />
            <span>Resume</span>
          </motion.h2>
          <p className="resume-subtitle">
            A snapshot of my professional journey.
          </p>

          {/* Profile Header */}
          <motion.div className="resume-profile">
            <div className="profile-info">
              <h3>👨‍💻 SANJEEVAPPA GARI NARESH</h3>
              <p>Frontend / MERN Stack Developer</p>
              <p>📍 India</p>
              <p>✉️ naresh732003@gmail.com | 📞 +91 9703328790</p>
            </div>

            <div className="profile-summary">
              <strong>Profile Summary:</strong>
              <p>
                Frontend / MERN Stack Developer with hands-on experience building
                responsive, role-based web applications using React, Redux
                Toolkit, and REST APIs. Strong foundation in JavaScript,
                component-based architecture, and state management. Experienced in
                integrating backend APIs, implementing JWT-based authentication,
                and handling role-based access control. Motivated fresher eager to
                contribute to development teams and grow as a MERN Stack
                Developer.
              </p>
            </div>
          </motion.div>

          {/* Internship */}
          <div className="resume-section">
            <h4>💼 Internship</h4>
            <ul>
              <li>
                <strong>Full Stack Developer Intern</strong> — AlterSquare
                (Remote)
                <br />
                <span>Jan 2025 – May 2025</span>
                <ul>
                  <li>Hands-on experience with JavaScript, React, and Vue.js</li>
                  <li>Built UI components and handled events & state</li>
                  <li>Worked on real-world frontend tasks</li>
                  <li>Learned Git-based development workflows</li>
                  <li>Successfully completed internship with certification</li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Projects */}
          <div className="resume-section">
            <h4>🚀 Projects</h4>
            <ul>
              <li>
                <strong>Inventory & Order Management System</strong>
                <br />
                <span>
                  Tech Stack: React, Redux Toolkit, RTK Query, PrimeReact,
                  Tailwind CSS, Node.js, Express.js, MongoDB, JWT
                </span>
                <ul>
                  <li>Developed a role-based full-stack web application</li>
                  <li>
                    Implemented product listing, order management & dashboards
                  </li>
                  <li>Integrated REST APIs for inventory and order handling</li>
                  <li>Implemented RBAC (Admin, Sales, Warehouse, Viewer)</li>
                  <li>Added pagination, search, and filtering</li>
                  <li>Built reusable UI components using PrimeReact</li>
                  <li>Followed layered backend architecture</li>
                  <li>Used Git & GitHub for version control</li>
                </ul>
              </li>

              <li>
                <strong>E-Tech – Full-Stack E-Learning Platform</strong>
                <br />
                <span>
                  Tech Stack: React, Redux Toolkit, Node.js, Express.js, MongoDB,
                  JWT, REST APIs
                </span>
                <ul>
                  <li>Built a full-stack e-learning platform</li>
                  <li>Implemented authentication using JWT & bcrypt</li>
                  <li>Integrated APIs for users, courses & enrollments</li>
                  <li>Used React Router for dynamic routing</li>
                  <li>Handled role-based access control</li>
                  <li>Implemented form validation & secure password handling</li>
                  <li>Ensured responsive design across devices</li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Skills */}
          <div className="resume-section">
            <h4>⚙️ Technical Skills</h4>
            <div className="skills-list">
              {[
                "JavaScript",
                "HTML5",
                "CSS3",
                "Bootstrap",
                "React.js",
                "Redux Toolkit",
                "Node.js",
                "Express.js",
                "MongoDB",
                "REST APIs",
                "JWT",
                "bcrypt",
                "Git",
                "GitHub",
                "Postman",
              ].map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="resume-section">
            <h4>🎓 Education</h4>
            <ul>
              <li>
                <strong>B.Tech</strong> — PVKK Institute of Technology
                <br />
                <span>CGPA: 7.95</span>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div className="resume-links">
            <a
              href="https://github.com/naresh043"
              target="_blank"
              rel="noreferrer"
            >
              💻 GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/nareshsanjeev"
              target="_blank"
              rel="noreferrer"
            >
              💼 LinkedIn
            </a>
          </div>

          {/* PDF Preview */}
          <div className="resume-pdf">
            <iframe src="/nareshresume.pdf" title="Resume"></iframe>
          </div>

          {/* Download */}
          <a className="resume-download" href="/nareshresume.pdf" download>
            ⬇️ Download Resume
          </a>
        </motion.div>
      </section>
    );
  }
