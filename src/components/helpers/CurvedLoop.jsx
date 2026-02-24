import React from "react";
import {
  FaReact,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
} from "react-icons/si";
import "./CurvedLoop.css";

const techIcons = [
  { Icon: FaReact, color: "#61dafb" },
  { Icon: SiExpress, color: "#ffffff" },
  { Icon: SiMongodb, color: "#4db33d" },
  { Icon: FaGitAlt, color: "#f1502f" },
];

export default function CurvedIconLoop() {
  return (
    <div className="icon-orbit">
      {techIcons.map(({ Icon, color }, i) => (
        <div
          key={i}
          className="orbit-icon"
          style={{ "--i": i }}
        >
          <Icon size={42} color={color} />
        </div>
      ))}
    </div>
  );
}