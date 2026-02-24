import React from "react";
import { motion } from "framer-motion";
import BlurText from "../components/helpers/BlurText";
import CurvedLoop from "../components/helpers/CurvedLoop";
import "../CSS/Home.css";
import "../index.css";

export default function Home() {
  // Roles based on resume
  const professions = [
    "MERN Stack Developer",
    "Frontend Developer",
    "React Developer",
    "JavaScript Developer",
    "Full Stack Developer",
  ];

  // Your real social & contact links
  const quickLinks = [
    {
      img: "/github.png",
      title: "GitHub",
      link: "https://github.com/naresh043",
    },
    {
      img: "/linkedin.png",
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/nareshsanjeev",
    },
    {
      img: "/gmail.png",
      title: "Email",
      link: "mailto:naresh732003@gmail.com",
    },
    {
      img: "/whatsapp.png",
      title: "WhatsApp",
      link: "https://wa.me/919703328790",
    },
  ];

  return (
    <section className="home-section">
      <style>
        {`
          @keyframes typing { from { width: 0; } to { width: 100%; } }
          @keyframes blink { 50% { border-color: transparent; } }
        `}
      </style>

      <div className="home-top">
        {/* Profile Image Section */}
       {/* Profile Image Section with Curved Tech Loop */}
<motion.div
  initial={{ opacity: 0, x: -60 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
  className="photo-container orbit-container"
>
  {/* Curved Tech Loop */}
  <CurvedLoop
    marqueeText="React ✦ Express ✦ MongoDB ✦ Git ✦"
    speed={0.6}
    curveAmount={240}
  />

  <motion.div
    animate={{ rotate: [0, 360] }}
    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
    className="photo-ring"
  />

  <motion.div
    animate={{ y: [0, -8, 0] }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    className="photo-frame"
  >
    <motion.img
      src="../../assets/photos/NareshPhoto.jpg"
      alt="Naresh"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1 }}
      className="profile-photo"
    />
  </motion.div>
</motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="home-info"
        >
          <h1 className="home-title">
            Hi, I’m{" "}
            <BlurText
              text="Naresh"
              className="home-name"
              animateBy="chars"
              direction="top"
              delay={80}
            />
          </h1>

          {/* Resume-based summary line */}
          <p className="typing-effect">
            MERN Stack Developer | React | Redux Toolkit | REST APIs
          </p>

          {/* Role Tags */}
          <motion.div className="profession-tags">
            {professions.map((role, i) => (
              <motion.div
                key={i}
                whileHover={{
                  scale: 1.05,
                  background:
                    "linear-gradient(90deg,var(--accent),var(--accent-2))",
                }}
                transition={{ type: "spring", stiffness: 200 }}
                className="profession-tag"
              >
                {role}
              </motion.div>
            ))}
          </motion.div>

          {/* Info Cards */}
          <motion.div className="info-cards">
            {[
              { label: "📍 Location", value: "India" },
              {
                label: "💼 Expertise",
                value: "React, MERN Stack, Role-Based Apps",
              },
              { label: "📧 Contact", value: "naresh732003@gmail.com" },
            ].map((info, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 250 }}
                className="info-card"
              >
                <strong>{info.label}</strong>
                <p>{info.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Social Links */}
      <motion.div className="quick-links">
        <h2 className="quick-links-title">Connect with me</h2>

        <div className="quick-links-list">
          {quickLinks.map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              title={item.title}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, rotate: 5 }}
              transition={{ type: "spring", stiffness: 250 }}
            >
              <motion.img
                src={item.img}
                alt={item.title}
                whileHover={{
                  filter: "drop-shadow(0 0 15px var(--accent)) brightness(1.2)",
                }}
                className="quick-link-img"
              />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
