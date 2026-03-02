import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import "../CSS/projects.css";
import img from "../../photos/project-img/inventory-order.png";

import CardSwap, { Card } from "../components/helpers/cardswap/CardSwap";

const PROJECTS = [
  {
    title: "📦 Inventory & Order Management System",
    desc: "Role-based full-stack web application with inventory tracking, order management, dashboards, and JWT-based access control.",
    ss: "../../photos/project-img/inventory-order.png",
    tech: [
      "React",
      "Redux Toolkit",
      "RTK Query",
      "Prime React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
    ],
    live: "https://inventory-orders-management-system.netlify.app/login",
    code: "https://github.com/naresh043/Inventory-OrderManagementSystem-",
  },
  {
    title: "🎓 E-Tech – E-Learning Platform",
    desc: "Full-stack e-learning platform for course browsing and enrollment with authentication and role-based access.",
    ss: "../../photos/project-img/e-learning.png",
    tech: [
      "React",
      "Redux Toolkit",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "REST APIs",
    ],
    live: "https://e-learnify-nine.vercel.app/",
    code: "https://github.com/naresh043/react-project",
  },
];

export default function Projects() {
  const openLiveProject = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <motion.section
      className="projects-container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      id="projects"
    >
      <div className="projects-layout">
        {/* LEFT SIDE — TEXT */}
        <div className="projects-text">
          <motion.h2
            className="projects-heading"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            🚀 Projects
          </motion.h2>

          <p className="projects-description">
            A collection of my major works — blending research, AI innovation,
            scalable systems, and real-world problem solving.
          </p>
        </div>

        {/* RIGHT SIDE — CARD SWAP */}
        <div className="projects-cards">
          <CardSwap
            width={500}
            height={520}
            cardDistance={100}
            verticalDistance={50}
            delay={4200}
            pauseOnHover
            easing="elastic"
            onCardClick={(index) => {}}
          >
            {PROJECTS.map((p, idx) => (
              <Card key={idx}>
                <div
                  className="project-card"
                  onClick={() => openLiveProject(p.live)}
                  role="button"
                  tabIndex={0}
                >
                  {/* TOP CARD TITLE (overlay) */}
                  <div className="project-card-header">{p.title}</div>

                  <div className="project-ss">
                    <img src={p.ss} alt={p.title} />
                  </div>

                  <div className="project-content">
                    <p className="project-desc">{p.desc}</p>

                    <div className="project-tech">
                      {p.tech.map((t) => (
                        <span key={t} className="tech-badge">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="project-links">
                    <a
                      href={p.code}
                      target="_blank"
                      rel="noreferrer"
                      className="btn code-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      <Github size={14} /> Code
                    </a>
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="btn live-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      <ExternalLink size={14} /> Live
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </CardSwap>
        </div>
      </div>
    </motion.section>
  );
}
