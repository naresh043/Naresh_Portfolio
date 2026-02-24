import React, { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import {
  FaReact,
  FaGitAlt,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiRedux,
  SiJavascript,
  SiPostman,
  SiBootstrap,
  SiTailwindcss,
} from "react-icons/si";
import "./CurvedLoop.css";

const techIcons = [
  { Icon: FaHtml5, color: "#e34f26" },
  { Icon: FaCss3Alt, color: "#1572b6" },
  { Icon: SiBootstrap, color: "#7952b3" },
  { Icon: SiTailwindcss, color: "#38bdf8" },
  { Icon: SiJavascript, color: "#f7df1e" },
  { Icon: FaReact, color: "#61dafb" },
  { Icon: SiRedux, color: "#764abc" },
  { Icon: FaNodeJs, color: "#3c873a" },
  { Icon: SiExpress, color: "#ffffff" },
  { Icon: SiMongodb, color: "#4db33d" },
  { Icon: FaGitAlt, color: "#f1502f" },
  { Icon: SiPostman, color: "#ff6c37" },
];

export default function CurvedIconLoop() {
  const orbitRotation = useMotionValue(0);
  const [paused, setPaused] = useState(false);

  return (
    <motion.div
      className="icon-orbit"
      animate={paused ? {} : { rotate: 360 }}
      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      style={{ rotate: orbitRotation }}
      onHoverStart={() => setPaused(true)}
      onHoverEnd={() => setPaused(false)}
    >
      {techIcons.map(({ Icon, color }, i) => {
        const baseAngle = (360 / techIcons.length) * i;

        const iconRotation = useTransform(
          orbitRotation,
          (v) => -(v + baseAngle)
        );

        return (
          <div
            key={i}
            className="orbit-icon"
            style={{ "--i": i, "--total": techIcons.length }}
          >
            <motion.div
              className="orbit-icon-face"
              style={{ rotate: iconRotation }}
            >
              <Icon size={45} color={color} />
            </motion.div>
          </div>
        );
      })}
    </motion.div>
  );
}