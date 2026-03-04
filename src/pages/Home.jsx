import React from "react";
import { motion } from "framer-motion";
import BlurText from "../components/helpers/BlurText";
import CurvedLoop from "../components/helpers/CurvedLoop";
import profileImg from "../../assets/photos/NareshPhoto.jpg";

import "../CSS/Home.css";
import "../index.css";

/* ================= CONSTANT DATA ================= */

const PROFESSIONS = [
  "MERN Stack Developer",
  "Frontend Developer",
  "React Developer",
  "Backend Developer",
  "Full Stack Developer",
];

const QUICK_LINKS = [
  { img: "/github.png", title: "GitHub", link: "https://github.com/naresh043" },
  {
    img: "/linkedin.png",
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/nareshsanjeev",
  },
  { img: "/gmail.png", title: "Email", link: "mailto:naresh732003@gmail.com" },
  {
    img: "/whatsapp.png",
    title: "WhatsApp",
    link: "https://wa.me/919703328790",
  },
];

/* ================= ANIMATIONS ================= */

const fadeLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 1 },
};

const fadeRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 1 },
};

export default function Home() {
  return (
    <section className="home-section">
      <div className="home-top">
        {/* ================= LEFT ================= */}
        <motion.div {...fadeLeft} className="photo-container orbit-container">
          <CurvedLoop />

          <motion.div
            className="photo-frame"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.img
              src={profileImg}
              alt="Naresh"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="profile-photo"
            />
          </motion.div>
        </motion.div>

        {/* ================= RIGHT ================= */}
        <motion.div {...fadeRight} className="home-info">
          <h1 className="home-title">
            Hi, I’m{" "}
            <BlurText
              text="Naresh Sanjeev"
              className="home-name"
              animateBy="chars"
              direction="top"
              delay={80}
            />
          </h1>

          <p className="seo-intro">
            I am Naresh Sanjeev, a MERN Stack Developer and Full Stack Developer
            based in India specializing in React, Node.js, MongoDB and modern
            web applications.
          </p>
          <p className="home-subtitle">
            MERN Stack Developer | Frontend Developer | Full Stack Developer
          </p>

          <div className="skill-bubbles">
            {PROFESSIONS.map((skill, index) => (
              <motion.div
                key={skill}
                className="skill-pill"
                whileHover={{
                  scale: 1.15,
                  y: -6,
                }}
                transition={{ type: "spring", stiffness: 220, damping: 14 }}
              >
                {skill}
              </motion.div>
            ))}
          </div>

          <div className="info-cards">
            <InfoCard label="📍 Location" value="India" />
            <InfoCard label="💼 Expertise" value="MERN & Role-Based Apps" />
            <InfoCard label="📧 Contact" value="naresh732003@gmail.com" />
          </div>
        </motion.div>
      </div>

      {/* ================= SOCIAL ================= */}
      <div className="quick-links">
        <h2 className="quick-links-title">Let’s Connect</h2>

        <div className="quick-links-list">
          {QUICK_LINKS.map(({ img, link, title }) => (
            <motion.a
              key={title}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src={img} alt={title} className="quick-link-img" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= INFO CARD ================= */

function InfoCard({ label, value }) {
  return (
    <motion.div
      className="info-card"
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <span>{label}</span>
      <p>{value}</p>
    </motion.div>
  );
}
