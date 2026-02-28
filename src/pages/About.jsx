import React from "react";
import { motion } from "framer-motion";
import { FaUniversity, FaSchool, FaGraduationCap } from "react-icons/fa";
import "../CSS/About.css";

const AboutMe = () => {
  return (
    <div className="about-container">
      {/* --- About Me + Education Section --- */}
      <motion.div
        className="about-card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        {/* --- Header --- */}
        <h2
          style={{
            fontSize: "1.9rem",
            marginBottom: "1.2rem",
            background: "linear-gradient(90deg, var(--accent), var(--accent-2))",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          About Me
        </h2>

        {/* --- About Content --- */}
        <p
          style={{
            fontSize: "1.1rem",
            color: "rgba(255,255,255,0.85)",
            marginBottom: "1rem",
          }}
        >
          Hi, I’m <strong>Sanjeevappa Gari Naresh</strong> — a passionate{" "}
          <strong>Frontend / MERN Stack Developer</strong> with hands-on
          experience building responsive, role-based web applications.
        </p>

        <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.8)" }}>
          I primarily work with <strong>React, Redux Toolkit,</strong> and modern
          JavaScript to build scalable UI architectures. I have practical
          experience integrating <strong>REST APIs</strong>, implementing{" "}
          <strong>JWT-based authentication</strong>, and handling{" "}
          <strong>role-based access control</strong>.
        </p>

        <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.75)" }}>
          I completed a frontend-focused full-stack internship where I worked on
          real-world features, followed Git-based workflows, and collaborated on
          modular, reusable components. As a motivated fresher, I’m eager to
          contribute to development teams and grow as a MERN Stack Developer.
        </p>

        {/* --- Education Section --- */}
        <motion.div
          className="education-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          style={{ marginTop: "3rem" }}
        >
          <h3
            style={{
              fontSize: "1.6rem",
              marginBottom: "1.5rem",
              background:
                "linear-gradient(90deg, var(--accent), var(--accent-2))",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Education
          </h3>

          <div className="education-cards">
            {/* --- B.Tech --- */}
            <motion.div
              className="edu-card"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 25px rgba(0,255,200,0.15)",
              }}
              transition={{ duration: 0.3 }}
            >
              <FaUniversity size={40} color="var(--accent)" />
              <div>
                <h4
                  style={{
                    color: "var(--accent)",
                    marginBottom: "0.4rem",
                    fontSize: "1.25rem",
                  }}
                >
                  Bachelor of Technology (B.Tech)
                </h4>
                <p style={{ color: "rgba(255,255,255,0.85)" }}>
                  <strong>PVKK Institute of Technology (Autonomous)</strong> —
                  Anantapuram, Andhra Pradesh
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>
                  JNTUA University | Percentage: <strong>72%</strong>
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>
                  Completed in 2024
                </p>
              </div>
            </motion.div>

            {/* --- Diploma --- */}
            <motion.div
              className="edu-card"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 25px rgba(0,255,200,0.15)",
              }}
              transition={{ duration: 0.3 }}
            >
              <FaGraduationCap size={38} color="var(--accent)" />
              <div>
                <h4
                  style={{
                    color: "var(--accent)",
                    marginBottom: "0.4rem",
                    fontSize: "1.25rem",
                  }}
                >
                  Diploma (Polytechnic) – 2nd Shift
                </h4>
                <p style={{ color: "rgba(255,255,255,0.85)" }}>
                  <strong>PVKK Institute of Technology</strong> — Anantapuram,
                  Andhra Pradesh
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>
                  SBTET, Andhra Pradesh | Percentage: <strong>76%</strong>
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>
                  Completed in 2021
                </p>
              </div>
            </motion.div>

            {/* --- SSC --- */}
            <motion.div
              className="edu-card"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 25px rgba(0,255,200,0.15)",
              }}
              transition={{ duration: 0.3 }}
            >
              <FaSchool size={36} color="var(--accent)" />
              <div>
                <h4
                  style={{
                    color: "var(--accent)",
                    marginBottom: "0.4rem",
                    fontSize: "1.25rem",
                  }}
                >
                  Secondary School Certificate (SSC)
                </h4>
                <p style={{ color: "rgba(255,255,255,0.85)" }}>
                  <strong>ZPHS</strong> — Maddanakunta, Andhra Pradesh
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>
                  Board of Secondary Education, Andhra Pradesh | Percentage:{" "}
                  <strong>80%</strong>
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)" }}>
                  Completed in 2018
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutMe;